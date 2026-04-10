import Image from "next/image";
import type { Listing } from "@/lib/listings";

function TypeBadge({ type }: { type: Listing["type"] }) {
  if (type === "c2c") {
    return (
      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-900">
        C2C
      </span>
    );
  }
  return (
    <span className="rounded bg-wi-blue/15 px-2 py-0.5 text-xs font-semibold text-wi-blue">
      B2C
    </span>
  );
}

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={listing.image}
          alt=""
          fill
          className="object-cover transition group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute left-2 top-2">
          <TypeBadge type={listing.type} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-wi-navy group-hover:text-wi-blue">
          {listing.title}
        </h3>
        <p className="mt-2 text-lg font-bold text-wi-navy">{listing.price}</p>
        {listing.bids != null && listing.bids > 0 && (
          <p className="text-xs text-slate-500">{listing.bids} bids · auction</p>
        )}
        <div className="mt-auto pt-3 text-xs text-slate-600">
          <span className="font-medium text-slate-800">{listing.seller}</span>
          <span className="text-amber-600"> ★ {listing.rating}</span>
          <p className="mt-0.5 text-slate-500">{listing.shipping}</p>
        </div>
      </div>
    </article>
  );
}
