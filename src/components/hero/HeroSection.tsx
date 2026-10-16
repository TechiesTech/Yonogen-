import React, { lazy, Suspense, useState, useEffect } from "react";
import { Plane, Compass, GraduationCap, Briefcase } from "lucide-react";
import { HERO_LANDMARKS, Country, LandmarkCard } from "../../data/mockData";
import { LandmarkCarousel } from "./LandmarkCarousel";
import { CountryPillsRow } from "./CountryPillsRow";
import { HeroSlide } from "./HeroSlide";

const CountryDetailsModal = lazy(() =>
  import("../CountryDetailsModal").then((module) => ({ default: module.CountryDetailsModal })),
);

const HERO_WORDS = ["Global", "Trusted", "Premier", "Overseas", "Top-Rated"];
const TRAVEL_WORDS = [
  "Dream Destinations",
  "World Campuses",
  "Iconic Cities",
  "Global Horizons",
  "Overseas Universities",
];
const EXPLORE_WORDS = [
  "Global Adventures",
  "Schengen Journeys",
  "Lifelong Memories",
  "World Expeditions",
  "Cultural Discovery",
];
const EDU_WORDS = [
  "100% Merit Scholarships",
  "Top Global Degrees",
  "Zero Tuition in Europe",
  "Fast-Track Admissions",
  "Ivy League Mentorship",
];
const JOB_WORDS = [
  "Healthcare & Nursing",
  "Tech & AI Roles",
  "German Hospital Careers",
  "Dubai Tax-Free Packages",
  "Global Engineering",
];

const LANDMARKS_PER_PAGE = 5;
const TRAVEL_HERO_IMAGE =
  "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto,w_1200,c_scale/v1791485086/photo-1780584523927-8bc7f966637d_x2izyv.avif";
const TRAVEL_HERO_IMAGE_SRCSET = [
  TRAVEL_HERO_IMAGE.replace("w_1200", "w_960") + " 960w",
  TRAVEL_HERO_IMAGE + " 1200w",
  TRAVEL_HERO_IMAGE.replace("w_1200", "w_1600") + " 1600w",
].join(", ");

// Helper to optimize Cloudinary URLs for LCP & bandwidth performance
const optimizeCloudinaryUrl = (url: string, width = 500): string => {
  if (url.includes("cloudinary.com") && url.includes("/upload/")) {
    return url.replace(
      /\/upload\/(?:f_auto,q_auto\/)?/,
      `/upload/f_auto,q_auto,w_${width},c_scale/`,
    );
  }
  return url;
};

// Pre-optimize initial visible landmarks for the carousel
const OPTIMIZED_HERO_LANDMARKS = HERO_LANDMARKS.map((landmark) => ({
  ...landmark,
  imageUrl: optimizeCloudinaryUrl(landmark.imageUrl, 500),
}));

const FIRST_COUNTRY_ROW = OPTIMIZED_HERO_LANDMARKS.slice(0, 5);
const SECOND_COUNTRY_ROW = OPTIMIZED_HERO_LANDMARKS.slice(5, 10);

interface HeroSectionProps {
  onOpenCallback: () => void;
  onOpenCounselling: () => void;
  onSelectCountry?: (country: Country) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCallback,
  onOpenCounselling,
  onSelectCountry,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [landmarkPage, setLandmarkPage] = useState<number>(0);
  const [isLandmarksPaused, setIsLandmarksPaused] = useState<boolean>(false);
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkCard | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const landmarkPageCount = Math.ceil(
    OPTIMIZED_HERO_LANDMARKS.length / LANDMARKS_PER_PAGE,
  );
  const visibleLandmarks = OPTIMIZED_HERO_LANDMARKS.slice(
    landmarkPage * LANDMARKS_PER_PAGE,
    (landmarkPage + 1) * LANDMARKS_PER_PAGE,
  );

  const [heroWordIdx, setHeroWordIdx] = useState<number>(0);
  const [travelWordIdx, setTravelWordIdx] = useState<number>(0);
  const [exploreWordIdx, setExploreWordIdx] = useState<number>(0);
  const [eduWordIdx, setEduWordIdx] = useState<number>(0);
  const [jobWordIdx, setJobWordIdx] = useState<number>(0);

