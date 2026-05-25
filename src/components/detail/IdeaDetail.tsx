"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { getIdea, getIdeaDetailContent } from "@/lib/data";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useHotkeys } from "@/hooks/useHotkeys";
import { DetailMain } from "./DetailMain";
import { DetailSide } from "./DetailSide";
import { Lightbulb, Link as LinkIcon, More, Share, X } from "@/components/icons";

interface IdeaDetailProps {
  ideaId: string;
  /** "overlay" closes via history (intercepted route); "page" returns to /ideas. */
  variant: "overlay" | "page";
}

export function IdeaDetail({ ideaId, variant }: IdeaDetailProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const detail = getIdeaDetailContent();
  const idea = getIdea(ideaId) ?? getIdea(detail.id) ?? getIdeas0();
  const isShowcase = idea.id === detail.id;

  const close = () => {
    if (variant === "overlay") router.back();
    else router.push("/ideas");
  };

  useFocusTrap(ref, variant === "overlay");
  useHotkeys([{ key: "Escape", handler: close, allowInInput: true }]);

  const crumbTitle = idea.title.split(" ").slice(0, 3).join(" ");

  if (variant === "page") {
    return (
      <div className="detail-page" ref={ref}>
        <div className="detail-bar">
          <button type="button" className="icon-btn" onClick={close} title="Close" aria-label="Close">
            <X size={15} />
          </button>
          <div className="detail-bar-crumb">
            <Lightbulb size={12} /> Ideas <span className="detail-bar-crumb-sep">/</span>{" "}
            <b>{crumbTitle}…</b>
          </div>
          <div className="detail-bar-spacer" />
          <button type="button" className="btn-ghost">
            <LinkIcon size={12} /> Link
          </button>
          <button type="button" className="btn-ghost">
            <Share size={12} /> Share
          </button>
          <button type="button" className="icon-btn" aria-label="More actions">
            <More size={15} />
          </button>
        </div>
        <div className="detail-body">
          <DetailMain idea={idea} isShowcase={isShowcase} detail={detail} />
          <DetailSide idea={idea} isShowcase={isShowcase} detail={detail} />
        </div>
      </div>
    );
  }

  return (
    <div className="detail-overlay" onClick={close}>
      <div
        className="detail"
        role="dialog"
        aria-modal="true"
        aria-label={idea.title}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="detail-bar">
          <button type="button" className="icon-btn" onClick={close} title="Close" aria-label="Close">
            <X size={15} />
          </button>
          <div className="detail-bar-crumb">
            <Lightbulb size={12} /> Ideas <span className="detail-bar-crumb-sep">/</span>{" "}
            <b>{crumbTitle}…</b>
          </div>
          <div className="detail-bar-spacer" />
          <button type="button" className="btn-ghost">
            <LinkIcon size={12} /> Link
          </button>
          <button type="button" className="btn-ghost">
            <Share size={12} /> Share
          </button>
          <button type="button" className="icon-btn" aria-label="More actions">
            <More size={15} />
          </button>
        </div>

        <div className="detail-body">
          <DetailMain idea={idea} isShowcase={isShowcase} detail={detail} />
          <DetailSide idea={idea} isShowcase={isShowcase} detail={detail} />
        </div>
      </div>
    </div>
  );
}

// Fallback to the first idea if an id resolves to nothing — mirrors the
// prototype's defensive lookup.
function getIdeas0() {
  return getIdea("i01")!;
}
