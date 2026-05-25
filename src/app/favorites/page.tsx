import { getIdeas } from "@/lib/data";
import { IdeaCard } from "@/components/ideas/IdeaCard";

export default function FavoritesPage() {
  const favorites = getIdeas().filter((i) => i.favorite);
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Favorites</h1>
          <p className="page-sub">
            {favorites.length} ideas you&apos;ve bookmarked for quick return.
          </p>
        </div>
      </div>
      <div className="idea-grid">
        {favorites.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
}
