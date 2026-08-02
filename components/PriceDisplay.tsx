"use client";

import type { Listing } from "@/lib/listings";
import { convertFromTtd, formatMoney } from "@/lib/currency";
import { useCurrency } from "@/components/CurrencyProvider";

export function PriceDisplay({
  listing,
  className = "",
}: {
  listing: Listing;
  className?: string;
}) {
  const { currency } = useCurrency();

  if (typeof listing.ttdAmount !== "number") {
    return <span className={className}>{listing.price}</span>;
  }

  const converted = convertFromTtd(listing.ttdAmount, currency);
  const formatted = formatMoney(converted, currency);

  return (
    <span className={className}>
      {listing.pricePrefix ?? ""}
      {formatted}
      {listing.priceSuffix ?? ""}
    </span>
  );
}
