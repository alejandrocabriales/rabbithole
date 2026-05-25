import type { Status } from "@/lib/types";

interface GraphNode {
  x: number;
  y: number;
  r: number;
  label: string;
  st: Status;
  center?: boolean;
}

const NODES: GraphNode[] = [
  { x: 50, y: 50, r: 14, label: "Email→Tasks", st: "validating", center: true },
  { x: 18, y: 32, r: 10, label: "CRM", st: "building" },
  { x: 78, y: 28, r: 11, label: "Voice→Spec", st: "building" },
  { x: 80, y: 70, r: 9, label: "Interviews", st: "validating" },
  { x: 22, y: 76, r: 8, label: "Calendar", st: "researching" },
  { x: 50, y: 88, r: 7, label: "Receipts", st: "exploring" },
  { x: 12, y: 56, r: 6, label: "Contracts", st: "researching" },
  { x: 90, y: 50, r: 7, label: "RSS", st: "exploring" },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [2, 3], [1, 4], [2, 6], [3, 7], [1, 6],
];

const LEGEND: Status[] = ["exploring", "researching", "validating", "building"];

/** Stylized, decorative SVG node graph of idea relationships. */
export function IdeaGraph() {
  return (
    <div className="card graph-card">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="graph-svg" aria-hidden="true">
        <defs>
          <pattern id="dotgrid" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.18" fill="rgba(255,255,255,0.05)" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dotgrid)" />
        {EDGES.map(([from, to], i) => {
          const a = NODES[from];
          const b = NODES[to];
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.18"
            />
          );
        })}
        {NODES.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r / 3}
              fill={`var(--st-${n.st})`}
              opacity={n.center ? 0.95 : 0.7}
            />
            {n.center && (
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r / 3 + 1.4}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="0.25"
              />
            )}
          </g>
        ))}
      </svg>

      {NODES.map((n, i) => (
        <div
          key={i}
          className={"graph-label " + (n.center ? "center" : "node")}
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            transform: `translate(${n.r / 3 + 10}px, -50%)`,
          }}
        >
          {n.label}
        </div>
      ))}

      <div className="graph-legend">
        {LEGEND.map((s) => (
          <span key={s}>
            <i style={{ background: `var(--st-${s})` }} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
