import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, MessageCircle, Maximize2, X, Sparkles } from "lucide-react";

interface JobTheme {
  primary: string;
  background: string;
  text: string;
}

interface JobItem {
  id: string;
  country: string;
  category: string;
  title: string;
  image: string;
  description: string;
  details: string[];
  theme: JobTheme;
}

const jobs: JobItem[] = [
  {
    id: "albania-greenhouse",
    country: "ALBANIA",
    category: "WORK PERMIT",
    title: "GREENHOUSE",
    image: "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791475346/Greenhouse_Vacancy_in_Albania_gbd7um.png",
    description: "Exciting opportunities to work in the agricultural sector in Albania. We are recruiting dedicated workers for greenhouse operations.",
    details: [
      "Role: Warehouse / Greenhouse",
      "Age limit: 20–49 years",
      "Salary: 50,000 – 60,000",
      "Accommodation + Food: Provided",
      "Duty: 5–6 days",
      "Processing time: 2–3 months"
    ],
    theme: { primary: "#2F7D32", background: "#f0fdf4", text: "#022c22" }
  },
  {
    id: "slovakia-truck-driver",
    country: "SLOVAKIA",
    category: "WORK PERMIT",
    title: "TRUCK / TRAILER DRIVER",
    image: "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791475370/Slovakia_Truck_Driver_Recruitment_Poster_cijf9y.png",
    description: "Professional driving opportunities with established employers. Hit the road with lucrative truck driving positions across Europe.",
    details: [
      "Role: Truck / Trailer Driver",
      "Salary: 2000 – 2200 Euro",
      "Qualification: Minimum +2",
      "Contract: 2 Years",
      "Processing time: 3–4 months"
    ],
    theme: { primary: "#dc2626", background: "#fef2f2", text: "#450a0a" }
  },
  {
    id: "georgia-nursing",
    country: "GEORGIA",
    category: "JOB OPPORTUNITY",
    title: "NURSING PROFESSIONALS",
    image: "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791475347/Nursing_in_Georgia_efhuz0.png",
    description: "Advance your healthcare career with nursing opportunities in Georgia. We connect qualified healthcare professionals with top medical facilities.",
    details: [
      "Role: Registered Nurse",
      "Salary: Competitive Salary",
      "Qualification: B.Sc Nursing / GNM",
      "Experience: Relevant experience",
      "Processing: Fast-track"
    ],
    theme: { primary: "#830dfa", background: "#f8f0ff", text: "#3b0764" }
  },
  {
    id: "global-nursing",
    country: "GLOBAL",
    category: "CAREER OPPORTUNITY",
    title: "INTERNATIONAL NURSING",
    image: "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791475348/nursing_dybief.png",
    description: "Take your nursing career worldwide. Discover incredible nursing positions across Europe and beyond, offering competitive salaries.",
    details: [
      "Locations: UK, Germany, Europe",
      "Role: Staff & ICU Nurse",
      "Benefits: Relocation & Healthcare",
      "Support: Dedicated placement assistance"
    ],
    theme: { primary: "#0284c7", background: "#f0f9ff", text: "#0c4a6e" }
  }
];

const displayJobs = [...jobs, jobs[0]];
const CARD_HEIGHT = "390px";
const AUTO_SLIDE_DELAY = 3000;

