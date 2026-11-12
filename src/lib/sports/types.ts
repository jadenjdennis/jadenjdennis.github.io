export type TeamKey = 'lions' | 'pistons';

export type GameState = 'scheduled' | 'in-progress' | 'final' | 'postponed' | 'canceled';

export interface GameSummary {
  id: string;
  /** ISO timestamp from the provider. */
  date: string;
  opponent: string;
  opponentAbbr: string;
  home: boolean;
  state: GameState;
  /** Present only for in-progress and final games. 0 is a real score; absent means unknown. */
  scoreFor?: number;
  scoreAgainst?: number;
  result?: 'W' | 'L' | 'T';
  /** Provider's own short status text, e.g. "Q3 4:12". */
  statusDetail?: string;
}

export interface TeamSnapshot {
  team: TeamKey;
  teamName: string;
  /** e.g. "6-2". Undefined means the provider did not supply one (not "0-0"). */
  record?: string;
  /** e.g. "2nd in NFC North". */
  standing?: string;
  season?: string;
  lastGame?: GameSummary;
  liveGame?: GameSummary;
  nextGame?: GameSummary;
  /** Epoch ms when this snapshot was fetched from the provider. */
  fetchedAt: number;
  /** Human page for the same data, linked from the widget. */
  sourceUrl?: string;
}

export type SportsErrorKind = 'network' | 'timeout' | 'rate-limited' | 'http' | 'parse';

export class SportsError extends Error {
  constructor(
    public kind: SportsErrorKind,
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = 'SportsError';
  }
}

/** Swap providers by implementing this and changing the export in ./index.ts. */
export interface SportsProvider {
  id: string;
  /** Shown to visitors next to the data. */
  sourceLabel: string;
  sourceHomepage: string;
  getTeam(team: TeamKey, signal?: AbortSignal): Promise<TeamSnapshot>;
}

export type LoadResult =
  | { status: 'fresh'; snapshot: TeamSnapshot }
  /** Live fetch failed; this is an earlier saved snapshot, clearly older. */
  | { status: 'stale'; snapshot: TeamSnapshot; error: SportsError }
  | { status: 'error'; error: SportsError };
