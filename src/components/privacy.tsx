import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Clock, Mail, Check } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  // Prevent body scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-3xl h-[85vh] md:h-[80vh] bg-gradient-to-b from-[#111] to-[#080808] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-white tracking-tight">Privacy Policy</h2>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    Last Updated: June 10, 2026
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="space-y-8 text-neutral-300 text-sm md:text-base leading-relaxed">
                <div>
                  <p className="text-white/95 font-medium mb-3 text-base">
                    Welcome to <span className="text-blue-400 font-semibold font-mono">Muradoffical.com</span>.
                  </p>
                  <p className="text-neutral-400">
                    We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information when you use our website.
                  </p>
                </div>

                {/* Section: Information We Collect */}
                <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                  <h3 className="text-sm uppercase tracking-widest font-mono text-blue-400 font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                    Information We Collect
                  </h3>
                  <p className="text-neutral-400 mb-4 text-xs md:text-sm">We may collect:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-200 font-medium">
                    {[
                      'Name',
                      'Email address',
                      'IP address',
                      'Browser information',
                      'Form submissions and custom requests'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: How We Use Your Information */}
                <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full" />
                  <h3 className="text-sm uppercase tracking-widest font-mono text-blue-400 font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                    How We Use Your Information
                  </h3>
                  <p className="text-neutral-400 mb-4 text-xs md:text-sm">We use collected information to:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-200 font-medium">
                    {[
                      'Provide and improve our services',
                      'Respond to inquiries',
                      'Send updates and notifications',
                      'Protect against fraud and abuse',
                      'Analyze website performance'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: Cookies */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Cookies</h3>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    Our website may use cookies to improve user experience and analyze website traffic. You can disable cookies through your browser settings.
                  </p>
                </div>

                {/* Section: Third-Party Services */}
                <div className="border-t border-white/5 pt-6">
                  <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Third-Party Services</h3>
                  <p className="text-neutral-400 mb-4 text-xs md:text-sm font-sans">We may use third-party services such as:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      'Google Analytics',
                      'Google AdSense',
                      'Payment processors',
                      'Social media integrations'
                    ].map((serv, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs font-mono font-medium text-neutral-300">
                        {serv}
                      </div>
                    ))}
                  </div>
                  <p className="text-neutral-500 text-xs mt-3 italic font-sans animate-pulse">
                    These services may collect information according to their own privacy policies.
                  </p>
                </div>

                {/* Section: Data Security */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Data Security</h3>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.
                  </p>
                </div>

                {/* Section: Children's Privacy */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Children's Privacy</h3>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children.
                  </p>
                </div>

                {/* Section: Changes to This Policy */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Changes to This Policy</h3>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                  </p>
                </div>

                {/* Section: Contact Us */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-white font-bold text-lg tracking-tight">Contact Us</h3>
                    <p className="text-neutral-400 text-xs md:text-sm mt-0.5">
                      If you have questions about this Privacy Policy, contact us at:
                    </p>
                  </div>
                  <a
                    href="mailto:shakibmurad@muradoffcail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-mono text-xs md:text-sm tracking-tight transition-all duration-200 self-start sm:self-center"
                  >
                    <Mail className="w-4 h-4" />
                    shakibmurad@muradoffcail.com
                  </a>
                </div>

                {/* Section: Consent */}
                <div className="bg-blue-500/5 border border-blue-500/10 p-4 rounded-xl text-center">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-mono mb-1">Your Consent</p>
                  <p className="text-sm text-neutral-200 font-medium">By using our website, you agree to this Privacy Policy.</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 border-t border-white/5 flex items-center justify-end bg-white/[0.01]">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
