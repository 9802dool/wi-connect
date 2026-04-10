"use client";

export function HeroSearch() {
  return (
    <section className="relative overflow-hidden bg-[var(--wi-gradient)] px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,163,224,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-wi-accent">
          Global marketplace
        </p>
        <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Buy & sell anywhere on{" "}
          <span className="text-wi-accent">WI CONNECT</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
          Consumer-to-consumer auctions and fixed-price listings, plus trusted business sellers and bulk
          programs — one platform, millions of listings, worldwide.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 sm:flex-row sm:gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="q" className="sr-only">
            Search listings
          </label>
          <input
            id="q"
            type="search"
            placeholder="Search for anything — electronics, fashion, vehicles…"
            className="min-h-[48px] flex-1 rounded-lg border border-white/20 bg-white/95 px-4 text-wi-navy placeholder:text-slate-500 focus:border-wi-accent focus:outline-none focus:ring-2 focus:ring-wi-accent/40 sm:rounded-r-none"
          />
          <button
            type="submit"
            className="min-h-[48px] rounded-lg bg-wi-accent px-6 font-semibold text-wi-navy hover:bg-sky-400 sm:rounded-l-none"
          >
            Search
          </button>
        </form>
        <p className="mt-3 text-xs text-white/50">
          Tip: filter by C2C auctions or B2C & verified business stores after you search.
        </p>
      </div>
    </section>
  );
}
