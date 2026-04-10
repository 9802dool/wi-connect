"use client";

export function SearchForm() {
  return (
    <form
      className="flex min-w-0 flex-1 gap-0"
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
        className="min-h-11 w-full min-w-0 rounded-l-md border border-white/20 bg-white px-3 text-sm text-wi-navy placeholder:text-slate-500 focus:border-wi-accent focus:outline-none focus:ring-2 focus:ring-wi-accent/40"
      />
      <button
        type="submit"
        className="shrink-0 rounded-r-md bg-wi-accent px-4 text-sm font-bold text-wi-navy hover:bg-sky-400"
      >
        Search
      </button>
    </form>
  );
}
