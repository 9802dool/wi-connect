import { categories } from "@/lib/listings";

export function CategoryRail() {
  return (
    <div className="border-b border-sky-100/90 bg-white/95 shadow-wi-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-wide text-wi-ocean/80 sm:inline">
            Shop by category
          </span>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              title={c.hint}
              className="shrink-0 rounded-xl border border-sky-100 bg-wi-surface/80 px-3.5 py-2 text-left text-sm font-medium text-wi-navy shadow-sm transition hover:border-wi-teal/50 hover:bg-cyan-50/90 hover:text-wi-ocean"
            >
              {c.name}
            </button>
          ))}
          <button
            type="button"
            className="shrink-0 text-sm font-semibold text-wi-ocean transition hover:text-wi-accent hover:underline"
          >
            All categories →
          </button>
        </div>
      </div>
    </div>
  );
}
