import { getSparks } from "@/lib/data";
import { StatCard, type StatCardData } from "./StatCard";
import { Activity, Archive, Clock, Lab, Lightbulb, Sparkle } from "@/components/icons";

export function StatGrid() {
  const sparks = getSparks();

  const stats: StatCardData[] = [
    { label: "Total ideas", value: 74, delta: "+6 this wk", deltaTone: "pos", spark: sparks.total, icon: <Lightbulb size={11} />, color: "var(--text-2)" },
    { label: "Active", value: 23, delta: "+2", deltaTone: "pos", spark: sparks.active, icon: <Activity size={11} />, color: "var(--st-researching)" },
    { label: "Building now", value: 4, delta: "stable", deltaTone: "", spark: sparks.building, icon: <Lab size={11} />, color: "var(--st-building)" },
    { label: "High potential", value: 8, delta: "+1", deltaTone: "pos", spark: sparks.potential, icon: <Sparkle size={11} />, color: "var(--accent)" },
    { label: "Archived", value: 17, delta: "+2 this mo", deltaTone: "", spark: sparks.archived, icon: <Archive size={11} />, color: "var(--text-3)" },
    { label: "Recent updates", value: 21, delta: "this week", deltaTone: "", spark: sparks.updates, icon: <Clock size={11} />, color: "var(--st-validating)" },
  ];

  return (
    <div className="stat-grid">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
