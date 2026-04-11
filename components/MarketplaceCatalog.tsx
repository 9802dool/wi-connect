"use client";

import { useMemo, useState } from "react";

import { ListingCard } from "@/components/ListingCard";
import { featuredListings, filterByTab } from "@/lib/listings";

const tabs = [
  { id: "all" as const, label: "All listings" },
  { id: "bin" as const, label: "Buy It Now & offers" },
  { id: "business" as const, label: "Business & bulk" },
];

type TabId = (typeof tabs)[number]["id"];

export function MarketplaceCatalog() {
  const [tab, setTab] = useState<TabId>("all");

  const rows = useMemo(() => filterByTab(featuredListings, tab), [tab]);

  return (
    <section id="browse" className="scroll-mt-28 bg-gradient-to-b from-wi-surface via-white to-wi-muted/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-wi-navy">Marketplace</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Filter by how you want to buy: instant &quot;Buy It Now&quot; and Best Offer from individuals, or verified
          business inventory and quotes.
        </p>
        <div
          className="mt-8 flex flex-wrap gap-2 border-b border-sky-100/80 pb-4"
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
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                tab === t.id
                  ? "bg-gradient-to-r from-wi-ocean to-wi-navy text-white shadow-wi-md"
                  : "bg-white/90 text-wi-navy shadow-wi-sm ring-1 ring-sky-100 hover:bg-sky-50/90"
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
