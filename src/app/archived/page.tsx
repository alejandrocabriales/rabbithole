import { getIdeas } from "@/lib/data";
import { ArchivedTable } from "@/components/ideas/ArchivedTable";

export default function ArchivedPage() {
  const archived = getIdeas().filter((i) => i.status === "archived");
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Archived</h1>
          <p className="page-sub">
            Killed, paused, or shipped. Searchable forever — restorable in one click.
          </p>
        </div>
      </div>
      <ArchivedTable ideas={archived} />
    </div>
  );
}
