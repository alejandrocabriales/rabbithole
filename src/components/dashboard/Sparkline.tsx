interface SparklineProps {
  data: number[];
  color?: string;
  w?: number;
  h?: number;
}

/** Tiny inline trend line with a dot on the latest point. Pure SVG. */
export function Sparkline({ data, color = "currentColor", w = 70, h = 22 }: SparklineProps) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / span) * (h - 2) - 1;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const last = data[data.length - 1];
  const lastY = h - ((last - min) / span) * (h - 2) - 1;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }} aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={w} cy={lastY} r="1.8" fill={color} />
    </svg>
  );
}
