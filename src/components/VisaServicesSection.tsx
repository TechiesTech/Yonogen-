import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VISA_SERVICES, VisaService } from '../data/mockData';
import { CharacterArt } from './CharacterArt';

interface VisaServicesSectionProps {
  onSelectVisa: (visa: VisaService) => void;
}

export const VisaServicesSection: React.FC<VisaServicesSectionProps> = ({ onSelectVisa }) => {
  const topRowVisas = VISA_SERVICES.slice(0, 3);
  const bottomRowVisas = VISA_SERVICES.slice(3);

  return (
    <section id="study-abroad" className="py-10 sm:py-14 bg-[#fafcff] relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Screenshot 2 bottom & Screenshot 8 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            We have clubbed your <br />
            <span className="font-editorial-italic font-normal">Wish</span> to study <br className="sm:hidden" />
            Aboard
          </h2>
        </div>

        {/* 5 Visa Cards Grid */}
        <div className="space-y-6">
          {/* Top Row: 3 Cards (Visitor Visa, Student Visa, Worker Visa) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRowVisas.map((visa) => (
              <div
                key={visa.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
                style={{
                  background:
                    visa.id === 'visitor-visa'
                      ? 'linear-gradient(135deg, #f8f0ff 0%, #ffffff 50%, #f1e0ff 100%)'
                      : visa.id === 'student-visa'
                      ? 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #dcfce7 100%)'
                      : 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #e0f2fe 100%)'
                }}
              >
                {/* Text Content */}
                <div className="relative z-10 pr-24 sm:pr-28">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                    <span className="text-amber-500 font-extrabold">/</span> {visa.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {visa.description}
                  </p>
                </div>

                {/* Character 3D Graphic */}
                <div className="absolute right-2 bottom-3 w-32 sm:w-36 h-44 sm:h-48 pointer-events-none group-hover:scale-105 transition-transform duration-300">
                  <CharacterArt type={visa.characterType} className="w-full h-full" />
                </div>

                {/* Learn More Button */}
                <div className="relative z-10 mt-8">
                  <button
                    onClick={() => onSelectVisa(visa)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm border border-slate-200/80 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all active:scale-95"
                  >
                    Learn more
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Wider Cards (Citizenship, Business Visa) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottomRowVisas.map((visa) => (
              <div
                key={visa.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
                style={{
                  background:
                    visa.id === 'citizenship'
                      ? 'linear-gradient(135deg, #f8f0ff 0%, #ffffff 50%, #f1e0ff 100%)'
                      : 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #dcfce7 100%)'
                }}
              >
                {/* Text Content */}
                <div className="relative z-10 pr-36 sm:pr-44">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                    <span className="text-amber-500 font-extrabold">/</span> {visa.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                    {visa.description}
                  </p>
                </div>

                {/* Character 3D Graphic */}
                <div className="absolute right-4 bottom-2 w-40 sm:w-48 h-48 sm:h-52 pointer-events-none group-hover:scale-105 transition-transform duration-300">
                  <CharacterArt type={visa.characterType} className="w-full h-full" />
                </div>

                {/* Learn More Button */}
                <div className="relative z-10 mt-10">
                  <button
                    onClick={() => onSelectVisa(visa)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm border border-slate-200/80 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all active:scale-95"
                  >
                    Learn more
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
