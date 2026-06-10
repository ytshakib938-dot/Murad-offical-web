import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Shield, Zap, Code, Globe, Activity, Layers, Lock, Check } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
// @ts-ignore
import pcOptimizationImg from '@/assets/images/pc_optimization_1781098978567.png';
// @ts-ignore
import brandLogo from '@/assets/images/murad_official_logo_1781106775615.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 to-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start gap-8 py-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.02] border border-white/[0.08] text-sm text-neutral-300 font-medium shadow-[0_0_15px_rgba(255,255,255,0.03)] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.15]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            Now active: Premium PC & Phone Tuning v3.0
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 leading-[1.1]"
            >
              Murad<br/>Optimization
            </motion.h1>
            <div className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase font-mono">
              THE ULTIMATE GAMING PERFORMANCE GRID
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed"
          >
            PC and Phone Optimization. Experience pristine game booster setups, low system latency, zero de-bloat overhead, and customized Free Fire DPI sensitivity templates.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a href="#shop" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2">
              Browse Systems <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/[0.15] text-white font-medium hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center justify-center gap-2">
              Join Memberships
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-[800px] w-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        >
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-sm text-neutral-500 font-medium mb-10 uppercase tracking-widest">
          Optimized for Elite Gaming Platforms
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold"><Cpu className="w-6 h-6"/> Intel Core</div>
          <div className="flex items-center gap-2 text-xl font-bold"><Zap className="w-6 h-6"/> AMD Ryzen</div>
          <div className="flex items-center gap-2 text-xl font-bold"><Layers className="w-6 h-6"/> Nvidia RTX</div>
          <div className="flex items-center gap-2 text-xl font-bold"><Globe className="w-6 h-6"/> Steam Grid</div>
          <div className="flex items-center gap-2 text-xl font-bold"><Lock className="w-6 h-6"/> Discord Link</div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    { icon: Cpu, title: "OS Registry Optimizations", desc: "Fine-tune Windows registry directories and device inputs to unlock rapid processing states and eliminate input buffering." },
    { icon: Zap, title: "Input Latency Fixers", desc: "Reduce mouse, keyboard, and display response delay below 1ms for near-instant reaction times." },
    { icon: Brain, title: "Free Fire Cenci Tweaks", desc: "Unleash tailor-made DPI scaling and perfect layout sensitivity adjustments built specifically for high-accuracy headshots." },
    { icon: Lock, title: "RAM & CPU Prioritizers", desc: "Prioritize gaming system assets automatically while de-bloating unnecessary system tasks running in the background." },
    { icon: Activity, title: "Graphics Performance Tweaking", desc: "Maximize rendering throughput of Free Fire and other esports titles, maintaining high and stable frame rates." },
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">PC Optimization</h2>
          <p className="text-xl text-neutral-400">PC and Phone Optimization. System de-bloating, specialized game configuration registries, and Free Fire sensitivity setups for elite gameplay.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-neutral-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Murad PC Optimization</h2>
          <p className="text-xl text-neutral-400">PC and Phone Optimization. Experience pristine game booster setups, low system latency, zero de-bloat overhead, and customized Free Fire DPI sensitivity.</p>
        </div>
        
        <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] overflow-hidden h-[600px] flex items-center justify-center shadow-2xl group">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10 pointer-events-none" />
          
          {/* PC Optimization Image */}
          <img 
            src={pcOptimizationImg} 
            alt="PC Optimization" 
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />

          {/* Dynamic Specs Label overlay */}
          <div className="absolute bottom-10 left-10 right-10 z-30 p-8 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl max-w-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Active System Module</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Murad PC Optimization Performance Grid</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Real-time RAM governors, custom Free Fire headshot tuning registries, and secure system tweaks matching competitive esport standards perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <div className="text-5xl md:text-6xl font-light tracking-tighter text-white mb-3">1,000+</div>
          <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">People Join Per Day</div>
        </div>
        <div>
          <div className="text-5xl md:text-6xl font-light tracking-tighter text-white mb-3">50,000+</div>
          <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Active Optimizations done</div>
        </div>
        <div>
          <div className="text-5xl md:text-6xl font-light tracking-tighter text-white mb-3">15,000+</div>
          <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Free Fire Players Assisted</div>
        </div>
        <div>
          <div className="text-5xl md:text-6xl font-light tracking-tighter text-white mb-3">15,600+</div>
          <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Active Elite Members</div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const plans = [
    {
      name: "VIP",
      price: "$49",
      desc: "Official PC and Phone Optimization entry-level membership. Speed up system performance and basic registry settings.",
      features: [
        "Full PC and Phone Optimization Guides",
        "Basic Free Fire sensitivity adjust tools",
        "Single-device active license activation",
        "Safe OS de-bloater config files",
        "VIP Discord community entry access",
      ],
      cta: "Join VIP Member",
      popular: false,
    },
    {
      name: "Super VIP",
      price: "$149",
      desc: "Elite performance settings, pro DPI tweaks, aim stabilization, and high-performance registry scripts built for extreme players.",
      features: [
        "Extreme PC and Phone Optimization configs",
        "Full Free Fire Cenci & PC Headshot script files",
        "Phone Headshot Settings & Aim Bot product",
        "Multi-device parallel optimization locks",
        "Direct 1-on-1 computer tuning setup support",
        "Lifetime free updates guarantee",
      ],
      cta: "Join Super VIP Member",
      popular: true,
    },
    {
      name: "Subscriber",
      price: "Free",
      desc: "Basic game enhancement settings and general sensitivity recommendations.",
      features: [
        "Standard PC mouse acceleration fixer",
        "Basic Free Fire DPI advice sheet",
        "Community support channel access",
      ],
      cta: "Subscribe for Free",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-blue-400 mb-6 border border-white/10 uppercase tracking-widest">
            Membership Admission
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">{`The following membership levels.`}</h2>
          <p className="text-xl text-neutral-400">PC and Phone Optimization. Choose your performance tier to instantly supercharge game response and visual fluid dynamics.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch font-sans">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-[2.5rem] flex flex-col justify-between border transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-white/[0.04] to-white/[0.01] border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/30' 
                  : 'bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-blue-600 text-xs font-semibold uppercase tracking-widest text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  RECOMMENDED
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-neutral-400 mb-6 min-h-[40px] leading-relaxed">{plan.desc}</p>
                
                <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-6">
                  <span className="text-5xl font-bold tracking-tight text-white">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-neutral-500 font-mono">/ Month</span>}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="https://discord.gg/Stxn53TK"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer text-center block ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-500 hover:scale-[1.02] shadow-[0_4px_20px_rgba(59,130,246,0.3)]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20'
                }`}
              >
                Join Discord
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="py-32 relative bg-gradient-to-b from-transparent to-[#050505]">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-40 animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-neutral-900 to-[#111] border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden">
              <Cpu className="w-12 h-12 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full text-xs font-mono text-blue-400 mb-6 border border-blue-500/20 uppercase tracking-widest">
          Meet The Founder
        </div>
        <h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-12 text-white">
          " I founded Murad Official to design the ultimate tuning workspace that unlocks hidden performance on any PC or Phone setup. Low input lag, zero bloat, and peak sensitivity profiles. "
        </h3>
        <div className="text-neutral-400">
          <div className="text-white font-bold text-2xl mb-1.5 tracking-tight">Shakib Hassan Murad</div>
          <div className="text-sm uppercase tracking-widest font-mono text-blue-400 font-bold">CEO & Founder, Murad Official</div>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/5 blur-[150px] rounded-full max-w-4xl mx-auto pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">Join the Elite performance.</h2>
        <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Get absolute peak framerates, reduced input delay, and perfect DPI profiles curated by our founder.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
            Get Membership Admission
          </a>
          <a href="#shop" className="px-8 py-4 rounded-full bg-transparent border border-white/[0.15] text-white font-semibold hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Explore Performance Shop
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ 
  onPrivacyClick,
  onInfoClick
}: { 
  onPrivacyClick?: () => void;
  onInfoClick?: (tab: 'documentation' | 'contact' | 'terms' | 'changelog' | 'security') => void;
}) {
  const socialChannels = [
    { name: 'TikTok', href: 'https://www.tiktok.com/@muradbodyworksoffical', hoverStyle: 'hover:text-[#ff0050] hover:border-[#ff0050]/40 hover:bg-[#ff0050]/5' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61578274352175', hoverStyle: 'hover:text-[#1877f2] hover:border-[#1877f2]/40 hover:bg-[#1877f2]/5' },
    { name: 'Instagram', href: 'https://www.instagram.com/exampleyt2010/', hoverStyle: 'hover:text-[#e1306c] hover:border-[#e1306c]/40 hover:bg-[#e1306c]/5' },
    { name: 'Discord', href: 'https://discord.gg/Stxn53TK', hoverStyle: 'hover:text-[#5865f2] hover:border-[#5865f2]/40 hover:bg-[#5865f2]/5' },
  ];

  return (
    <footer className="py-16 border-t border-white/5 bg-[#020202]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-3 mb-6 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-black flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 border border-white/10">
              <img 
                src={brandLogo} 
                alt="Murad Official" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-white font-bold text-lg tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:text-blue-400 transition-all duration-300">
              Murad Official
            </span>
          </div>
          <p className="text-neutral-500 max-w-xs leading-relaxed mb-6">
            Elite system optimization, game-boosting adjustments, and custom FPS configuration guides designed by Shakib Hassan Murad to maximize your performance.
          </p>
          
          <div className="flex flex-wrap gap-2.5 max-w-xs">
            {socialChannels.map((soc, idx) => (
              <a 
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1 text-xs font-mono rounded-full bg-white/[0.02] border border-white/10 text-neutral-400 transition-all duration-300 ${soc.hoverStyle}`}
              >
                {soc.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#showcase" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('changelog'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Changelog
              </button>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('documentation'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Documentation
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('documentation'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                API Reference
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('documentation'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Guides
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('changelog'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Blog
              </button>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('contact'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('contact'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Careers
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('contact'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Partners
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('contact'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  if (onPrivacyClick) onPrivacyClick();
                }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('terms'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); if (onInfoClick) onInfoClick('security'); }}
                className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                Security
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600">
        <div>© 2026 Murad Official. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.tiktok.com/@muradbodyworksoffical" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
          <a href="https://www.facebook.com/profile.php?id=61578274352175" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          <a href="https://www.instagram.com/exampleyt2010/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://discord.gg/Stxn53TK" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
