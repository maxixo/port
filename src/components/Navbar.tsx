const navItems = [
  { label: "Work", href: "#work" },
  { label: "Articles", href: "#articles" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "mailto:hello@averystone.dev" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-6">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-foreground underline-offset-4 hover:underline"
        >
          Home
        </a>
        <nav className="flex items-center gap-6 text-sm text-neutral-300">
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
      </div>
    </header>
  );
}
