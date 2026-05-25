import { EmptyState } from "@/components/primitives/EmptyState";
import { Book } from "@/components/icons";

export default function ResearchPage() {
  return (
    <EmptyState
      title="Research"
      icon={<Book size={42} />}
      sub="A flat library of notes, links, papers, and competitor teardowns. Attach any item to one or many ideas — references resolve both ways."
      bullets={[
        "Web clipper turns any URL into a citable note in one keystroke.",
        "Highlights surface across all related ideas, not just where they were captured.",
        "Search across full-text, source, author, and your own tags.",
      ]}
    />
  );
}
