"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import { getIdeas, getProblems } from "@/lib/data";
import { useOverlay } from "@/components/providers/AppProviders";
import {
  Archive,
  ChevronDown,
  Layers,
  Lightbulb,
  Book,
  Lab,
  More,
  Network,
  Pin,
  Plus,
  Rabbit,
  Search,
  Settings,
  Sparkle,
  StarFill,
  Sidebar as SidebarIcon,
  Target,
} from "@/components/icons";

interface NavRoute {
  kind: "route";
  label: string;
  icon: ReactNode;
  href: string;
  count?: number;
}
interface NavPinned {
  kind: "pinned";
  label: string;
  icon: ReactNode;
  ideaId: string;
}
type NavItemData = NavRoute | NavPinned;

interface NavGroup {
  group: string;
  items: NavItemData[];
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Sidebar() {
  const pathname = usePathname();
  const { openIdea, openCommandPalette } = useOverlay();

  const ideas = getIdeas();
  const ideaCount = ideas.filter((i) => i.status !== "archived").length;
  const problemCount = getProblems().length;
  const archivedCount = ideas.filter((i) => i.status === "archived").length;
  const favCount = ideas.filter((i) => i.favorite).length;

  const groups: NavGroup[] = [
    {
      group: "Workspace",
      items: [
        { kind: "route", label: "Dashboard", icon: <Layers />, href: "/" },
        { kind: "route", label: "Ideas", icon: <Lightbulb />, href: "/ideas", count: ideaCount },
        { kind: "route", label: "Problems", icon: <Target />, href: "/problems", count: problemCount },
        { kind: "route", label: "Experiments", icon: <Lab />, href: "/experiments", count: 4 },
        { kind: "route", label: "Opportunities", icon: <Sparkle />, href: "/opportunities", count: 3 },
        { kind: "route", label: "Research", icon: <Book />, href: "/research", count: 27 },
        { kind: "route", label: "Idea Graph", icon: <Network />, href: "/graph" },
      ],
    },
    {
      group: "Pinned",
      items: [
        { kind: "pinned", label: "Email → task router", icon: <Pin />, ideaId: "i02" },
        { kind: "pinned", label: "Local-first CRM", icon: <Pin />, ideaId: "i01" },
        { kind: "pinned", label: "Voice memo → spec", icon: <Pin />, ideaId: "i06" },
      ],
    },
    {
      group: "Library",
      items: [
        { kind: "route", label: "Favorites", icon: <StarFill />, href: "/favorites", count: favCount },
        { kind: "route", label: "Archived", icon: <Archive />, href: "/archived", count: archivedCount },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-head">
        <div className="brand">
          <span className="brand-mark">
            <Rabbit size={22} />
          </span>
          <span className="brand-name">
            Rabbit<b>Hole</b>
          </span>
        </div>
        <button className="sidebar-collapse" title="Toggle sidebar" aria-label="Toggle sidebar">
          <SidebarIcon size={15} />
        </button>
      </div>

      <button type="button" className="workspace">
        <span className="ws-avatar">AC</span>
        <span className="ws-name">Alex&apos;s workspace</span>
        <span className="ws-caret">
          <ChevronDown size={13} />
        </span>
      </button>

      <button type="button" className="sidebar-search" onClick={openCommandPalette}>
        <Search size={13} />
        <span>Quick find…</span>
        <span className="sidebar-search-shortcut">⌘K</span>
      </button>

      <nav className="sidebar-nav">
        {groups.map((g) => (
          <div className="nav-group" key={g.group}>
            <div className="nav-label">
              <span>{g.group}</span>
              <button className="nav-label-add" aria-label={`Add to ${g.group}`}>
                <Plus size={11} />
              </button>
            </div>
            {g.items.map((item) =>
              item.kind === "route" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={"nav-item" + (isActive(pathname, item.href) ? " active" : "")}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-item-label">{item.label}</span>
                  {item.count !== undefined && <span className="nav-count">{item.count}</span>}
                </Link>
              ) : (
                <button
                  key={item.ideaId}
                  type="button"
                  className="nav-item"
                  onClick={() => openIdea(item.ideaId)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-item-label">{item.label}</span>
                </button>
              ),
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-foot">
        <Link
          href="/settings"
          className={"nav-item" + (isActive(pathname, "/settings") ? " active" : "")}
          aria-current={isActive(pathname, "/settings") ? "page" : undefined}
        >
          <span className="nav-icon">
            <Settings size={14} />
          </span>
          <span className="nav-item-label">Settings</span>
        </Link>
        <button type="button" className="sidebar-user">
          <span className="user-avatar">AC</span>
          <span className="user-meta">
            <span className="user-name">Alex Chen</span>
            <span className="user-status">Pro · 142 ideas</span>
          </span>
          <span className="ws-caret">
            <More size={13} />
          </span>
        </button>
      </div>
    </aside>
  );
}
