import type { Idea, IdeaDetailContent, TimelineEntry } from "@/lib/types";
import { StatusBadge } from "@/components/ideas/StatusBadge";
import { TimelineMini } from "./TimelineMini";

interface DetailSideProps {
  idea: Idea;
  isShowcase: boolean;
  detail: IdeaDetailContent;
}

function ScoreRow({ label, value, kind }: { label: string; value: number; kind: "pot" | "cpx" }) {
  return (
    <div className="side-row">
      <span>{label}</span>
      <span className="side-score">
        <span className={"side-scorebar" + (kind === "cpx" ? " cpx" : "")}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <span key={n} className={n <= value ? "on" : ""} />
          ))}
        </span>
        <b>{value}</b>
      </span>
    </div>
  );
}

export function DetailSide({ idea, isShowcase, detail }: DetailSideProps) {
  const created = isShowcase ? detail.created : "Apr 2026";
  const timeline: TimelineEntry[] = isShowcase
    ? detail.timeline
    : [
        { time: idea.updated, text: "Updated", accent: true },
        { time: "Apr 2026", text: "Created idea" },
      ];

  return (
    <aside className="detail-side">
      <div className="side-block">
        <div className="side-label">Status</div>
        <div className="side-row">
          <span>State</span>
          <StatusBadge status={idea.status} />
        </div>
        <div className="side-row">
          <span>Owner</span>
          <b>Alex Chen</b>
        </div>
        <div className="side-row">
          <span>Created</span>
          <b>{created}</b>
        </div>
        <div className="side-row">
          <span>Updated</span>
          <b>{idea.updated}</b>
        </div>
      </div>

      <div className="side-block">
        <div className="side-label">Scoring</div>
        <ScoreRow label="Potential" value={idea.potential} kind="pot" />
        <ScoreRow label="Complexity" value={idea.complexity} kind="cpx" />
        <div className="side-row">
          <span>Conviction</span>
          <b>Medium-High</b>
        </div>
      </div>

      <div className="side-block">
        <div className="side-label">Tags</div>
        <div className="side-tags">
          {idea.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
          <span className="tag tag-add">+ Add</span>
        </div>
      </div>

      {isShowcase && (
        <div className="side-block">
          <div className="side-label">Related ideas</div>
          {detail.related.map((r) => (
            <div className="related-row" key={r.id}>
              <div className="related-glyph">{r.title.charAt(0)}</div>
              <div className="related-text">
                <div>{r.title}</div>
                <div className="related-sub">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="side-block">
        <div className="side-label">Timeline</div>
        <TimelineMini entries={timeline} />
      </div>

      <div className="side-block">
        <div className="side-label">Attachments</div>
        <div className="side-attach">Drop files or paste a link</div>
      </div>
    </aside>
  );
}
