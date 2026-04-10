import { AuctionEndingRow } from "@/components/AuctionEndingRow";
import { CategoryRail } from "@/components/CategoryRail";
import { DealCarousel } from "@/components/DealCarousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroPromo } from "@/components/HeroPromo";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketplaceCatalog } from "@/components/MarketplaceCatalog";
import { PromoBar } from "@/components/PromoBar";
import { TrustStrip } from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <>
      <PromoBar />
      <Header />
      <CategoryRail />
      <main>
        <HeroPromo />
        <DealCarousel />
        <AuctionEndingRow />
        <MarketplaceCatalog />
        <TrustStrip />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
