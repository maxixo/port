import { articles } from "@/data/articles";

export default function Articles() {
  return (
    <div className="mx-auto max-w-6xl px-8 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
          Writing
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          Articles
        </h2>
      </div>
      <div className="mt-12 border-t border-neutral-800">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 border-b border-neutral-800 py-5 transition-colors duration-200"
          >
            <span className="text-base text-foreground transition-colors duration-200 group-hover:text-accent">
              {article.title}
            </span>
            <span className="font-mono text-xs text-neutral-500">{article.date}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
