import { Suspense } from "react";
import { IdeasView } from "@/components/ideas/IdeasView";

// `IdeasView` reads filters from the URL via useSearchParams, so it lives
// inside a Suspense boundary (required for static rendering in the App Router).
export default function IdeasPage() {
  return (
    <Suspense fallback={null}>
      <IdeasView />
    </Suspense>
  );
}
