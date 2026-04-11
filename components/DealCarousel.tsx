import { dailyDeals } from "@/lib/listings";
import { ListingCard } from "@/components/ListingCard";

export function DealCarousel() {
  return (
    <section
      id="deals"
      className="scroll-mt-28 border-b border-orange-100/80 bg-gradient-to-b from-amber-50 via-orange-50/40 to-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-wi-navy sm:text-3xl">Daily Deals</h2>
            <p className="mt-1 text-sm text-slate-600">
              Limited-time prices — fixed price & offers from C2C and B2C sellers.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-xl bg-gradient-to-r from-wi-accent/15 to-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-900 ring-1 ring-orange-200/60">
            Ends midnight · while supplies last
          </span>
        </div>
        <div className="mt-8 flex gap-5 overflow-x-auto pb-2 pt-1">
          {dailyDeals.map((listing) => (
            <div key={listing.id} className="w-[min(100%,280px)] shrink-0 sm:w-64">
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
