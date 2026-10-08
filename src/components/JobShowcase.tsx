"use client";
import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "motion/react";

const jobs = [
  {
    id: "albania-greenhouse",
    country: "ALBANIA",
    category: "WORK PERMIT",
    title: "GREENHOUSE",
    image: "/images/posters/Greenhouse Vacancy in Albania.png",
    description: "Exciting opportunities to work in the agricultural sector in Albania. We are recruiting dedicated workers for greenhouse operations.",
    details: [
      "Role: Warehouse",
      "Age limit: 20–49 years",
      "Salary: 50,000 – 60,000",
      "Accommodation + Food: Provided",
      "Duty: 5–6 days",
      "Processing time: 2–3 months"
    ],
    fee: {
      title: "Processing fee: ₹4 LAKH",
      lines: [
        "Initial payment: ₹50K",
        "After visa: ₹3.5 LAKH"
      ]
    },
    theme: {
      primary: "#2F7D32", // Green
      background: "#f0fdf4", // Light green background (emerald-50)
      text: "#022c22",
    }
  },
  {
    id: "slovakia-truck-driver",
    country: "SLOVAKIA",
    category: "WORK PERMIT",
    title: "TRUCK / TRAILER DRIVER",
    image: "/images/posters/Slovakia Truck Driver Recruitment Poster.png",
    description: "Professional driving opportunities with established employers. Hit the road with lucrative truck driving positions across Europe.",
    details: [
      "Role: Truck / Trailer Driver",
      "Salary: 2000 – 2200 Euro",
      "Qualification: Minimum +2",
      "Contract: 2 Years",
      "Processing time: 3–4 months"
    ],
    fee: {
      title: "Processing fee: ₹8 LAKH",
      lines: [
        "+ Flight Ticket",
        "Security Deposit: ₹50K",
        "After visa: ₹7.5 Lakh"
      ]
    },
    theme: {
      primary: "#dc2626", // Red from the poster
      background: "#fef2f2", // Light red background
      text: "#450a0a",
    }
  },
  {
    id: "georgia-nursing",
    country: "GEORGIA",
    category: "JOB OPPORTUNITY",
    title: "NURSING PROFESSIONALS",
    image: "/images/posters/Nursing in Georgia.png",
    description: "Advance your healthcare career with nursing opportunities in Georgia. We connect qualified healthcare professionals with top medical facilities.",
    details: [
      "Role: Registered Nurse",
      "Salary: Competitive",
      "Qualification: B.Sc Nursing / GNM",
      "Experience required",
      "Fast-track processing"
    ],
    theme: {
      primary: "#830dfa", // Yonogen purple
      background: "#f8f0ff", // amber-50 (purple theme)
      text: "#3b0764",
    }
  },
  {
    id: "global-nursing",
    country: "GLOBAL",
    category: "CAREER OPPORTUNITY",
    title: "INTERNATIONAL NURSING",
    image: "/images/posters/nursing.png",
    description: "Take your nursing career worldwide. Discover incredible nursing positions across Europe and beyond, offering competitive salaries.",
    details: [
      "Various global locations",
      "Excellent benefits",
      "Global impact",
      "Dedicated placement support"
    ],
    theme: {
      primary: "#0ea5e9", // Sky blue
      background: "#f0f9ff", // Blue background
      text: "#0c4a6e",
    }
  }
];

