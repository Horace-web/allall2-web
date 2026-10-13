import { ReactNode } from "react";
import { ArticlesSidebar } from "./ArticlesSidebar";

// SiteLayout.tsx — largeur max du site réduite pour que le blanc à droite soit moins visible
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:gap-6">
      <div className="min-w-0 flex-1">{children}</div>
      <ArticlesSidebar />
    </main>
  );
}