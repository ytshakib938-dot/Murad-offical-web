import { useState } from "react";
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
import { PrivacyPolicy } from "@/components/privacy";
import { InfoHub, InfoHubTab } from "@/components/info-hub";

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<InfoHubTab>('documentation');

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
      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)} 
        onInfoClick={(tab) => {
          setActiveInfoTab(tab);
          setIsInfoOpen(true);
        }}
      />
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <InfoHub 
        isOpen={isInfoOpen} 
        onClose={() => setIsInfoOpen(false)} 
        activeTab={activeInfoTab}
        setActiveTab={setActiveInfoTab}
      />
    </div>
  );
}
