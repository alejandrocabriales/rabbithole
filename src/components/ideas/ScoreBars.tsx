interface ScoreBarsProps {
  value: number;
  max?: number;
  /** "pot" = potential (amber), "cpx" = complexity (dusty blue). */
  kind: "pot" | "cpx";
}

/** Six-segment bar meter for a 1–10 score. */
export function ScoreBars({ value, max = 10, kind }: ScoreBarsProps) {
  const filled = Math.round((value / max) * 6);
  return (
    <span className={`score-bar ${kind}`}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <span key={n} className={n <= filled ? "on" : ""} />
      ))}
    </span>
  );
}
