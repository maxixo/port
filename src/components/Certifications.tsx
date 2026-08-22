type Badge = {
  id: string;
  name: string;
  issuer: string | null;
  imageUrl: string | null;
  issuedAt: string | null;
};

// Pulled from Credly's public profile feed at build time; hourly revalidate.
async function getCredlyBadges(): Promise<Badge[] | null> {
  try {
    const res = await fetch(
      "https://www.credly.com/users/usman-oshodi/badges.json",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const json = (await res.json()) as {
      data?: Array<Record<string, unknown>>;
    };
    return (json.data ?? [])
      .map((raw) => {
        const t = (raw.badge_template ?? {}) as Record<string, unknown>;
        const issuer = (t.issuer ?? {}) as { summary?: string };
        return {
          id: String(raw.id ?? ""),
          name: String(t.name ?? ""),
          issuer: issuer.summary ? issuer.summary.replace(/^issued by /i, "") : null,
          imageUrl:
            typeof raw.image_url === "string"
              ? raw.image_url
              : typeof t.image_url === "string"
                ? t.image_url
                : null,
          issuedAt: typeof raw.issued_at_date === "string" ? raw.issued_at_date : null,
        };
      })
      .filter((b) => b.name && b.id);
  } catch {
    return null;
  }
}

const fmtDate = (iso: string | null) => {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  } catch {
    return iso;
  }
};

export default async function Certifications() {
  const credly = await getCredlyBadges();

  const items = [
    ...(credly ?? []).map((b) => ({
      title: b.name,
      issuer: b.issuer,
      date: fmtDate(b.issuedAt),
      image: b.imageUrl,
      verify: `https://www.credly.com/badges/${b.id}/public_url`,
      source: "credly" as const,
    })),
  ];

  return (
    <div className="mx-auto max-w-6xl px-8 py-24">
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
            Credentials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            Badges &amp; certifications
          </h2>
        </div>
        <span className="hidden font-mono text-xs text-neutral-500 sm:block">
          live from credly
        </span>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <a
            key={item.verify || item.title}
            href={item.verify || "#"}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {item.image ? (
              <img
                src={item.image}
                alt={`${item.title} badge`}
                loading="lazy"
                width={72}
                height={72}
                className="h-[72px] w-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <span className="flex h-[72px] w-[72px] items-center justify-center font-mono text-2xl text-neutral-600">
                ✓
              </span>
            )}
            <p className="mt-4 line-clamp-2 text-sm font-medium leading-snug text-foreground">
              {item.title}
            </p>
            {item.issuer && (
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                {item.issuer}
              </p>
            )}
            {item.date && (
              <p className="mt-1 font-mono text-[10px] text-neutral-600">{item.date}</p>
            )}
          </a>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-12 font-mono text-sm text-neutral-500">
          No certifications listed yet.
        </p>
      )}
    </div>
  );
}
