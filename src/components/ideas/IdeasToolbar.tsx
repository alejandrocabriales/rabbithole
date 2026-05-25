"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Grid, List, Search, Sort, X } from "@/components/icons";
import type { Status } from "@/lib/types";

export type ViewMode = "grid" | "list";

export interface StatusTab {
  id: "all" | Status;
  label: string;
  count: number;
}

interface IdeasToolbarProps {
  statusTabs: StatusTab[];
  activeStatus: string;
  query: string;
  view: ViewMode;
  onViewChange: (v: ViewMode) => void;
}

export function IdeasToolbar({
  statusTabs,
  activeStatus,
  query,
  view,
  onViewChange,
}: IdeasToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build the next URL from the current params, with `patch` applied.
  const pushParams = useCallback(
    (patch: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(patch)) {
        if (value === null || value === "") params.delete(key);
        else params.set(key, value);
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  return (
    <div className="toolbar">
      <div className="toolbar-search">
        <Search size={13} />
        <input
          placeholder="Search by title, tag, or note…"
          aria-label="Search ideas"
          value={query}
          onChange={(e) => pushParams({ q: e.target.value })}
        />
        {query && (
          <button
            type="button"
            className="toolbar-search-clear"
            aria-label="Clear search"
            onClick={() => pushParams({ q: null })}
          >
            <X size={12} />
          </button>
        )}
      </div>

      {statusTabs.map((s) => (
        <button
          key={s.id}
          type="button"
          className={"filter-pill" + (activeStatus === s.id ? " on" : "")}
          aria-pressed={activeStatus === s.id}
          onClick={() => pushParams({ status: s.id === "all" ? null : s.id })}
        >
          {s.id !== "all" && (
            <span className="status-dot" style={{ background: `var(--st-${s.id})` }} />
          )}
          {s.label}
          <span className="filter-pill-count">{s.count}</span>
        </button>
      ))}

      <div className="toolbar-spacer" />
      <button type="button" className="btn-ghost">
        <Sort size={13} /> Updated
      </button>
      <div className="view-toggle">
        <button
          type="button"
          className={view === "grid" ? "on" : ""}
          aria-label="Grid view"
          aria-pressed={view === "grid"}
          onClick={() => onViewChange("grid")}
        >
          <Grid size={13} />
        </button>
        <button
          type="button"
          className={view === "list" ? "on" : ""}
          aria-label="List view"
          aria-pressed={view === "list"}
          onClick={() => onViewChange("list")}
        >
          <List size={13} />
        </button>
      </div>
    </div>
  );
}
