import type { Idea } from "@/lib/types";
import { IdeaListRow } from "./IdeaListRow";

export function IdeaList({ ideas }: { ideas: Idea[] }) {
  return (
    <div className="list-table">
      <div className="list-row head">
        <span>Idea</span>
        <span>Status</span>
        <span>Tags</span>
        <span>Pot</span>
        <span>Cpx</span>
        <span>Updated</span>
        <span />
      </div>
      {ideas.map((idea) => (
        <IdeaListRow key={idea.id} idea={idea} />
      ))}
    </div>
  );
}
