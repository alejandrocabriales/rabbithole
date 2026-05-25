"use client";

import { getIdeas } from "@/lib/data";
import { useOverlay } from "@/components/providers/AppProviders";
import { StatusBadge } from "@/components/ideas/StatusBadge";
import { Activity, Chevron, StarFill } from "@/components/icons";

export function InProgressList() {
  const { openIdea } = useOverlay();
  const inProgress = getIdeas()
    .filter((i) => i.status === "building" || i.status === "validating")
    .slice(0, 5);

  return (
    <div className="card">
      <div className="card-head">
        <h2 className="card-title">
          <Activity size={13} style={{ color: "var(--st-building)" }} />
          Ideas in progress
          <span className="section-title-count">{inProgress.length}</span>
        </h2>
        <button type="button" className="section-link">
          View all <Chevron size={11} />
        </button>
      </div>
      <div className="progress-list">
        {inProgress.map((idea) => (
          <button
            type="button"
            className="progress-row"
            key={idea.id}
            onClick={() => openIdea(idea.id)}
          >
            <div className="progress-main">
              <div className="progress-title">
                {idea.title}
                {idea.favorite && (
                  <span className="progress-fav">
                    <StarFill size={11} />
                  </span>
                )}
              </div>
              <div className="progress-meta">
                <StatusBadge status={idea.status} />
                <span className="mono">{idea.tags.slice(0, 2).join(" · ")}</span>
                <span>· Updated {idea.updated}</span>
              </div>
            </div>
            <div className="progress-bar-wrap">
              <span className="progress-pct">{idea.progress}%</span>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: idea.progress + "%" }} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
