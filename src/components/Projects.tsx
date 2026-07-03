"use client";

import Image from "next/image";
import { useState } from "react";

import { projects } from "@/data/projects";

export default function Projects() {
  const [imageFailures, setImageFailures] = useState<Record<string, boolean>>({});

  const handleImageError = (title: string) => {
    setImageFailures((current) => ({ ...current, [title]: true }));
  };

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
            className="group flex min-h-[360px] flex-col overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-neutral-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600"
          >
            <div className="relative border-b border-neutral-800 p-4">
              <div className="relative overflow-hidden rounded-[1.25rem] border border-neutral-700 bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between border-b border-neutral-700 bg-neutral-900/95 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="max-w-[75%] truncate rounded-full border border-neutral-700 px-3 py-1 font-mono text-[10px] text-neutral-400">
                    {project.href.replace(/^https?:\/\//, "")}
                  </span>
                </div>
                <div className="relative h-52 overflow-hidden bg-neutral-950">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.preview.accent}`}
                  />
                  {project.preview.imageSrc && !imageFailures[project.title] ? (
                    <Image
                      src={project.preview.imageSrc}
                      alt={`${project.title} website preview`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="absolute inset-0 object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03]"
                      onError={() => handleImageError(project.title)}
                    />
                  ) : (
                    <div className="absolute inset-0 p-5">
                      <div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-4 backdrop-blur-sm">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                          {project.preview.eyebrow}
                        </p>
                        <h3 className="mt-3 max-w-[16rem] text-xl font-semibold tracking-tight text-white">
                          {project.preview.headline}
                        </h3>
                        <p className="mt-2 max-w-[18rem] text-sm leading-6 text-neutral-300">
                          {project.preview.caption}
                        </p>
                        <div className="mt-5 grid grid-cols-3 gap-2">
                          <div className="h-16 rounded-xl border border-white/10 bg-white/5" />
                          <div className="h-16 rounded-xl border border-white/10 bg-white/10" />
                          <div className="h-16 rounded-xl border border-white/10 bg-white/5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-800 px-3 py-1 font-mono text-xs text-neutral-400"
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
