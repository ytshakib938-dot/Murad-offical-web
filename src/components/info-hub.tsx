import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import brandLogo from '@/assets/images/murad_official_logo_1781106775615.png';
import { 
  X, 
  Shield, 
  BookOpen, 
  Phone, 
  Activity, 
  FileText, 
  Mail, 
  Clock, 
  Check, 
  Lock, 
  Terminal, 
  ArrowRight,
  ExternalLink,
  Info,
  Server,
  Zap,
  Globe
} from 'lucide-react';

export type InfoHubTab = 'documentation' | 'contact' | 'terms' | 'changelog' | 'security';

interface InfoHubProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: InfoHubTab;
  setActiveTab: (tab: InfoHubTab) => void;
}

export function InfoHub({ isOpen, onClose, activeTab, setActiveTab }: InfoHubProps) {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const tabsConfig = [
    { id: 'documentation' as InfoHubTab, label: 'Documentation', icon: BookOpen },
    { id: 'changelog' as InfoHubTab, label: 'Changelog', icon: Activity },
    { id: 'contact' as InfoHubTab, label: 'Contact', icon: Phone },
    { id: 'security' as InfoHubTab, label: 'Security Center', icon: Lock },
    { id: 'terms' as InfoHubTab, label: 'Terms of Service', icon: FileText },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="info-hub-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-5xl h-[85vh] bg-gradient-to-b from-[#0c0c0c] to-[#040404] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_60px_rgba(37,99,235,0.15)] flex flex-col md:flex-row overflow-hidden z-10"
          >
            {/* Sidebar Controls */}
            <div className="w-full md:w-64 bg-neutral-950 border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Information Hub</h2>
                    <span className="text-[10px] text-neutral-500 font-mono">MURAD OFFICIAL</span>
                  </div>
                </div>

                <nav className="space-y-1">
                  {tabsConfig.map((tab) => {
                    const IconComponent = tab.icon;
                    const isSelected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-blue-600/10 border border-blue-500/20 text-blue-400' 
                            : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="hidden md:block pt-6 border-t border-white/5 text-[10px] text-neutral-500 font-mono space-y-1">
                <div>SYSTEM ENHANCEMENT SUITE</div>
                <div>SECURE SERVER LINKED</div>
                <div>v3.0 - STABLE</div>
              </div>
            </div>

            {/* Content pane */}
            <div className="flex-1 flex flex-col overflow-hidden max-h-full">
              {/* Top Bar */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                <h3 className="text-lg font-bold text-white uppercase tracking-widest font-mono">
                  {activeTab === 'documentation' && 'Optimization Documentation & API'}
                  {activeTab === 'changelog' && 'Performance Changelog & Version Control'}
                  {activeTab === 'contact' && 'Company Support & Contact details'}
                  {activeTab === 'security' && 'Security Standards & Encryption'}
                  {activeTab === 'terms' && 'Terms of Service & Refund Policy'}
                </h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Panel Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                
                {/* 1. DOCUMENTATION TAB */}
                {activeTab === 'documentation' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 text-sm text-neutral-400 leading-relaxed font-sans"
                  >
                    <div>
                      <h4 className="text-white font-bold text-base mb-2">Getting Started with Murad Optimizations</h4>
                      <p>
                        Welcome to the professional implementation suite. Murad Official provides specialized license files, custom performance registry templates, and sensitivity settings scripts intended to bypass standard operating system bloat. It allows you to unlock maximum hardware acceleration rates.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <div className="flex items-center gap-2 mb-3 text-blue-400 font-bold font-mono text-xs uppercase tracking-wider">
                          <Terminal className="w-4 h-4 animate-pulse" />
                          Registry Application Steps
                        </div>
                        <ol className="list-decimal list-inside space-y-2 text-xs">
                          <li>Purchase or download your licensed configuration template.</li>
                          <li>Run the optimization suite with administrator level commands.</li>
                          <li>Reboot your desktop or mobile setup for cache flushes.</li>
                          <li>Launch Free Fire or other gaming programs seamlessly.</li>
                        </ol>
                      </div>

                      <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <div className="flex items-center gap-2 mb-3 text-purple-400 font-bold font-mono text-xs uppercase tracking-wider">
                          <Server className="w-4 h-4" />
                          Sensitivity & DPI Integration
                        </div>
                        <p className="text-xs">
                          Our customized sensitivity configurations operate inside your system's pointer acceleration matrices. It intercepts biological motion coordinates to scale headshot calculations dynamically under competitive esports margins.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs flex items-start gap-2.5">
                      <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <p>
                        <strong>Note to System Administrators:</strong> These scripts comply with current anti-cheat standards. They execute OS level optimization matrices without editing game binaries, ensuring 100% device-safe utility.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 2. CHANGELOG TAB */}
                {activeTab === 'changelog' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="relative border-l border-white/5 pl-6 ml-4 space-y-8">
                      {/* Version 3.0 Stable */}
                      <div className="relative">
                        <span className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-black" />
                        <div className="flex items-center gap-3 mb-1">
                          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold">LATEST RELEASE</span>
                          <h4 className="text-white font-bold text-sm font-mono">v3.0 Stable - Dynamic Performance Upgrade</h4>
                        </div>
                        <p className="text-xs text-neutral-500 font-mono mb-2">Released: June 10, 2026</p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-neutral-400 pl-2">
                          <li>Enhanced mouse cursor register polling rate from 500Hz to 1000Hz baseline.</li>
                          <li>Integrated phone headshot setting DPI scaling offsets for modern screen sizes.</li>
                          <li>Updated Windows 11 de-bloater modules to clean active background threads automatically.</li>
                          <li>Configured full-stack secure Stripe receipt triggers via cloud backend endpoints.</li>
                        </ul>
                      </div>

                      {/* Version 2.5 Upgrade */}
                      <div className="relative">
                        <span className="absolute -left-[30px] top-1.5 w-4 h-4 bg-neutral-700 rounded-full border-4 border-black" />
                        <div className="flex items-center gap-3 mb-1">
                          <span className="px-2 py-0.5 rounded-md bg-white/5 text-neutral-400 text-[10px] font-mono">LEGACY</span>
                          <h4 className="text-white font-bold text-sm font-mono">v2.5 Upgrade - Extreme Stability Fix</h4>
                        </div>
                        <p className="text-xs text-neutral-500 font-mono mb-2">Released: May 12, 2026</p>
                        <p className="text-xs text-neutral-400 pl-2">
                          Introduced game engine thread optimization rules to allocate 100% of PC and Phone resources to main operational screens during active play.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. CONTACT TAB */}
                {activeTab === 'contact' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-sm text-neutral-400 leading-relaxed">
                      <p>
                        Need customized technical support, single-machine manual tuning, or partnership licensing? Have questions regarding your premium order invoice? Get in touch with our team directly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email coordinate */}
                      <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                            <Mail className="w-5 h-5" />
                          </div>
                          <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider font-mono">Direct Technical Email</h4>
                          <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                            Expect support replies within 12-24 hours for VIP and Super VIP order tickets.
                          </p>
                        </div>
                        <a 
                          href="mailto:shakibmurad@muradoffcail.com" 
                          className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs text-center hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
                        >
                          shakibmurad@muradoffcail.com
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Phone coordinate */}
                      <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                            <Phone className="w-5 h-5" />
                          </div>
                          <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider font-mono">CEO / Owner Hotline</h4>
                          <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                            Support hotline direct to Shakib Hassan Murad for licensing and pro optimization circles.
                          </p>
                        </div>
                        <a 
                          href="tel:5189559096" 
                          className="px-4 py-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 font-mono font-bold text-xs text-center hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                          +1 (518) 955-9096
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                     {/* CEO Direct Discord Card */}
                    <div className="bg-[#0f0f11] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-[#5865F2]/30 group-all">
                      <div className="p-5 border-b border-white/5 bg-gradient-to-r from-neutral-900 to-[#1e1f22] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#5865F2] animate-bounce" />
                          <span className="text-[11px] font-mono tracking-widest text-[#949ba4] uppercase font-bold">Discord Identity Node</span>
                        </div>
                        <span className="text-[10px] bg-[#232428] border border-white/5 text-[#dbdee1] font-mono px-2 py-0.5 rounded-full uppercase">CEO & Founder Connection</span>
                      </div>

                      {/* Discord Layout Replicating Uploaded Portrait */}
                      <div className="flex flex-col md:flex-row gap-6 p-6">
                        {/* Profile Card Render */}
                        <div className="w-full md:w-[320px] bg-[#18191c] rounded-2xl overflow-hidden border border-[#202225] shadow-2xl shrink-0">
                          {/* Banner: Red flow representing Shakib Bhai */}
                          <div className="h-28 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.9),rgba(153,27,27,0.7))] relative flex items-center justify-center p-2 overflow-hidden">
                            {/* Sparks particles */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
                            <div className="absolute w-full text-center text-red-500/20 font-black tracking-widest text-3xl select-none font-mono uppercase">
                              SHAKIB BHAI
                            </div>
                            <div className="relative z-10 text-center font-serif text-[18px] tracking-widest font-extrabold text-red-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter brightness-110">
                              — 𝐒𝐇𝐀𝐊!𝐁 𝐁𝐇𝐀! —
                            </div>
                          </div>

                          {/* Profile Body with overlapping avatar */}
                          <div className="px-4 pb-5 pt-1.5 relative bg-[#18191c]">
                            {/* Overlapping Avatar */}
                            <div className="absolute -top-12 left-4 relative">
                              <div className="relative w-20 h-20 rounded-full border-4 border-[#18191c] overflow-hidden bg-black ring-4 ring-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                                <img 
                                  src={brandLogo} 
                                  alt="Avatar" 
                                  className="w-full h-full object-cover" 
                                  referrerPolicy="no-referrer"
                                />
                                {/* Custom spiked gold/orange visual ring effect */}
                                <div className="absolute inset-0 border-2 border-dashed border-amber-500/40 animate-spin" style={{ animationDuration: '20s' }} />
                              </div>
                              {/* Online state status indicator */}
                              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#23a55a] border-4 border-[#18191c] flex items-center justify-center shadow-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              </div>
                            </div>

                            {/* Badges Container mimicking screenshot row */}
                            <div className="flex justify-end items-center gap-1.5 -mt-3 mb-4 h-7">
                              <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 font-mono text-[9px] font-bold rounded border border-purple-500/30 uppercase cursor-default">⚡ TWC—</span>
                              <span className="w-5 h-5 rounded-md bg-[#232428] border border-white/5 flex items-center justify-center text-[10px] title-info cursor-default" title="Verified Performance">⏱️</span>
                              <span className="w-5 h-5 rounded-md bg-[#232428] border border-white/5 flex items-center justify-center text-[10px] title-info cursor-default" title="Super Booster">💎</span>
                              <span className="w-5 h-5 rounded-md bg-[#232428] border border-white/5 flex items-center justify-center text-[10px] title-info cursor-default" title="Staff Director">⚙️</span>
                              <span className="w-5 h-5 rounded-md bg-[#232428] border border-white/5 flex items-center justify-center text-[10px] title-info cursor-default" title="Nitro Core">🌌</span>
                            </div>

                            {/* User details */}
                            <div className="space-y-3">
                              <div>
                                <h4 className="text-white font-black text-lg tracking-tight leading-none">—𝐒𝐇𝐀𝐊!𝐁 𝐁𝐇𝐀!友</h4>
                                
                                {/* Discord ID CIRCLED as requested by user */}
                                <div className="mt-2.5 flex items-center gap-2">
                                  <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">CEO Username ID:</span>
                                  <div className="relative inline-block group/id">
                                    {/* Pulse circle highlights container */}
                                    <span className="relative z-10 px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-500/40 text-red-200 font-mono font-black text-xs inline-flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.3)] min-w-[110px]">
                                      muradvai001
                                    </span>
                                    {/* Focus circle ring representing the hand-drawn highlighted loop */}
                                    <span className="absolute -inset-1.5 z-0 rounded-full border-2 border-dashed border-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
                                    <span className="absolute -inset-2.5 z-0 rounded-full border border-red-500/30 animate-ping opacity-60" style={{ animationDuration: '3s' }} />
                                  </div>
                                </div>
                              </div>

                              {/* Custom current Status */}
                              <div className="p-2.5 bg-[#232428] rounded-xl border border-white/5">
                                <p className="text-[10px] text-neutral-500 uppercase font-mono font-bold tracking-wider mb-0.5">Custom Status</p>
                                <p className="text-xs text-neutral-200 italic font-mono flex items-center gap-1.5">
                                  <span className="text-amber-400">🎶</span> "Last song stuck in your head?"
                                </p>
                              </div>

                              {/* Bio Items replicating screenshot */}
                              <div className="space-y-1.5 border-t border-white/5 pt-3">
                                <div className="flex items-center gap-2 text-xs text-[#dbdee1]">
                                  <span className="text-neutral-500">➤</span>
                                  <span>Gamer 🎮</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#dbdee1]">
                                  <span className="text-neutral-500">➤</span>
                                  <span>YouTuber / Streamer 🎥🕹️</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#dbdee1]">
                                  <span className="text-neutral-500">➤</span>
                                  <span>Single & leveling up ✨</span>
                                </div>
                              </div>

                              {/* Game collection mock */}
                              <div className="border-t border-white/5 pt-3">
                                <p className="text-[9px] font-mono font-bold tracking-wider text-neutral-500 uppercase mb-2">My Game Collection</p>
                                <div className="flex gap-2">
                                  <span className="px-2 py-1 rounded-lg bg-[#232428] text-xs border border-white/5">🎮 FF PC</span>
                                  <span className="px-2 py-1 rounded-lg bg-[#232428] text-xs border border-white/5">🚀 CS2</span>
                                  <span className="px-2 py-1 rounded-lg bg-[#232428] text-xs border border-white/5">👾 Esports</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Interactive contact panel on the right side */}
                        <div className="flex-1 flex flex-col justify-between space-y-4">
                          <div>
                            <h4 className="text-white font-extrabold text-lg mb-2">Connect Directly on Discord</h4>
                            <p className="text-xs text-[#949ba4] leading-relaxed mb-4">
                              Shakib Hassan Murad (CEO) is officially active on Discord. Add him using his secure Discord ID <span className="text-amber-400 font-mono font-extrabold">muradvai001</span> to order manual custom performance tuning, DPI registry config setups, and priority service.
                            </p>

                            <div className="space-y-2 text-xs text-neutral-400 bg-white/[0.01] p-4 rounded-xl border border-white/5">
                              <div className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#23a55a]" />
                                <span><strong>Instant Online Response:</strong> Typically active from 12:00 PM to 4:00 AM.</span>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-purple-400" />
                                <span><strong>Community Perks:</strong> Claim free game adjustments inside the general support server.</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 flex flex-col sm:flex-row gap-3">
                            <button
                              type="button"
                              onClick={() => {
                                navigator.clipboard.writeText("muradvai001");
                                setCopiedDiscord(true);
                                setTimeout(() => setCopiedDiscord(false), 2000);
                              }}
                              className="font-mono text-xs font-bold px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white hover:bg-neutral-850 hover:border-[#5865F2]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                              {copiedDiscord ? (
                                <>
                                  <Check className="w-4 h-4 text-[#23a55a]" />
                                  Copied to Clipboard!
                                </>
                              ) : (
                                <>
                                  <span>📋</span>
                                  Copy CEO Discord Name
                                </>
                              )}
                            </button>

                            <a
                              href="https://discord.gg/Stxn53TK"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold px-5 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all flex items-center justify-center gap-2 shadow-lg"
                            >
                              <span>💬</span>
                              Join Official Support Discord
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. SECURITY TAB */}
                {activeTab === 'security' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 text-sm text-neutral-400 leading-relaxed"
                  >
                    <div>
                      <h4 className="text-white font-bold text-base mb-2">Secure Enterprise Payment Clearing</h4>
                      <p>
                        At Murad Official, customer security is our highest engineering priority. We implement an architecture that protects your transactions and completely eliminates the risk of card data leaks.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/5">
                        <Lock className="w-8 h-8 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-white text-xs uppercase tracking-wider font-mono">PCI-DSS Compliant Payment Clearing</h5>
                          <p className="text-xs mt-1">
                            Stripe transactions are handled purely via secure client-side tokens. Our databases have ZERO access to your raw credit card strings or CVV keys during clearing operations.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/5">
                        <Shield className="w-8 h-8 text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-white text-xs uppercase tracking-wider font-mono">Firestore Rule Integrity Enforcement</h5>
                          <p className="text-xs mt-1">
                            We deploy granular security matrices that prevent arbitrary write manipulations. Back-end ledger triggers synchronize state on strict timestamp validations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 5. TERMS TAB */}
                {activeTab === 'terms' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 text-sm text-neutral-400 leading-relaxed"
                  >
                    <div>
                      <h4 className="text-white font-bold text-base mb-2">Terms of Service and License Usage</h4>
                      <p>
                        By operating our software, downloading Windows registry configs, or applying phone headshot DPI changes, you agree to these commercial terms.
                      </p>
                    </div>

                    <div className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl">
                      <h5 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-2">Product Activation & Licensing</h5>
                      <p className="text-xs">
                        All VIP, Super VIP, and single licenses are non-transferable, intended exclusively for personal, non-commercial esports usage. Redistribution of configuration files or binaries violates copyright protections and terminates license instantly.
                      </p>
                    </div>

                    <div className="p-5 bg-red-900/10 border border-red-500/20 rounded-2xl">
                      <h5 className="text-red-400 font-bold text-xs uppercase tracking-wider font-mono mb-2">Refund Policy Core Clause</h5>
                      <p className="text-xs text-neutral-400">
                        Due to the electronic, instant-fulfillment nature of our optimization tools, digital scripts, and sensitivity files, all software purchases on <span className="text-blue-400 font-mono font-bold">muradoffcail.com</span> are strictly <strong>FINAL AND NON-REFUNDABLE</strong>. By finalizing checkout, you waive standard cooling-off claims.
                      </p>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Bottom footer button */}
              <div className="p-4 border-t border-white/5 flex items-center justify-end bg-white/[0.01]">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all cursor-pointer shadow-md"
                >
                  Close Hub
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
