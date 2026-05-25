"use client";

import { useRef } from "react";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useHotkeys } from "@/hooks/useHotkeys";
import { Check, Hash, Lab, Link, Plus, Sparkle } from "@/components/icons";

interface QuickAddModalProps {
  open: boolean;
  onClose: () => void;
}

export function QuickAddModal({ open, onClose }: QuickAddModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, open);
  useHotkeys(
    open ? [{ key: "Escape", handler: onClose, allowInInput: true }] : [],
  );

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="New idea"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <Plus size={11} />
          <span>New idea</span>
          <span className="modal-head-meta">Auto-saved · Draft</span>
        </div>
        <input
          className="modal-title-input"
          placeholder="What's the idea?"
          aria-label="Idea title"
          autoFocus
        />
        <textarea
          className="modal-desc-input"
          aria-label="Idea description"
          placeholder="A one-paragraph pitch. What's the problem, who feels it, and what's the wedge? Don't over-think — refine later."
        />
        <div className="modal-attrs">
          <button type="button" className="attr-pill">
            <span className="status-dot" style={{ background: "var(--st-exploring)" }} />
            <span className="lbl">Status</span> Exploring
          </button>
          <button type="button" className="attr-pill">
            <Hash size={11} style={{ color: "var(--text-4)" }} />
            <span className="lbl">Tags</span> Add tags
          </button>
          <button type="button" className="attr-pill">
            <Sparkle size={11} style={{ color: "var(--accent)" }} />
            <span className="lbl">Potential</span> —
          </button>
          <button type="button" className="attr-pill">
            <Lab size={11} style={{ color: "var(--st-researching)" }} />
            <span className="lbl">Complexity</span> —
          </button>
          <button type="button" className="attr-pill">
            <Link size={11} style={{ color: "var(--text-4)" }} />
            <span className="lbl">Related</span> None
          </button>
        </div>
        <div className="modal-foot">
          <span className="modal-foot-hint">
            <span className="kbd">⌘</span>
            <span className="kbd">↵</span> Save · <span className="kbd">esc</span> Cancel ·{" "}
            <span className="kbd">⌘ K</span> Search instead
          </span>
          <button type="button" className="btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn-primary" onClick={onClose}>
            <Check size={13} /> Save idea
          </button>
        </div>
      </div>
    </div>
  );
}
