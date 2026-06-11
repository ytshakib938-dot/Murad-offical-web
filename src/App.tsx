import { useState, useEffect } from "react";
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
// @ts-ignore
import brandLogo from '@/assets/images/murad_official_logo_1781106775615.png';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<InfoHubTab>('documentation');
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [currentSearch, setCurrentSearch] = useState(() => window.location.search);
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentSearch(window.location.search);
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };
    
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  const isShopPage = currentPath === '/shop' || currentSearch.includes('view=shop') || currentHash === '#shop-page';

  if (isShopPage) {
    return (
      <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans">
        {/* Clean Shop-Specific Locked Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.75)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <img 
                  src={brandLogo} 
                  alt="Murad Official Logo" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:text-blue-400 transition-all">
                Murad Official
              </span>
            </a>
            
            <a 
              href="/"
              className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-xl bg-white/5 transition-all"
            >
              Back to Home
            </a>
          </div>
        </header>

        <main className="pt-20">
          <ShopSection isStandalonePage={true} />
        </main>

        <footer className="py-12 border-t border-white/5 bg-[#020202] text-center">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600 gap-4">
            <div>© 2026 Murad Official. All rights reserved.</div>
            <div className="flex gap-6">
              <button 
                onClick={() => setIsPrivacyOpen(true)} 
                className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                Privacy Policy
              </button>
              <a href="https://discord.gg/Stxn53TK" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Discord Support
              </a>
            </div>
          </div>
        </footer>

        <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </div>
    );
  }

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
        <ShopSection isStandalonePage={false} />
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
