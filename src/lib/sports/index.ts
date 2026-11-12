import { espnProvider } from './espn';
import { SportsError, type LoadResult, type SportsProvider, type TeamKey, type TeamSnapshot } from './types';

export * from './types';

/** The one line to change if the data source ever needs replacing. */
export const provider: SportsProvider = espnProvider;

export const TEAM_KEYS: TeamKey[] = ['lions', 'pistons'];

const cacheKey = (team: TeamKey) => `sports:v1:${provider.id}:${team}`;

function readCache(team: TeamKey): TeamSnapshot | undefined {
  try {
    const raw = localStorage.getItem(cacheKey(team));
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as TeamSnapshot;
    return typeof parsed?.fetchedAt === 'number' ? parsed : undefined;
  } catch {
    return undefined;
  }
}

function writeCache(snapshot: TeamSnapshot) {
  try {
    localStorage.setItem(cacheKey(snapshot.team), JSON.stringify(snapshot));
  } catch {
    /* storage unavailable: the widget works without it */
  }
}

/**
 * Fetch live data. On failure, fall back to the last saved snapshot, labelled stale.
 * Never invents numbers: with no live data and no saved snapshot the result is an error.
 */
export async function loadTeam(team: TeamKey, signal?: AbortSignal): Promise<LoadResult> {
  try {
    const snapshot = await provider.getTeam(team, signal);
    writeCache(snapshot);
    return { status: 'fresh', snapshot };
  } catch (e) {
    const error = e instanceof SportsError ? e : new SportsError('network', 'Unknown error');
    const cached = readCache(team);
    return cached ? { status: 'stale', snapshot: cached, error } : { status: 'error', error };
  }
}
