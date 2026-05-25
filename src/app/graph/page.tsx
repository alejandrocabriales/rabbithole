import { IdeaGraph } from "@/components/graph/IdeaGraph";
import { Filter, Sparkle } from "@/components/icons";

export default function GraphPage() {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Idea graph</h1>
          <p className="page-sub">
            How your ideas relate — by shared tags, manual links, and detected semantic
            clusters.
          </p>
        </div>
        <div className="page-head-actions">
          <button type="button" className="btn-ghost">
            <Filter size={13} /> Tags
          </button>
          <button type="button" className="btn-ghost">
            <Sparkle size={13} /> Cluster mode
          </button>
        </div>
      </div>
      <IdeaGraph />
    </div>
  );
}
