import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageCanvas } from "@/components/layout/PageCanvas";
import { HeroSection } from "@/components/hero/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Cb7Block } from "@/components/sections/Cb7Block";
import { MarqueeBar } from "@/components/sections/MarqueeBar";
import { DigitalBankingSection } from "@/components/sections/DigitalBankingSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <PageCanvas>
        <HeroSection />
        <SolutionsSection />
        <Cb7Block />
        <MarqueeBar />
        <DigitalBankingSection />
        <InsightsSection />
        <CaseStudiesSection />
      </PageCanvas>
      <Footer />
    </>
  );
}
