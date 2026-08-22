"use client";

import { useEffect, useState } from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/maxixo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/usman-oshodi-28326b307/" },
];

const roles = [
  "full-stack developer.",
  "dashboard builder.",
  "automation nerd.",
];

const NAME = "Usman Oshodi";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [nameDone, setNameDone] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // typewriter for the name on load
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) {
        clearInterval(t);
        setTimeout(() => setNameDone(true), 250);
      }
    }, 90);
    return () => clearInterval(t);
  }, []);

  // rotating roles after the name finishes typing
  useEffect(() => {
    if (!nameDone) return;
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(t);
  }, [nameDone]);

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(229, 229, 229, 0.12) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-8">
        <div className="max-w-3xl pt-20">
          <p className="fade-up font-mono text-xs uppercase tracking-[0.28em] text-neutral-500" style={{ animationDelay: "0.15s" }}>
            Lagos, Nigeria — available for work
          </p>
          <h1
            className="mt-5 min-h-[1.1em] text-6xl font-semibold tracking-tight text-foreground sm:text-7xl md:text-8xl"
            aria-label={NAME}
          >
            {typed}
            {!nameDone && (
              <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[2px] bg-neutral-300 animate-pulse" />
            )}
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg leading-8 text-neutral-400" style={{ animationDelay: "0.9s" }}>
            I build scalable, efficient web applications — end to end.
          </p>
          <p
            aria-label={roles[roleIndex]}
            className="fade-up mt-1 font-mono text-lg text-accent"
            style={{ animationDelay: "1.1s" }}
          >
            <span className="text-neutral-500">$</span> {nameDone ? roles[roleIndex] : "\u00A0"}
            {nameDone && (
              <span className="ml-1 inline-block h-5 w-[2px] translate-y-[3px] animate-pulse bg-neutral-400" />
            )}
          </p>
          <div className="fade-up mt-10 flex items-center gap-6 text-sm text-neutral-300" style={{ animationDelay: "1.3s" }}>
            <a
              href="#work"
              className="rounded-sm border border-neutral-700 px-4 py-2 transition-colors duration-200 hover:border-neutral-500 hover:text-foreground"
            >
              View work
            </a>
            <a
              href="mailto:hello@oshodiusman.dev"
              className="underline underline-offset-4 transition-colors duration-200 hover:text-accent"
            >
              Get in touch
            </a>
          </div>
          <div className="fade-up mt-10 flex items-center gap-5 text-sm text-neutral-500" style={{ animationDelay: "1.5s" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-foreground"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
