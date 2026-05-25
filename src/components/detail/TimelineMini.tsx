import { renderRichText } from "@/lib/format";
import type { TimelineEntry } from "@/lib/types";

export function TimelineMini({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline-mini">
      {entries.map((t, i) => (
        <div className="tl-row" key={i}>
          <span className={"tl-dot" + (t.accent ? " accent" : "")} />
          <div>
            <div className="tl-text">{renderRichText(t.text)}</div>
            <div className="tl-time">{t.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
