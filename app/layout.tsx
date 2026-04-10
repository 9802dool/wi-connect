import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

import { CurrencyProvider } from "@/components/CurrencyProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WI CONNECT — Online marketplace (C2C & B2C)",
  description:
    "Shop auctions, Buy It Now, and Best Offer from individuals; buy in bulk from verified business sellers on WI CONNECT.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
