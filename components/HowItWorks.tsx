export function HowItWorks() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-bold text-wi-navy">
          Built for consumers and businesses
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Same marketplace rails — different tools depending on whether you&apos;re an individual seller or a
          business.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            id="sell"
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Consumer → consumer (C2C)</p>
            <h3 className="mt-2 font-display text-lg font-bold text-wi-navy">Sell like a pro from home</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-wi-accent" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong>Auctions</strong> with proxy bidding, or <strong>Buy It Now</strong> for instant sales.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-wi-accent" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong>Best Offer</strong> lets buyers negotiate on eligible fixed-price listings.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-wi-accent" aria-hidden>
                  ✓
                </span>
                <span>Feedback, seller levels, and promoted listings to grow your C2C reputation.</span>
              </li>
            </ul>
          </div>
          <div
            id="business"
            className="scroll-mt-28 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm lg:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-800">
              Business → consumer (B2C)
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-wi-navy">Scale with a business store</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-indigo-600" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong>Verified business</strong> badge, branded storefront, and volume pricing tiers.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong>RFQs & quotes</strong> for procurement — ideal for retailers and organizations.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600" aria-hidden>
                  ✓
                </span>
                <span>Integrations for inventory, tax, and multi-warehouse fulfillment.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
