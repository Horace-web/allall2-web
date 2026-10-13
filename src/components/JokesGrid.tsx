"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ComicCard } from "./Comiccard";
import { LikeButton } from "./Likebutton";
import type { Blague } from "@/data/blagues";

export function JokesGrid({ blagues }: { blagues: Blague[] }) {
    const [selected, setSelected] = useState<Blague | null>(null);

    // Fermeture au clavier (Échap), pratique pour l'accessibilité.
    useEffect(() => {
        if (!selected) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    return (
        <>
            <section className="columns-1 gap-6 sm:columns-2 md:columns-3">
                {blagues.map((b) => (
                    <div key={b.slug} className="mb-6 break-inside-avoid">
                        <ComicCard {...b} onImageClick={() => setSelected(b)} />
                    </div>
                ))}
            </section>
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative w-full max-w-md rounded-md border-[3px] border-border bg-card p-3"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelected(null)}
                            aria-label="Fermer"
                            className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-border bg-accent font-mono text-sm font-bold shadow-[2px_2px_0_0_var(--border)]"
                        >
                            ✕
                        </button>

                        <div className="flex max-h-[85vh] w-full items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="max-h-[85vh] w-auto max-w-full rounded-sm border-2 border-border object-contain"
                            />
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-2">
                            <span className="font-mono text-[11px] font-bold uppercase tracking-wide">
                                {selected.category}
                            </span>
                            <LikeButton initialCount={selected.likeCount} />
                        </div>

                        <Link
                            href={`/blague/${selected.slug}`}
                            className="mt-3 block text-center font-mono text-sm text-foreground/70 underline-offset-4 hover:underline"
                        >
                            Voir la fiche complète →
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}