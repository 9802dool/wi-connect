export type ListingType = "c2c" | "b2c";

/** Listing sale format (fixed price, offers, B2B quotes). */
export type ListingFormat = "buy_it_now" | "best_offer" | "business_quote";

export interface Listing {
  id: string;
  title: string;
  price: string;
  /** TTD amount for display; omit when `price` is non-numeric (e.g. “Request quote”). */
  ttdAmount?: number;
  pricePrefix?: string;
  priceSuffix?: string;
  /** Consumer vs business seller */
  type: ListingType;
  /** How the item is sold */
  format: ListingFormat;
  seller: string;
  rating: number;
  image: string;
  shipping: string;
  freeShipping?: boolean;
  /** Top Rated / verified business */
  badge?: "top_rated" | "verified_business";
}

export const categories = [
  { name: "Electronics", slug: "electronics", hint: "Phones, laptops, audio" },
  { name: "Fashion", slug: "fashion", hint: "New & pre-owned" },
  { name: "Home & Garden", slug: "home", hint: "Furniture, tools" },
  { name: "Motors", slug: "motors", hint: "Parts & vehicles" },
  { name: "Collectibles", slug: "collectibles", hint: "Cards, art, memorabilia" },
  { name: "Business & Industrial", slug: "business", hint: "B2B & bulk" },
];

export const dailyDeals: Listing[] = [
  {
    id: "d1",
    title: "Smartwatch — last season model",
    price: "$550.00 TTD",
    ttdAmount: 550,
    type: "c2c",
    format: "buy_it_now",
    seller: "gadget_cycle",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "TTPost Delivery",
    freeShipping: true,
    badge: "top_rated",
  },
  {
    id: "d2",
    title: "Office chair — ergonomic mesh",
    price: "$1,390.00 TTD",
    ttdAmount: 1390,
    type: "b2c",
    format: "buy_it_now",
    seller: "Workspace Direct",
    rating: 4.9,
    image: "/placeholder.svg",
    shipping: "Local Courier",
    freeShipping: true,
    badge: "verified_business",
  },
  {
    id: "d3",
    title: "Vintage vinyl bundle (×12)",
    price: "$315.00 TTD or best offer",
    ttdAmount: 315,
    priceSuffix: " or best offer",
    type: "c2c",
    format: "best_offer",
    seller: "crate_digger_tt",
    rating: 5.0,
    image: "/placeholder.svg",
    shipping: "TTPost Delivery",
    freeShipping: false,
  },
];

export const featuredListings: Listing[] = [
  {
    id: "1",
    title: "Wireless noise-cancelling headphones — open box",
    price: "$1,320.00 TTD",
    ttdAmount: 1320,
    type: "c2c",
    format: "buy_it_now",
    seller: "audio_trader_tt",
    rating: 4.9,
    image: "/placeholder.svg",
    shipping: "TTPost Delivery",
    freeShipping: true,
    badge: "top_rated",
  },
  {
    id: "2",
    title: "Commercial espresso machine (B2B lease available)",
    price: "$17,080.00 TTD",
    ttdAmount: 17080,
    type: "b2c",
    format: "business_quote",
    seller: "Kitchen Pro TT",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "Local Courier",
    freeShipping: true,
    badge: "verified_business",
  },
  {
    id: "3",
    title: "Vintage film camera + lenses — authenticated",
    price: "$4,460.00 TTD or best offer",
    ttdAmount: 4460,
    priceSuffix: " or best offer",
    type: "c2c",
    format: "best_offer",
    seller: "collector_maria",
    rating: 5.0,
    image: "/placeholder.svg",
    shipping: "TTPost Delivery",
  },
  {
    id: "4",
    title: "Enterprise laptop fleet — bulk pricing (50+ units)",
    price: "Request quote",
    type: "b2c",
    format: "business_quote",
    seller: "WI CONNECT Business",
    rating: 4.9,
    image: "/placeholder.svg",
    shipping: "Local Courier",
    badge: "verified_business",
  },
  {
    id: "5",
    title: "Designer handbag — authenticity guaranteed",
    price: "$7,800.00 TTD",
    ttdAmount: 7800,
    type: "c2c",
    format: "buy_it_now",
    seller: "lux_resale_tt",
    rating: 4.7,
    image: "/placeholder.svg",
    shipping: "Local Courier",
    badge: "top_rated",
  },
  {
    id: "6",
    title: "Solar panel kits — manufacturer direct",
    price: "From $6,270.00 TTD",
    ttdAmount: 6270,
    pricePrefix: "From ",
    type: "b2c",
    format: "buy_it_now",
    seller: "GreenPower Caribbean",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "TTPost Delivery",
    freeShipping: true,
    badge: "verified_business",
  },
  {
    id: "7",
    title: "Refurbished tablet — 256GB, warranty",
    price: "$2,295.00 TTD",
    ttdAmount: 2295,
    type: "c2c",
    format: "buy_it_now",
    seller: "renewed_tech_tt",
    rating: 4.6,
    image: "/placeholder.svg",
    shipping: "TTPost Delivery",
    freeShipping: true,
  },
  {
    id: "8",
    title: "Wholesale textiles — MOQ 100 units",
    price: "See tiers",
    type: "b2c",
    format: "business_quote",
    seller: "Caribbean Textile Supply",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "Local Courier",
    badge: "verified_business",
  },
];

export function filterByTab(
  listings: Listing[],
  tab: "all" | "bin" | "business",
): Listing[] {
  if (tab === "all") return listings;
  if (tab === "bin")
    return listings.filter((l) => l.format === "buy_it_now" || l.format === "best_offer");
  return listings.filter((l) => l.type === "b2c" || l.format === "business_quote");
}