export const JobShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0 to 1) to job index
    const index = Math.min(
      Math.floor(latest * jobs.length),
      jobs.length - 1
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeJob = jobs[activeIndex];

  return (
    <section
      ref={containerRef}
      style={{ height: `${jobs.length * 100}vh` }}
      className="relative w-full"
    >
      {/* Sticky viewport — stays fixed while user scrolls through slides */}
      <div
        className="sticky top-0 w-full h-dvh flex items-center justify-center transition-colors duration-1000 ease-in-out overflow-hidden"
        style={{ backgroundColor: activeJob.theme.background }}
      >
        {/* Centered container — 2-3% edge spacing, max-width capped */}
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ padding: 'clamp(12px, 2vw, 40px)' }}
        >
          <div className="w-full max-w-[1600px] h-full flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6 lg:gap-8 overflow-y-auto lg:overflow-hidden">

            {/* LEFT SIDE — Text Content */}
            <div className="w-full lg:w-[42%] shrink-0 flex flex-col justify-center py-8 sm:py-12 lg:py-8 px-2 sm:px-4 lg:px-6 xl:px-10">

              {/* Slide Indicator */}
              <div className="flex items-center gap-3 mb-5 lg:mb-6 text-xs sm:text-sm font-bold tracking-widest text-slate-400">
                <span style={{ color: activeJob.theme.primary }} className="transition-colors duration-700">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <div className="w-8 sm:w-12 h-px bg-slate-300" />
                <span>{String(jobs.length).padStart(2, '0')}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJob.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="max-w-lg"
                >
                  <p
                    className="text-[10px] sm:text-xs font-black tracking-[0.2em] mb-2 uppercase transition-colors duration-700"
                    style={{ color: activeJob.theme.primary }}
                  >
                    {activeJob.category}
                  </p>

                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-1 uppercase transition-colors duration-700 leading-[0.9]"
                    style={{ color: activeJob.theme.text }}
                  >
                    {activeJob.country}
                  </h1>

                  <h2
                    className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 font-editorial-italic transition-colors duration-700"
                    style={{ color: activeJob.theme.primary }}
                  >
                    {activeJob.title}
                  </h2>

                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-5 sm:mb-6 leading-relaxed max-w-md font-medium">
                    {activeJob.description}
                  </p>

                  <div className="mb-5 sm:mb-6">
                    <h3 className="text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest mb-2 sm:mb-3 border-b border-slate-200/60 pb-2">
                      Job Details
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 sm:gap-y-2 gap-x-4">
                      {activeJob.details.map((detail, i) => (
                        <motion.li
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          key={i}
                          className="flex items-start text-[11px] sm:text-xs lg:text-sm text-slate-700 font-medium"
                        >
                          <span className="mr-1.5 text-sm sm:text-base leading-none shrink-0" style={{ color: activeJob.theme.primary }}>•</span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {activeJob.fee && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/60 p-3 rounded-xl border border-white mb-5 shadow-sm backdrop-blur-md"
                    >
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{activeJob.fee.title}</h4>
                      <div className="text-[11px] sm:text-xs text-slate-600 space-y-0.5 font-medium">
                        {activeJob.fee.lines.map((line, i) => <div key={i}>{line}</div>)}
                      </div>
                    </motion.div>
                  )}

                  <button
                    className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: activeJob.theme.primary, boxShadow: `0 12px 20px -4px ${activeJob.theme.primary}40` }}
                  >
                    VIEW OPPORTUNITY
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE — Poster Container */}
            <div className="w-full lg:w-[48%] shrink-0 relative flex items-center justify-center lg:py-8">

              {/* Gradient bridge — blends poster edge into background on desktop */}
              <div
                className="absolute inset-y-0 left-0 w-24 z-20 pointer-events-none hidden lg:block transition-colors duration-1000"
                style={{ background: `linear-gradient(to right, ${activeJob.theme.background}, transparent)` }}
              />

              {/* Poster wrapper — premium container */}
              <div className="w-full h-[70vw] sm:h-[55vw] lg:h-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:shadow-[0_16px_48px_rgba(0,0,0,0.12)] bg-yellow">
                <AnimatePresence>
                  <motion.img
                    key={activeJob.id}
                    src={activeJob.image}
                    alt={`${activeJob.country} – ${activeJob.title}`}
                    initial={{ opacity: 0, scale: 1.04, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.04, x: -30 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </AnimatePresence>

                {/* Inner ring for premium feel */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] rounded-2xl sm:rounded-3xl pointer-events-none z-10" />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint — bottom center */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase opacity-40 pointer-events-none">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-5 bg-slate-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
