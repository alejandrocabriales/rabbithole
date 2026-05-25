import type { Problem } from "@/lib/types";
import { Edit, Link } from "@/components/icons";

interface ProblemCardProps {
  problem: Problem;
  /** Show the "N linked ideas" foot item (Problems page variant). */
  showLinked?: boolean;
}

export function ProblemCard({ problem, showLinked = false }: ProblemCardProps) {
  return (
    <div className="problem-card">
      <div className="problem-sev">
        <span className={"problem-sev-bar " + problem.severityLevel}>
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className={n <= problem.severity ? "on" : ""} />
          ))}
        </span>
        <span>Severity {problem.severity}/5</span>
        <span className="problem-sev-domain">{problem.domain}</span>
      </div>
      <h3 className="problem-title">{problem.title}</h3>
      <p className="problem-desc">{problem.desc}</p>
      <div className="problem-foot">
        <span>
          <Edit size={11} style={{ verticalAlign: "-2px" }} /> {problem.notes} notes
        </span>
        {showLinked && (
          <span>
            <Link size={11} style={{ verticalAlign: "-2px" }} /> 2 linked ideas
          </span>
        )}
        <span className="problem-foot-open">Open ⟶</span>
      </div>
    </div>
  );
}
