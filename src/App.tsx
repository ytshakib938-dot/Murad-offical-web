import { Navbar } from "@/components/navbar";
import { 
  HeroSection, 
  SocialProofSection, 
  FeaturesSection, 
  ShowcaseSection, 
  StatsSection, 
  PricingSection,
  TestimonialSection, 
  CtaSection, 
  Footer 
} from "@/components/landing";
import { ShopSection } from "@/components/shop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <ShowcaseSection />
        <StatsSection />
        <PricingSection />
        <ShopSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
