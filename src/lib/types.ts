// RabbitHole — domain types
// These mirror the shape of the mock data in `data.ts`. Keep field names in
// sync; see README ("Where to add a new idea field") before extending.

export type Status =
  | "exploring"
  | "researching"
  | "validating"
  | "building"
  | "paused"
  | "archived";

export interface StatusMeta {
  id: Status;
  label: string;
}

export interface Idea {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  status: Status;
  potential: number; // 1-10
  complexity: number; // 1-10
  updated: string; // human label, e.g. "2d ago"
  updatedISO: string; // ISO date for sorting
  favorite: boolean;
  progress: number; // 0-100
  glyph: string; // single-char label
}

export type SeverityLevel = "warn" | "high";

export interface Problem {
  id: string;
  title: string;
  desc: string;
  severity: number; // 1-5
  severityLevel: SeverityLevel;
  domain: string;
  notes: number;
}

export interface Opportunity {
  id: string;
  score: number;
  title: string;
  sub: string;
  glyph: string;
}

export type ActivityKind =
  | "status"
  | "note"
  | "validate"
  | "create"
  | "link"
  | "archive";

export type ActivityTone = "accent" | "pos" | "";

/**
 * `text` may contain inline `<b>` / `<a>` emphasis. Rendered to JSX by
 * `renderRichText` in `lib/format.ts` — never via dangerouslySetInnerHTML.
 */
export interface ActivityEvent {
  kind: ActivityKind;
  time: string;
  text: string;
  tone: ActivityTone;
}

export interface Category {
  name: string;
  count: number;
  delta: number;
}

export type SparkKey =
  | "total"
  | "active"
  | "building"
  | "potential"
  | "archived"
  | "updates";

export type Sparks = Record<SparkKey, number[]>;

export interface ValidationItem {
  done: boolean;
  text: string;
}

export interface Competitor {
  name: string;
  note: string;
}

export interface RelatedIdea {
  id: string;
  title: string;
  sub: string;
}

export interface TimelineEntry {
  time: string;
  text: string; // may contain inline <b>
  accent?: boolean;
}

export interface IdeaDetailSections {
  problem: string;
  solution: string;
  why: string;
  users: string;
  market: string;
  monetization: string;
}

/** Rich, fully-authored content for the showcase idea (i02). */
export interface IdeaDetailContent {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  status: Status;
  potential: number;
  complexity: number;
  created: string;
  updated: string;
  owner: string;
  tags: string[];
  sections: IdeaDetailSections;
  pros: string[];
  cons: string[];
  risks: string[];
  validation: ValidationItem[];
  competitors: Competitor[];
  questions: string[];
  related: RelatedIdea[];
  timeline: TimelineEntry[];
}
