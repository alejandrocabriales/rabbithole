// RabbitHole — minimal icon set (Lucide-style, hand-tuned).
// Ported verbatim from the prototype's icons.jsx. Each icon is a typed,
// named export; import as `import { Search, Plus } from "@/components/icons"`.
//
// Kept in one module: every icon shares the <Svg> wrapper and IconProps type,
// and they are always consumed through this barrel.
import type { ReactNode, SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "stroke"> {
  /** Square pixel size for width & height. Default 16. */
  size?: number;
  /** Stroke width. Default 1.6. */
  sw?: number;
}

function Svg({ size = 16, sw = 1.6, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

// Brand mark — concentric circles, like looking down a rabbit hole
export function Rabbit(p: IconProps) {
  return (
    <Svg {...p} sw={1.4}>
      <ellipse cx={12} cy={12} rx={9} ry={9} />
      <ellipse cx={12} cy={12} rx={5.5} ry={5.5} opacity={0.55} />
      <ellipse cx={12} cy={12} rx={2} ry={2} fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function Search(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx={11} cy={11} r={7} />
      <line x1={20} y1={20} x2={16.5} y2={16.5} />
    </Svg>
  );
}

export function Plus(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={12} y1={5} x2={12} y2={19} />
      <line x1={5} y1={12} x2={19} y2={12} />
    </Svg>
  );
}

export function Bell(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </Svg>
  );
}

export function Filter(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 5h18l-7 9v6l-4-2v-4z" />
    </Svg>
  );
}

export function Sort(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={7} y1={6} x2={7} y2={18} />
      <path d="M4 14l3 4 3-4" />
      <line x1={15} y1={6} x2={15} y2={18} />
      <path d="M12 10l3-4 3 4" />
    </Svg>
  );
}

export function Grid(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x={4} y={4} width={7} height={7} rx={1} />
      <rect x={13} y={4} width={7} height={7} rx={1} />
      <rect x={4} y={13} width={7} height={7} rx={1} />
      <rect x={13} y={13} width={7} height={7} rx={1} />
    </Svg>
  );
}

export function List(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={3} y1={6} x2={21} y2={6} />
      <line x1={3} y1={12} x2={21} y2={12} />
      <line x1={3} y1={18} x2={21} y2={18} />
    </Svg>
  );
}

export function Bookmark(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 4h12v17l-6-4-6 4z" />
    </Svg>
  );
}

export function BookmarkFill(p: IconProps) {
  return (
    <Svg {...p} fill="currentColor">
      <path d="M6 4h12v17l-6-4-6 4z" />
    </Svg>
  );
}

export function Chevron(p: IconProps) {
  return (
    <Svg {...p}>
      <polyline points="9 6 15 12 9 18" />
    </Svg>
  );
}

export function ChevronDown(p: IconProps) {
  return (
    <Svg {...p}>
      <polyline points="6 9 12 15 18 9" />
    </Svg>
  );
}

export function Sparkle(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <line x1={19} y1={17} x2={19} y2={21} />
      <line x1={17} y1={19} x2={21} y2={19} />
    </Svg>
  );
}

export function Activity(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </Svg>
  );
}

export function TrendUp(p: IconProps) {
  return (
    <Svg {...p}>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </Svg>
  );
}

export function TrendDown(p: IconProps) {
  return (
    <Svg {...p}>
      <polyline points="3 7 9 13 13 9 21 17" />
      <polyline points="14 17 21 17 21 10" />
    </Svg>
  );
}

export function Inbox(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 13l4-9h10l4 9" />
      <path d="M3 13v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6" />
      <path d="M8 13h2l1 2h2l1-2h2" />
    </Svg>
  );
}

export function Folder(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </Svg>
  );
}

export function Lab(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
      <line x1={9} y1={3} x2={15} y2={3} />
      <line x1={8} y1={14} x2={16} y2={14} />
    </Svg>
  );
}

export function Target(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx={12} cy={12} r={9} />
      <circle cx={12} cy={12} r={5} />
      <circle cx={12} cy={12} r={1.2} />
    </Svg>
  );
}

export function Book(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z" />
      <path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />
    </Svg>
  );
}

export function Archive(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x={3} y={4} width={18} height={4} rx={1} />
      <path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" />
      <line x1={10} y1={13} x2={14} y2={13} />
    </Svg>
  );
}

