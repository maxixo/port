export type Article = {
  title: string;
  date: string;
  href?: string;
  readTime?: string;
};

// Published articles link out; drafts stay on-site without a fake URL.
export const articles: Article[] = [
  {
    title: "Designing dashboards that stay readable under pressure",
    date: "2026-02-10",
    readTime: "6 min",
  },
  {
    title: "Shipping frontend systems with fewer hidden dependencies",
    date: "2025-11-04",
    readTime: "8 min",
  },
  {
    title: "Content modeling for teams that publish every week",
    date: "2025-07-18",
    readTime: "5 min",
  },
];
