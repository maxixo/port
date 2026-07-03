const socialLinks = [
  { label: "GitHub", href: "https://github.com/maxixo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/usman-oshodi-28326b307/" },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(229, 229, 229, 0.12) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-8">
        <div className="max-w-3xl pt-20">
          <h1 className="text-6xl font-semibold tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Usman Oshodi
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            A full-stack developer with a passion for building scalable and efficient web applications.
            With expertise in both frontend and backend technologies. </p>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-300">
            <a
              href="#work"
              className="underline underline-offset-4 transition-colors duration-200 hover:text-accent"
            >
              View Work
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
