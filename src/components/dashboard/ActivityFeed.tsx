import type { ReactNode } from "react";
import { getActivity } from "@/lib/data";
import { renderRichText } from "@/lib/format";
import type { ActivityKind } from "@/lib/types";
import {
  Archive,
  ArrowRight,
  Check,
  Chevron,
  Clock,
  Edit,
  Link,
  Plus,
} from "@/components/icons";

const KIND_ICON: Record<ActivityKind, ReactNode> = {
  status: <ArrowRight size={11} />,
  note: <Edit size={11} />,
  validate: <Check size={11} />,
  create: <Plus size={11} />,
  link: <Link size={11} />,
  archive: <Archive size={11} />,
};

export function ActivityFeed() {
  const activity = getActivity();
  return (
    <div className="card">
      <div className="card-head">
        <h2 className="card-title">
          <Clock size={13} style={{ color: "var(--text-3)" }} />
          Recent activity
        </h2>
        <button type="button" className="section-link">
          All events <Chevron size={11} />
        </button>
      </div>
      <div className="activity">
        {activity.map((a, i) => (
          <div className="activity-row" key={i}>
            <div className={"activity-dot" + (a.tone ? " " + a.tone : "")}>
              {KIND_ICON[a.kind]}
            </div>
            <div>
              <div className="activity-text">{renderRichText(a.text)}</div>
              <div className="activity-time">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
