// RabbitHole — small formatting helpers.
import type { ReactNode } from "react";

/** Time-of-day greeting, matching the prototype's thresholds. */
export function greeting(date: Date = new Date()): string {
  const hour = date.getHours();
  if (hour < 5) return "Late night";
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

/** "Sunday, May 25" — long weekday + month + day. */
export function longDate(date: Date = new Date()): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

/**
 * Render a microcopy string that may contain inline `<b>` and `<a>` tags into
 * safe React nodes — the production replacement for the prototype's
 * `dangerouslySetInnerHTML`. Tags are not nested in the data set.
 */
export function renderRichText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /<(b|a)>(.*?)<\/\1>/g;
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, tag, inner] = match;
    if (tag === "b") {
      nodes.push(<b key={key++}>{inner}</b>);
    } else {
      // Styled emphasis link in the design; not a navigable href.
      nodes.push(<a key={key++}>{inner}</a>);
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}
