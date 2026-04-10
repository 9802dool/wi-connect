import { categories } from "@/lib/listings";

export function CategoryRail() {
  return (
    <div className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:inline">
            Shop by category
          </span>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              title={c.hint}
              className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-left text-sm font-medium text-wi-navy transition hover:border-wi-accent/60 hover:bg-sky-50 hover:text-wi-blue"
            >
              {c.name}
            </button>
          ))}
          <button
            type="button"
            className="shrink-0 text-sm font-semibold text-wi-blue hover:underline"
          >
            All categories →
          </button>
        </div>
      </div>
    </div>
  );
}
