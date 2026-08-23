"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

type Line = { text: string; className?: string };

const PROMPT = "usman@portfolio:~";
const BANNER: Line[] = [
  { text: "Welcome to usman's sandbox shell.", className: "text-neutral-400" },
  { text: "Type `help` to see available commands.", className: "text-neutral-500" },
];

function helpLines(): Line[] {
  return [
    { text: "Available commands:", className: "text-neutral-300" },
    { text: "  help          show this message" },
    { text: "  whoami         who is this guy" },
    { text: "  skills         tech I work with" },
    { text: "  projects       list of things I've built" },
    { text: "  contact        how to reach me" },
    { text: "  sudo hire-me   the good stuff", className: "text-accent" },
    { text: "  clear          clear the terminal" },
  ];
}

export default function TerminalSandbox() {
  const [lines, setLines] = useState<Line[]>(BANNER);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const push = (...newLines: Line[]) => setLines((prev) => [...prev, ...newLines]);

  function run(raw: string) {
    const cmd = raw.trim();
    push({ text: `${PROMPT} $ ${cmd}`, className: "text-neutral-500" });

    switch (cmd.toLowerCase()) {
      case "":
        break;
      case "help":
        push(...helpLines());
        break;
      case "whoami":
        push(
          { text: "Usman Oshodi — full-stack developer based in Lagos, Nigeria.", className: "text-neutral-200" },
          { text: "I build scalable, efficient web applications — end to end." , className: "text-neutral-400" },
        );
        break;
      case "skills":
        push(
          { text: "TypeScript · JavaScript · React · Next.js · Node.js", className: "text-neutral-200" },
          { text: "PostgreSQL · Prisma · Supabase · Tailwind CSS · tRPC", className: "text-neutral-200" },
          { text: "Playwright · MDX · CI/CD (GitHub Actions) · Vercel", className: "text-neutral-200" },
        );
        break;
      case "projects":
        push(...projects.map((p): Line => ({ text: `${p.title} — ${p.tech.join(", ")}` })));
        break;
      case "contact":
        push(
          { text: "email     hello@oshodiusman.dev" },
          { text: "github    https://github.com/maxixo" },
          { text: "linkedin  https://www.linkedin.com/in/usman-oshodi-28326b307/" },
          { text: "x         https://x.com/maxi_x_o" },
        );
        break;
      case "sudo hire-me":
        push(
          { text: "[sudo] password for recruiter: ********", className: "text-neutral-500" },
          { text: "Access granted. 🎉", className: "text-emerald-400" },
          { text: "Smart move — email hello@oshodiusman.dev and let's talk.", className: "text-accent" },
        );
        break;
      case "clear":
        setLines([]);
        break;
      default:
        push({ text: `command not found (try \`help\`)`, className: "text-red-400/90" });
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    }
  }

  return (
    <div
      className="overflow-hidden rounded-lg border border-neutral-800 bg-[#0b0b10] shadow-xl shadow-black/40"
      onClick={() => inputRef.current?.focus()}
    >
      {/* macOS-style title bar */}
      <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span
          className="ml-3 text-xs text-neutral-500 select-none"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {PROMPT} — zsh
        </span>
      </div>

      {/* Scrollable output */}
      <div
        ref={scrollRef}
        className="h-64 overflow-y-auto p-4 text-[13px] leading-relaxed sm:h-80"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {lines.map((line, i) => (
          <pre key={i} className={`whitespace-pre-wrap ${line.className ?? "text-neutral-300"}`}>
            {line.text}
          </pre>
        ))}
        {/* Prompt row */}
        <div className="mt-1 flex items-center gap-2">
          <span className="shrink-0 text-emerald-400">{PROMPT} $</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck={false}
            aria-label="terminal command input"
            className="w-full min-w-0 bg-transparent text-neutral-100 caret-accent outline-none placeholder:text-neutral-600 text-base sm:text-[13px]"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          />
        </div>
      </div>
    </div>
  );
}
