// RabbitHole — status semantics & color mapping.
// Components read color via `statusColorVar(status)` so the hex values live
// only in CSS tokens (--st-*), never inline in component source.

import type { Status } from "./types";

export const STATUS_LABELS: Record<Status, string> = {
  exploring: "Exploring",
  researching: "Researching",
  validating: "Validating",
  building: "Building",
  paused: "Paused",
  archived: "Archived",
};

/** CSS custom-property reference for a status color, e.g. `var(--st-building)`. */
export function statusColorVar(status: Status): string {
  return `var(--st-${status})`;
}

export function statusLabel(status: Status): string {
  return STATUS_LABELS[status];
}
