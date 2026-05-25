"use client";

import { useEffect } from "react";

export interface Hotkey {
  /** Key to match, compared case-insensitively against `event.key`. */
  key: string;
  /** Require Cmd (macOS) or Ctrl (others). */
  meta?: boolean;
  handler: (event: KeyboardEvent) => void;
  /** Fire even when focus is in an input/textarea. Default false. */
  allowInInput?: boolean;
}

function isEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}

/**
 * Register global keyboard shortcuts. Handlers are kept in a ref-free closure
 * but the effect re-subscribes when the `hotkeys` array identity changes, so
 * pass a stable/memoised array (or accept the cheap re-subscribe).
 */
export function useHotkeys(hotkeys: Hotkey[]): void {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const editable = isEditable(event.target);
      for (const hk of hotkeys) {
        if (hk.meta && !(event.metaKey || event.ctrlKey)) continue;
        if (!hk.meta && (event.metaKey || event.ctrlKey)) continue;
        if (event.key.toLowerCase() !== hk.key.toLowerCase()) continue;
        if (editable && !hk.allowInInput) continue;
        event.preventDefault();
        hk.handler(event);
        return;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hotkeys]);
}
