const items = [
  {
    title: "Money-back eligible",
    desc: "On qualifying purchases when an item isn’t as described or doesn’t arrive.",
  },
  {
    title: "Secure checkout",
    desc: "Encrypted payments with dispute resolution and order tracking.",
  },
  {
    title: "Top Rated sellers",
    desc: "C2C sellers with consistent positive feedback get a visible badge.",
  },
  {
    title: "Verified business",
    desc: "B2C storefronts with enhanced profiles, tax IDs, and bulk tools.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-sky-100/80 bg-gradient-to-b from-white to-wi-surface/60 py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-sky-100/90 bg-white/90 p-5 shadow-wi-sm backdrop-blur-sm transition hover:shadow-wi-md"
          >
            <h3 className="font-display font-semibold text-wi-navy">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
