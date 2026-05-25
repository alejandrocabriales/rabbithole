import type { Opportunity } from "@/lib/types";

/** Renders the opportunity rows inside a card body. Used by the dashboard
 *  section and the full Opportunities page. */
export function OpportunitiesList({ opportunities }: { opportunities: Opportunity[] }) {
  return (
    <div className="card">
      <div className="opps">
        {opportunities.map((o, i) => (
          <div className="opp-row" key={`${o.id}-${i}`}>
            <div className="opp-glyph">{o.glyph}</div>
            <div className="opp-text">
              <div>{o.title}</div>
              <div className="opp-sub">{o.sub}</div>
            </div>
            <div className="opp-score">
              <div className="opp-score-val">{o.score}</div>
              <div className="opp-score-lbl">confidence</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
