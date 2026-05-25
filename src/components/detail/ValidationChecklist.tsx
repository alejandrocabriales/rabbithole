import type { ValidationItem } from "@/lib/types";
import { Check } from "@/components/icons";

export function ValidationChecklist({ items }: { items: ValidationItem[] }) {
  return (
    <div className="checklist">
      {items.map((c, i) => (
        <div key={i} className={"check" + (c.done ? " done" : "")}>
          <span className="check-box" aria-hidden={!c.done}>
            <Check size={10} />
          </span>
          <span className="check-label">{c.text}</span>
        </div>
      ))}
    </div>
  );
}
