import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

const WHATSAPP_MESSAGE = `Hi YOLOgen, I'm reaching you seeking overseas guidance.

Name: [Your Name]
Target Country: [Country]
Best time to call: [Time]
Purpose: [Study, Job, Visa or Migration]

Please connect me with a consultant.`;

const WHATSAPP_URL = `https://wa.me/919703962596?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[310px] sm:w-[360px] max-w-[calc(100vw-2rem)] transition-all duration-300 ease-out transform ${
        isAnimating
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95'
      }`}
    >
      <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-br from-[#e8f1fc] via-[#f2f7fd] to-white border border-slate-200/80 shadow-[0_12px_36px_rgba(131,13,250,0.16)] overflow-hidden">

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 w-6 h-6 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-slate-700 shadow-xs transition-all hover:scale-105 active:scale-95"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* ── Row: Left image + Right text ── */}
        <div className="flex items-center gap-3 px-4 pt-4 pb-2.5 sm:px-5 sm:pt-5 sm:pb-3">

          {/* Left — landmarks image */}
          <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/droqi9jl3/image/upload/v1791471195/world-landmarks_jmsvvt.png"
              alt="World landmarks"
              className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
            />
          </div>

          {/* Right — rotating message */}
          <div className="flex-1 min-w-0 pr-2">
            <p className="text-xs sm:text-[13.5px] leading-snug text-slate-700">
              <span className="text-sm sm:text-base mr-1">{msg.icon}</span>{' '}
              <strong className="text-purple-700 font-bold">{msg.prefix}</strong>{' '}
              <span className="text-slate-600">{msg.text}</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-4 pb-3 sm:px-5 sm:pb-3.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#830dfa] hover:bg-[#700bd8] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <span>Chat with us</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 pb-3 sm:pb-3.5">
          {POPUP_MESSAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`block rounded-full transition-all duration-300 ${
                i === currentIdx
                  ? 'w-5 h-1.5 bg-purple-500'
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