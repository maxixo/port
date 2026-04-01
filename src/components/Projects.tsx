import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-8 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
          Work
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          Selected projects
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex min-h-[220px] flex-col border border-neutral-800 p-6 transition-colors duration-200 hover:border-neutral-600"
          >
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="border border-neutral-800 px-2 py-1 font-mono text-xs text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-auto pt-8 text-sm text-neutral-300 underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
            >
              Open {"->"}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
