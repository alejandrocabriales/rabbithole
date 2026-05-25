"use client";

import { usePathname } from "next/navigation";
import { getIdea } from "@/lib/data";
import { useOverlay } from "@/components/providers/AppProviders";
import { Bell, Filter, Folder, Plus, Search, Sort } from "@/components/icons";

const SECTION_LABELS: Record<string, string> = {
  "": "Dashboard",
  ideas: "Ideas",
  problems: "Problems",
  experiments: "Experiments",
  opportunities: "Opportunities",
  research: "Research",
  graph: "Idea Graph",
  favorites: "Favorites",
  archived: "Archived",
  settings: "Settings",
};

export function Topbar() {
  const pathname = usePathname();
  const { openQuickAdd, openCommandPalette } = useOverlay();

  const segments = pathname.split("/").filter(Boolean);
  const sectionKey = segments[0] ?? "";
  const sectionLabel = SECTION_LABELS[sectionKey] ?? "Dashboard";

  // On /ideas/[id], surface the idea title as a trailing crumb.
  const detailIdea =
    sectionKey === "ideas" && segments[1] ? getIdea(segments[1]) : undefined;

  return (
    <header className="topbar">
      <div className="crumb">
        <span className="crumb-icon">
          <Folder size={14} />
        </span>
        <span>Personal</span>
        <span className="crumb-sep">/</span>
        <span className="crumb-current">{sectionLabel}</span>
        {detailIdea && (
          <>
            <span className="crumb-sep">/</span>
            <span className="crumb-current dim">{detailIdea.title}</span>
          </>
        )}
      </div>

      <div className="topbar-spacer" />

      <button type="button" className="search-cmd" onClick={openCommandPalette}>
        <Search size={13} />
        <span>Search ideas, notes, tags…</span>
        <span className="search-cmd-shortcut">⌘K</span>
      </button>

      <button type="button" className="btn-ghost">
        <Filter size={13} /> Filter
      </button>
      <button type="button" className="btn-ghost">
        <Sort size={13} /> Sort
      </button>

      <button type="button" className="icon-btn" title="Notifications" aria-label="Notifications">
        <Bell size={15} />
        <span className="icon-btn-dot" />
      </button>

      <button type="button" className="btn-primary" onClick={openQuickAdd}>
        <Plus size={13} /> New idea
        <span className="btn-primary-kbd">⌘N</span>
      </button>

      <div className="avatar-btn">AC</div>
    </header>
  );
}
