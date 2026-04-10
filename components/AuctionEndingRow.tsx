import { auctionsEnding } from "@/lib/listings";
import { ListingCard } from "@/components/ListingCard";

export function AuctionEndingRow() {
  return (
    <section id="auctions" className="scroll-mt-28 border-b border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-wi-navy sm:text-2xl">Auctions ending soon</h2>
            <p className="text-sm text-slate-600">
              Consumer-to-consumer bidding — place your max bid; we&apos;ll proxy-bid up to your limit.
            </p>
          </div>
          <a href="#browse" className="text-sm font-semibold text-wi-blue hover:underline">
            Browse all auctions →
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {auctionsEnding.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
