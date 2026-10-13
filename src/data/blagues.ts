// src/data/blagues.ts
export type Blague = {
  slug: string;
  title: string;
  image: string;
  category: string;
  categoryTone: "primary" | "secondary" | "tertiary";
  likeCount: number;
};

export const blagues: Blague[] = [
  {
    slug: "le-m",
    title: "Le mendiant et la clé",
    image: "/blagues/dora.jpg",
    category: "Gaming",
    categoryTone: "secondary",
    likeCount: 2200,
  },
  {
    slug: "le-me",
    title: "Le mendiant et la clé",
    image: "/blagues/dora.jpg",
    category: "chance",
    categoryTone: "secondary",
    likeCount: 2200,
  },
  {
    slug: "le-men",
    title: "Le mendiant et la clé",
    image: "/blagues/dora.jpg",
    category: "chance",
    categoryTone: "secondary",
    likeCount: 2200,
  },
  // ...
];