import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VISA_SERVICES, VisaService } from '../../data/mockData';
import { CharacterArt } from '../CharacterArt';

interface VisaServicesSectionProps {
  onSelectVisa: (visa: VisaService) => void;
}

export const VisaServicesSection: React.FC<VisaServicesSectionProps> = ({ onSelectVisa }) => {
  return (
    <section id="study-abroad" className="py-10 sm:py-14 bg-[#fafcff] relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-4 py-1.5 mb-3 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            We have clubbed your <br />
            <span className="font-editorial-italic font-normal">Wish</span> to <br className="sm:hidden" />
            Abroad Opportunities
          </h2>
        </div>

        {/* Visa Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {VISA_SERVICES.map((visa, index) => {
            const isWide = index >= 3; // Bottom row cards (Citizenship & Business Visa)

            return (
              <div
                key={visa.id}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 ${
                  isWide ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
                style={{
                  background:
                    visa.id === 'visitor-visa' || visa.id === 'citizenship'
                      ? 'linear-gradient(135deg, #f8f0ff 0%, #ffffff 50%, #f1e0ff 100%)'
                      : visa.id === 'student-visa' || visa.id === 'business-visa'
                      ? 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #dcfce7 100%)'
                      : 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #e0f2fe 100%)'
                }}
              >
                {/* Text Content */}
                <div className={`relative z-10 ${isWide ? 'lg:pr-36' : 'lg:pr-24'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-1.5 mb-2"> {visa.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {visa.description}
                  </p>
                </div>

                {/* Character 3D Graphic - Centered on Mobile & Tablet, Positioned Right on Desktop */}
                <div className="my-6 lg:my-0 flex justify-center lg:block lg:absolute lg:right-2 lg:bottom-2 pointer-events-none group-hover:scale-105 transition-transform duration-300">
                  <div
                    className={
                      visa.characterType === 'business'
                        ? 'w-40 sm:w-48 h-48 sm:h-52'
                        : isWide
                        ? 'w-40 sm:w-48 h-48 sm:h-52'
                        : 'w-32 sm:w-36 h-40 sm:h-48'
                    }
                  >
                    <CharacterArt type={visa.characterType} className="w-full h-full" />
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="relative z-10 mt-2 lg:mt-6 flex justify-start">
                  <button
                    onClick={() => onSelectVisa(visa)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm border border-slate-200/80 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all active:scale-95"
                  >
                    Learn more
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisaServicesSection;