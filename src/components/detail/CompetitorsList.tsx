import type { Competitor } from "@/lib/types";

export function CompetitorsList({ competitors }: { competitors: Competitor[] }) {
  return (
    <ul>
      {competitors.map((c) => (
        <li key={c.name}>
          <b>{c.name}</b> — <span className="muted">{c.note}</span>
        </li>
      ))}
    </ul>
  );
}
