"use client";

export function SearchForm() {
  return (
    <form
      className="flex min-w-0 flex-1 gap-0 overflow-hidden rounded-xl ring-1 ring-white/20"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="global-search" className="sr-only">
        Search all listings
      </label>
      <input
        id="global-search"
        type="search"
        placeholder="Search for anything — brands, SKUs, sellers…"
        className="min-h-11 w-full min-w-0 border-0 bg-white px-4 text-sm text-wi-navy placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wi-teal/50"
      />
      <button
        type="submit"
        className="shrink-0 bg-wi-accent px-5 text-sm font-bold text-white transition hover:bg-wi-accent-hover"
      >
        Search
      </button>
    </form>
  );
}
