"use client";

import Image from "next/image";
import Link from "next/link";
import { LikeButton } from "./Likebutton";

type Tone = "primary" | "secondary" | "tertiary";

const TONE_STYLES: Record<Tone, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  tertiary: "bg-tertiary text-tertiary-foreground",
};

const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
function rotationFor(seed: string) {
  const i = seed.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return ROTATIONS[i % ROTATIONS.length];
}

export function ComicCard({
  slug,
  title,
  image,
  category,
  categoryTone = "primary",
  likeCount,
  onImageClick,
}: {
  slug: string;
  title: string;
  image: string;
  category: string;
  categoryTone?: Tone;
  likeCount: number;
  /** Si fourni, un clic sur l'image ouvre la lightbox au lieu de naviguer. */
  onImageClick?: (slug: string) => void;
}) {
  const rotation = rotationFor(slug);

const imageBlock = (
  <div className="relative w-full overflow-hidden rounded-sm border-2 border-border">
    <Image
      src={image}
      alt={title}
      width={800}
      height={800}
      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
      className="h-auto w-full object-contain"
    />
  </div>
);

  return (
    <div
      className={[
        "group relative rounded-md border-[3px] border-border bg-card p-2.5",
        "shadow-[4px_4px_0_0_var(--border)]",
        "transition-all duration-200 ease-out",
        rotation,
        "hover:rotate-0 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--border)]",
      ].join(" ")}
    >
      {onImageClick ? (
        <button
          type="button"
          onClick={() => onImageClick(slug)}
          className="block w-full"
          aria-label={`Agrandir : ${title}`}
        >
          {imageBlock}
        </button>
      ) : (
        <Link href={`/blague/${slug}`} className="block">
          {imageBlock}
        </Link>
      )}

      <div className="mt-2.5 flex items-center justify-between gap-2">
        <span
          className={[
            "rounded-full px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wide",
            TONE_STYLES[categoryTone],
          ].join(" ")}
        >
          {category}
        </span>
        <LikeButton initialCount={likeCount} />
      </div>
    </div>
  );
}