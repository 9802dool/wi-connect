import { categories } from "@/lib/listings";

export function Categories() {
  return (
    <section id="categories" className="scroll-mt-24 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-wi-navy">Shop by category</h2>
            <p className="mt-1 text-slate-600">Explore millions of listings across C2C and business sellers.</p>
          </div>
          <a href="#featured" className="text-sm font-medium text-wi-blue hover:text-wi-accent">
            View all categories →
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                className="flex w-full flex-col items-center rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:border-wi-accent/50 hover:shadow-md"
              >
                <span className="text-2xl text-wi-accent" aria-hidden>
                  {c.icon}
                </span>
                <span className="mt-2 text-sm font-medium text-wi-navy">{c.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
