import { getCategories } from "@/lib/data";
import { Hash, TrendDown, TrendUp } from "@/components/icons";

export function TrendingChips() {
  const categories = getCategories();
  return (
    <>
      <div className="section-head">
        <h2 className="section-title">
          <Hash size={11} />
          Trending categories
        </h2>
        <span className="section-link static mono">last 30 days</span>
      </div>
      <div className="chip-cloud">
        {categories.map((c) => (
          <div className="chip" key={c.name}>
            <span>{c.name}</span>
            <span className="chip-count">{c.count}</span>
            {c.delta !== 0 && (
              <span className={"chip-trend" + (c.delta < 0 ? " down" : "")}>
                {c.delta > 0 ? <TrendUp size={10} /> : <TrendDown size={10} />}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
