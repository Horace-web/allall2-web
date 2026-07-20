import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "primary" | "secondary" | "tertiary";

const TONE_STYLES: Record<Tone, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  tertiary: "bg-tertiary text-tertiary-foreground",
};

/**
 * Bouton "choix de dialogue" — repris directement de la blague du mendiant
 * ("A) Donner  B) Ignorer"). Utilisé pour la nav par catégorie et les filtres.
 *
 * Le cycle de tons (primary → secondary → tertiary) donne une couleur
 * différente à chaque option sans jamais toucher à l'or, réservé au CTA
 * et au like ailleurs sur le site.
 */
export function DialogueButton({
  letter,
  children,
  tone = "primary",
  href,
  active = false,
  onClick,
}: {
  letter: string;
  children: ReactNode;
  tone?: Tone;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const classes = [
    "group inline-flex items-center gap-2.5 rounded-full border-[3px] border-border",
    "pl-1.5 pr-4 py-1.5 font-sans text-sm font-bold",
    "transition-transform duration-150 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0",
    active ? "shadow-[3px_3px_0_0_var(--border)]" : "shadow-[2px_2px_0_0_var(--border)]",
    "bg-card text-foreground",
  ].join(" ");

  const badge = (
    <span
      className={[
        "flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs font-bold",
        TONE_STYLES[tone],
      ].join(" ")}
    >
      {letter}
    </span>
  );

  const content = (
    <>
      {badge}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}