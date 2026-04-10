const items = [
  { title: "Buyer protection", desc: "Eligible purchases covered on qualifying transactions." },
  { title: "Global shipping", desc: "Sellers ship worldwide; consolidated logistics partners." },
  { title: "Verified business", desc: "B2C stores and enterprise sellers with enhanced profiles." },
  { title: "Secure payments", desc: "Encrypted checkout and dispute resolution." },
];

export function TrustStrip() {
  return (
    <section className="border-b border-slate-200 bg-wi-surface py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm">
            <h3 className="font-display font-semibold text-wi-navy">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
