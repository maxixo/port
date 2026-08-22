"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Articles", href: "#articles" },
  { label: "Credentials", href: "#certifications" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "mailto:hello@oshodiusman.dev" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-neutral-800/80 bg-[#0a0a0a]/85 backdrop-blur-md"
          : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-5">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-foreground underline-offset-4 hover:underline"
        >
          Home
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-[5px] p-2 sm:hidden"
        >
          <span className={`h-[2px] w-5 bg-neutral-300 transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 bg-neutral-300 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 bg-neutral-300 transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-neutral-800/60 px-8 pb-5 pt-2 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-neutral-300 transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* back to top */}
      {scrolled && (
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 hidden h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-[#0a0a0a]/85 text-neutral-400 backdrop-blur-md transition-colors duration-200 hover:text-foreground sm:flex"
        >
          ↑
        </a>
      )}
    </header>
  );
}
