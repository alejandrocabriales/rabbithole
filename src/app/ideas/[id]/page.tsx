import { notFound } from "next/navigation";
import { getIdea, getIdeas } from "@/lib/data";
import { IdeaDetail } from "@/components/detail/IdeaDetail";

// Full-page detail — rendered on a direct load / refresh of /ideas/[id]
// (no interception). Closing returns to /ideas.
export function generateStaticParams() {
  return getIdeas().map((i) => ({ id: i.id }));
}

export default async function IdeaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!getIdea(id)) notFound();
  return <IdeaDetail ideaId={id} variant="page" />;
}
