export type TechGroup = {
  category: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Python"],
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
