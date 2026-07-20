# The Authentic Joke — site

Site vitrine pour **The Authentic Joke** (humour noir/absurde généré avec l'IA, dans l'esprit Cyanide and Happiness). Sert de hub cliquable (Instagram/TikTok/Facebook n'autorisent pas toujours un lien direct) et de vitrine avant l'achat du guide **"Comment je fabrique mes blagues avec l'IA"**, vendu sur Chariow.

Projet [Next.js](https://nextjs.org), bootstrappé avec `create-next-app`.

## Démarrer en local

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000). La page se met à jour automatiquement à l'édition.

## Structure du site

| Page | Route | Rôle |
|---|---|---|
| Accueil | `/` | Hero (une blague au hasard) + nav catégories + grille des dernières blagues. Lien "La Méthode" discret en footer, jamais en CTA agressif. |
| Catégorie | `/[categorie]` | Grille filtrée (`quotidien`, `gaming`, `horreur-douce`, ...). |
| Blague individuelle | `/blague/[slug]` | Comic en grand + compteur like (`+1 🪙`) + tags. Commentaires prévus en V2 (bulles de dialogue BD, pas un encadré forum générique). |
| La Méthode | `/la-methode` | Page de vente isolée. Un seul CTA vers Chariow, zéro distraction, zéro lien vers le reste du site sauf retour accueil. |

## Design system

Tokens définis dans `app/globals.css`, tous dérivés des comics eux-mêmes (voir commentaires dans le fichier) :

- **Couleur** — fond crème `#FAF3E7` (le "papier" des cases), encre `#161311`, pêche `#F2C08C` (accent principal, peau des persos), sauge `#5C7A52` et denim `#3D5A80` (accents secondaires, tirés des vêtements des persos), or `#E8B84B` (réservé au CTA et au like — jamais utilisé ailleurs pour rester rare).
- **Typo** — display `Archivo Black`, corps `Karla`, mono `JetBrains Mono` (compteurs/tags, clin d'œil à l'interface RPG de la blague du mendiant). Déclarées via `next/font/google` dans `app/layout.tsx`.
- **Signature visuelle** — boutons de nav/filtre au format "choix de dialogue" `(A) / (B)`, repris directement de la blague du mendiant ("A) Donner  B) Ignorer"). Cartes de blagues avec bordure noire épaisse et légère rotation aléatoire, effet "punaisé sur un liège".
- **Pas de dark mode automatique** — le fond crème fait partie de l'identité, pas un thème clair par défaut. Un mode sombre viendrait d'une palette pensée exprès, pas d'une inversion `prefers-color-scheme`.

## Feuille de route

- [x] Design system (couleurs, typo)
- [x] Layout de base + polices
- [ ] Page d'accueil (hero + grille)
- [ ] Système de like (sans compte requis)
- [ ] Pages catégories
- [ ] Page "La Méthode" (vente)
- [ ] V2 — commentaires (bulles de dialogue BD)

## Stack

- Next.js (App Router)
- Tailwind CSS v4 (config CSS-first, voir `app/globals.css`)
- Déploiement prévu : Vercel

## En savoir plus sur Next.js

- [Documentation Next.js](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)