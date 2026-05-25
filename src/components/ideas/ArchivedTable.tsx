"use client";

import { type KeyboardEvent } from "react";
import type { Idea } from "@/lib/types";
import { useOverlay } from "@/components/providers/AppProviders";
import { StatusBadge } from "./StatusBadge";

export function ArchivedTable({ ideas }: { ideas: Idea[] }) {
  const { openIdea } = useOverlay();

  return (
    <div className="list-table">
      <div className="list-row head">
        <span>Idea</span>
        <span>Status</span>
        <span>Tags</span>
        <span>Pot</span>
        <span>Cpx</span>
        <span>Archived</span>
        <span />
      </div>
      {ideas.length === 0 && <div className="list-empty">Nothing archived yet.</div>}
      {ideas.map((idea) => {
        const open = () => openIdea(idea.id);
        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        };
        return (
          <div
            className="list-row"
            role="button"
            tabIndex={0}
            key={idea.id}
            onClick={open}
            onKeyDown={onKeyDown}
          >
            <div className="list-title">
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
            <span className="list-cell">{idea.potential}</span>
            <span className="list-cell">{idea.complexity}</span>
            <span className="list-cell muted">{idea.updated}</span>
            <button
              type="button"
              className="btn-ghost list-restore"
              onClick={(e) => e.stopPropagation()}
            >
              Restore
            </button>
          </div>
        );
      })}
    </div>
  );
}
