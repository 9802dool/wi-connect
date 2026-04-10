import { featuredListings } from "@/lib/listings";
import { ListingCard } from "./ListingCard";

export function FeaturedGrid() {
  return (
    <section id="featured" className="scroll-mt-24 bg-wi-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-wi-navy">Featured listings</h2>
            <p className="mt-1 max-w-2xl text-slate-600">
              Mix of individual sellers (C2C) and business listings (B2C) — same search, clear labels.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
