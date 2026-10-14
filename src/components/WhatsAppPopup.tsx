import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/919703962596?text=%F0%9F%91%8B%20Hello%20YOLOgen%20Consultant%20team%2C%20I%E2%80%99m%20looking%20for%20visa%20consultancy.%20Could%20you%20please%20share%20the%20visa%20categories%20you%20assist%20with%2C%20including%20study%2C%20work%2C%20visitor%2C%20business%2C%20and%20migration%20visas%2C%20and%20explain%20how%20to%20get%20started%3F%20Thank%20you.';

const POPUP_MESSAGES = [
  {
    id: 1,
    icon: '👋',
    prefix: 'Advisor:',
    text: 'Need guidance on Study, Work, or Visitor Visas?'
  },
  {
    id: 2,
    icon: '⚡',
    prefix: 'Hurry up!',
    text: 'Few 1-on-1 consultation slots left today.'
  },
  {
    id: 3,
    icon: '🎓',
    prefix: '2026 Intakes:',
    text: 'Scholarships & university admissions open now!'
  },
  {
    id: 4,
    icon: '💬',
    prefix: 'WhatsApp us:',
    text: 'Chat with our visa counselor to know more →'
  }
];

export const WhatsAppPopup: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isManuallyClosedRef = useRef(false);

  // Smooth open action
  const openBubble = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      setTimeout(() => setIsAnimating(true), 20);
    });
  };

  // Smooth close action
  const closeBubble = (callback?: () => void) => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      if (callback) callback();
    }, 350);
  };

  // Initial trigger after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isManuallyClosedRef.current) {
        openBubble();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Smooth open and close cycle across messages
  useEffect(() => {
    if (!isOpen || isManuallyClosedRef.current) return;

    // Display message for 4 seconds, then smoothly close and open next
    const timer = setTimeout(() => {
      // 1. Smoothly close
      setIsAnimating(false);

      // 2. Change message and smoothly open
      setTimeout(() => {
        if (!isManuallyClosedRef.current) {
          setCurrentIdx((prev) => (prev + 1) % POPUP_MESSAGES.length);
          setIsAnimating(true);
        }
      }, 400);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIdx, isOpen]);

  const currentMsg = POPUP_MESSAGES[currentIdx];

  return (
    <aside
      aria-label="WhatsApp live chat assistance"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none select-none"
    >
      {/* Compact Single Message Bubble placed directly ABOVE the WhatsApp Icon */}
      {isOpen && (
        <div
          className={`pointer-events-auto relative flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full py-2.5 px-3.5 sm:px-4 shadow-xl border border-purple-100 ring-1 ring-purple-500/10 max-w-[285px] sm:max-w-xs transition-all duration-350 ease-out transform cursor-default ${
            isAnimating
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-3 scale-95'
          }`}
        >
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-800 leading-tight min-w-0 cursor-default">
            <span className="text-base shrink-0">
              {currentMsg.icon}
            </span>
            <span className="truncate">
              <strong className="text-purple-700 font-bold mr-1">{currentMsg.prefix}</strong>
              <span className="font-medium text-slate-700">{currentMsg.text}</span>
            </span>
          </div>

          {/* Smooth Close Button */}
          <button
            onClick={() => {
              isManuallyClosedRef.current = true;
              closeBubble();
            }}
            className="shrink-0 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Speech bubble pointer arrow pointing DOWN to the WhatsApp button */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-purple-100" />
        </div>
      )}

      {/* Floating Circular Purple WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#830dfa] hover:bg-[#700bd8] text-white shadow-xl shadow-purple-600/35 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 shrink-0 cursor-pointer"
        aria-label="Chat with YOLOgen on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        {/* Active Green Notification Dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white ring-2 ring-emerald-500/20" />
      </a>
    </aside>
  );
};
