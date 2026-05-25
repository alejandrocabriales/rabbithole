"use client";

import { useState, type KeyboardEvent } from "react";
import type { Idea } from "@/lib/types";
import { useOverlay } from "@/components/providers/AppProviders";
import { StatusBadge } from "./StatusBadge";
import { ScoreBars } from "./ScoreBars";
import { Bookmark, BookmarkFill } from "@/components/icons";

export function IdeaCard({ idea }: { idea: Idea }) {
  const { openIdea } = useOverlay();
  const [favorite, setFavorite] = useState(idea.favorite);

  const open = () => openIdea(idea.id);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  return (
    <div
      className="idea-card"
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={onKeyDown}
    >
      <div className="idea-card-head">
        <h3 className="idea-card-title">{idea.title}</h3>
        <button
          type="button"
          className={"idea-card-bookmark" + (favorite ? " on" : "")}
          title={favorite ? "Unbookmark" : "Bookmark"}
          aria-label={favorite ? "Remove bookmark" : "Add bookmark"}
          aria-pressed={favorite}
          onClick={(e) => {
            e.stopPropagation();
            setFavorite((f) => !f);
          }}
        >
          {favorite ? <BookmarkFill size={13} /> : <Bookmark size={13} />}
        </button>
      </div>
      <p className="idea-card-desc">{idea.desc}</p>
      <div className="idea-card-tags">
        {idea.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="idea-card-foot">
        <StatusBadge status={idea.status} />
        <div className="idea-card-scores">
          <div className="score">
            <span className="score-lbl">POT</span>
            <div className="score-row">
              <ScoreBars value={idea.potential} kind="pot" />
              <span className="score-val">{idea.potential}</span>
            </div>
          </div>
          <div className="score">
            <span className="score-lbl">CPX</span>
            <div className="score-row">
              <ScoreBars value={idea.complexity} kind="cpx" />
              <span className="score-val">{idea.complexity}</span>
            </div>
          </div>
        </div>
      </div>
      <span className="idea-card-updated">{idea.updated}</span>
    </div>
  );
}
