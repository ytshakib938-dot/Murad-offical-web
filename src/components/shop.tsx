import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ShoppingCart, Sparkles, Plus, Minus, Trash2, ArrowRight, Tag, Share2, UserPlus, Check, Flame, ShieldCheck, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imageGlow: string; // Tailwind class representing the glowing theme
  tag: string;
  rating: number;
  spec: string;
}

interface CartItem extends Product {
  quantity: number;
}

const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    name: "PC Optimization",
    category: "Official Premium Products for PC Only",
    description: "Ultimate system latency reduction, OS de-bloating, registry adjustments, and RAM optimizations for pristine gaming experiences.",
    price: 100,
    imageGlow: "from-blue-500/20 to-indigo-500/10 border-blue-500/30",
    tag: "PC Only",
    rating: 4.9,
    spec: "PC and Phone Optimization",
  },
  {
    id: "prod-02",
    name: "Optimization for Free Fire",
    category: "Official Premium Products for PC Only",
    description: "Special headshot sensitivity configurations, engine boosting, and registry tuning tailored specifically for Free Fire game files.",
    price: 10,
    imageGlow: "from-red-500/20 to-orange-500/10 border-red-500/30",
    tag: "Free Fire Only",
    rating: 4.8,
    spec: "PC and Phone Optimization",
  },
  {
    id: "prod-03",
    name: "PC Free Fire Cenci",
    category: "Official Premium Products for PC Only",
    description: "Premium custom sensitivity and DPI register settings designed to lock onto your opponents' heads seamlessly on PC Free Fire.",
    price: 5,
    imageGlow: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
    tag: "Sens Files",
    rating: 4.9,
    spec: "PC and Phone Optimization",
  },
  {
    id: "prod-04",
    name: "PC Headshot Optimization",
    category: "Official Premium Products for PC Only",
    description: "High-tier aim-stability master tweaks to achieve maximum headshot rates and minimum weapon motion on PC setups.",
    price: 20,
    imageGlow: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    tag: "Aim Tool",
    rating: 5.0,
    spec: "PC and Phone Optimization",
  },
  {
    id: "prod-05",
    name: "Phone Optimization",
    category: "Official Premium Products for Phone Only",
    description: "Device-safe memory cleaning, performance governor overclock, and battery de-throttling profiles for smoother mobile gaming.",
    price: 10,
    imageGlow: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    tag: "Phone Only",
    rating: 4.7,
    spec: "PC and Phone Optimization",
  },
  {
    id: "prod-06",
    name: "Phone Headshot Settings and Aim Bot Product",
    category: "Official Premium Products for Phone Only",
    description: "Expert DPI modifications, screen responsiveness tweaks, and optimized touch latency controls for dominant headshot tracking.",
    price: 10,
    imageGlow: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30",
    tag: "Aimbot Setting",
    rating: 4.8,
    spec: "PC and Phone Optimization",
  }
];

