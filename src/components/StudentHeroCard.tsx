import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  "https://res.cloudinary.com/droqi9jl3/image/upload/v1791472393/557e5c61bc970fcf4aadd0eab9f28134_eai3vj.jpg",
  "https://res.cloudinary.com/droqi9jl3/image/upload/v1791472391/2130e3a334abf0e8becd745a46e6b08d_wcbjzt.jpg",
  "https://res.cloudinary.com/droqi9jl3/image/upload/v1791472392/18ef412b065c76b51966f14293930084_tswd5j.jpg",
  "https://res.cloudinary.com/droqi9jl3/image/upload/v1791472392/86ec50656b1aef024239f2cb38a65516_x1ninm.jpg",
];

const AVATARS = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
];

const StudentHeroCard: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setTimeout(() => setAnimating(false), 500);
  };

  // Auto-scroll every 3.5s
  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 3500);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-[380px] mx-auto select-none">

      {/* Soft ambient circle behind */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 w-[88%] aspect-square rounded-full pointer-events-none"
        style={{ background: "linear-gradient(135deg, #f8f0ff 0%, #e9edff 100%)" }}
      />

      {/* Main image frame — pill/stadium shape */}
      <div
        className="relative z-10 mx-auto overflow-hidden shadow-[0_24px_60px_rgba(131,13,250,0.14)]"
        style={{ width: "78%", height: "460px", borderRadius: "150px 150px 16px 16px" }}
      >
        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Student slide ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

        {/* Prev / Next arrows — overlaid on the image */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all hover:scale-110 active:scale-95"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 text-slate-700" />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all hover:scale-110 active:scale-95"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 text-slate-700" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                backgroundColor: i === current ? "#830dfa" : "rgba(255,255,255,0.7)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating stats card */}
      <div
        className="absolute z-20 left-1/2 -translate-x-1/2 w-[84%] bg-white rounded-2xl px-4 py-3
                   shadow-[0_14px_40px_rgba(0,0,0,0.13)] flex items-center gap-3"
        style={{ bottom: "32px", animation: "floatCard 4s ease-in-out infinite" }}
      >
        <div className="flex -space-x-2.5 shrink-0">
          {AVATARS.map((src, i) => (
            <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
          ))}
        </div>
        <div>
          <p className="text-base font-extrabold text-slate-900 leading-tight">50,000+</p>
          <p className="text-[11px] text-slate-500 whitespace-nowrap font-medium">Students placed globally</p>
        </div>
        <div className="ml-auto w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: "#830dfa" }} />
      </div>

      {/* Small floating badge — top right */}
      <div
        className="absolute z-20 right-0 top-16 bg-white rounded-xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] text-center"
        style={{ animation: "floatCard 5s ease-in-out infinite 1s" }}
      >
        <p className="text-lg font-extrabold text-slate-900 leading-none">98%</p>
        <p className="text-[10px] text-slate-500 font-semibold mt-0.5 whitespace-nowrap">Visa Success</p>
      </div>

    </div>
  );
};

export default StudentHeroCard;
