"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "@/components/icons";

interface DetailSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

/** Generic collapsible accordion section. */
export function DetailSection({ title, defaultOpen = true, children }: DetailSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();

  return (
    <section className={"detail-section" + (open ? "" : " collapsed")}>
      <button
        type="button"
        className="detail-section-head"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="caret">
          <ChevronDown size={13} />
        </span>
        <h3>{title}</h3>
      </button>
      <div className="detail-section-body" id={bodyId}>
        {children}
      </div>
    </section>
  );
}
