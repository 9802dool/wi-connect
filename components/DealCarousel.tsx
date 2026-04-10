import { dailyDeals } from "@/lib/listings";
import { ListingCard } from "@/components/ListingCard";

export function DealCarousel() {
  return (
    <section id="deals" className="scroll-mt-28 border-b border-slate-200 bg-gradient-to-b from-amber-50/80 to-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-wi-navy sm:text-2xl">Daily Deals</h2>
            <p className="text-sm text-slate-600">Limited-time prices — fixed price & offers from C2C and B2C sellers.</p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900">
            Ends midnight · while supplies last
          </span>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
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
