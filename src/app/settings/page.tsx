import { EmptyState } from "@/components/primitives/EmptyState";
import { Settings } from "@/components/icons";

export default function SettingsPage() {
  return (
    <EmptyState
      title="Settings"
      icon={<Settings size={40} />}
      sub="Workspace, theme, integrations, AI behaviour, and data export. Most defaults are already where they should be."
      bullets={[
        "Theme: dark (warm). The chosen defaults ship baked in.",
        "AI: opportunity detection runs on every idea update, locally where possible.",
        "Sync: end-to-end encrypted across devices. Self-hosting available.",
      ]}
    />
  );
}
