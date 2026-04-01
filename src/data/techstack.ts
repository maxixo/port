export type TechGroup = {
  category: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["GitHub Actions", "Docker", "Figma", "Vercel"],
  },
];
