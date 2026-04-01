export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Signalboard",
    description: "A dashboard for tracking product health across releases, incidents, and usage trends.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    href: "https://github.com/avery-stone/signalboard",
  },
  {
    title: "Briefcase CMS",
    description: "An editorial workspace for managing case studies, announcements, and launch notes.",
    tech: ["React", "Node.js", "Prisma", "Vercel"],
    href: "https://github.com/avery-stone/briefcase-cms",
  },
  {
    title: "Patch Panel",
    description: "A lightweight internal tool for coordinating rollout checklists across engineering teams.",
    tech: ["Next.js", "tRPC", "SQLite", "Playwright"],
    href: "https://github.com/avery-stone/patch-panel",
  },
  {
    title: "Northstar Docs",
    description: "A searchable documentation site designed for fast onboarding and clear API examples.",
    tech: ["MDX", "Next.js", "Algolia", "GitHub Actions"],
    href: "https://github.com/avery-stone/northstar-docs",
  },
];
