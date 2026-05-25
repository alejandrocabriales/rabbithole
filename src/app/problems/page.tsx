import { getProblems } from "@/lib/data";
import { ProblemCard } from "@/components/dashboard/ProblemCard";
import { Plus, Search } from "@/components/icons";

export default function ProblemsPage() {
  const problems = getProblems();
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Problems</h1>
          <p className="page-sub">
            Severity-ranked friction worth turning into ideas. {problems.length} active.
          </p>
        </div>
        <button type="button" className="btn-primary">
          <Plus size={13} /> New problem
        </button>
      </div>

      <div className="toolbar">
        <div className="toolbar-search">
          <Search size={13} />
          <input placeholder="Search problems…" aria-label="Search problems" />
        </div>
        <button type="button" className="filter-pill on">
          All <span className="filter-pill-count">{problems.length}</span>
        </button>
        <button type="button" className="filter-pill">
          High severity <span className="filter-pill-count">1</span>
        </button>
        <button type="button" className="filter-pill">
          Open <span className="filter-pill-count">3</span>
        </button>
        <button type="button" className="filter-pill">
          With ideas <span className="filter-pill-count">2</span>
        </button>
      </div>

      <div className="problems-grid">
        {problems.map((p) => (
          <ProblemCard key={p.id} problem={p} showLinked />
        ))}
      </div>
    </div>
  );
}
