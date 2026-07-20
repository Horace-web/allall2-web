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
    slug: "le-mendiant",
    title: "Le mendiant et la clé",
    image: "/blagues/mendiant.jpg",
    category: "Gaming",
    categoryTone: "secondary",
    likeCount: 2200,
  },
  // ...
];