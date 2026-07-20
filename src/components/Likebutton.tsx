"use client";

import { useState } from "react";

/**
 * Bouton like en pièce d'or — clin d'œil direct au "OR 9 999 999" de la
 * blague du mendiant. C'est le SEUL endroit avec le CTA "La Méthode" où
 * l'or (--accent) apparaît : ça le garde rare et reconnaissable comme
 * "action qui compte", pas juste une couleur de plus.
 *
 * Optimiste : le compteur bouge immédiatement au clic, avant même la
 * réponse serveur. onLike est appelé une seule foisimport Image from "next/image";
import Link from "next/link";
import { LikeButton } from "./LikeButton";

type Tone = "primary" | "secondary" | "tertiary";

const TONE_STYLES: Record<Tone, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  tertiary: "bg-tertiary text-tertiary-foreground",
};

// Rotation légère et déterministe par carte (pas de random au render,
// ça casserait l'hydratation SSR/CSR de Next.js).
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
}: {
  slug: string;
  title: string;
  image: string;
  category: string;
  categoryTone?: Tone;
  likeCount: number;
}) {
  const rotation = rotationFor(slug);

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
      <Link href={`/blague/${slug}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden rounded-sm border-2 border-border">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
            className="object-cover"
          />
        </div>
      </Link>

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
} par session
 * (pas de multi-like), à brancher sur une action serveur / API route.
 */
export function LikeButton({
  initialCount,
  onLike,
}: {
  initialCount: number;
  onLike?: () => Promise<void> | void;
}) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);
  const [bump, setBump] = useState(false);

  const handleClick = async () => {
    if (liked) return;
    setLiked(true);
    setCount((c) => c + 1);
    setBump(true);
    setTimeout(() => setBump(false), 220);
    await onLike?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={liked}
      aria-pressed={liked}
      aria-label={liked ? "Déjà liké" : "Liker cette blague"}
      className={[
        "inline-flex items-center gap-2 rounded-full border-[3px] border-border px-4 py-1.5",
        "font-mono text-sm font-bold shadow-[2px_2px_0_0_var(--border)]",
        "transition-all duration-150",
        liked
          ? "bg-accent text-accent-foreground"
          : "bg-card text-foreground hover:-translate-y-0.5",
        "disabled:cursor-default",
      ].join(" ")}
    >
      <span
        className={[
          "text-base leading-none transition-transform duration-200",
          bump ? "scale-125 rotate-12" : "scale-100",
        ].join(" ")}
      >
        🪙
      </span>
      <span>{count.toLocaleString("fr-FR")}</span>
    </button>
  );
}