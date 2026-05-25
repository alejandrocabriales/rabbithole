"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { getIdeas } from "@/lib/data";
import type { Status } from "@/lib/types";
import { IdeaCard } from "./IdeaCard";
import { IdeaList } from "./IdeaList";
import { IdeasToolbar, type StatusTab, type ViewMode } from "./IdeasToolbar";
import { Search } from "@/components/icons";

const FILTERABLE: Status[] = [
  "exploring",
  "researching",
  "validating",
  "building",
  "paused",
];

export function IdeasView() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<ViewMode>("grid");

  const ideas = getIdeas();
  const activeStatus = searchParams.get("status") ?? "all";
  const query = searchParams.get("q") ?? "";

  const nonArchived = ideas.filter((i) => i.status !== "archived");

  const statusTabs: StatusTab[] = [
    { id: "all", label: "All", count: ideas.length },
    ...FILTERABLE.map((s) => ({
      id: s,
      label: s.charAt(0).toUpperCase() + s.slice(1),
      count: ideas.filter((i) => i.status === s).length,
    })),
  ];

  const filtered = nonArchived
    .filter((i) => (activeStatus === "all" ? true : i.status === activeStatus))
    .filter((i) => {
      const ql = query.trim().toLowerCase();
      if (!ql) return true;
      return (
        i.title.toLowerCase().includes(ql) ||
        i.desc.toLowerCase().includes(ql) ||
        i.tags.some((t) => t.toLowerCase().includes(ql))
      );
    });

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Ideas</h1>
          <p className="page-sub">
            A working library. {filtered.length} of {nonArchived.length} ideas shown.
          </p>
        </div>
      </div>

      <IdeasToolbar
        statusTabs={statusTabs}
        activeStatus={activeStatus}
        query={query}
        view={view}
        onViewChange={setView}
      />

      {filtered.length === 0 ? (
        <div className="card card-pad" style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-3)" }}>
          <Search size={20} />
          <div style={{ marginTop: 10 }}>No ideas match your filters.</div>
        </div>
      ) : view === "grid" ? (
        <div className="idea-grid">
          {filtered.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      ) : (
        <IdeaList ideas={filtered} />
      )}
    </div>
  );
}
