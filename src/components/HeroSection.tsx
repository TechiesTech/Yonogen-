import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Plane, Compass, GraduationCap, Briefcase } from 'lucide-react';
import { COUNTRIES_DATA, HERO_LANDMARKS, Country } from '../data/mockData';

interface HeroSectionProps {
  onOpenCallback: () => void;
  onOpenCounselling: () => void;
  onSelectCountry: (country: Country) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCallback,
  onOpenCounselling,
  onSelectCountry
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeCountryId, setActiveCountryId] = useState<string>('luxembourg');

  // Flipping words indices
  const [travelWordIdx, setTravelWordIdx] = useState<number>(0);
  const [exploreWordIdx, setExploreWordIdx] = useState<number>(0);
  const [eduWordIdx, setEduWordIdx] = useState<number>(0);
  const [jobWordIdx, setJobWordIdx] = useState<number>(0);

  const travelWords = [
    'Dream Destinations',
    'World Campuses',
    'Iconic Cities',
    'Global Horizons',
    'Overseas Universities'
  ];

  const exploreWords = [
    'Global Adventures',
    'Schengen Journeys',
    'Lifelong Memories',
    'World Expeditions',
    'Cultural Discovery'
  ];

  const eduWords = [
    '100% Merit Scholarships',
    'Top Global Degrees',
    'Zero Tuition in Europe',
    'Fast-Track Admissions',
    'Ivy League Mentorship'
  ];

  const jobWords = [
    'Healthcare & Nursing',
    'Tech & AI Roles',
    'German Hospital Careers',
    'Dubai Tax-Free Packages',
    'Global Engineering'
  ];

  const row1Countries = COUNTRIES_DATA.slice(0, 6);
  const row2Countries = COUNTRIES_DATA.slice(6);

  const handleCountryClick = (c: Country) => {
    setActiveCountryId(c.id);
    onSelectCountry(c);
  };

  // Flip text interval
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const flipTimer = setInterval(() => {
      setTravelWordIdx((prev) => (prev + 1) % travelWords.length);
      setExploreWordIdx((prev) => (prev + 1) % exploreWords.length);
      setEduWordIdx((prev) => (prev + 1) % eduWords.length);
      setJobWordIdx((prev) => (prev + 1) % jobWords.length);
    }, 2200);

    return () => clearInterval(flipTimer);
  }, []);

  // Automatic Slide Rotation (5 slides total, every 4 seconds)
  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden transition-all duration-700 select-none"
    >
      {/* ========================================================= */}
      {/* SLIDE 0: CURRENT HERO SECTION (Original Flagship Design)   */}
      {/* ========================================================= */}
      {activeSlide === 0 && (
        <div className="relative pt-0 pb-12 sm:pt-1 sm:pb-16 bg-gradient-to-b from-[#e8f1fc] via-[#f2f7fd] to-white animate-fade-in transition-opacity duration-700">
          {/* Sky Ambient Clouds & Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-sky-300/30 via-indigo-200/20 to-transparent blur-3xl -z-10 rounded-full" />
            <div className="absolute top-10 left-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Main Title matching Screenshot 1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight max-w-4xl mx-auto leading-[1.05]">
              Your <span className="font-editorial-italic font-normal">Global</span> Visa &amp; Migration <br className="hidden sm:inline" />
              Consultants in India.
            </h1>

            {/* Moving Pro-Level Radar Flight along Dotted Arch */}
            <div className="mt-1 sm:mt-2 max-w-5xl mx-auto relative px-2 pointer-events-none">
              <svg
                className="w-full h-12 sm:h-16 md:h-20 overflow-visible"
                viewBox="0 0 1000 140"
                fill="none"
              >
                <defs>
                  <linearGradient id="flightLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.3" />
                    <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.85" />
                    <stop offset="75%" stopColor="#6366f1" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                <g transform="translate(0, -18)">
                  <path
                    id="airplaneFlightArc"
                    d="M 30 77 Q 500 -33 970 77"
                    stroke="url(#flightLineGrad)"
                    strokeWidth="1.75"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />

                  <g>
                    <animateMotion dur="8.5s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#airplaneFlightArc" />
                    </animateMotion>

                    {/* Pro Radar Flight Icon */}
                    <g transform="translate(0, 0)">
                    <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.12">
                      <animate attributeName="r" values="8;18;8" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.25;0.05;0.25" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    <circle cx="0" cy="0" r="4" fill="#2563eb" opacity="0.4" filter="blur(2px)" />

                    <rect x="-1" y="-5.2" width="3.6" height="1.5" rx="0.75" fill="#1e293b" stroke="#ffffff" strokeWidth="0.4" />
                    <rect x="-1" y="3.7" width="3.6" height="1.5" rx="0.75" fill="#1e293b" stroke="#ffffff" strokeWidth="0.4" />

                    <path
                      d="M 13,0 C 12,-0.6 8.5,-1.1 4.5,-1.1 L 3,-1.1 L -1.8,-11.2 C -2.4,-11.8 -3.3,-11.8 -3.8,-11.3 L -4.1,-10.8 L -2,-1.1 L -7.2,-1.1 L -9.8,-5 C -10.2,-5.4 -10.8,-5.4 -11.2,-5 L -11.4,-4.6 L -10.1,-0.8 L -13,-0.5 C -13.6,-0.2 -13.8,0 -13.8,0 C -13.8,0 -13.6,0.2 -13,0.5 L -10.1,0.8 L -11.4,4.6 C -10.8,5.4 -10.2,5.4 -9.8,5 L -7.2,1.1 L -2,1.1 L -4.1,10.8 C -3.3,11.8 -2.4,11.8 -1.8,11.3 L 3,1.1 L 4.5,1.1 C 8.5,1.1 12,0.6 13,0 Z"
                      fill="#1d4ed8"
                      stroke="#ffffff"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                    />

                    <ellipse cx="8" cy="0" rx="1.2" ry="0.6" fill="#7dd3fc" />
                    <circle cx="-3.8" cy="-11" r="0.65" fill="#ef4444" />
                    <circle cx="-3.8" cy="11" r="0.65" fill="#22c55e" />
                    <circle cx="-13" cy="0" r="0.65" fill="#ffffff" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            {/* 5 Photo Tiles for PARIS, LONDON, CHINA, RUSSIA, SYDNEY */}
            <div className="-mt-8 sm:-mt-11 pt-1 pb-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto items-end justify-center">
                {HERO_LANDMARKS.map((landmark, idx) => {
                  const floatClasses = [
                    'animate-float-1',
                    'animate-float-2',
                    'animate-float-3',
                    'animate-float-4',
                    'animate-float-5'
                  ];
                  const heights = [
                    'h-60 sm:h-68',
                    'h-68 sm:h-76',
                    'h-60 sm:h-66',
                    'h-68 sm:h-76',
                    'h-60 sm:h-70'
                  ];

                  return (
                    <div
                      key={landmark.id}
                      className={`group relative rounded-3xl overflow-hidden text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-20 cursor-pointer border-2 border-white/90 ${floatClasses[idx % floatClasses.length]} ${heights[idx % heights.length]}`}
                      onClick={() => {
                        const country = COUNTRIES_DATA.find(c => c.name.toLowerCase() === landmark.country.toLowerCase()) || COUNTRIES_DATA[0];
                        handleCountryClick(country);
                      }}
                    >
                      <img
                        src={landmark.imageUrl}
                        alt={`${landmark.city} ${landmark.country}`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 group-hover:via-black/10 transition-colors" />

                      <div className="relative z-10 pt-2.5 px-2 flex justify-center">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase shadow-md backdrop-blur-md ${landmark.badgeBg}`}>
                          {landmark.city}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-2.5 z-10 text-center flex flex-col items-center">
                        <span className="text-[11px] sm:text-xs font-bold text-white drop-shadow-md">
                          {landmark.country}
                        </span>
                        <span className="text-[10px] text-white/80 font-medium mt-0.5 line-clamp-1">
                          {landmark.id === 'paris' ? 'France · Schengen' :
                           landmark.id === 'london' ? 'UK · Top Global Unis' :
                           landmark.id === 'china' ? 'Asia · Low Tuition' :
                           landmark.id === 'russia' ? 'Top Medical Academies' :
                           'Australia · Post-Study PSW'}
                        </span>
                        <div className="mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-white/90 text-slate-900 px-2.5 py-1 rounded-full shadow-sm">
                            Explore <ArrowUpRight className="w-2.5 h-2.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Country Selector Pills */}
            <div className="mt-6 max-w-4xl mx-auto space-y-2">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {row1Countries.map((c) => {
                  const isActive = activeCountryId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => handleCountryClick(c)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm ${
                        isActive
                          ? 'bg-purple-100/90 text-purple-900 border border-purple-300 ring-2 ring-purple-400/20 shadow-md font-semibold'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <img src={c.flagUrl} alt="" className="w-5 h-5 rounded-full object-cover shadow-xs border border-white" />
                      <span>{c.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {row2Countries.map((c) => {
                  const isActive = activeCountryId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => handleCountryClick(c)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm ${
                        isActive
                          ? 'bg-purple-100/90 text-purple-900 border border-purple-300 ring-2 ring-purple-400/20 shadow-md font-semibold'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <img src={c.flagUrl} alt="" className="w-5 h-5 rounded-full object-cover shadow-xs border border-white" />
                      <span>{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SLIDE 1: TRAVEL & FLIGHTS (Title directly on image)        */}
      {/* ========================================================= */}
      {activeSlide === 1 && (
        <div className="relative min-h-[calc(100svh-4rem)] px-4 py-8 sm:py-10 flex items-center justify-center overflow-hidden animate-fade-in transition-opacity duration-700">
          {/* Simple, Pure Travel Photo (No box background) */}
          <div
            className="absolute inset-0 bg-center"
            style={{
              backgroundImage: "url('/images/hero-slide-2.jpg')",
              backgroundSize: '100% 100%'
            }}
          />

          {/* Headings & Title directly on the Image */}
          <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 text-center">
            <div className="inline-block mb-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-lg">
                <Plane className="w-4 h-4 text-sky-400" />
                International Student Travel &amp; Flight Desk
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Fly Seamlessly to Your <br />
              <span className="animate-text-flip font-editorial-italic font-bold text-sky-300 mx-2 inline-block">
                {travelWords[travelWordIdx]}
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
              Discounted student flight airfares, extra 40kg baggage allowances, multi-currency forex cards, and verified airport pickups in 30+ countries.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenCallback}
                className="px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                <Plane className="w-4 h-4" /> Plan Student Flight &amp; Travel
              </button>
              <button
                onClick={onOpenCounselling}
                className="px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm border border-white/50 shadow-lg transition-all active:scale-95"
              >
                Pre-Departure Checklist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SLIDE 2: GLOBAL EXPLORATION (Title directly on image)      */}
      {/* ========================================================= */}
      {activeSlide === 2 && (
        <div className="relative min-h-[calc(100svh-4rem)] px-4 py-8 sm:py-10 flex items-center justify-center overflow-hidden animate-fade-in transition-opacity duration-700">
          {/* Simple, Pure World Landmark Photo */}
          <div
            className="absolute inset-0 bg-center"
            style={{
              backgroundImage: "url('/images/hero-slide-3.jpg')",
              backgroundSize: '100% 100%'
            }}
          />

          {/* Headings & Title directly on the Image */}
          <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 text-center">
            <div className="inline-block mb-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-lg">
                <Compass className="w-4 h-4 text-amber-400" />
                World Exploration &amp; Global Student Life
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Turn Every Semester into <br />
              <span className="animate-text-flip font-editorial-italic font-bold text-amber-300 mx-2 inline-block">
                {exploreWords[exploreWordIdx]}
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
              Experience 27 European Schengen nations with one visa, travel with student Eurail passes, and explore iconic destinations while earning your degree.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenCallback}
                className="px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                <Compass className="w-4 h-4" /> Explore Student Travel Perks
              </button>
              <button
                onClick={onOpenCounselling}
                className="px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm border border-white/50 shadow-lg transition-all active:scale-95"
              >
                Connect with Travel Specialist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SLIDE 3: EDUCATION & UNIVERSITIES (Title directly on image)*/}
      {/* ========================================================= */}
      {activeSlide === 3 && (
        <div className="relative min-h-[calc(100svh-4rem)] px-4 py-4 sm:py-6 flex items-center justify-center overflow-hidden animate-fade-in transition-opacity duration-700">
          {/* Simple, Pure University Campus Photo */}
          <div
            className="absolute inset-0 bg-center"
            style={{
              backgroundImage: "url('/images/hero-slide-4.jpg')",
              backgroundSize: '100% 100%'
            }}
          />

          {/* Headings & Title directly on the Image */}
          <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 text-center">
            <div className="inline-block mb-3">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-lg">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                Global University Admissions &amp; Elite Degrees
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Unlock Global Education with <br />
              <span className="animate-text-flip font-editorial-italic font-bold text-emerald-300 mx-2 inline-block">
                {eduWords[eduWordIdx]}
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
              Direct institutional tie-ups across Australia, UK, Germany, Canada, and Ireland. Secure up to 100% scholarships and express 14-day offer letters.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenCallback}
                className="px-8 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" /> Explore Top Universities
              </button>
              <button
                onClick={onOpenCounselling}
                className="px-7 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm border border-white/50 shadow-lg transition-all active:scale-95"
              >
                Check Scholarship Eligibility
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SLIDE 4: JOBS & CAREERS (Title directly on image)          */}
      {/* ========================================================= */}
      {activeSlide === 4 && (
        <div className="relative min-h-[calc(100svh-4rem)] px-4 py-4 sm:py-6 flex items-center justify-center overflow-hidden animate-fade-in transition-opacity duration-700">
          {/* Simple, Pure Modern Global Professional Skyline Photo */}
          <div
            className="absolute inset-0 bg-center"
            style={{
              backgroundImage: "url('/images/hero-slide-5.jpg')",
              backgroundSize: '100% 100%'
            }}
          />

          {/* Headings & Title directly on the Image */}
          <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 text-center">
            <div className="inline-block mb-3">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-lg">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                International Careers &amp; Direct Employer Placements
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Launch High-Paying Careers in <br />
              <span className="animate-text-flip font-editorial-italic font-bold text-cyan-300 mx-2 inline-block">
                {jobWords[jobWordIdx]}
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
              Direct employer hospital contracts for nurses and doctors in Germany starting from €3,200/month, plus tax-free engineering and tech roles in Dubai.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenCallback}
                className="px-8 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" /> Apply for Overseas Jobs
              </button>
              <button
                onClick={onOpenCounselling}
                className="px-7 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm border border-white/50 shadow-lg transition-all active:scale-95"
              >
                Free Resume Assessment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discrete, Clean Slide Indicators at Bottom for all 5 Slides */}
      <div className="absolute bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2 pointer-events-auto">
        {[0, 1, 2, 3, 4].map((idx) => {
          const isActive = activeSlide === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                isActive
                  ? activeSlide === 0
                    ? 'w-8 bg-indigo-600 shadow-md'
                    : 'w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                  : activeSlide === 0
                  ? 'w-2 bg-slate-300 hover:bg-slate-400'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
