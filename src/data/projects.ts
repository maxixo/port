export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  preview: {
    eyebrow: string;
    headline: string;
    caption: string;
    accent: string;
    imageSrc?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Dataworld",
    description: "A data visualization and notes taking webapp built with AES-256 Encryption",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    href: "https://github.com/maxixo/dataworld-",
    preview: {
      eyebrow: "Analytics",
      headline: "Release health at a glance",
      caption: "Incident and adoption metrics across every release train.",
      accent: "from-cyan-400/30 to-sky-500/15",
      imageSrc: "https://image.thum.io/get/width/1200/crop/800/https://dataworld-client.vercel.app",
    },
  },
  {
    title: "Modern Solar Technology",
    description: "A solar technology company website showcasing residential and commercial energy solutions, products, and contact pathways.",
    tech: ["Next.js", "Responsive UI", "Product Showcase", "Lead Capture"],
    href: "https://felicitymodernsolar.com.ng/",
    preview: {
      eyebrow: "Live Website",
      headline: "Modern solar solutions",
      caption: "Residential and commercial power systems with a clear conversion path.",
      accent: "from-lime-300/35 to-yellow-400/20",
      imageSrc: "https://image.thum.io/get/width/1200/crop/800/https://felicitymodernsolar.com.ng/",
    },
  },
  {
    title: "Collabit",
    description: "An editorial workspace for managing case studies, announcements, and launch notes.",
    tech: ["React", "Node.js", "Prisma", "Vercel"],
    href: "https://github.com/maxixo/briefcase-cms",
    preview: {
      eyebrow: "Publishing",
      headline: "Editorial workflow",
      caption: "Drafts, approvals, and publishing states in one place.",
      accent: "from-amber-300/30 to-orange-500/15",
    },
  },
  {
    title: "Mern-estate",
    description: "A lightweight internal tool for coordinating rollout checklists across engineering teams.",
    tech: ["Next.js", "tRPC", "SQLite", "Playwright"],
    href: "https://github.com/maxixo/patch-panel",
    preview: {
      eyebrow: "Operations",
      headline: "Launch checklist board",
      caption: "Clear ownership for blockers, QA, and deployment steps.",
      accent: "from-emerald-300/30 to-teal-500/15",
    },
  },
  {
    title: "Blog-cms",
    description: "A searchable documentation site designed for fast onboarding and clear API examples.",
    tech: ["MDX", "Next.js", "Algolia", "GitHub Actions"],
    href: "https://github.com/maxixo/northstar-docs",
    preview: {
      eyebrow: "Docs",
      headline: "Search-first knowledge base",
      caption: "Structured docs with examples, snippets, and release notes.",
      accent: "from-violet-300/30 to-fuchsia-500/15",
    },
  },
  {
    title: "Taskflow",
    description: "A planning workspace for organizing sprint priorities, blockers, and delivery timelines.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "https://github.com/maxixo/taskflow",
    preview: {
      eyebrow: "Planning",
      headline: "Sprint command center",
      caption: "Priorities, blockers, and timelines mapped across teams.",
      accent: "from-rose-300/30 to-red-500/15",
    },
  },
];
