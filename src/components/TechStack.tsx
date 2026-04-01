import { techStack } from "@/data/techstack";

export default function TechStack() {
  return (
    <div className="mx-auto max-w-6xl px-8 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
          Stack
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          Tools I reach for often
        </h2>
      </div>
      <div className="mt-12 space-y-10">
        {techStack.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
              {group.category}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-neutral-700 px-3 py-1 font-mono text-xs text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
