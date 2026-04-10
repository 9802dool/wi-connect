import { Categories } from "@/components/Categories";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSearch } from "@/components/HeroSearch";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustStrip } from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSearch />
        <TrustStrip />
        <Categories />
        <FeaturedGrid />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
