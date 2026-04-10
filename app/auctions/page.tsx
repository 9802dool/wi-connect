import { AuctionEndingRow } from "@/components/AuctionEndingRow";
import { CategoryRail } from "@/components/CategoryRail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MarketplaceCatalog } from "@/components/MarketplaceCatalog";
import { PromoBar } from "@/components/PromoBar";

export default function AuctionsPage() {
  return (
    <>
      <PromoBar />
      <Header />
      <CategoryRail />
      <main>
        <AuctionEndingRow />
        <MarketplaceCatalog variant="auctions-only" />
      </main>
      <Footer />
    </>
  );
}
