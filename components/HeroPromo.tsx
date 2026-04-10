export function HeroPromo() {
  return (
    <section className="relative overflow-hidden bg-[var(--wi-gradient)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_0%,rgba(0,163,224,0.18),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wi-accent">Global marketplace</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The world shops here — <span className="text-wi-accent">C2C listings</span> &{" "}
            <span className="text-wi-accent">B2C stores</span> in one place
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            WI CONNECT pairs consumer listings (Buy It Now, Best Offer) with verified business sellers, bulk pricing,
            and RFQs — modeled on proven marketplace patterns you already know.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#browse"
              className="inline-flex items-center justify-center rounded-lg bg-wi-accent px-5 py-2.5 text-sm font-bold text-wi-navy shadow-lg hover:bg-sky-400"
            >
              Start shopping
            </a>
            <a
              href="#sell"
              className="inline-flex items-center justify-center rounded-lg border border-white/35 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              List an item
            </a>
            <a
              href="#business"
              className="inline-flex items-center justify-center rounded-lg border border-white/35 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
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
              className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-white/65">{s.k}</p>
              <p className="mt-1 font-display text-2xl font-bold text-white">{s.v}</p>
              <p className="text-xs text-white/60">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
