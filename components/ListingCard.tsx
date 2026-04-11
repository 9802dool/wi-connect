import Image from "next/image";

import { PriceDisplay } from "@/components/PriceDisplay";
import type { Listing } from "@/lib/listings";

function TypeBadge({ type }: { type: Listing["type"] }) {
  if (type === "c2c") {
    return (
      <span className="rounded bg-amber-500/95 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
        C2C
      </span>
    );
  }
  return (
    <span className="rounded bg-indigo-600/95 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
      B2C
    </span>
  );
}

function FormatBadge({ format }: { format: Listing["format"] }) {
  const map: Record<Listing["format"], { label: string; className: string }> = {
    buy_it_now: { label: "Buy It Now", className: "bg-emerald-600 text-white" },
    best_offer: { label: "Best Offer", className: "bg-violet-600 text-white" },
    business_quote: { label: "Business quote", className: "bg-slate-700 text-white" },
  };
  const { label, className } = map[format];
  return (
    <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${className}`}>
      {label}
    </span>
  );
}

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-sky-100/90 bg-white shadow-wi-sm ring-1 ring-sky-900/5 transition hover:-translate-y-1 hover:shadow-wi-md">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200/80">
        <Image
          src={listing.image}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1">
          <TypeBadge type={listing.type} />
          <FormatBadge format={listing.format} />
        </div>
        {listing.badge === "top_rated" && (
          <span className="absolute bottom-2 left-2 rounded bg-wi-gold/95 px-1.5 py-0.5 text-[10px] font-bold text-wi-navy shadow">
            Top Rated
          </span>
        )}
        {listing.badge === "verified_business" && (
          <span className="absolute bottom-2 left-2 rounded bg-indigo-700/95 px-1.5 py-0.5 text-[10px] font-bold text-white shadow">
            Verified business
          </span>
        )}
        <button
          type="button"
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-sm ring-1 ring-slate-200/80 transition hover:text-rose-500"
          aria-label="Add to watch list"
        >
          ♡
        </button>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-wi-navy group-hover:text-wi-ocean">
          {listing.title}
        </h3>
        <p className="mt-2 text-lg font-bold tabular-nums text-wi-navy">
          <PriceDisplay listing={listing} />
        </p>
        <div className="mt-auto border-t border-slate-100 pt-2 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="font-medium text-slate-800">{listing.seller}</span>
            <span className="text-amber-600">★ {listing.rating}</span>
          </div>
          <p className="mt-0.5 flex flex-wrap items-center gap-2 text-slate-500">
            <span>{listing.shipping}</span>
            {listing.freeShipping && (
              <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-800">
                Free shipping
              </span>
            )}
          </p>
        </div>
      </div>
    </article>
  );
}
