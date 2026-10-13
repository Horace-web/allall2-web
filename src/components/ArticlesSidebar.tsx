// ArticlesSidebar.tsx — colonne et carte plus étroites, moins de padding
import Link from "next/link";
import { articles } from "@/data/articles";

export function ArticlesSidebar() {
  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-10 lg:w-40">
      <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
        Articles
      </h2>
      <ul className="flex flex-col gap-2">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/articles/${a.slug}`}
              className="block rounded-md border-2 border-border bg-card p-2 shadow-[2px_2px_0_0_var(--border)] transition-transform hover:-translate-y-0.5"
            >
              <span className="font-display text-[11px] uppercase leading-tight tracking-tight">
                {a.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}