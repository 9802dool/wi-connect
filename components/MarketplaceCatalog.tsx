"use client";

import { useMemo, useState } from "react";

import { ListingCard } from "@/components/ListingCard";
import { featuredListings, filterByTab } from "@/lib/listings";

const tabs = [
  { id: "all" as const, label: "All listings" },
  { id: "auctions" as const, label: "Auctions" },
  { id: "bin" as const, label: "Buy It Now & offers" },
  { id: "business" as const, label: "Business & bulk" },
];

export function MarketplaceCatalog() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");

  const rows = useMemo(() => filterByTab(featuredListings, tab), [tab]);

  return (
    <section id="browse" className="scroll-mt-28 bg-wi-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-wi-navy">Marketplace</h2>
        <p className="mt-1 max-w-3xl text-slate-600">
          Filter by how you want to buy: live auctions, instant &quot;Buy It Now&quot; and Best Offer from
          individuals, or verified business inventory and quotes.
        </p>
        <div
          className="mt-6 flex flex-wrap gap-2 border-b border-slate-200 pb-3"
          role="tablist"
          aria-label="Listing type"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab === t.id
                  ? "bg-wi-navy text-white shadow"
                  : "bg-white text-wi-navy ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Showing <strong className="text-wi-navy">{rows.length}</strong>{" "}
          {rows.length === 1 ? "listing" : "listings"}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