export function ShopSection() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [activeCoupon, setActiveCoupon] = useState<string | null>(null);
  const [couponInput, setCouponInput] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'biometric' | 'success'>('idle');
  const [copiedReferral, setCopiedReferral] = useState(false);

  // Helper calculation for referral discounts (each verified user referral rewards a 5% off up to 25%)
  const referralDiscountPct = Math.min(referralCount * 5, 25);

  const discountedProductPrice = (price: number) => {
    let finalPrice = price;
    if (activeCoupon === 'MURAD_OFFICIAL_10') {
      finalPrice *= 0.9; // 10% coupon
    }
    if (referralDiscountPct > 0) {
      finalPrice *= (1 - referralDiscountPct / 100);
    }
    return Math.round(finalPrice);
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + discountedProductPrice(item.price) * item.quantity, 0);
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Open cart to provide instant visual reinforcement
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponInput.toUpperCase() === 'MURAD_OFFICIAL_10') {
      setActiveCoupon('MURAD_OFFICIAL_10');
      setCouponInput('');
    } else {
      alert("Invalid code. Try entering: MURAD_OFFICIAL_10");
    }
  };

  const handleCopyReferral = () => {
    setCopiedReferral(true);
    setTimeout(() => setCopiedReferral(false), 2000);
  };

  const simulateReferral = () => {
    setReferralCount((prev) => prev + 1);
  };

  const runCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutStep('biometric');
    // Simulate biometric futuristic sequence
    setTimeout(() => {
      setCheckoutStep('success');
      setCart([]);
    }, 3800);
  };

  return (
    <section id="shop" className="py-32 relative border-t border-white/5 bg-[#070707] overflow-hidden">
      {/* Dynamic spatial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-xs font-mono text-blue-400 mb-6 border border-blue-500/20 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> Murad Official Portal
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
              PC & Phone Optimization
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              PC and Phone Optimization. Instantly get the lowest input latency, boosted game frame rates, and precision Free Fire headshot settings.
            </p>
          </div>

          {/* Cart Trigger button */}
          <button 
            id="view-cart-btn"
            onClick={() => setIsCartOpen(true)}
            className="self-start md:self-auto relative inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer group"
          >
            <ShoppingCart className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span>Interactive Cart</span>
            {cart.length > 0 && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 items-start">
          
          {/* Main Products Grid (Takes 3 columns on desktop) */}
          <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((prod) => {
              const basePrice = prod.price;
              const curPrice = discountedProductPrice(basePrice);
              const priceModified = curPrice < basePrice;

              return (
                <div 
                  key={prod.id} 
                  className={`group relative p-6 rounded-[2rem] bg-white/[0.01] border backdrop-blur-sm hover:bg-white/[0.02] hover:border-white/15 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.2)]`}
                >
                  {/* Subtle color flare based on product theme */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${prod.imageGlow} blur-2xl group-hover:blur-xl transition-all duration-500 opacity-60`} />

                  <div>
                    {/* Header with tag and rating */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 font-mono tracking-wider">
                        {prod.category}
                      </span>
                      {prod.tag && (
                        <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 rounded-full">
                          <Flame className="w-3.5 h-3.5" /> {prod.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    {/* Specifications */}
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl mb-6 font-mono text-[11px] text-neutral-500">
                      SYSTEM SPEC: <span className="text-neutral-300">{prod.spec}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6 flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-xs text-neutral-500 font-mono">INVESTMENT VECTOR</div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl font-extrabold text-white tracking-tight">${curPrice}</span>
                        {priceModified && (
                          <span className="text-sm text-neutral-500 line-through">${basePrice}</span>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={() => addToCart(prod)}
                      className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white cursor-pointer hover:scale-[1.03]"
                    >
                      <Plus className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Multiplier Panel & Coupon simulation (Takes 1 column on desktop) */}
          <div className="xl:col-span-1 space-y-6">
            
            {/* Live User-Acquisition Multiplier Box */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-b from-blue-500/10 to-purple-500/5 border border-blue-500/20 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-xl rounded-full" />
              
              <div className="flex items-center gap-2 mb-4">
                <UserPlus className="w-5 h-5 text-blue-400" />
                <h4 className="font-bold text-white tracking-tight">Referral Growth Grid</h4>
              </div>
              
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                Spread Murad Official to acquire active users and earn stacked discounts directly! **Get 5% off items for each referred user (Max 25%).**
              </p>

              {/* Progress Bar of referrals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400">YOUR VERIFIED REFERRALS</span>
                  <span className="text-blue-400 font-bold">{referralCount} users</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"
                    style={{ width: `${(referralCount / 5) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>0% off</span>
                  <span>10% off</span>
                  <span>25% off max</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <button 
                  onClick={simulateReferral}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white tracking-wider uppercase transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-purple-400 group-hover:scale-115 transition-transform" />
                  Simulate New User Referral
                </button>
                
                <button 
                  onClick={handleCopyReferral}
                  className="w-full py-2.5 text-center text-[11px] font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedReferral ? "✓ Ref link generated!" : "Copy unique dynamic node invite Link"}
                </button>
              </div>
            </div>

            {/* Smart Coupon code helpful tip Box */}
            <div className="p-6 rounded-[2rem] bg-white/[0.01] border border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-purple-400" />
                <h5 className="font-bold text-xs text-white tracking-widest uppercase">Secret Commerce Keys</h5>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Use checkout coupon code <span className="text-blue-400 font-mono font-bold">MURAD_OFFICIAL_10</span> for a custom 10% developer reduction discount.
              </p>
              <div className="text-[10px] text-neutral-500 font-mono">
                *Coupons stack with referral rewards for maximum yields.
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Slide-out Interactive Cart Drawer Side Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop wrapper */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Main drawer content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-50 p-6 flex flex-col justify-between shadow-2xl font-sans"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-bold text-white tracking-tight">Active Grid Cart</h3>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* List of Cart Items */}
                {cart.length === 0 ? (
                  <div className="py-20 text-center">
                    <ShoppingCart className="w-12 h-12 text-neutral-600 mx-auto mb-4 animate-bounce" />
                    <p className="text-neutral-400 font-medium">Your grid cart is empty</p>
                    <p className="text-xs text-neutral-600 max-w-xs mx-auto mt-2 leading-relaxed">
                      Inject neural assets from our grid catalogue to unlock automated conversion benefits immediately.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-1">
                    {cart.map((item) => {
                      const finalItemPrice = discountedProductPrice(item.price);
                      return (
                        <div 
                          key={item.id}
                          className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4 justify-between transition-colors hover:bg-white/[0.03]"
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                            </div>
                            <p className="text-[11px] text-neutral-500 font-mono mb-2">{item.category}</p>
                            
                            <div className="flex items-center gap-3 mt-1">
                              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2 py-0.5">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="text-[10px] text-neutral-400 hover:text-white cursor-pointer px-1 py-0.5"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs text-white font-mono font-bold px-1">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="text-[10px] text-neutral-400 hover:text-white cursor-pointer px-1 py-0.5"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <span className="text-xs text-neutral-400 font-mono">
                                ${finalItemPrice} each
                              </span>
                            </div>
                          </div>

                          <div className="text-right flex flex-col justify-between items-end h-full min-h-[60px]">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-neutral-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-bold text-white font-mono mt-2">
                              ${finalItemPrice * item.quantity}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bottom calculations & Checkout triggers */}
              <div className="border-t border-white/5 pt-6 bg-transparent mt-auto space-y-4">
                
                {/* Applied Discounts breakdown */}
                {cart.length > 0 && (
                  <div className="space-y-2 bg-white/[0.01] p-4 rounded-2xl border border-white/5">
                    <div className="flex justify-between text-xs text-neutral-400">
                      <span>Referral discount stack:</span>
                      <span className="text-green-400 font-mono">-{referralDiscountPct}%</span>
                    </div>
                    {activeCoupon && (
                      <div className="flex justify-between text-xs text-neutral-400">
                        <span>Coupon applied:</span>
                        <span className="text-blue-400 font-mono font-bold">-10% (MURAD_OFFICIAL_10)</span>
                      </div>
                    )}

                    {/* Promo Input Box */}
                    {!activeCoupon && (
                      <div className="flex gap-2 mt-3 pt-3 border-t border-white/5">
                        <input 
                          type="text"
                          placeholder="PROMO CODE"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white uppercase focus:outline-none focus:border-blue-500/50 font-mono"
                        />
                        <button 
                          onClick={applyCoupon}
                          className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs text-white font-semibold cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-neutral-400">
                  <span>Secured compute paths:</span>
                  <span className="text-white font-mono">Quantum HTTPS</span>
                </div>

                <div className="flex items-baseline justify-between pt-2">
                  <span className="text-base font-medium text-white">Estimated Grid Total:</span>
                  <span className="text-3xl font-extrabold text-blue-400 tracking-tight font-mono">
                    ${getSubtotal()}
                  </span>
                </div>

                {cart.length > 0 ? (
                  <button 
                    onClick={runCheckout}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500/90 text-white font-semibold text-sm tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Secure Biometric Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button 
                    disabled
                    className="w-full py-4 rounded-xl bg-white/5 text-neutral-600 font-semibold text-sm tracking-wider flex items-center justify-center gap-2 cursor-not-allowed border border-white/5"
                  >
                    <span>Add items to dispatch</span>
                  </button>
                )}

                <p className="text-[10px] text-center text-neutral-500 leading-normal font-mono">
                  Guaranteed safe transactions routed over verified cloud architecture with immediate dispatch routing.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Biometric Interactive Checkout Modal Simulation Overlay */}
      <AnimatePresence>
        {checkoutStep !== 'idle' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full bg-[#0d0d0d] border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl text-center font-sans"
            >
              {checkoutStep === 'biometric' ? (
                <div>
                  {/* Glowing pulse ring animation */}
                  <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" />
                    <span className="absolute inset-2 rounded-full border-2 border-purple-500/30 animate-pulse" />
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 border border-blue-500/50 flex items-center justify-center relative shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                      <ShoppingCart className="w-8 h-8 text-blue-400 animate-bounce" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Biometric Scan Initialized</h3>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">Verifying secure node gateway...</div>
                  
                  <div className="space-y-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl text-left font-mono text-xs text-neutral-400 max-h-[160px] overflow-hidden relative">
                    <p className="animate-pulse">▶ establishing safe ledger handshake...</p>
                    <p className="delay-300">▶ dynamic referral reward level calculated...</p>
                    <p className="delay-700 text-green-400">✓ biometric signature certified.</p>
                    <p className="delay-1000 text-purple-400">▶ dispatching micro-teleportation parcels...</p>
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
                  </div>

                  <div className="mt-8 text-neutral-500 text-[11px] leading-relaxed">
                    Please remain authenticated on your device. Secure keys are being generated in the backend of Murad Official.
                  </div>
                </div>
              ) : (
                <div className="py-6">
                  {/* Success checks */}
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <ShieldCheck className="w-10 h-10 text-emerald-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">System Dispatch Confirmed</h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto mb-6">
                    Autonomous commerce assets have been provisioned successfully! Your dynamic yield vectors are now online.
                  </p>

                  <div className="bg-white/[0.02] border border-emerald-500/30 p-4 rounded-2xl text-xs font-mono text-neutral-300 max-w-xs mx-auto mb-8 flex flex-col gap-2">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500">LEDGER ID:</span>
                      <span className="text-emerald-400">#M-GRID-{(Math.random() * 1000000).toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-neutral-500">STATUS:</span>
                      <span className="text-white">SHIPPED AT LIGHTSPEED</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setCheckoutStep('idle')}
                    className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-2xl cursor-pointer w-full text-sm"
                  >
                    Return to Portal
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
