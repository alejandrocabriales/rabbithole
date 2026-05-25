import { getOpportunities } from "@/lib/data";
import { OpportunitiesList } from "@/components/dashboard/OpportunitiesList";
import { Sparkle } from "@/components/icons";
import type { Opportunity } from "@/lib/types";

export default function OpportunitiesPage() {
  const base = getOpportunities();
  // Prototype shows the set twice; the second pass is slightly lower-confidence.
  const doubled: Opportunity[] = [...base, ...base].map((o, i) =>
    i > 2 ? { ...o, score: o.score - 10 } : o,
  );

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Opportunities</h1>
          <p className="page-sub">
            Detected from your library — clusters, momentum signals, and convergent themes.
          </p>
        </div>
        <button type="button" className="btn-ghost">
          <Sparkle size={13} /> Re-analyse
        </button>
      </div>
      <OpportunitiesList opportunities={doubled} />
    </div>
  );
}
