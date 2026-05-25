import type { ReactNode } from "react";
import { Book, Check, Plus } from "@/components/icons";

interface EmptyStateProps {
  title: string;
  sub: string;
  icon: ReactNode;
  bullets: string[];
}

/**
 * Designed empty-state shell used by the Experiments / Research / Settings
 * placeholder pages. Was the prototype's `Placeholder` component.
 */
export function EmptyState({ title, sub, icon, bullets }: EmptyStateProps) {
  const lower = title.toLowerCase();
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">{title}</h1>
          <p className="page-sub">{sub}</p>
        </div>
      </div>

      <div className="card empty-hero">
        <div className="empty-icon">{icon}</div>
        <div className="empty-body">
          <h2 className="empty-title">This is where {lower} live.</h2>
          <p className="empty-sub">{sub}</p>
          <ul className="empty-list">
            {bullets.map((b) => (
              <li key={b}>
                <span className="empty-list-check">
                  <Check size={13} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="empty-actions">
            <button type="button" className="btn-primary">
              <Plus size={13} /> Start one
            </button>
            <button type="button" className="btn-ghost">
              <Book size={13} /> See examples
            </button>
          </div>
        </div>
      </div>

      <div className="section-head">
        <h2 className="section-title">Sample {lower}</h2>
      </div>
      <div className="problems-grid">
        {[0, 1, 2].map((i) => (
          <div className="problem-card draft" key={i}>
            <div className="problem-sev">
              <span className="problem-sev-bar">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className={n <= 2 ? "on" : ""} />
                ))}
              </span>
              <span>Draft</span>
            </div>
            <h3 className="problem-title">Untitled {lower.replace(/s$/, "")}</h3>
            <p className="problem-desc">
              A placeholder for what one of these looks like. Click{" "}
              <em>Start one</em> to begin.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
