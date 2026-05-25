import type { ReactNode } from "react";
import { Sparkline } from "./Sparkline";
import { TrendUp } from "@/components/icons";

export interface StatCardData {
  label: string;
  value: number;
  delta: string;
  deltaTone: "pos" | "neg" | "";
  spark: number[];
  color: string;
  icon: ReactNode;
}

export function StatCard({ label, value, delta, deltaTone, spark, color, icon }: StatCardData) {
  return (
    <button type="button" className="stat">
      <div className="stat-label">
        <span className="stat-label-icon">{icon}</span>
        {label}
      </div>
      <div className="stat-value">{value}</div>
      <div className={"stat-delta" + (deltaTone ? " " + deltaTone : "")}>
        {deltaTone === "pos" && <TrendUp size={10} />}
        {delta}
      </div>
      <div className="stat-spark">
        <Sparkline data={spark} color={color} />
      </div>
    </button>
  );
}
