import { STATUS_LABELS } from "@/lib/status";
import type { Status } from "@/lib/types";

/** Pill showing a status with its colored dot. Color comes from `--st-*`. */
export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className="status" data-s={status}>
      <span className="status-dot" />
      {STATUS_LABELS[status]}
    </span>
  );
}
