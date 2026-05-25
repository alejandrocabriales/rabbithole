"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useHotkeys } from "@/hooks/useHotkeys";
import { getIdeas } from "@/lib/data";
import { StatusBadge } from "@/components/ideas/StatusBadge";
import { Layers, Lightbulb, Network, Plus, Search, Target } from "@/components/icons";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onNewIdea: () => void;
}

interface PaletteAction {
  icon: ReactNode;
  label: string;
  shortcut?: string;
  run: () => void;
}

export function CommandPalette({ open, onClose, onNewIdea }: CommandPaletteProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  useFocusTrap(ref, open);
  useHotkeys(
    open ? [{ key: "Escape", handler: onClose, allowInInput: true }] : [],
  );

  const ideas = getIdeas();

  const goto = (href: string) => {
    router.push(href);
    onClose();
  };

  const actions: PaletteAction[] = useMemo(
    () => [
      {
        icon: <Plus size={12} />,
        label: "New idea",
        shortcut: "⌘N",
        run: () => {
          onClose();
          onNewIdea();
        },
      },
      { icon: <Lightbulb size={12} />, label: "Go to Ideas", shortcut: "G I", run: () => goto("/ideas") },
      { icon: <Layers size={12} />, label: "Go to Dashboard", shortcut: "G D", run: () => goto("/") },
      { icon: <Target size={12} />, label: "Open problems board", run: () => goto("/problems") },
      { icon: <Network size={12} />, label: "Open idea graph", run: () => goto("/graph") },
    ],
    // goto/onClose/onNewIdea are stable enough for this ephemeral overlay
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (!open) return null;

  const ql = query.trim().toLowerCase();
  const ideaHits = ideas
    .filter(
      (i) =>
        !ql ||
        i.title.toLowerCase().includes(ql) ||
        i.tags.some((t) => t.toLowerCase().includes(ql)),
    )
    .slice(0, 6);
  const actionHits = actions.filter((a) => !ql || a.label.toLowerCase().includes(ql));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cmd-head">
          <Search size={14} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ideas, notes, or run a command…"
            aria-label="Search ideas or run a command"
          />
          <span className="cmd-esc">esc</span>
        </div>
        <div className="cmd-list">
          {ideaHits.length > 0 && <div className="cmd-group-label">Ideas</div>}
          {ideaHits.map((i) => (
            <button
              key={i.id}
              type="button"
              className="cmd-row"
              onClick={() => goto(`/ideas/${i.id}`)}
            >
              <StatusBadge status={i.status} />
              <span className="cmd-row-label">{i.title}</span>
              <span className="cmd-row-meta">{i.tags[0]}</span>
            </button>
          ))}

          <div className="cmd-group-label spaced">Actions</div>
          {actionHits.map((a) => (
            <button key={a.label} type="button" className="cmd-row" onClick={a.run}>
              <span className="cmd-row-icon">{a.icon}</span>
              <span className="cmd-row-label">{a.label}</span>
              {a.shortcut && <span className="cmd-row-meta">{a.shortcut}</span>}
            </button>
          ))}

          {ideaHits.length === 0 && actionHits.length === 0 && (
            <div className="cmd-empty">
              No results. Press <span className="accent">⌘N</span> to start a new idea from
              &ldquo;{query}&rdquo;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
