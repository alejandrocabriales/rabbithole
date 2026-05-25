import { getProblems } from "@/lib/data";
import { ProblemCard } from "./ProblemCard";
import { Chevron, Target } from "@/components/icons";

export function ProblemsGrid() {
  const problems = getProblems();
  return (
    <>
      <div className="section-head">
        <h2 className="section-title">
          <Target size={11} />
          Problems worth solving
          <span className="section-title-count">{problems.length}</span>
        </h2>
        <button type="button" className="section-link">
          Open problems board <Chevron size={11} />
        </button>
      </div>
      <div className="problems-grid">
        {problems.map((p) => (
          <ProblemCard key={p.id} problem={p} />
        ))}
      </div>
    </>
  );
}
