export type Article = {
  title: string;
  date: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "Designing dashboards that stay readable under pressure",
    date: "2026-02-10",
    href: "https://example.com/articles/readable-dashboards",
  },
  {
    title: "Shipping frontend systems with fewer hidden dependencies",
    date: "2025-11-04",
    href: "https://example.com/articles/fewer-hidden-dependencies",
  },
  {
    title: "Content modeling for teams that publish every week",
    date: "2025-07-18",
    href: "https://example.com/articles/content-modeling-weekly-teams",
  },
  {
    title: "When a simple landing page should still have a real information architecture",
    date: "2025-03-29",
    href: "https://example.com/articles/information-architecture-for-landing-pages",
  },
];
