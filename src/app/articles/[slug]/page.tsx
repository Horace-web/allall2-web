// src/app/articles/[slug]/page.tsx
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { blagues } from "@/data/blagues";
import { JokesGrid } from "@/components/JokesGrid";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const jokes = article.jokeSlugs
    .map((slug) => blagues.find((b) => b.slug === slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="mb-4 font-display text-3xl uppercase tracking-tight sm:text-4xl">
        {article.title}
      </h1>
      <p className="mb-8 whitespace-pre-line text-base text-foreground/80">
        {article.content}
      </p>
      <JokesGrid blagues={jokes} />
    </main>
  );
}