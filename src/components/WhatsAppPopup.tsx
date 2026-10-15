import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/919703962596?text=%F0%9F%91%8B%20Hello%20YOLOgen%20Consultant%20team%2C%20I%E2%80%99m%20looking%20for%20visa%20consultancy.%20Could%20you%20please%20share%20the%20visa%20categories%20you%20assist%20with%2C%20including%20study%2C%20work%2C%20visitor%2C%20business%2C%20and%20migration%20visas%2C%20and%20explain%20how%20to%20get%20started%3F%20Thank%20you.';

const POPUP_MESSAGES = [
  {
    id: 1,
    icon: '👋',
    prefix: 'Need guidance',
    text: 'on Study, Work, or Visitor Visas?',
  },
  {
    id: 2,
    icon: '⚡',
    prefix: 'Hurry up!',
    text: 'Few 1-on-1 consultation slots left today.',
  },
  {
    id: 3,
    icon: '🎓',
    prefix: '2026 Intakes:',
    text: 'Scholarships & admissions open now!',
  },
  {
    id: 4,
    icon: '💬',
    prefix: 'Chat now:',
    text: 'Talk to our visa counselor today.',
  },
];

export const WhatsAppPopup: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isManuallyClosedRef = useRef(false);

  // Show after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isManuallyClosedRef.current) {
        setIsVisible(true);
        requestAnimationFrame(() => setTimeout(() => setIsAnimating(true), 20));
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Rotate messages every 4s
  useEffect(() => {
    if (!isVisible || isManuallyClosedRef.current) return;
    const timer = setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % POPUP_MESSAGES.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIdx, isVisible]);

  const handleClose = () => {
    isManuallyClosedRef.current = true;
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  const msg = POPUP_MESSAGES[currentIdx];

  return (
    <div
      role="complementary"
      aria-label="Quick chat assistance"
      className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 w-[260px] sm:w-[280px] transition-all duration-300 ease-out transform ${
        isAnimating
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95'
      }`}
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-[#e8f1fc] via-[#f2f7fd] to-white border border-slate-200/70 shadow-[0_8px_32px_rgba(131,13,250,0.12)] overflow-hidden">

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-20 w-5 h-5 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-slate-700 shadow-sm transition-all"
          aria-label="Close"
        >
          <X className="w-3 h-3" />
        </button>

        {/* ── Row: Left image + Right text ── */}
        <div className="flex items-center gap-2 px-3 pt-3 pb-2">

          {/* Left — small landmarks image */}
          <div className="shrink-0 w-[72px] h-[72px] flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/droqi9jl3/image/upload/v1791471195/world-landmarks_jmsvvt.png"
              alt="World landmarks"
              className="w-[72px] h-[72px] object-contain drop-shadow-md select-none pointer-events-none"
            />
          </div>

          {/* Right — rotating message */}
          <div className="flex-1 min-w-0 pr-4">
            <p className="text-[10px] sm:text-[11px] leading-snug text-slate-700">
              <span className="text-xs mr-0.5">{msg.icon}</span>{' '}
              <strong className="text-purple-700 font-bold">{msg.prefix}</strong>{' '}
              <span className="text-slate-600">{msg.text}</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-3 pb-2.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-[#830dfa] hover:bg-[#700bd8] text-white text-[11px] sm:text-[12px] font-bold shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            Chat with us <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1 pb-2.5">
          {POPUP_MESSAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`block rounded-full transition-all duration-300 ${
                i === currentIdx
                  ? 'w-4 h-1.5 bg-purple-500'
                  : 'w-1.5 h-1.5 bg-purple-200 hover:bg-purple-300'
              }`}
              aria-label={`Message ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
