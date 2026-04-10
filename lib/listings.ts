export type ListingType = "c2c" | "b2c";

/** Listing sale format (fixed price, offers, B2B quotes). */
export type ListingFormat = "buy_it_now" | "best_offer" | "business_quote";

export interface Listing {
  id: string;
  title: string;
  price: string;
  /** USD amount for multi-currency display; omit when `price` is non-numeric (e.g. “Request quote”). */
  usdAmount?: number;
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
    price: "$79.00",
    usdAmount: 79,
    type: "c2c",
    format: "buy_it_now",
    seller: "gadget_cycle",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "Economy",
    freeShipping: true,
    badge: "top_rated",
  },
  {
    id: "d2",
    title: "Office chair — ergonomic mesh",
    price: "$199.00",
    usdAmount: 199,
    type: "b2c",
    format: "buy_it_now",
    seller: "Workspace Direct",
    rating: 4.9,
    image: "/placeholder.svg",
    shipping: "2–5 days",
    freeShipping: true,
    badge: "verified_business",
  },
  {
    id: "d3",
    title: "Vintage vinyl bundle (×12)",
    price: "$45.00 or best offer",
    usdAmount: 45,
    priceSuffix: " or best offer",
    type: "c2c",
    format: "best_offer",
    seller: "crate_digger_tt",
    rating: 5.0,
    image: "/placeholder.svg",
    shipping: "Media mail",
    freeShipping: false,
  },
];

export const featuredListings: Listing[] = [
  {
    id: "1",
    title: "Wireless noise-cancelling headphones — open box",
    price: "$189.00",
    usdAmount: 189,
    type: "c2c",
    format: "buy_it_now",
    seller: "audio_trader_uk",
    rating: 4.9,
    image: "/placeholder.svg",
    shipping: "Worldwide",
    freeShipping: true,
    badge: "top_rated",
  },
  {
    id: "2",
    title: "Commercial espresso machine (B2B lease available)",
    price: "$2,450.00",
    usdAmount: 2450,
    type: "b2c",
    format: "business_quote",
    seller: "GlobalKitchen Pro",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "Free to EU / US",
    freeShipping: true,
    badge: "verified_business",
  },
  {
    id: "3",
    title: "Vintage film camera + lenses — authenticated",
    price: "$640.00 or best offer",
    usdAmount: 640,
    priceSuffix: " or best offer",
    type: "c2c",
    format: "best_offer",
    seller: "collector_maria",
    rating: 5.0,
    image: "/placeholder.svg",
    shipping: "Insured international",
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
    shipping: "Dropship globally",
    badge: "verified_business",
  },
  {
    id: "5",
    title: "Designer handbag — authenticity guaranteed",
    price: "$1,120.00",
    usdAmount: 1120,
    type: "c2c",
    format: "buy_it_now",
    seller: "lux_resale_sg",
    rating: 4.7,
    image: "/placeholder.svg",
    shipping: "Express worldwide",
    badge: "top_rated",
  },
  {
    id: "6",
    title: "Solar panel kits — manufacturer direct",
    price: "From $899.00",
    usdAmount: 899,
    pricePrefix: "From ",
    type: "b2c",
    format: "buy_it_now",
    seller: "GreenPower Industries",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "Regional hubs",
    freeShipping: true,
    badge: "verified_business",
  },
  {
    id: "7",
    title: "Refurbished tablet — 256GB, warranty",
    price: "$329.00",
    usdAmount: 329,
    type: "c2c",
    format: "buy_it_now",
    seller: "renewed_tech_ca",
    rating: 4.6,
    image: "/placeholder.svg",
    shipping: "Standard",
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
    shipping: "FOB / CIF",
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
