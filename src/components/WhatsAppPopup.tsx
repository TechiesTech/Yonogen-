import React, { useState, useEffect } from 'react';
import { ArrowRight, X, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/919703962596?text=%F0%9F%91%8B%20Hello%20YOLOgen%20Consultant%20team%2C%20I%E2%80%99m%20looking%20for%20visa%20consultancy.%20Could%20you%20please%20share%20the%20visa%20categories%20you%20assist%20with%2C%20including%20study%2C%20work%2C%20visitor%2C%20business%2C%20and%20migration%20visas%2C%20and%20explain%20how%20to%20get%20started%3F%20Thank%20you.';

export const WhatsAppPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // 3-second popup trigger
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <aside aria-label="WhatsApp support" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 max-w-[90vw] sm:max-w-sm">
      {!isDismissed ? (
        <div
          role="dialog"
          aria-label="WhatsApp quick chat"
          className="relative bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 shadow-2xl border border-purple-100 ring-1 ring-purple-500/10 transition-all duration-500 transform animate-fade-in"
        >
          {/* Close / Minimize button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Dismiss WhatsApp popup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header with Advisor info */}
          <div className="flex items-center gap-3 mb-3 pr-6">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">YOLOgen Advisor</span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                  Online
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-700 font-medium mb-3.5 leading-snug">
            Need quick guidance on study, work, or visitor visas? <br />
            <span className="text-purple-700 font-bold">WhatsApp us to know more!</span>
          </p>

          {/* WhatsApp CTA Button matching screenshot */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#830dfa] hover:bg-[#700bd8] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-purple-500/25 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830dfa] focus-visible:ring-offset-2"
          >
            Chat with us on WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      ) : (
        /* Floating mini button when dismissed */
        <button
          onClick={() => setIsDismissed(false)}
          className="group relative flex items-center gap-2.5 rounded-full bg-[#830dfa] hover:bg-[#700bd8] text-white p-3.5 sm:px-5 sm:py-3 shadow-xl shadow-purple-500/30 transition-all hover:scale-105 active:scale-95"
          aria-label="Open WhatsApp chat"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#830dfa]" />
          </div>
          <span className="hidden sm:inline text-xs font-bold">WhatsApp Us</span>
        </button>
      )}
    </aside>
  );
};
