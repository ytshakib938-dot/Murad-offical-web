import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Smartphone, 
  Shield, 
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Search,
  Filter,
  Layers,
  Video,
  Download,
  Info,
  Flame,
  MousePointer,
  Crosshair,
  Gamepad2,
  Tv,
  Keyboard,
  ShoppingBag,
  Boxes,
  Lightbulb,
  Headphones,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  X
} from 'lucide-react';
// @ts-ignore
import brandLogo from '@/assets/images/murad_official_logo_1781106775615.png';

const DISCORD_INVITE_URL = "https://discord.gg/Stxn53TK";

interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  category: 'optimization' | 'editing' | 'plugins' | 'games' | 'gear';
  categoryLabel: string;
  description: string;
  price: number;
  priceLabel?: string;
  tag: string;
  spec: string;
  features: string[];
  brandColor: string;
  logoType: 'pc' | 'freefire' | 'sens' | 'phone' | 'fortnite' | 'capcut' | 'premiere' | 'ae' | 'plugins' | 'keyboard' | 'mouse' | 'mousepad' | 'sleeve' | 'figure' | 'plant' | 'lights' | 'warmer' | 'griptape' | 'audio';
  image: string;
  colors?: ProductColor[];
}

const PRODUCTS: Product[] = [
  {
    id: "prod-pc-opt",
    name: "Murad Premium PC Optimization",
    category: "optimization",
    categoryLabel: "System Optimization",
    description: "Ultimate system latency reduction, customized OS de-bloating, registry adjustments, and RAM optimizations designed to unlock peak hardware throughput.",
    price: 100,
    tag: "Best Seller",
    spec: "Windows 10 & 11",
    features: ["Registry Latency Tuning", "OS Services De-bloating", "CPU Core Parking Fixed", "GPU Overhead Optimization"],
    brandColor: "from-blue-600/30 to-indigo-600/10 hover:border-blue-500/30",
    logoType: 'pc',
    image: "https://images.unsplash.com/photo-1587202372775-e229fd172b10?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-ff-opt",
    name: "Optimization for Free Fire",
    category: "games",
    categoryLabel: "Gaming Performance",
    description: "Specialized emulator configuration, memory governor tweaks, and graphic renderer boosting tailored specifically for peak Free Fire fps results.",
    price: 10,
    tag: "Free Fire Guide",
    spec: "PC / BlueStacks & MSI",
    features: ["BlueStacks Bypass Lag", "High Render FPS Unlock", "Touch Event Polling Acceleration", "Perfect Engine Frame Stability"],
    brandColor: "from-orange-600/30 to-amber-600/10 hover:border-orange-500/30",
    logoType: 'freefire',
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-pc-sens",
    name: "PC Free Fire Sensitivity (Cenci)",
    category: "games",
    categoryLabel: "Gaming Performance",
    description: "Premium mouse DPI mapping sheets, coordinate multiplier configurations, and targeted registry sensitivities built specifically to secure perfect headshots.",
    price: 5,
    tag: "Pro aiming",
    spec: "All Gaming Mice",
    features: ["1-Tap Coordinate Registry", "DPI Multiplier Calibration", "Zero Mouse Smoothing Settings", "Perfect Drag Force Guide"],
    brandColor: "from-red-600/30 to-rose-600/10 hover:border-red-500/30",
    logoType: 'sens',
    image: "https://images.unsplash.com/photo-1625842268584-8f3bd9fc1a77?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-pc-aim",
    name: "PC Headshot Optimization",
    category: "optimization",
    categoryLabel: "System Optimization",
    description: "High-tier aim-stability calibration, desktop input packet acceleration, and graphic buffer pipeline alignments for competitive desktop frames.",
    price: 20,
    tag: "Aim Mastery",
    spec: "Windows 10 / 11",
    features: ["Input Buffer Alignments", "GPU Pipeline Prefetch Hacks", "Aim Shaking reduction", "E-sports Input Calibration"],
    brandColor: "from-indigo-600/30 to-purple-600/10 hover:border-indigo-500/30",
    logoType: 'pc',
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-phone-opt",
    name: "Murad Premium Phone Optimization",
    category: "optimization",
    categoryLabel: "System Optimization",
    description: "Device-safe memory manager, thermal throttling relief, and energy governor overrides to ensure buttery smooth graphics on mobile clients.",
    price: 10,
    tag: "Mobile Pro",
    spec: "Android & iOS",
    features: ["Max Refresh Rate Control", "Thermal Throttling Overrides", "Background RAM Limiter", "Touch Digitizer Polling Boost"],
    brandColor: "from-emerald-600/30 to-teal-600/10 hover:border-emerald-500/30",
    logoType: 'phone',
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-phone-sens",
    name: "Phone Headshot Settings & Aim Bot Product",
    category: "games",
    categoryLabel: "Gaming Performance",
    description: "Expert mobile DPI overrides, screen digitizer sensitivity adjustments, and calibrated game engine config files to lock headshots on mobile devices.",
    price: 10,
    tag: "Mobile Aim",
    spec: "Android & iOS",
    features: ["Perfect Mobile DPI Guide", "Internal Pointer Speed Override", "Digitizer Touch Latency Fix", "Auto-Aim Grid Calibration"],
    brandColor: "from-cyan-600/30 to-blue-600/10 hover:border-cyan-500/30",
    logoType: 'phone',
    image: "https://images.unsplash.com/photo-1551645121-d1034da75057?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-fortnite",
    name: "Fortnite Optimization Pack (PC & Phone)",
    category: "games",
    categoryLabel: "Gaming Performance",
    description: "Exclusive Fortnite low-delay config files, stable alpha mode layout tuning, and graphics memory boosters for both desktop and mobile gaming.",
    price: 5,
    tag: "Hot Release",
    spec: "PC / Android / iOS",
    features: ["Low-Latency Game Configs", "Stable Alpha Performance Mode", "Texture Cache Pre-warming", "Mobile Lag-reduction Scripts"],
    brandColor: "from-fuchsia-600/30 to-purple-600/10 hover:border-fuchsia-500/30",
    logoType: 'fortnite',
    image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-capcut",
    name: "CapCut Premium",
    category: "editing",
    categoryLabel: "Video Editing Suite",
    description: "Instant access to pre-activated CapCut master features including advanced keys, unlimited pro transitions, and beautiful high-bitrate exports.",
    price: 0,
    priceLabel: "FREE",
    tag: "Popular Freebie",
    spec: "PC & Mobile versions",
    features: ["Unlocked Pro Key Features", "No Branding Watermark", "Exclusive Transitions & Audio", "Ultra-HD 4K Exporting"],
    brandColor: "from-neutral-600/30 to-neutral-800/10 hover:border-white/30",
    logoType: 'capcut',
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-premiere-pro",
    name: "Adobe Premiere Pro Premium Bundle",
    category: "editing",
    categoryLabel: "Video Editing Suite",
    description: "Pre-patched Adobe Premiere Pro setup with specialized layout presets, rendering scripts, and customized memory caches optimized for low hardware.",
    price: 5,
    tag: "Creative",
    spec: "Windows & macOS",
    features: ["Full Pre-patched Installer", "Optimized Video Cache Setup", "Hardware Acceleration Presets", "Priority Workspace Layouts"],
    brandColor: "from-blue-700/30 to-cyan-800/10 hover:border-blue-500/30",
    logoType: 'premiere',
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-ae",
    name: "Adobe After Effects Premium Bundle",
    category: "editing",
    categoryLabel: "Video Editing Suite",
    description: "Pre-optimized Adobe After Effects bundle with cached memory scripts, rapid render configurations, and professional motion graphic guides.",
    price: 5,
    tag: "Motion Pro",
    spec: "Windows & macOS",
    features: ["Complete Pre-activated Build", "Rapid Cache Purge Scripts", "Multiprocessing Engine Configs", "Default Pro Rendering Schemas"],
    brandColor: "from-violet-700/30 to-indigo-800/10 hover:border-violet-500/30",
    logoType: 'ae',
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-pr-plugins",
    name: "Premiere Pro Premium Plugins Pack",
    category: "plugins",
    categoryLabel: "Plugins & Tweaks",
    description: "Massive library containing 50+ beautiful transition templates, cinematic color lookup tables (LUTs), and professional lower-third graphic layers.",
    price: 0,
    priceLabel: "FREE",
    tag: "Best Asset",
    spec: "Extension Bundle",
    features: ["50+ Drag-and-Drop Transitions", "Professional Color Grading LUTs", "Animated Dynamic Text Layouts", "Background Sound Effect SFX"],
    brandColor: "from-sky-600/30 to-blue-800/10 hover:border-sky-500/30",
    logoType: 'plugins',
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-ae-plugins",
    name: "After Effects Premium Plugins Pack",
    category: "plugins",
    categoryLabel: "Plugins & Tweaks",
    description: "Advanced After Effects plugin collection featuring camera shake effects, visual distortion builders, and instant text typography layouts.",
    price: 0,
    priceLabel: "FREE",
    tag: "Best Asset",
    spec: "Extension Bundle",
    features: ["Custom Camera Shake Codes", "Visual Distortion Builders", "Advanced Font Glitch Packs", "Speed-ramping keyframe curves"],
    brandColor: "from-purple-600/30 to-indigo-800/10 hover:border-purple-500/30",
    logoType: 'plugins',
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-windows-os",
    name: "Custom Windows OS Installation Guide & Tweaks",
    category: "optimization",
    categoryLabel: "System Optimization",
    description: "Expert guide on setting up customized ISOs, eliminating power throttling, completely tearing out telemetry overhead, and stripping unnecessary kernel interrupts.",
    price: 20,
    tag: "Tech Support",
    spec: "Windows 10 & 11",
    features: ["Custom ISO Safety Guide", "Telemetry Stripping Script", "Kernel Interrupt Priority Configuration", "Power Overrides Guide"],
    brandColor: "from-blue-700/30 to-purple-800/10 hover:border-blue-500/30",
    logoType: 'pc',
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-network-ping",
    name: "Network & Routing Ping Optimization Pack",
    category: "optimization",
    categoryLabel: "System Optimization",
    description: "Dedicated DNS override guidelines, TCP Registry handshakes calibration, and custom MTU router sizing values designed to achieve absolute lowest ping rates.",
    price: 10,
    tag: "Network Pro",
    spec: "All Broadbands",
    features: ["TCP Registry Tuning", "Nagle's Algorithm Overrides", "MTU Best-Fit Handshake Calibration", "DNS Latency Analysis Tooling"],
    brandColor: "from-teal-600/30 to-emerald-800/10 hover:border-teal-500/30",
    logoType: 'pc',
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-gpu-overclock",
    name: "Advanced Graphics Card OC Safety Guide",
    category: "optimization",
    categoryLabel: "System Optimization",
    description: "A secure, step-by-step master guide for AMD and Nvidia GPU undervolting, memory clock calibration, and safe voltage steps to prevent thermal issues.",
    price: 15,
    tag: "Overclock",
    spec: "AMD / NVIDIA / Intel",
    features: ["Safe Undervolting Guidelines", "Core & Memory Curve Tuning", "Fan Curve Profiles", "Stability Testing Scripts"],
    brandColor: "from-amber-600/30 to-red-800/10 hover:border-amber-500/30",
    logoType: 'sens',
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-obs-stream",
    name: "Streamer Setup & OBS Studio Quality Pack",
    category: "editing",
    categoryLabel: "Video Editing Suite",
    description: "Advanced OBS layout presets, bit-rate encoder calibration, dual-audio routing scripts, and color profile correction overlays for professional broadcasting.",
    price: 15,
    tag: "Broadcasting",
    spec: "OBS Studio / Streamlabs",
    features: ["Lossless Canvas Settings", "High Affinity CPU Bit-rate Profiles", "Virtual Audio Cable Configs", "Color Space Alignment Files"],
    brandColor: "from-neutral-700/30 to-neutral-800/10 hover:border-white/30",
    logoType: 'premiere',
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-ram-timing",
    name: "RAM Timing & Memory Stability Tuning Docs",
    category: "optimization",
    categoryLabel: "System Optimization",
    description: "Expert instructions on safely toggling XMP and EXPO, sub-timing overrides, DRAM voltage profiles, and advanced stress testing methodologies.",
    price: 10,
    tag: "Hardware Pro",
    spec: "DDR4 & DDR5 RAM",
    features: ["XMP & EXPO Profile Loading", "DRAM Sub-timing Overrides", "Voltage Target Benchmarks", "High Loading Stress Tests Docs"],
    brandColor: "from-fuchsia-700/30 to-indigo-800/10 hover:border-fuchsia-500/30",
    logoType: 'pc',
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-sleeve",
    name: "Murad Esports Compression Arm Sleeve",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "Anti-friction professional arm sleeve crafted with compression-weave fibers to normalize blood flow and eliminate wrist friction against desk edges.",
    price: 15,
    tag: "Pro-Grade",
    spec: "Polyester-Spandex Blend",
    features: ["Zero-Friction Heat Weave", "Esports Pressure Compression", "Moisture-Wicking Polymer", "Universal Elastic Grip Strip"],
    brandColor: "from-blue-600/30 to-zinc-900/10 hover:border-blue-500/30",
    logoType: 'sleeve',
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    colors: [
      { name: "Stealth Black", hex: "#171717", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
      { name: "Blood Red", hex: "#dc2626", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
      { name: "Cyber Blue", hex: "#2563eb", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "prod-mousepad",
    name: "Murad Cordura Control Mousepad (XL)",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "Ultra-durable, liquid-resistant military-grade Cordura control surface ensuring absolute pixel-perfect tracking consistency in tight firefights.",
    price: 35,
    tag: "Control King",
    spec: "XL (490mm x 420mm)",
    features: ["Military-Grade Cordura Fabric", "Water-Repellent Nano Coating", "Dual-Stitched Non-Fray Edges", "4mm Natural Anti-Slip Rubber"],
    brandColor: "from-teal-600/30 to-neutral-900/10 hover:border-teal-500/30",
    logoType: 'mousepad',
    image: "https://images.unsplash.com/photo-1632292224971-0d45778bd364?auto=format&fit=crop&w=600&q=80",
    colors: [
      { name: "Phantom Black", hex: "#0a0a0a", image: "https://images.unsplash.com/photo-1632292224971-0d45778bd364?auto=format&fit=crop&w=600&q=80" },
      { name: "Toxic Red", hex: "#991b1b", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80" },
      { name: "Neon Blue", hex: "#0369a1", image: "https://images.unsplash.com/photo-1527813713060-7a92cf6493c1?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "prod-mouse",
    name: "Logitech G502 Murad Custom Pro Mouse",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "Our signature professional-tuned esports mouse based on the award-winning G502 blueprint. Calibrated weight balance, high-fidelity hero sensor tracking, and real color swapping choices.",
    price: 75,
    tag: "Best Mouse",
    spec: "Logitech G502 Custom Mod",
    features: ["Hero 25K Sensor Tracking", "Aero weight Tuning Weights", "Onboard Profile Custom Calibration", "Mechanical Button Tension System"],
    brandColor: "from-indigo-600/30 to-orange-600/10 hover:border-orange-500/30",
    logoType: 'mouse',
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    colors: [
      { name: "Midnight Black", hex: "#171717", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80" },
      { name: "Crimson Red", hex: "#ef4444", image: "https://images.unsplash.com/photo-1527813713060-7a92cf6493c1?auto=format&fit=crop&w=600&q=80" },
      { name: "Polar White", hex: "#f8fafc", image: "https://images.unsplash.com/photo-1625842268584-8f3bd9fc1a77?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "prod-keyboard",
    name: "Murad Pro 60% Rapid Magnetic Keyboard",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "Hall Effect custom rapid-trigger keyboard with magnetic linear switches, on-the-fly actuation points (0.1mm to 4.0mm) for near-instant response overrides.",
    price: 120,
    tag: "Rapid Trigger",
    spec: "Hall Effect 60%",
    features: ["Custom Outemu Magnetic Switches", "Dynamic Keystroke Travel Mod", "Full CNC Stiffened Aluminum Frame", "Ultra-low Latency USB-C Chipset"],
    brandColor: "from-red-600/30 to-purple-800/10 hover:border-red-500/30",
    logoType: 'keyboard',
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    colors: [
      { name: "Matte Black", hex: "#111111", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80" },
      { name: "Ruby Red Base", hex: "#b91c1c", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80" },
      { name: "Alabaster White", hex: "#fafafa", image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "prod-figure",
    name: "Retro Collectible Chibi-Murad Desktop Mascot",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "A super-cool decorative gaming figure styling the official Murad esports jersey, complete with an led-backlit mini mechanical keyboard accent stand.",
    price: 25,
    tag: "Setup Aesthetic",
    spec: "Premium PVC (12cm)",
    features: ["Hand-Painted Collector Grade PVC", "Interactive Tiny Keycap Stand", "Exclusive In-Game Guild Access Code", "Glossy Ultraviolet Paint Coating"],
    brandColor: "from-emerald-600/30 to-yellow-600/10 hover:border-emerald-500/30",
    logoType: 'figure',
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    colors: [
      { name: "Esports Jersey", hex: "#ef4444", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80" },
      { name: "Golden Custom Jacket", hex: "#eab308", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "prod-plant",
    name: "Esports Setup Artificial Plants (Set of 3)",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "Matte-finished succulent fake desk plants paired with slate-colored minimalist concrete pots, curated to add fresh organic vibes under your monitor setups.",
    price: 18,
    tag: "Room Aesthetic",
    spec: "Slate Ceramic Pots",
    features: ["Premium Matte Anti-Dust Vinyl", "Real Slate Mini Concrete Pots", "Zero Water or Light Maintenance", "Perfect Dual-Monitor Frame Ratio"],
    brandColor: "from-green-600/30 to-zinc-800/10 hover:border-green-500/30",
    logoType: 'plant',
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-lights",
    name: "Smart RGB Neon Desktop Amience Lightbars",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "Smart USB-powered neon light bars with fully addressable RGB pixels, Bluetooth control app, and live high-fidelity ambient microphone audio synchronization.",
    price: 29,
    tag: "Immersion Active",
    spec: "Addressable RGB (Dual-Pack)",
    features: ["Dual Vertical Desk Stands", "High Affinity Sound Reactive Sync", "Smart Mobile APP Presets Matrix", "High Definition Diffusion Shells"],
    brandColor: "from-fuchsia-600/30 to-cyan-800/10 hover:border-fuchsia-500/30",
    logoType: 'lights',
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-warmer",
    name: "Pro Warm-Grip Heated Sack (Esports Grade)",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "A vital accessory for competitive esports tournaments. Restores finger flexibility and stops cold-room hand stiffness prior to key match queues.",
    price: 12,
    tag: "Warm Aim",
    spec: "Micro-Fleece 45°C Target",
    features: ["Quick-Heating Fleece Core", "Maintains Core Aim Heat", "Double-Cuff Comfort Sleeve Pocket", "Compact Ergonomic Lap Size"],
    brandColor: "from-amber-600/30 to-red-800/10 hover:border-amber-500/30",
    logoType: 'warmer',
    image: "https://images.unsplash.com/photo-1605497746444-ac9dbd43d19f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-griptape",
    name: "Pro Textured Anti-Slip Mice Grip Tape",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "Pre-cut sweat-absorbing structural grip tape engineered with polyurethane textured surface layer for absolute claw/fingertip grip retention.",
    price: 8,
    tag: "Perfect Grip",
    spec: "Ultra-thin 0.4mm Profile",
    features: ["Sweat-Absorbing Polyurethane Layer", "Residue-Free Premium 3M Backing", "Pre-cut for Popular Gaming Mice", "High Friction Textured Weaving"],
    brandColor: "from-zinc-700/30 to-yellow-800/10 hover:border-yellow-500/30",
    logoType: 'griptape',
    image: "https://images.unsplash.com/photo-1625842268584-8f3bd9fc1a77?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-audio",
    name: "Logitech G502 Companion Pro Esports Headset",
    category: "gear",
    categoryLabel: "Gamer Gear",
    description: "The absolute best gaming headset to accompany your setup! High-fidelity 50mm DTS audio space mapping, extreme active ambient isolating cool-gel cushions, and double-dyed Red and Black options.",
    price: 99,
    tag: "Best Headset",
    spec: "50mm Neo-space Drivers",
    features: ["DTS Headphone:X Spatial Sound", "Live Blue VO!CE Filters", "Lightweight Steel-reinforced Frame", "Cooler-Gel Sweat-resistant Cushions"],
    brandColor: "from-red-600/30 to-zinc-900/10 hover:border-red-500/30",
    logoType: 'audio',
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    colors: [
      { name: "Stealth Black", hex: "#1c1917", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80" },
      { name: "Firebrand Red", hex: "#dc2626", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80" },
      { name: "Ghost White", hex: "#f1f5f9", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80" }
    ]
  }
];

export function ShopSection({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'optimization' | 'games' | 'editing' | 'plugins' | 'gear'>('optimization');
  
  // Track selected colors per product ID
  const [selectedColors, setSelectedColors] = useState<Record<string, ProductColor>>({});
  
  // Shopping Cart state
  interface CartItem {
    product: Product;
    selectedColor?: ProductColor;
    quantity: number;
  }
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('murad_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState<{ isOpen: boolean; protocolCode: string } | null>(null);

  // Sync cart to client storage
  useEffect(() => {
    localStorage.setItem('murad_cart', JSON.stringify(cart));
  }, [cart]);

  // Cart operations
  const addToCart = (product: Product) => {
    const activeColor = product.colors ? (selectedColors[product.id] || product.colors[0]) : undefined;
    setCart(prev => {
      const existingIdx = prev.findIndex(item => 
        item.product.id === product.id && 
        (!activeColor || item.selectedColor?.name === activeColor.name)
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedColor: activeColor, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, colorName?: string) => {
    setCart(prev => prev.filter(item => 
      !(item.product.id === productId && (!colorName || item.selectedColor?.name === colorName))
    ));
  };

  const updateQuantity = (productId: string, colorName: string | undefined, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && (!colorName || item.selectedColor?.name === colorName)) {
        const nextQty = item.quantity + delta;
        return { ...item, quantity: Math.max(1, nextQty) };
      }
      return item;
    }));
  };

  const triggerCheckout = () => {
    // Generate an authentic random gaming order serial code for direct ticket placement
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const code = `MRD-PRO-${randomHex}`;
    setCheckoutModal({ isOpen: true, protocolCode: code });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Filter products based on search and selected tab
  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.spec.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilter === 'all' || prod.category === selectedFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="shop" className={`relative overflow-hidden bg-black border-t border-neutral-950 ${isStandalonePage ? 'min-h-screen py-12 pt-32' : 'py-24'}`}>
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.015),transparent)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Back navigation on standalone view */}
        {isStandalonePage && (
          <div className="mb-10 text-left">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group font-semibold"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Murad Official Home</span>
            </a>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono text-neutral-300 mb-6 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-white" /> Pure Performance Shop
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-none">
              Optimization Catalog
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Tuning files, system adjustment registries, custom Fortnite and Free Fire configurations, premium content utilities, and free assets. Click any product to obtain the order protocol and connect via Discord.
            </p>
          </div>

          {/* Standalone Status Hub with Shopping Cart icon */}
          <div className="flex items-center gap-5 shrink-0 p-3 rounded-2xl bg-neutral-950 border border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/10 shrink-0">
                <img 
                  src={brandLogo} 
                  alt="Murad Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="text-xs text-neutral-400 font-mono">NODE STATUS</div>
                <div className="text-sm font-black text-white flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#23a55a] animate-ping" />
                  Active Orders
                </div>
              </div>
            </div>

            {/* Top Bar Cart Icon Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-white" />
              <span className="text-xs font-mono font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded-md min-w-[20px] text-center">
                {totalItemCount}
              </span>
            </button>
          </div>
        </div>

        {/* Notice Banner explaining support and protocol */}
        <div className="mb-16 p-8 md:p-10 rounded-[2.5rem] bg-neutral-950 border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden text-left">
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
            <div className="flex items-start gap-5 max-w-3xl">
              <div className="w-14 h-14 rounded-2.5xl bg-white text-black flex items-center justify-center shrink-0 shadow-lg">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#949ba4] uppercase font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> 24/7 Support Active on Discord
                </span>
                <p className="text-base md:text-lg text-white font-medium leading-relaxed">
                  "To order a service, join our Discord server, open a ticket, and tell us what service you need. Payment and service details will be handled through Discord. <strong className="text-blue-400">We offer 24/7 dedicated live support!</strong>"
                </p>
              </div>
            </div>
            
            <a 
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-5 bg-white hover:bg-neutral-200 text-black font-black text-xs tracking-widest uppercase rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 shrink-0 shadow-2xl border border-white hover:scale-[1.03]"
            >
              Join Our Discord <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Custom Filter Pins */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Catalogue' },
              { id: 'optimization', label: 'System Tuning' },
              { id: 'games', label: 'Game Booster' },
              { id: 'editing', label: 'Editing Suites' },
              { id: 'plugins', label: 'Plugins & Presets' },
              { id: 'gear', label: 'Gamer Gear' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.id 
                    ? 'bg-white text-black font-extrabold shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                    : 'bg-neutral-900/60 border border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-500">
              <Search className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Search products & specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-white/30 rounded-xl text-xs text-white placeholder-neutral-500 font-mono outline-none transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, index) => {
              // Extract dynamically selected color and thumbnail picture override
              const activeColor = prod.colors ? (selectedColors[prod.id] || prod.colors[0]) : undefined;
              const activeImage = activeColor ? activeColor.image : prod.image;

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.01, ease: "easeOut" }}
                  key={prod.id}
                  className={`group relative p-7 rounded-[2.5rem] bg-neutral-950 border border-neutral-900 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${prod.brandColor}`}
                >
                  {/* Premium Realistic Product Image Cover */}
                  <div className="relative h-56 rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden mb-6 group-hover:border-white/15 transition-all">
                    {/* Background faint gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                    
                    {/* Live Image Rendering */}
                    <img 
                      src={activeImage} 
                      alt={prod.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Top corner watermark tags */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[8px] font-mono tracking-widest text-[#949ba4] uppercase font-bold">PREVIEW REAL</span>
                    </div>

                    {activeColor && (
                      <div className="absolute bottom-4 right-4 z-20 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white">
                        Color: {activeColor.name}
                      </div>
                    )}
                  </div>

                  {/* Product Info Block */}
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                        {prod.categoryLabel}
                      </span>
                      {prod.tag && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-white px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                          {prod.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-200">
                      {prod.name}
                    </h3>
                    
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4 min-h-[48px]">
                      {prod.description}
                    </p>

                    {/* Multi-Color Selection Swatches if colors exist */}
                    {prod.colors && prod.colors.length > 0 && (
                      <div className="mb-4">
                        <div className="text-[10px] text-neutral-500 font-mono mb-2 uppercase tracking-wider">Available Colors:</div>
                        <div className="flex items-center gap-2">
                          {prod.colors.map((color) => {
                            const isSelected = activeColor?.hex === color.hex;
                            return (
                              <button
                                key={color.hex}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedColors(prev => ({ ...prev, [prod.id]: color }));
                                }}
                                className={`w-7 h-7 rounded-full border-2 cursor-pointer transition-all ${
                                  isSelected ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
                                }`}
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Compatibility Specs */}
                    <div className="p-3 bg-black/60 border border-neutral-900 rounded-xl mb-4 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                      <span>COMPATIBLE WITH</span>
                      <span className="text-white font-bold uppercase">{prod.spec}</span>
                    </div>

                    {/* Key features */}
                    <ul className="space-y-2 mb-6 border-t border-neutral-900 pt-4">
                      {prod.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-neutral-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Tag & Add-To-Cart CTA details */}
                  <div className="border-t border-neutral-900 pt-4 flex items-center justify-between mt-auto text-left gap-2">
                    <div>
                      <div className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase">Target Tariff</div>
                      <div className="text-2xl font-black text-white mt-0.5">
                        {prod.price === 0 ? (
                          <span className="text-emerald-400 tracking-tight">{prod.priceLabel || 'FREE'}</span>
                        ) : (
                          `$${prod.price}`
                        )}
                      </div>
                    </div>

                    {/* Interactive Add to Cart button */}
                    <button 
                      onClick={() => addToCart(prod)}
                      className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer border border-blue-500 active:scale-95"
                    >
                      <ShoppingCart className="w-4 h-4 text-white" /> Add To Cart
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Result Notification */}
        {filteredProducts.length === 0 && (
          <div className="p-16 border border-white/5 bg-neutral-950/40 rounded-[2.5rem] text-center max-w-lg mx-auto my-12">
            <Info className="w-10 h-10 text-neutral-500 mx-auto mb-4" />
            <h4 className="text-white font-bold text-lg mb-1">No Matching Products</h4>
            <p className="text-sm text-neutral-500 font-mono">
              Unable to find products matching "{searchQuery}" under the selected filter category. Try refining your keywords.
            </p>
          </div>
        )}

        {/* Certified Safe Badging */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            <Shield className="w-4 h-4 text-neutral-400 animate-pulse" /> Certified Safe Optimization • anti-detect guaranteed
          </div>
        </div>

      </div>

      {/* Floating Sticky Cart Button (Viewport anchor) */}
      <AnimatePresence>
        {totalItemCount > 0 && !isCartOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 z-40 p-4 bg-white hover:bg-neutral-200 text-black rounded-full shadow-2xl flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-110 border border-white cursor-pointer"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-black" />
              <span className="absolute -top-2.5 -right-2.5 bg-blue-600 text-[10px] font-extrabold text-white rounded-full w-5 h-5 flex items-center justify-center">
                {totalItemCount}
              </span>
            </div>
            <span className="font-mono text-xs font-black select-none pr-1">Open Cart</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-out Shopping Cart Drawer Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop cover overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Sliding Drawer Body Container */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-neutral-950 border-l border-neutral-800 shadow-2xl z-50 flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-neutral-900 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingCart className="w-5 h-5 text-neutral-400" />
                  <h3 className="text-lg font-black text-white">Your Shopping Cart</h3>
                  <span className="bg-neutral-900 border border-white/10 px-2 py-0.5 rounded-full font-mono text-xs text-neutral-400">
                    {totalItemCount}
                  </span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-64 flex flex-col items-center justify-center text-center">
                    <ShoppingBag className="w-12 h-12 text-neutral-700 mb-4" />
                    <h4 className="text-white font-bold text-base mb-1">Your cart is empty</h4>
                    <p className="text-xs text-neutral-500 max-w-[250px]">
                      Add products from our catalog to get started.
                    </p>
                  </div>
                ) : (
                  cart.map((item, idx) => {
                    const itemImage = item.selectedColor ? item.selectedColor.image : item.product.image;
                    return (
                      <div 
                        key={`${item.product.id}-${item.selectedColor?.name || 'default'}`}
                        className="flex gap-4 p-4 bg-[#0a0a0a] border border-neutral-900 rounded-2xl relative group"
                      >
                        {/* Remove item absolute trash trigger icon */}
                        <button 
                          onClick={() => removeFromCart(item.product.id, item.selectedColor?.name)}
                          className="absolute top-4 right-4 p-1 hover:bg-red-500/10 text-neutral-500 hover:text-red-400 rounded transition-all cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        {/* Thumbnail image */}
                        <div className="w-20 h-20 rounded-xl bg-neutral-900 border border-white/5 overflow-hidden shrink-0">
                          <img 
                            src={itemImage} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Product details */}
                        <div className="flex-1 text-left pr-6">
                          <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                            {item.product.name}
                          </h4>
                          
                          {item.selectedColor && (
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <span 
                                className="w-2.5 h-2.5 rounded-full border border-white/20" 
                                style={{ backgroundColor: item.selectedColor.hex }}
                              />
                              <span className="text-[10px] text-neutral-400 font-mono">
                                {item.selectedColor.name}
                              </span>
                            </div>
                          )}

                          <div className="text-[11px] text-neutral-500 font-mono mt-2 uppercase">
                            Unit Price: {item.product.price === 0 ? 'FREE' : `$${item.product.price}`}
                          </div>

                          {/* Quantity adjustments row */}
                          <div className="flex items-center gap-3 mt-3">
                            <span className="text-[10px] uppercase font-mono text-neutral-500">Qty:</span>
                            <div className="flex items-center bg-neutral-950 border border-neutral-850 rounded-lg">
                              <button 
                                onClick={() => updateQuantity(item.product.id, item.selectedColor?.name, -1)}
                                className="p-1 hover:bg-neutral-900 text-neutral-400 hover:text-white rounded-l-lg transition-all cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-2 font-mono text-xs text-white text-center min-w-[24px]">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.product.id, item.selectedColor?.name, 1)}
                                className="p-1 hover:bg-neutral-900 text-neutral-400 hover:text-white rounded-r-lg transition-all cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer summary and direct Discord setup protocol */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-neutral-900 bg-[#060606] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-500 font-mono uppercase">SUBTOTAL VALUE</span>
                      <div className="text-sm font-mono text-neutral-400 mt-1">
                        {cart.length} unique items
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">
                        ${cartTotal}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button 
                      onClick={clearCart}
                      className="py-3.5 rounded-xl border border-neutral-800 hover:border-neutral-700 hover:bg-white/5 text-xs text-neutral-400 font-bold uppercase transition-all cursor-pointer"
                    >
                      Clear All
                    </button>
                    <button 
                      onClick={triggerCheckout}
                      className="py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Checkout Order</span> <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Dynamic Checkout order protocol code modal */}
      <AnimatePresence>
        {checkoutModal?.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-neutral-950 border border-neutral-800 p-8 md:p-10 rounded-[2.5rem] max-w-xl w-full text-center relative shadow-3xl"
            >
              {/* Close index modal */}
              <button 
                onClick={() => setCheckoutModal(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full text-neutral-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-6">
                <Sparkles className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-white mb-3">Order Protocol Generated!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your custom checkout protocol has been compiled. Please copy the code below, join our Official Discord Guild and paste this in a ticket to claim your items.
              </p>

              {/* Protocol copy code container */}
              <div className="mb-8 p-4 rounded-xl bg-neutral-900 border border-neutral-850 flex items-center justify-between text-left">
                <div>
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Protocol Serial Code</div>
                  <div className="font-mono text-base font-bold text-white mt-1 uppercase select-all">
                    {checkoutModal.protocolCode}
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(checkoutModal.protocolCode);
                    alert("Order Protocol code copied directly! join Discord and paste it.");
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/5 hover:border-white/10 text-xs font-mono text-white rounded-lg transition-all cursor-pointer"
                >
                  Copy Code
                </button>
              </div>

              {/* Summary itemized check list */}
              <div className="text-left border-t border-neutral-900 pt-6 mb-8 max-h-[140px] overflow-y-auto space-y-2 pr-2">
                <div className="text-xs text-neutral-500 font-mono uppercase mb-3">Itemized Compilation:</div>
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor?.name || 'default'}`} className="flex justify-between items-center text-xs">
                    <span className="text-white truncate max-w-[280px]">
                      {item.product.name} {item.selectedColor ? `(${item.selectedColor.name})` : ''} <span className="text-neutral-500">x{item.quantity}</span>
                    </span>
                    <span className="font-mono text-neutral-300 font-bold shrink-0">
                      {item.product.price === 0 ? 'FREE' : `$${item.product.price * item.quantity}`}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm pt-4 border-t border-neutral-900 font-bold text-white">
                  <span>Grand Total Cost:</span>
                  <span>${cartTotal}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setCheckoutModal(null)}
                  className="w-full py-4 rounded-xl border border-neutral-800 hover:border-neutral-700 text-xs text-neutral-400 font-bold uppercase transition-all cursor-pointer"
                >
                  Go Back
                </button>
                <a 
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setCheckoutModal(null);
                    setCart([]);
                  }}
                  className="w-full py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02]"
                >
                  Join & Paste in Ticket <ExternalLink className="w-4 h-4 text-black" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
