"use client";

import { type KeyboardEvent } from "react";
import type { Idea } from "@/lib/types";
import { useOverlay } from "@/components/providers/AppProviders";
import { StatusBadge } from "./StatusBadge";
import { ScoreBars } from "./ScoreBars";
import { Lightbulb, More, StarFill } from "@/components/icons";

export function IdeaListRow({ idea }: { idea: Idea }) {
  const { openIdea } = useOverlay();
  const open = () => openIdea(idea.id);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  return (
    <div className="list-row" role="button" tabIndex={0} onClick={open} onKeyDown={onKeyDown}>
      <div className="list-title">
        <span className={"list-title-icon" + (idea.favorite ? " fav" : "")}>
          {idea.favorite ? <StarFill size={11} /> : <Lightbulb size={12} />}
        </span>
        <span className="list-title-text">{idea.title}</span>
      </div>
      <StatusBadge status={idea.status} />
      <div className="list-tags">
        {idea.tags.slice(0, 2).map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="list-cell-row">
        <ScoreBars value={idea.potential} kind="pot" />
        <span className="list-cell">{idea.potential}</span>
      </div>
      <div className="list-cell-row">
        <ScoreBars value={idea.complexity} kind="cpx" />
        <span className="list-cell">{idea.complexity}</span>
      </div>
      <span className="list-cell muted">{idea.updated}</span>
      <button
        type="button"
        className="icon-btn list-more"
        aria-label="More actions"
        onClick={(e) => e.stopPropagation()}
      >
        <More size={13} />
      </button>
    </div>
  );
}
