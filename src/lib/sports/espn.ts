import {
  SportsError,
  type GameState,
  type GameSummary,
  type SportsProvider,
  type TeamKey,
  type TeamSnapshot,
} from './types';

/**
 * ESPN's public site API. No key, no secret, CORS-enabled, called straight from the browser.
 * Caveat: it is undocumented/unofficial, so ESPN may change or restrict it. If that happens the
 * widget degrades to its "unavailable" state rather than showing anything made up.
 */
const BASE = 'https://site.api.espn.com/apis/site/v2/sports';
const TIMEOUT_MS = 8000;

const TEAMS: Record<TeamKey, { sport: string; league: string; id: string; name: string }> = {
  lions: { sport: 'football', league: 'nfl', id: '8', name: 'Detroit Lions' },
  pistons: { sport: 'basketball', league: 'nba', id: '8', name: 'Detroit Pistons' },
};

type Json = Record<string, unknown>;
const isObj = (v: unknown): v is Json => typeof v === 'object' && v !== null && !Array.isArray(v);
const str = (v: unknown): string | undefined => (typeof v === 'string' && v.trim() ? v : undefined);
const num = (v: unknown): number | undefined => (typeof v === 'number' && Number.isFinite(v) ? v : undefined);
const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);

function stateOf(type: Json): GameState {
  const name = str(type.name) ?? '';
  if (type.completed === true || name === 'STATUS_FINAL') return 'final';
  if (name === 'STATUS_POSTPONED') return 'postponed';
  if (name === 'STATUS_CANCELED' || name === 'STATUS_CANCELLED') return 'canceled';
  if (name === 'STATUS_SCHEDULED') return 'scheduled';
  if (type.state === 'in') return 'in-progress';
  return 'scheduled';
}

function parseGame(raw: unknown, teamId: string): GameSummary | undefined {
  if (!isObj(raw)) return undefined;
  const comp = arr(raw.competitions).find(isObj);
  const date = str(raw.date);
  const id = str(raw.id);
  if (!comp || !date || !id) return undefined;
  const status = isObj(comp.status) ? comp.status : {};
  const type = isObj(status.type) ? status.type : {};
  const competitors = arr(comp.competitors).filter(isObj);
  const us = competitors.find((c) => str(c.id) === teamId || (isObj(c.team) && str(c.team.id) === teamId));
  const them = competitors.find((c) => c !== us);
  if (!us || !them) return undefined;

  const theirTeam = isObj(them.team) ? them.team : {};
  const state = stateOf(type);
  const score = (c: Json) => (isObj(c.score) ? num(c.score.value) : num(c.score));
  const scoreFor = score(us);
  const scoreAgainst = score(them);
  const hasScore = (state === 'final' || state === 'in-progress') && scoreFor !== undefined && scoreAgainst !== undefined;

  let result: GameSummary['result'];
  if (state === 'final' && hasScore) {
    result = scoreFor! > scoreAgainst! ? 'W' : scoreFor! < scoreAgainst! ? 'L' : 'T';
  }

  return {
    id,
    date,
    opponent: str(theirTeam.displayName) ?? str(theirTeam.shortDisplayName) ?? 'Opponent',
    opponentAbbr: str(theirTeam.abbreviation) ?? '',
    home: us.homeAway === 'home',
    state,
    scoreFor: hasScore ? scoreFor : undefined,
    scoreAgainst: hasScore ? scoreAgainst : undefined,
    result,
    statusDetail: str(type.shortDetail) ?? str(type.detail),
  };
}

export function parseSchedule(team: TeamKey, json: unknown, now = Date.now()): TeamSnapshot {
  if (!isObj(json) || !isObj(json.team)) throw new SportsError('parse', 'Unexpected response shape');
  const cfg = TEAMS[team];
  const t = json.team;
  const games = arr(json.events)
    .map((e) => parseGame(e, cfg.id))
    .filter((g): g is GameSummary => g !== undefined)
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  const finals = games.filter((g) => g.state === 'final');
  const upcoming = games.filter((g) => g.state === 'scheduled');
  const season = isObj(json.requestedSeason) ? str(json.requestedSeason.displayName) : undefined;

  return {
    team,
    teamName: str(t.displayName) ?? cfg.name,
    record: str(t.recordSummary),
    standing: str(t.standingSummary),
    season,
    lastGame: finals.at(-1),
    liveGame: games.find((g) => g.state === 'in-progress'),
    nextGame: upcoming[0],
    fetchedAt: now,
    sourceUrl: str(t.clubhouse),
  };
}

export const espnProvider: SportsProvider = {
  id: 'espn-site-api',
  sourceLabel: 'ESPN',
  sourceHomepage: 'https://www.espn.com/',
  async getTeam(team, signal) {
    const cfg = TEAMS[team];
    const url = `${BASE}/${cfg.sport}/${cfg.league}/teams/${cfg.id}/schedule`;
    const timeout = new AbortController();
    const timer = setTimeout(() => timeout.abort(), TIMEOUT_MS);
    const onAbort = () => timeout.abort();
    signal?.addEventListener('abort', onAbort);
    let res: Response;
    try {
      res = await fetch(url, { signal: timeout.signal, headers: { Accept: 'application/json' } });
    } catch (e) {
      if (timeout.signal.aborted && !signal?.aborted) throw new SportsError('timeout', 'The data source took too long to respond');
      throw new SportsError('network', e instanceof Error ? e.message : 'Network error');
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
    }
    if (res.status === 429) throw new SportsError('rate-limited', 'The data source is rate limiting requests', 429);
    if (!res.ok) throw new SportsError('http', `The data source answered ${res.status}`, res.status);
    let json: unknown;
    try {
      json = await res.json();
    } catch {
      throw new SportsError('parse', 'The data source did not return JSON');
    }
    return parseSchedule(team, json);
  },
};
