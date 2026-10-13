// src/app/page.tsx
import { DialogueButton } from "@/components/Dialoguebutton";
import { JokesGrid } from "@/components/JokesGrid";
import { SiteLayout } from "@/components/SiteLayout";
import { blagues } from "@/data/blagues";
import Link from "next/link";

const LETTERS = ["A", "B", "C", "D", "E", "F"] as const;
const TONES = ["primary", "secondary", "tertiary"] as const;

// TODO: remplacer par les vraies URLs des comptes.
const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/..." },
  { label: "TikTok", href: "https://tiktok.com/@..." },
  { label: "Facebook", href: "https://facebook.com/..." },
];

export default function Home() {
  const categories = Array.from(new Set(blagues.map((b) => b.category)));
  const latest = [...blagues].slice(-9).reverse();

  return (
    <SiteLayout>
      <section className="mb-10 max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-foreground/60">
          Humour noir &amp; absurde, généré avec l&apos;IA
        </p>
        <h1 className="mb-4 font-display text-4xl uppercase tracking-tight sm:text-5xl">
          The Authentic Joke
        </h1>
        <p className="text-base text-foreground/80 sm:text-lg">
          Des blagues en une case, dans l&apos;esprit Cyanide &amp; Happiness —
          un peu trop honnêtes pour être confortables.
        </p>
      </section>

      <section className="mb-10 flex flex-wrap gap-3">
        {categories.map((cat, i) => (
          <DialogueButton
            key={cat}
            letter={LETTERS[i % LETTERS.length]}
            tone={TONES[i % TONES.length]}
            href={`/${cat}`}
          >
            {cat}
          </DialogueButton>
        ))}
      </section>

      <JokesGrid blagues={latest} />

      <footer className="mt-16 flex flex-col items-center gap-3 border-t-2 border-border pt-6 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {SOCIALS.map(function renderSocialLink(social) {
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/50 underline-offset-4 hover:underline"
              >
                {social.label}
              </a>
            );
          })}
        </div>
        <Link
          href="/la-methode"
          className="font-mono text-sm text-foreground/60 underline-offset-4 hover:underline"
        >
          Comment je fabrique mes blagues avec l&apos;IA →
        </Link>
      </footer>
    </SiteLayout>
  );
}