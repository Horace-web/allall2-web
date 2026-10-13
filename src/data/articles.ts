// src/data/articles.ts
export type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  // Slugs de blagues à afficher sur la page de l'article.
  // Choisis à la main pour l'instant — la sélection automatique viendra du back plus tard.
  jokeSlugs: string[];
};

export const articles: Article[] = [
  {
    slug: "top-5-humour-noir",
    title: "Top 5 humour noir",
    excerpt: "Les blagues les plus sombres du moment.",
    content: "Contenu de l'article à écrire ici.",
    jokeSlugs: ["le-mendiant"],
  },
];