export function Star(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3l2.6 6 6.4.6-4.9 4.5 1.4 6.4L12 17.3 6.5 20.5l1.4-6.4L3 9.6l6.4-.6z" />
    </Svg>
  );
}

export function StarFill(p: IconProps) {
  return (
    <Svg {...p} fill="currentColor">
      <path d="M12 3l2.6 6 6.4.6-4.9 4.5 1.4 6.4L12 17.3 6.5 20.5l1.4-6.4L3 9.6l6.4-.6z" />
    </Svg>
  );
}

export function Settings(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx={12} cy={12} r={3} />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </Svg>
  );
}

export function X(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={5} y1={5} x2={19} y2={19} />
      <line x1={19} y1={5} x2={5} y2={19} />
    </Svg>
  );
}

export function ArrowRight(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={4} y1={12} x2={20} y2={12} />
      <polyline points="13 5 20 12 13 19" />
    </Svg>
  );
}

export function ArrowLeft(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={20} y1={12} x2={4} y2={12} />
      <polyline points="11 5 4 12 11 19" />
    </Svg>
  );
}

export function Check(p: IconProps) {
  return (
    <Svg {...p}>
      <polyline points="5 12 10 17 19 7" />
    </Svg>
  );
}

export function Hash(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={4} y1={9} x2={20} y2={9} />
      <line x1={4} y1={15} x2={20} y2={15} />
      <line x1={10} y1={3} x2={8} y2={21} />
      <line x1={16} y1={3} x2={14} y2={21} />
    </Svg>
  );
}

export function Sidebar(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x={3} y={4} width={18} height={16} rx={2} />
      <line x1={9} y1={4} x2={9} y2={20} />
    </Svg>
  );
}

export function More(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx={5} cy={12} r={1} />
      <circle cx={12} cy={12} r={1} />
      <circle cx={19} cy={12} r={1} />
    </Svg>
  );
}

export function Pin(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3l3 3-1 3 4 4-3 1-3 3-1-3-4-4 1-3z" />
      <line x1={8} y1={16} x2={4} y2={20} />
    </Svg>
  );
}

export function Link(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M10 14a3 3 0 0 0 4 0l4-4a3 3 0 1 0-4-4l-1.5 1.5" />
      <path d="M14 10a3 3 0 0 0-4 0l-4 4a3 3 0 1 0 4 4l1.5-1.5" />
    </Svg>
  );
}

export function Lightbulb(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c1 .9 1.5 2 1.5 3v.5h5v-.5c0-1 .5-2.1 1.5-3A6 6 0 0 0 12 3z" />
    </Svg>
  );
}

export function Clock(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx={12} cy={12} r={9} />
      <polyline points="12 7 12 12 16 14" />
    </Svg>
  );
}

export function Edit(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 20h4l11-11-4-4L4 16z" />
      <line x1={14} y1={6} x2={18} y2={10} />
    </Svg>
  );
}

export function Share(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx={6} cy={12} r={2.5} />
      <circle cx={18} cy={6} r={2.5} />
      <circle cx={18} cy={18} r={2.5} />
      <line x1={8} y1={11} x2={16} y2={7} />
      <line x1={8} y1={13} x2={16} y2={17} />
    </Svg>
  );
}

export function Network(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx={12} cy={5} r={2} />
      <circle cx={5} cy={19} r={2} />
      <circle cx={19} cy={19} r={2} />
      <circle cx={12} cy={12} r={2} />
      <line x1={12} y1={7} x2={12} y2={10} />
      <line x1={11} y1={13} x2={7} y2={18} />
      <line x1={13} y1={13} x2={17} y2={18} />
    </Svg>
  );
}

export function Eye(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx={12} cy={12} r={3} />
    </Svg>
  );
}

export function Layers(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 18l9 5 9-5" />
    </Svg>
  );
}

export function Command(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 6a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0 2 2 0 0 1 2-2h12a2 2 0 0 1 0 4 2 2 0 0 1-2-2V6a2 2 0 1 1 4 0 2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
    </Svg>
  );
}

export function Slash(p: IconProps) {
  return (
    <Svg {...p}>
      <line x1={6} y1={19} x2={18} y2={5} />
    </Svg>
  );
}
