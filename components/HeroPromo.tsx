export function HeroPromo() {
  return (
    <section className="relative overflow-hidden bg-[var(--wi-gradient)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[var(--wi-hero-glow)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-wi-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-wi-accent/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wi-teal">Global marketplace</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The world shops here — <span className="text-wi-sun">C2C listings</span> &{" "}
            <span className="text-wi-teal">B2C stores</span> in one place
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            WI CONNECT pairs consumer listings (Buy It Now, Best Offer) with verified business sellers, bulk pricing,
            and RFQs — modeled on proven marketplace patterns you already know.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#browse"
              className="inline-flex items-center justify-center rounded-xl bg-wi-accent px-6 py-3 text-sm font-bold text-white shadow-wi-md transition hover:bg-wi-accent-hover"
            >
              Start shopping
            </a>
            <a
              href="#sell"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              List an item
            </a>
            <a
              href="#business"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Open a business store
            </a>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { k: "Active listings", v: "120M+", sub: "Across regions" },
            { k: "Business sellers", v: "480K+", sub: "Verified & bulk" },
            { k: "Buyer protection", v: "On eligible orders", sub: "Money-back eligible" },
            { k: "Ship worldwide", v: "190+", sub: "Countries & territories" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-wi-md backdrop-blur-md"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-white/70">{s.k}</p>
              <p className="mt-1 font-display text-2xl font-bold text-white">{s.v}</p>
              <p className="text-xs text-white/65">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
