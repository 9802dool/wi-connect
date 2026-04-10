export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-bold text-wi-navy">How WI CONNECT works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div id="sell" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-wi-navy">Consumer to consumer (C2C)</h3>
            <p className="mt-2 text-slate-600">
              List pre-owned and new items, run auctions or fixed-price “Buy It Now” sales, and ship to buyers
              around the world. Built-in messaging, feedback, and seller tools modeled on proven marketplace
              patterns.
            </p>
            <ul className="mt-4 list-inside list-disc text-sm text-slate-700">
              <li>Auctions with proxy bidding</li>
              <li>Best offer on eligible listings</li>
              <li>Individual seller profiles & ratings</li>
            </ul>
          </div>
          <div id="business" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-wi-navy">Business to consumer (B2C)</h3>
            <p className="mt-2 text-slate-600">
              Brands, distributors, and verified merchants operate storefronts with bulk pricing, invoices,
              and tax-ready documentation — ideal for retail and procurement on one global rail.
            </p>
            <ul className="mt-4 list-inside list-disc text-sm text-slate-700">
              <li>Verified business badges</li>
              <li>Volume pricing & RFQs</li>
              <li>Integration-ready for ERP and inventory</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
