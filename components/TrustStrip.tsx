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
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-100 bg-wi-surface/50 p-4 shadow-sm"
          >
            <h3 className="font-display font-semibold text-wi-navy">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
