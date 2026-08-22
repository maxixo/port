import { articles as fallbackArticles } from "@/data/articles";

type FetchedArticle = {
  title: string;
  description: string | null;
  url: string;
  published_at: string;
  positive_reactions_count: number;
  reading_time_minutes: number | null;
  tag_list: string[];
};

// Fetch at build time + hourly revalidate; falls back to local data if dev.to is down.
async function getDevToArticles(): Promise<FetchedArticle[] | null> {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=maxixo&per_page=6",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as Array<Record<string, unknown>>;
    return data
      .filter((a) => typeof a.url === "string" && !a.url.includes("vibe.forem"))
      .map((a) => ({
        title: String(a.title ?? ""),
        description: typeof a.description === "string" ? a.description : null,
        url: String(a.url),
        published_at: String(a.published_at ?? ""),
        positive_reactions_count: Number(a.positive_reactions_count ?? 0),
        reading_time_minutes:
          typeof a.reading_time_minutes === "number" ? a.reading_time_minutes : null,
        tag_list: Array.isArray(a.tag_list) ? (a.tag_list as string[]).slice(0, 3) : [],
      }))
      .filter((a) => a.title);
  } catch {
    return null;
  }
}

const fmtDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
};

export default async function Articles() {
  const fetched = await getDevToArticles();
  const items = fetched
    ? fetched.map((a) => ({
        title: a.title,
        href: a.url,
        meta: [
          fmtDate(a.published_at),
          a.reading_time_minutes ? `${a.reading_time_minutes} min read` : null,
          a.positive_reactions_count > 0 ? `♥ ${a.positive_reactions_count}` : null,
        ].filter(Boolean) as string[],
        tags: a.tag_list,
      }))
    : fallbackArticles.map((a) => ({
        title: a.title,
        href: a.href ?? "",
        meta: [a.date],
        tags: [] as string[],
      }));

  return (
    <div className="mx-auto max-w-6xl px-8 py-24">
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
            Writing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            Articles
          </h2>
        </div>
        <span className="hidden font-mono text-xs text-neutral-500 sm:block">
          live from dev.to
        </span>
      </div>

      <div className="mt-12 border-t border-neutral-800">
        {items.map((article) =>
          article.href ? (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-3 border-b border-neutral-800 py-5 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <span className="text-base transition-colors duration-200 group-hover:text-accent text-foreground">
                  {article.title}
                </span>
                {article.tags.length > 0 && (
                  <span className="mt-1 hidden gap-2 sm:flex">
                    {article.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-800 px-2 py-0.5 font-mono text-[10px] text-neutral-500"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                )}
              </div>
              <span className="flex shrink-0 items-center gap-4 font-mono text-xs text-neutral-500">
                {article.meta.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
                <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </span>
            </a>
          ) : (
            <div
              key={article.title}
              className="flex cursor-default items-center justify-between gap-6 border-b border-neutral-800 py-5 opacity-60"
            >
              <span className="text-base text-foreground">{article.title}</span>
              <span className="font-mono text-xs text-neutral-500">{article.meta[0]}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
