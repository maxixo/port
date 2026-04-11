export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Dataworld",
    description: "A dashboard for tracking product health across releases, incidents, and usage trends.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    href: "https://github.com/avery-stone/signalboard",
  },
  {
    title: "Collabit",
    description: "An editorial workspace for managing case studies, announcements, and launch notes.",
    tech: ["React", "Node.js", "Prisma", "Vercel"],
    href: "https://github.com/avery-stone/briefcase-cms",
  },
  {
    title: "Mern-estate",
    description: "A lightweight internal tool for coordinating rollout checklists across engineering teams.",
    tech: ["Next.js", "tRPC", "SQLite", "Playwright"],
    href: "https://github.com/avery-stone/patch-panel",
  },
  {
    title: "Blog-cms",
    description: "A searchable documentation site designed for fast onboarding and clear API examples.",
    tech: ["MDX", "Next.js", "Algolia", "GitHub Actions"],
    href: "https://github.com/avery-stone/northstar-docs",
  },
  {
    title: "Taskflow",
    description: "A planning workspace for organizing sprint priorities, blockers, and delivery timelines.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "https://github.com/avery-stone/taskflow",
  },
  {
    title: "Marketwatch",
    description: "A reporting dashboard for monitoring campaign performance, conversion funnels, and customer segments.",
    tech: ["React", "Chart.js", "Express", "MongoDB"],
    href: "https://github.com/avery-stone/marketwatch",
  },
];
