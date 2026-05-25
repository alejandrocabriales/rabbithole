"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { useHotkeys, type Hotkey } from "@/hooks/useHotkeys";
import { QuickAddModal } from "@/components/overlays/QuickAddModal";
import { CommandPalette } from "@/components/overlays/CommandPalette";
import { Plus } from "@/components/icons";

/**
 * Cross-cutting overlay actions exposed to the whole tree. Replaces the
 * prototype's `window.dispatchEvent(new CustomEvent('rh:openIdea'))` plumbing.
 */
interface OverlayApi {
  /** Navigate to an idea's detail (intercepted as an overlay over /ideas). */
  openIdea: (id: string) => void;
  openQuickAdd: () => void;
  openCommandPalette: () => void;
}

const OverlayContext = createContext<OverlayApi | null>(null);

export function useOverlay(): OverlayApi {
  const ctx = useContext(OverlayContext);
  if (!ctx) throw new Error("useOverlay must be used within <AppProviders>");
  return ctx;
}

export function AppProviders({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  const api = useMemo<OverlayApi>(
    () => ({
      openIdea: (id: string) => router.push(`/ideas/${id}`),
      openQuickAdd: () => setQuickAddOpen(true),
      openCommandPalette: () => setCmdOpen(true),
    }),
    [router],
  );

  const hotkeys = useMemo<Hotkey[]>(
    () => [
      { key: "k", meta: true, handler: () => setCmdOpen(true) },
      { key: "n", meta: true, handler: () => setQuickAddOpen(true) },
    ],
    [],
  );
  useHotkeys(hotkeys);

  return (
    <OverlayContext.Provider value={api}>
      {children}

      {!quickAddOpen && !cmdOpen && (
        <button
          type="button"
          className="fab"
          onClick={() => setQuickAddOpen(true)}
          title="Quick add"
        >
          <Plus size={14} /> Quick add
          <span className="fab-kbd">⌘N</span>
        </button>
      )}

      <QuickAddModal open={quickAddOpen} onClose={() => setQuickAddOpen(false)} />
      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onNewIdea={() => setQuickAddOpen(true)}
      />
    </OverlayContext.Provider>
  );
}