  // Flip text interval
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const flipTimer = setInterval(() => {
      setHeroWordIdx((prev) => (prev + 1) % HERO_WORDS.length);
      setTravelWordIdx((prev) => (prev + 1) % TRAVEL_WORDS.length);
      setExploreWordIdx((prev) => (prev + 1) % EXPLORE_WORDS.length);
      setEduWordIdx((prev) => (prev + 1) % EDU_WORDS.length);
      setJobWordIdx((prev) => (prev + 1) % JOB_WORDS.length);
    }, 2200);
    return () => clearInterval(flipTimer);
  }, []);

  // Automatic Slide Rotation
  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Automatic Landmarks Carousel Rotation
  useEffect(() => {
    if (
      landmarkPageCount < 2 ||
      isLandmarksPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = setInterval(() => {
      setLandmarkPage((page) => (page + 1) % landmarkPageCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [landmarkPageCount, isLandmarksPaused]);

  return (
    <section
      id="home"
      aria-label="Featured destinations and services"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement))
          setIsPaused(false);
      }}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setIsPaused(false);
      }}
      className="relative overflow-hidden transition-all duration-700 select-none flex flex-col justify-center w-full"
      style={{ minHeight: "calc(100vh - 5rem)" }}
    >
      {activeSlide === 0 && (
        <div
          className="relative py-15 sm:py-8 bg-linear-to-b from-[#e8f1fc] via-[#f2f7fd] to-white animate-fade-in transition-opacity duration-700 flex flex-col justify-center w-full"
          style={{ minHeight: "calc(100vh - 5rem)" }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 sm:w-300 h-87.5 sm:h-137.5 bg-linear-to-b from-sky-300/30 via-indigo-200/20 to-transparent blur-3xl -z-10 rounded-full" />
            <div className="absolute top-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-sky-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
          </div>

          <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center my-auto w-full">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight max-w-4xl mx-auto leading-[1.15]">
              Your{" "}
              <span
                key={heroWordIdx}
                className="animate-text-flip font-editorial-italic font-normal text-purple-600 inline-block mx-1"
              >
                {HERO_WORDS[heroWordIdx]}
              </span>{" "}
              Visa &amp; Migration <br className="hidden sm:inline" />
              Consultants in India.
            </h1>

            <div className="mt-1 max-w-5xl mx-auto relative px-2 pointer-events-none">
              <svg
                className="w-full h-8 sm:h-12 md:h-16 overflow-visible"
                viewBox="0 0 1000 140"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="flightLineGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
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
                    <animateMotion
                      dur="8.5s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#airplaneFlightArc" />
                    </animateMotion>
                    <g transform="translate(0, 0)">
                      <circle
                        cx="0"
                        cy="0"
                        r="14"
                        fill="#38bdf8"
                        opacity="0.12"
                      >
                        <animate
                          attributeName="r"
                          values="8;18;8"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.25;0.05;0.25"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle
                        cx="0"
                        cy="0"
                        r="4"
                        fill="#2563eb"
                        opacity="0.4"
                        filter="blur(2px)"
                      />
                      <rect
                        x="-1"
                        y="-5.2"
                        width="3.6"
                        height="1.5"
                        rx="0.75"
                        fill="#1e293b"
                        stroke="#ffffff"
                        strokeWidth="0.4"
                      />
                      <rect
                        x="-1"
                        y="3.7"
                        width="3.6"
                        height="1.5"
                        rx="0.75"
                        fill="#1e293b"
                        stroke="#ffffff"
                        strokeWidth="0.4"
                      />
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

            <div className="-mt-4 sm:-mt-8 pt-1 pb-2">
              <LandmarkCarousel
                visibleLandmarks={visibleLandmarks}
                landmarkPage={landmarkPage}
                landmarkPageCount={landmarkPageCount}
                onSelectLandmark={(landmark: LandmarkCard) => {
                  setSelectedLandmark(landmark);
                  setIsModalOpen(true);
                }}
                onPageChange={(newPage: number) => setLandmarkPage(newPage)}
                onPause={(paused: boolean) => setIsLandmarksPaused(paused)}
              />
            </div>

            <CountryPillsRow
              row1Countries={FIRST_COUNTRY_ROW}
              row2Countries={SECOND_COUNTRY_ROW}
              onCountryClick={(landmark: LandmarkCard) => {
                const matchedCountry = OPTIMIZED_HERO_LANDMARKS.find(
                  (l: LandmarkCard) => l.id === landmark.id,
                );
                if (matchedCountry && onSelectCountry) {
                  onSelectCountry(matchedCountry as unknown as Country);
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Slide 1: Travel & Flights */}
      {activeSlide === 1 && (
        <HeroSlide
          badgeIcon={Plane}
          badgeIconColorClass="text-sky-400"
          badgeText="International Student Travel &amp; Flight Desk"
          bgImageUrl={TRAVEL_HERO_IMAGE}
          bgImageSrcSet={TRAVEL_HERO_IMAGE_SRCSET}
          isLcpCandidate
          titlePrefix="Fly Seamlessly to Your"
          flipWord={TRAVEL_WORDS[travelWordIdx]}
          flipWordColorClass="text-sky-300"
          description="Discounted student flight airfares, extra 40kg baggage allowances, multi-currency forex cards, and verified airport pickups in 30+ countries."
          primaryBtnText="Plan Student Flight &amp; Travel"
          primaryBtnIcon={Plane}
          secondaryBtnText="Pre-Departure Checklist"
          primaryBtnBgClass="bg-sky-500 hover:bg-sky-400"
          onPrimaryClick={onOpenCallback}
          onSecondaryClick={onOpenCounselling}
        />
      )}

      {/* Slide 2: Global Exploration */}
      {activeSlide === 2 && (
        <HeroSlide
          badgeIcon={Compass}
          badgeIconColorClass="text-amber-400"
          badgeText="World Exploration &amp; Global Student Life"
          bgImageUrl={optimizeCloudinaryUrl(
            "https://res.cloudinary.com/droqi9jl3/image/upload/v1791485455/photo-1789758612541-2f758489a20f_ghdays.avif",
            1600
          )}
          titlePrefix="Turn Every Semester into"
          flipWord={EXPLORE_WORDS[exploreWordIdx]}
          flipWordColorClass="text-amber-300"
          description="Experience 27 European Schengen nations with one visa, travel with student Eurail passes, and explore iconic destinations while earning your degree."
          primaryBtnText="Explore Student Travel Perks"
          primaryBtnIcon={Compass}
          secondaryBtnText="Connect with Travel Specialist"
          primaryBtnBgClass="bg-amber-400 hover:bg-amber-300"
          onPrimaryClick={onOpenCallback}
          onSecondaryClick={onOpenCounselling}
        />
      )}

      {/* Slide 3: Education & Universities */}
      {activeSlide === 3 && (
        <HeroSlide
          badgeIcon={GraduationCap}
          badgeIconColorClass="text-emerald-400"
          badgeText="Global University Admissions &amp; Elite Degrees"
          bgImageUrl={optimizeCloudinaryUrl(
            "https://res.cloudinary.com/droqi9jl3/image/upload/v1791485934/photo-1498307833015-e7b400441eb8_tyalhb.avif",
            1600
          )}
          titlePrefix="Unlock Global Education with"
          flipWord={EDU_WORDS[eduWordIdx]}
          flipWordColorClass="text-emerald-300"
          description="Direct institutional tie-ups across Australia, UK, Germany, Canada, and Ireland. Secure up to 100% scholarships and express 14-day offer letters."
          primaryBtnText="Explore Top Universities"
          primaryBtnIcon={GraduationCap}
          secondaryBtnText="Check Scholarship Eligibility"
          primaryBtnBgClass="bg-emerald-400 hover:bg-emerald-300"
          onPrimaryClick={onOpenCallback}
          onSecondaryClick={onOpenCounselling}
        />
      )}

      {/* Slide 4: Jobs & Careers */}
      {activeSlide === 4 && (
        <HeroSlide
          badgeIcon={Briefcase}
          badgeIconColorClass="text-cyan-400"
          badgeText="International Careers &amp; Direct Employer Placements"
          bgImageUrl={optimizeCloudinaryUrl(
            "https://res.cloudinary.com/droqi9jl3/image/upload/v1791485837/photo-1506012787146-f92b2d7d6d96_z6w6lz.avif",
            1600
          )}
          titlePrefix="Launch High-Paying Careers in"
          flipWord={JOB_WORDS[jobWordIdx]}
          flipWordColorClass="text-cyan-300"
          description="Direct employer hospital contracts for nurses and doctors in Germany starting from €3,200/month, plus tax-free engineering and tech roles in Dubai."
          primaryBtnText="Apply for Overseas Jobs"
          primaryBtnIcon={Briefcase}
          secondaryBtnText="Free Resume Assessment"
          primaryBtnBgClass="bg-cyan-400 hover:bg-cyan-300"
          onPrimaryClick={onOpenCallback}
          onSecondaryClick={onOpenCounselling}
        />
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2 pointer-events-auto">
        {[0, 1, 2, 3, 4].map((idx) => {
          const isActive = activeSlide === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? activeSlide === 0
                    ? "w-7 sm:w-8 bg-indigo-600 shadow-md"
                    : "w-7 sm:w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : activeSlide === 0
                    ? "w-2 bg-slate-300 hover:bg-slate-400"
                    : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <CountryDetailsModal
            landmark={selectedLandmark}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedLandmark(null);
            }}
          />
        </Suspense>
      )}
    </section>
  );
};

export default HeroSection;