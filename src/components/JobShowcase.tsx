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
    // The container height determines how long the user scrolls to see all slides.
    // e.g., 4 slides = 400vh
    <section ref={containerRef} style={{ height: `${jobs.length * 100}vh` }} className="relative w-full bg-white">
      
      {/* Sticky Inner Container */}
      <div 
        className="sticky top-0 h-screen min-h-[700px] w-full overflow-hidden flex flex-col lg:flex-row transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: activeJob.theme.background }}
      >
        
        {/* LEFT SIDE - Text Content */}
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 z-20 relative">
          
          {/* Slide Indicator */}
          <div className="absolute top-10 lg:top-16 left-6 sm:left-12 lg:left-20 flex items-center gap-4 text-sm font-bold tracking-widest text-slate-400">
            <span style={{ color: activeJob.theme.primary }} className="transition-colors duration-700">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-12 h-px bg-slate-300" />
            <span>{String(jobs.length).padStart(2, '0')}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeJob.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-xl mt-12 lg:mt-0"
            >
              <p 
                className="text-xs sm:text-sm font-black tracking-[0.2em] mb-4 uppercase transition-colors duration-700" 
                style={{ color: activeJob.theme.primary }}
              >
                {activeJob.category}
              </p>
              
              <h1 
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-2 uppercase transition-colors duration-700"
                style={{ color: activeJob.theme.text }}
              >
                {activeJob.country}
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 font-editorial-italic transition-colors duration-700" style={{ color: activeJob.theme.primary }}>
                {activeJob.title}
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-md font-medium">
                {activeJob.description}
              </p>
              
              <div className="mb-10">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-5 border-b border-slate-200/60 pb-3">
                  Job Details
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {activeJob.details.map((detail, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.2 }}
                      key={i} 
                      className="flex items-start text-sm text-slate-700 font-medium"
                    >
                      <span className="mr-2 mt-0 text-lg leading-none" style={{ color: activeJob.theme.primary }}>•</span>
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
                  className="bg-white/60 p-5 rounded-2xl border border-white mb-10 shadow-sm backdrop-blur-md"
                >
                  <h4 className="font-bold text-slate-900 mb-2">{activeJob.fee.title}</h4>
                  <div className="text-sm text-slate-600 space-y-1.5 font-medium">
                    {activeJob.fee.lines.map((line, i) => <div key={i}>{line}</div>)}
                  </div>
                </motion.div>
              )}

              <button 
                className="px-8 py-4 rounded-full text-white text-sm font-bold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: activeJob.theme.primary, boxShadow: `0 20px 25px -5px ${activeJob.theme.primary}40` }}
              >
                VIEW OPPORTUNITY
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-full relative flex items-center justify-center p-4 sm:p-8 lg:p-12 lg:pl-0 z-10">
          
          {/* Subtle gradient blending bridge for desktop */}
          <div 
            className="absolute inset-y-0 left-0 w-32 z-20 pointer-events-none hidden lg:block transition-colors duration-1000"
            style={{ background: `linear-gradient(to right, ${activeJob.theme.background}, transparent)` }}
          />
          
          <div className="w-full h-full relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100">
            <AnimatePresence>
              <motion.img
                key={activeJob.id}
                src={activeJob.image}
                alt={`${activeJob.country} ${activeJob.title}`}
                initial={{ opacity: 0, scale: 1.05, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -40 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-top lg:object-center"
              />
            </AnimatePresence>
            
            {/* Subtle inner shadow for premium feel */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem] pointer-events-none z-10" />
          </div>
        </div>

      </div>
    </section>
  );
};
