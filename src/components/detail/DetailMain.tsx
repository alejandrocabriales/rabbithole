import type { Idea, IdeaDetailContent } from "@/lib/types";
import { StatusBadge } from "@/components/ideas/StatusBadge";
import { DetailSection } from "./DetailSection";
import { ProsConsRisks } from "./ProsConsRisks";
import { ValidationChecklist } from "./ValidationChecklist";
import { CompetitorsList } from "./CompetitorsList";
import { Activity, Clock, Lab, Sparkle } from "@/components/icons";

interface DetailMainProps {
  idea: Idea;
  isShowcase: boolean;
  detail: IdeaDetailContent;
}

const SOLUTION_PLACEHOLDER =
  "Solution detail to be drafted. Click anywhere to start typing — RabbitHole auto-saves as you think.";

export function DetailMain({ idea, isShowcase, detail }: DetailMainProps) {
  const summary = isShowcase ? detail.summary : idea.desc;
  const problem = isShowcase ? detail.sections.problem : idea.desc;
  const solution = isShowcase ? detail.sections.solution : SOLUTION_PLACEHOLDER;

  return (
    <div className="detail-main">
      <div className="detail-eyebrow">
        <StatusBadge status={idea.status} />
        <span className="detail-eyebrow-sep">·</span>
        <span>Idea #{idea.id.replace("i", "")}</span>
        <span className="detail-eyebrow-sep">·</span>
        <span>{idea.tags.join(" · ")}</span>
      </div>

      <h1 className="detail-title">
        {isShowcase ? (
          <>
            Email <em>→</em> task router
            <span className="detail-subtitle">{detail.subtitle}</span>
          </>
        ) : (
          idea.title
        )}
      </h1>

      <p className="detail-summary">{summary}</p>

      <div className="detail-meta-row">
        <span className="detail-meta">
          <Sparkle size={12} style={{ color: "var(--accent)" }} /> Potential{" "}
          <b>{idea.potential}/10</b>
        </span>
        <span className="detail-meta">
          <Lab size={12} /> Complexity <b>{idea.complexity}/10</b>
        </span>
        <span className="detail-meta">
          <Clock size={12} /> Updated <b>{idea.updated}</b>
        </span>
        {isShowcase && (
          <span className="detail-meta">
            <Activity size={12} /> Created <b>{detail.created}</b>
          </span>
        )}
      </div>

      <DetailSection title="Problem">
        <p>{problem}</p>
      </DetailSection>

      <DetailSection title="Proposed solution">
        <p>{solution}</p>
      </DetailSection>

      {isShowcase && (
        <>
          <DetailSection title="Why it matters">
            <p>{detail.sections.why}</p>
          </DetailSection>

          <DetailSection title="Target users">
            <p>{detail.sections.users}</p>
          </DetailSection>

          <DetailSection title="Market opportunity">
            <p>{detail.sections.market}</p>
          </DetailSection>

          <DetailSection title="Pros · Cons · Risks">
            <ProsConsRisks pros={detail.pros} cons={detail.cons} risks={detail.risks} />
          </DetailSection>

          <DetailSection title="Validation checklist">
            <ValidationChecklist items={detail.validation} />
          </DetailSection>

          <DetailSection title="Monetization">
            <p>{detail.sections.monetization}</p>
          </DetailSection>

          <DetailSection title="Competitors" defaultOpen={false}>
            <CompetitorsList competitors={detail.competitors} />
          </DetailSection>

          <DetailSection title="Open questions">
            <ul>
              {detail.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </DetailSection>
        </>
      )}
    </div>
  );
}
