import React, { useState } from 'react';
import { UNIVERSITIES_PARTNERS, UniversityPartner } from '../data/mockData';

export const UniversitiesGridSection: React.FC = () => {
  const [hoveredUni, setHoveredUni] = useState<UniversityPartner | null>(null);

  // Logo rendering helpers
  const renderUniLogo = (name: string) => {
    if (name.includes('UNIVERSITIES AUSTRALIA')) {
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-6 h-6 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 5l6.5 11h-13L12 7z" />
          </svg>
          <div className="text-left">
            <div className="text-[11px] sm:text-xs font-black tracking-wider text-slate-900 leading-tight uppercase">
              UNIVERSITIES
            </div>
            <div className="text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-600 leading-none uppercase">
              AUSTRALIA
            </div>
          </div>
        </div>
      );
    }

    if (name.includes('Federation')) {
      return (
        <div className="flex items-center gap-2">
          <div className="text-left">
            <div className="text-xs sm:text-sm font-extrabold text-[#0066b2] tracking-tight">
              Federation
            </div>
            <div className="text-[8px] sm:text-[9px] font-bold tracking-widest text-slate-500 uppercase">
              UNIVERSITY · AUSTRALIA
            </div>
          </div>
          <div className="flex gap-0.5">
            <span className="w-1.5 h-3.5 bg-[#0066b2] rounded-xs"></span>
            <span className="w-1.5 h-3.5 bg-[#f37021] rounded-xs"></span>
            <span className="w-1.5 h-3.5 bg-[#009944] rounded-xs"></span>
          </div>
        </div>
      );
    }

    if (name.includes('Australian National')) {
      return (
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-7 border-2 border-amber-800 rounded-b-md flex items-center justify-center text-[9px] font-bold text-amber-900 bg-amber-50 shrink-0 shadow-2xs">
            ANU
          </div>
          <div className="text-left">
            <div className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight">
              Australian
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-tight">
              National
            </div>
            <div className="text-[9px] sm:text-[10px] font-semibold text-slate-600 leading-tight">
              University
            </div>
          </div>
        </div>
      );
    }

    if (name.includes('MACQUARIE')) {
      return (
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-7 bg-red-800 rounded-t-sm flex items-center justify-center text-[8px] font-bold text-white shadow-xs shrink-0">
            MQ
          </div>
          <div className="text-left">
            <div className="text-[11px] sm:text-xs font-black tracking-tight text-slate-900 leading-none">
              MACQUARIE
            </div>
            <div className="text-[8px] sm:text-[9px] font-semibold text-slate-500 tracking-wider">
              University · Sydney
            </div>
          </div>
        </div>
      );
    }

    // Flinders & Other Partners
    return (
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 bg-[#002b49] rounded-md flex items-center justify-center text-amber-400 shrink-0 shadow-2xs">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5" fill="#830dfa" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2" stroke="#830dfa" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="text-left">
          <div className="text-xs sm:text-sm font-bold text-slate-900 leading-none">
            Flinders
          </div>
          <div className="text-[8px] sm:text-[9px] font-medium text-slate-500 uppercase">
            University
          </div>
        </div>
      </div>
    );
  };

  // Duplicate for seamless infinite marquee loop (50% translation = 1 full cycle)
  const marqueeRow1 = [...UNIVERSITIES_PARTNERS, ...UNIVERSITIES_PARTNERS];
  const marqueeRow2 = [...UNIVERSITIES_PARTNERS.slice(3), ...UNIVERSITIES_PARTNERS.slice(0, 3), ...UNIVERSITIES_PARTNERS.slice(3), ...UNIVERSITIES_PARTNERS.slice(0, 3)];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Study Abroad World Travel & Education Background with Low Opacity */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* World Landmarks & Study Abroad Vector Photo Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07] mix-blend-multiply filter grayscale contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2000&q=80')`
          }}
        />

        {/* Global Study Abroad Vector Elements Overlay (Dotted world map, travel trajectories, landmarks) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] stroke-indigo-900"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle World Map Grid Longitude/Latitude Arcs */}
          <ellipse cx="600" cy="300" rx="550" ry="260" strokeDasharray="6 6" strokeWidth="1" />
          <ellipse cx="600" cy="300" rx="350" ry="260" strokeDasharray="6 6" strokeWidth="0.8" />
          <ellipse cx="600" cy="300" rx="180" ry="260" strokeDasharray="6 6" strokeWidth="0.8" />
          <line x1="50" y1="300" x2="1150" y2="300" strokeDasharray="6 6" strokeWidth="1" />
          <line x1="50" y1="170" x2="1150" y2="170" strokeDasharray="6 6" strokeWidth="0.8" />
          <line x1="50" y1="430" x2="1150" y2="430" strokeDasharray="6 6" strokeWidth="0.8" />

          {/* Curved Flight Path Trajectories across continents */}
          <path d="M 150 380 Q 400 120 700 240 T 1050 320" strokeDasharray="8 8" strokeWidth="1.5" />
          <path d="M 220 220 Q 550 80 880 200" strokeDasharray="8 8" strokeWidth="1.5" />
          <path d="M 350 420 Q 600 280 950 400" strokeDasharray="8 8" strokeWidth="1.2" />

          {/* Minimal Landmark Vector Silhouettes */}
          {/* Eiffel Tower sketch */}
          <path d="M 260 480 L 280 340 L 290 340 L 310 480 Q 285 450 260 480 Z" strokeWidth="1.2" />
          <line x1="285" y1="340" x2="285" y2="300" strokeWidth="1.5" />
          {/* Big Ben / Tower sketch */}
          <rect x="420" y="320" width="30" height="150" strokeWidth="1.2" />
          <polygon points="415,320 435,270 455,320" strokeWidth="1.2" />
          {/* Classical University Dome sketch */}
          <path d="M 720 470 L 720 380 Q 770 330 820 380 L 820 470 Z" strokeWidth="1.2" />
          <line x1="770" y1="330" x2="770" y2="305" strokeWidth="1.5" />
          <circle cx="770" cy="300" r="4" strokeWidth="1" />
          {/* Sydney Opera shells sketch */}
          <path d="M 920 470 Q 945 400 970 470 Q 995 380 1025 470" strokeWidth="1.2" />

          {/* Graduation Cap sketch floating */}
          <polygon points="560,180 600,165 640,180 600,195" strokeWidth="1.2" />
          <path d="M 580,188 L 580,205 Q 600,215 620,205 L 620,188" strokeWidth="1" />
          <path d="M 640,180 Q 645,195 642,210" strokeWidth="1" />
        </svg>

        {/* Top & Bottom Soft Blend Gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Screenshot 5 */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
              Our Universities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our top Universities <br />
            <span className="font-editorial-italic font-normal">Aboard</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-lg mx-auto">
            Official institutional tie-ups providing fast offer letter turnaround, application fee waivers, and exclusive international bursaries.
          </p>
        </div>

        {/* Marquee Ticker Container with Architectural Lines & Crosshairs */}
        <div className="relative border-y border-slate-200/90 py-3 marquee-container group">
          
          {/* Top Crosshairs Row */}
          <div className="hidden sm:flex justify-between text-slate-400 text-xs font-light select-none px-4 -mt-5 mb-2 pointer-events-none">
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>

          {/* Left & Right Gradient Fade Edges for Smooth Entrance & Exit */}
          <div className="absolute left-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Row 1: Scrolling Right to Left */}
          <div className="overflow-hidden py-2 border-b border-slate-100">
            <div className="animate-marquee-left flex items-center">
              {marqueeRow1.map((uni, idx) => (
                <div
                  key={`row1-${uni.id}-${idx}`}
                  onMouseEnter={() => setHoveredUni(uni)}
                  onMouseLeave={() => setHoveredUni(null)}
                  className="w-56 sm:w-64 h-24 sm:h-28 shrink-0 flex items-center justify-center px-6 mx-2 bg-white rounded-2xl border border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-pointer text-center relative group/item"
                >
                  {renderUniLogo(uni.name)}

                  {/* Hover Ranking Tooltip */}
                  <div className="absolute -bottom-2 inset-x-3 bg-slate-900 text-white text-[10px] py-1 px-2 rounded-md shadow-lg opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-30">
                    {uni.ranking}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Crosshairs Row */}
          <div className="hidden sm:flex justify-between text-slate-400 text-xs font-light select-none px-4 -my-2 z-10 relative pointer-events-none">
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>

          {/* Marquee Row 2: Scrolling Right to Left (Slightly slower/delayed for visual depth) */}
          <div className="overflow-hidden py-2">
            <div className="animate-marquee-left-delayed flex items-center">
              {marqueeRow2.map((uni, idx) => (
                <div
                  key={`row2-${uni.id}-${idx}`}
                  onMouseEnter={() => setHoveredUni(uni)}
                  onMouseLeave={() => setHoveredUni(null)}
                  className="w-56 sm:w-64 h-24 sm:h-28 shrink-0 flex items-center justify-center px-6 mx-2 bg-white rounded-2xl border border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-pointer text-center relative group/item"
                >
                  {renderUniLogo(uni.name)}

                  {/* Hover Ranking Tooltip */}
                  <div className="absolute -bottom-2 inset-x-3 bg-slate-900 text-white text-[10px] py-1 px-2 rounded-md shadow-lg opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-30">
                    {uni.ranking}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Crosshairs Row */}
          <div className="hidden sm:flex justify-between text-slate-400 text-xs font-light select-none px-4 -mb-5 mt-2 pointer-events-none">
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>
        </div>

        {/* Hovered details bar & Pause Indicator */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-3xl mx-auto px-2">
          <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Hover any university partner to pause and inspect program details
          </div>

          {hoveredUni ? (
            <div className="text-xs text-amber-900 bg-amber-50/90 py-1.5 px-3.5 rounded-full border border-amber-200 font-semibold animate-fade-in shadow-2xs">
              <span className="font-bold text-slate-900">{hoveredUni.name}</span> · {hoveredUni.ranking}
            </div>
          ) : (
            <div className="text-xs text-slate-500 font-semibold">
              39+ Official Global University MoUs Signed
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
