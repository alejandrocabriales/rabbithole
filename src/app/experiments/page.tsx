import { EmptyState } from "@/components/primitives/EmptyState";
import { Lab } from "@/components/icons";

export default function ExperimentsPage() {
  return (
    <EmptyState
      title="Experiments"
      icon={<Lab size={42} />}
      sub="Lightweight tests you run against an idea: landing pages, customer calls, prototypes, ad spend. Each experiment has a hypothesis, a method, and a success bar."
      bullets={[
        "Pre-defined templates: smoke test, painted door, concierge MVP, customer dev.",
        "A budget — in dollars and in days — so experiments don't quietly become products.",
        "Auto-links back to the idea that spawned them so the timeline stays clean.",
      ]}
    />
  );
}
