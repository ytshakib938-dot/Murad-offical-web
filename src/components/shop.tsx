import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Smartphone, 
  Shield, 
  ExternalLink,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const DISCORD_INVITE_URL = "https://discord.gg/Stxn53TK";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  tag: string;
  spec: string;
  features: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    name: "PC Optimization",
    category: "Premium PC Optimization",
    description: "Ultimate system latency reduction, OS de-bloating, registry adjustments, and RAM optimizations for pristine gaming experiences.",
    price: 100,
    tag: "Pro Tuning",
    spec: "Windows 10 / 11",
    features: ["Input Delay Reduction", "OS Clean & De-bloat", "Advanced Registry Settings", "RAM/CPU Tuning"]
  },
  {
    id: "prod-02",
    name: "Optimization for Free Fire",
    category: "Game Specific",
    description: "Special headshot sensitivity configurations, engine boosting, and registry tuning tailored specifically for Free Fire game files.",
    price: 10,
    tag: "Free Fire Only",
    spec: "PC Emulator",
    features: ["Sensitivity optimization", "BlueStacks/MSI settings", "Engine booster fixes", "Smooth aiming registry"]
  },
  {
    id: "prod-03",
    name: "PC Free Fire Cenci",
    category: "Sensitivity & Tweaks",
    description: "Premium custom sensitivity and DPI register settings designed to lock onto your opponents' heads seamlessly on PC Free Fire.",
    price: 5,
    tag: "Sens Files",
    spec: "PC / Mouse Tools",
    features: ["Custom DPI mappings", "Mouse acceleration fixed", "Perfect headshot locking", "No recoil guidance"]
  },
  {
    id: "prod-04",
    name: "PC Headshot Optimization",
    category: "Aim Optimization",
    description: "High-tier aim-stability master tweaks to achieve maximum headshot rates and minimum weapon motion on PC setups.",
    price: 20,
    tag: "Aim Master",
    spec: "PC Only",
    features: ["Weapon recoil reduced", "Aim stability adjustments", "Instant hit register boost", "1-on-1 configuration block"]
  },
  {
    id: "prod-05",
    name: "Phone Optimization",
    category: "Premium Mobile Optimization",
    description: "Device-safe memory cleaning, performance governor overclock, and battery de-throttling profiles for smoother mobile gaming.",
    price: 10,
    tag: "Phone Only",
    spec: "Android / iOS",
    features: ["Extreme FPS unlock", "Thermal throttling fix", "RAM defragmentation", "Battery drain reduction"]
  },
  {
    id: "prod-06",
    name: "Phone Headshot Settings & Aim Bot Product",
    category: "Mobile Performance",
    description: "Expert DPI modifications, screen responsiveness tweaks, and optimized touch latency controls for dominant headshot tracking.",
    price: 10,
    tag: "Aimbot Settings",
    spec: "Mobile Game client",
    features: ["DPI registry configuration", "Extremely low touch latency", "Head tracking stabilization", "Anti-detectable files"]
  }
];

export function ShopSection() {
  return (
    <section id="shop" className="py-24 relative overflow-hidden bg-black border-t border-neutral-900">
      {/* Decorative clean background mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-300 mb-6 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-white" /> Pure Performance Shop
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6 leading-none">
            Murad Official Services catalog
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Configure system registries, eliminate screen tearing, and optimize your gaming devices. Choose your target service below and join our Discord node to instantly place your order.
          </p>
        </div>

        {/* Notice Banner - Required content displayed precisely with professional black-and-white design */}
        <div className="mb-16 p-8 md:p-10 rounded-[2.5rem] bg-neutral-950 border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle geometric line patterns */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-20" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-lg">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">Important Ordering Protocol</span>
                <p className="text-base md:text-lg text-white font-medium leading-relaxed">
                  "To order a service, join our Discord server, open a ticket, and tell us what service you need. Payment and service details will be handled through Discord."
                </p>
              </div>
            </div>
            
            <a 
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black font-extrabold text-sm tracking-widest uppercase rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 shrink-0 shadow-xl border border-white hover:scale-[1.03] active:scale-[0.98]"
            >
              Join Our Discord To Order <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div 
              key={prod.id}
              className="group relative p-8 rounded-[2.5rem] bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Card visual elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/[0.01] blur-2xl group-hover:scale-125 transition-all duration-500 rounded-full" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                    {prod.category}
                  </span>
                  {prod.tag && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-black bg-white border border-white px-2.5 py-0.5 rounded-full">
                      {prod.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors duration-200">
                  {prod.name}
                </h3>
                
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {prod.description}
                </p>

                {/* Compatibility and Specs */}
                <div className="p-3 bg-black border border-neutral-900 rounded-xl mb-6 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>COMPATIBILITY</span>
                  <span className="text-white font-bold uppercase">{prod.spec}</span>
                </div>

                {/* Key features of each service */}
                <ul className="space-y-2.5 mb-8 border-t border-neutral-900 pt-6">
                  {prod.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-xs text-neutral-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Tag and Order CTA */}
              <div className="border-t border-neutral-900 pt-6 flex items-center justify-between mt-auto">
                <div>
                  <div className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase">Price Rate</div>
                  <div className="text-3xl font-black text-white mt-1">
                    ${prod.price}
                  </div>
                </div>

                <a 
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md border border-white hover:scale-[1.03]"
                >
                  Join Discord <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            <Shield className="w-4 h-4 text-neutral-400 animate-pulse" /> Certified Safe Optimization • anti-detect guaranteed
          </div>
        </div>

      </div>
    </section>
  );
}
