export type ListingType = "c2c" | "b2c";

export interface Listing {
  id: string;
  title: string;
  price: string;
  type: ListingType;
  seller: string;
  rating: number;
  bids?: number;
  image: string;
  shipping: string;
}

export const categories = [
  { name: "Electronics", icon: "◆", slug: "electronics" },
  { name: "Fashion", icon: "◇", slug: "fashion" },
  { name: "Home & Garden", icon: "◎", slug: "home" },
  { name: "Motors", icon: "▣", slug: "motors" },
  { name: "Collectibles", icon: "✦", slug: "collectibles" },
  { name: "Business & Industrial", icon: "▤", slug: "business" },
];

export const featuredListings: Listing[] = [
  {
    id: "1",
    title: "Wireless noise-cancelling headphones — open box",
    price: "$189.00",
    type: "c2c",
    seller: "audio_trader_uk",
    rating: 4.9,
    bids: 12,
    image: "/placeholder.svg",
    shipping: "Worldwide",
  },
  {
    id: "2",
    title: "Commercial espresso machine (B2B lease available)",
    price: "$2,450.00",
    type: "b2c",
    seller: "GlobalKitchen Pro",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "Free to EU / US",
  },
  {
    id: "3",
    title: "Vintage film camera + lenses — authenticated",
    price: "$640.00 or best offer",
    type: "c2c",
    seller: "collector_maria",
    rating: 5.0,
    bids: 8,
    image: "/placeholder.svg",
    shipping: "Insured international",
  },
  {
    id: "4",
    title: "Enterprise laptop fleet — bulk pricing (50+ units)",
    price: "Request quote",
    type: "b2c",
    seller: "WI CONNECT Business",
    rating: 4.9,
    image: "/placeholder.svg",
    shipping: "Dropship globally",
  },
  {
    id: "5",
    title: "Designer handbag — authenticity guaranteed",
    price: "$1,120.00",
    type: "c2c",
    seller: "lux_resale_sg",
    rating: 4.7,
    bids: 3,
    image: "/placeholder.svg",
    shipping: "Express worldwide",
  },
  {
    id: "6",
    title: "Solar panel kits — manufacturer direct",
    price: "From $899.00",
    type: "b2c",
    seller: "GreenPower Industries",
    rating: 4.8,
    image: "/placeholder.svg",
    shipping: "Regional hubs",
  },
];