export const JobShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [dimensions, setDimensions] = useState({ cardWidth: 260, gap: 20, isMobile: false, containerWidth: 1200 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width < 1024;
      setDimensions({
        cardWidth: isMobile ? Math.min(width - 80, 260) : width < 1280 ? 230 : 260,
        gap: isMobile ? 12 : 20,
        isMobile,
        containerWidth: width
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + jobs.length) % jobs.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % jobs.length);

  // Auto slider effect with 3s delay
  useEffect(() => {
    if (isPaused || lightboxImage) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, lightboxImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!(e.target instanceof Element) || !e.target.closest('#jobs')) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") e.preventDefault();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeJob = jobs[activeIndex];
  const cardStep = dimensions.cardWidth + dimensions.gap;
  const centerOffset = dimensions.isMobile ? (dimensions.containerWidth - dimensions.cardWidth - 32) / 2 : 0;
  const translateX = centerOffset - activeIndex * cardStep;

  return (
    <section
      id="jobs"
      className="relative w-full py-8 sm:py-16 lg:py-20 transition-colors duration-700 ease-in-out overflow-hidden"
      style={{ backgroundColor: activeJob.theme.background }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-25 transition-colors duration-700" style={{ backgroundColor: activeJob.theme.primary }} />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 transition-colors duration-700" style={{ backgroundColor: activeJob.theme.primary }} />

      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Active Opening Details */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 text-xs font-bold tracking-widest text-slate-400">
              <span style={{ color: activeJob.theme.primary }} className="transition-colors duration-500 font-mono text-base font-extrabold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="w-10 sm:w-12 h-0.5 bg-slate-300 rounded-full" />
              <span className="font-mono text-base font-medium">{String(jobs.length).padStart(2, "0")}</span>
            </div>

            <div className="min-h-110 flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJob.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="inline-block mb-2">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest"
                      style={{ backgroundColor: `${activeJob.theme.primary}18`, color: activeJob.theme.primary }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeJob.theme.primary }} />
                      {activeJob.category}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-1 uppercase leading-[0.95] transition-colors duration-500" style={{ color: activeJob.theme.text }}>
                    {activeJob.country}
                  </h2>

                  <h3 className="text-lg sm:text-2xl font-semibold mb-3 font-editorial-italic transition-colors duration-500" style={{ color: activeJob.theme.primary }}>
                    {activeJob.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md font-medium mb-4 sm:mb-5">
                    {activeJob.description}
                  </p>

                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3.5 sm:p-5 border border-slate-200/70 shadow-xs max-w-md mb-5">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2.5 flex items-center justify-between">
                      <span>Job Details</span>
                      <span className="text-[10px] font-semibold text-slate-400 font-sans lowercase">verified position</span>
                    </h4>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                      {activeJob.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: activeJob.theme.primary }} />
                          <span className="font-medium leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/919703962596?text=Hi%20YOLOgen,%20I'm%20interested%20in%20work%20permit%20opportunities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-xs transition-all hover:shadow-sm hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    Inquire on WhatsApp
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3 mt-4 sm:mt-7 justify-center lg:justify-start">
              <button onClick={handlePrev} aria-label="Previous" className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 px-1">
                {jobs.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className="transition-all duration-300 rounded-full cursor-pointer"
                    style={{
                      width: idx === activeIndex ? "22px" : "6px",
                      height: "6px",
                      backgroundColor: idx === activeIndex ? activeJob.theme.primary : "#cbd5e1"
                    }}
                  />
                ))}
              </div>

              <button onClick={handleNext} aria-label="Next" className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Cards Carousel */}
          <div className="lg:col-span-7 flex justify-start overflow-hidden rounded-3xl p-2 w-full">
            <motion.div
              className="flex items-start"
              style={{ gap: `${dimensions.gap}px`, height: CARD_HEIGHT }}
              animate={{ x: translateX }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {displayJobs.map((job, idx) => {
                const isActive = idx === activeIndex;
                const isNext = idx === activeIndex + 1;

                return (
                  <motion.div
                    key={`${job.id}-${idx}`}
                    onClick={() => !isActive && setActiveIndex(idx % jobs.length)}
                    className={`group relative shrink-0 rounded-[20px] overflow-hidden cursor-pointer transition-all duration-400 bg-white ${
                      isActive ? "ring-4 shadow-xl z-10" : isNext ? "opacity-90 shadow-md border border-slate-200/80" : "opacity-60 shadow-xs"
                    }`}
                    style={{
                      width: `${dimensions.cardWidth}px`,
                      height: CARD_HEIGHT,
                      borderColor: isActive ? activeJob.theme.primary : undefined,
                      boxShadow: isActive ? `0 20px 40px -12px ${job.theme.primary}40` : undefined
                    }}
                  >
                    <img src={job.image} alt={`${job.country} – ${job.title}`} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" width="260" height="390" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {job.country}
                      </span>
                      {isActive ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold text-white shadow-xs" style={{ backgroundColor: job.theme.primary }}>
                          <Sparkles className="w-2.5 h-2.5" /> Active
                        </span>
                      ) : isNext ? (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/80 text-slate-800 shadow-xs">Next →</span>
                      ) : null}
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                      <p className="text-[10px] uppercase tracking-widest text-slate-300 font-bold mb-0.5">{job.category}</p>
                      <h4 className="text-sm sm:text-base font-black leading-tight truncate">{job.title}</h4>
                      {isActive && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setLightboxImage(job.image); }}
                          className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 hover:text-white transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" /> View Full Flyer
                        </button>
                      )}
                    </div>

                    {!isActive && (
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                          Click to view
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxImage(null)} className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative max-w-2xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center">
              <button type="button" onClick={() => setLightboxImage(null)} aria-label="Close" className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
              <img src={lightboxImage} alt="Flyer" className="w-full h-auto max-h-[85vh] object-contain" decoding="async" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JobShowcase;