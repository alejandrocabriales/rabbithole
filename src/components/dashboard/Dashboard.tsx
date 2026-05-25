import { getOpportunities } from "@/lib/data";
import { greeting, longDate } from "@/lib/format";
import { StatGrid } from "./StatGrid";
import { InProgressList } from "./InProgressList";
import { ActivityFeed } from "./ActivityFeed";
import { ProblemsGrid } from "./ProblemsGrid";
import { OpportunitiesList } from "./OpportunitiesList";
import { TrendingChips } from "./TrendingChips";
import { Eye, Share, Sparkle } from "@/components/icons";

export function Dashboard() {
  const now = new Date();

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">
            {greeting(now)}, <em>Alex</em>.
          </h1>
          <p className="page-sub">
            {longDate(now)} · 3 ideas updated since you were last here · 1 new opportunity
            detected.
          </p>
        </div>
        <div className="page-head-actions">
          <button type="button" className="btn-ghost">
            <Eye size={13} /> Last 30 days
          </button>
          <button type="button" className="btn-ghost">
            <Share size={13} /> Export
          </button>
        </div>
      </div>

      <StatGrid />

      <div className="dash-grid">
        <InProgressList />
        <ActivityFeed />
      </div>

      <ProblemsGrid />

      <div className="section-head">
        <h2 className="section-title">
          <Sparkle size={11} style={{ color: "var(--accent)" }} />
          Opportunities detected
          <span className="section-title-count">Auto · just now</span>
        </h2>
        <button type="button" className="section-link">
          Dismiss all
        </button>
      </div>
      <OpportunitiesList opportunities={getOpportunities()} />

      <TrendingChips />
    </div>
  );
}
