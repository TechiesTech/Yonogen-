import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BentoArt } from './BentoArt';

interface TestPrepModalData {
  title: string;
  subtitle: string;
  features: string[];
  batches: string;
}

export const TestPrepAndCareerSection: React.FC<{ onOpenCounselling: () => void }> = ({ onOpenCounselling }) => {
  const [activeModal, setActiveModal] = useState<TestPrepModalData | null>(null);

  const openIelts = () => {
    setActiveModal({
      title: 'IELTS Academic & General Training',
      subtitle: 'Score Band 7.5+ with certified British Council & IDP trained mentors',
      features: [
        'Daily live speaking mock evaluations with British examiners',
        '30+ full-length AI-scored practice tests with instant band score breakdown',
        'Specialized writing vocabulary templates (Task 1 & Task 2)',
        'Free official Cambridge IELTS practice book series'
      ],
      batches: 'Weekday & Weekend Batches Available (Online & In-Center)'
    });
  };

  const openPte = () => {
    setActiveModal({
      title: 'PTE Academic Masterclass',
      subtitle: 'Target 79+ for Australian & UK university grants & PR points',
      features: [
        'AI scoring algorithm simulation exactly matching Pearson PTE test centers',
        'Pronunciation & oral fluency wave-analyzer software',
        'Read Aloud, Repeat Sentence & Retell Lecture memory templates',
        'Unlimited computerized mock tests with predictive score matrix'
      ],
      batches: 'Crash Course (2 Weeks) & Comprehensive (6 Weeks) Batches'
    });
  };

  const openGerman = () => {
    setActiveModal({
      title: 'German Language Mastery (A1 to B2)',
      subtitle: 'Direct pathway to Tuition-Free German Universities & Healthcare Jobs',
      features: [
        'Goethe-Institut & Telc certified curriculum and test simulation',
        'Dedicated medical German (Fachsprachprüfung) for doctors & nurses',
        'Small batches with 1-on-1 speaking clinics by native speakers',
        'Guaranteed B2 certificate training with 100% exam pass track record'
      ],
      batches: 'Intensive Daily Batches (Morning / Evening)'
    });
  };

  const openJob = (country: 'Germany' | 'UAE') => {
    setActiveModal({
      title: `Healthcare & Skilled Jobs in ${country}`,
      subtitle: country === 'Germany' 
        ? 'Direct Hospital Contracts for Nurses & Doctors with €3,000+ Starting Pay'
        : 'Tax-Free Packages for Healthcare, IT, and Engineering Professionals in Dubai & Abu Dhabi',
      features: [
        'Direct employer sponsorship with zero hidden service charges',
        'Anerkennung / DHA / MOH licensing exam assistance',
        'Free accommodation support and flight ticket provided by employer',
        'Fast-track work visa processing within 60 to 90 days'
      ],
      batches: 'Open for Immediate Intake (Interviews scheduled weekly)'
    });
  };

  return (
    <section id="test-prep" className="pt-3 pb-10 sm:pt-4 sm:pb-14 bg-[#fbfcfe] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-8">
          <span className="mb-3 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-800">
            Your Next Chapter
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Build Skills. <span className="font-editorial-italic font-normal">Go Further.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Prepare for international exams, learn a new language, and discover career opportunities abroad.
          </p>
        </div>

        {/* Bento Grid matching Screenshot 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Block (8 cols): IELTS, PTE, German */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Row: IELTS and PTE side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: IELTS */}
              <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 mb-4 shadow-2xs">
                    Test Preparation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Test <span className="font-editorial-italic font-normal">IELTS</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[220px]">
                    Unlock your global potential with our expert-led IELTS test preparation!
                  </p>
                </div>

                {/* 3D Glowing Bulb graphic */}
                <div className="relative h-32 sm:h-36 my-2 group-hover:scale-105 transition-transform">
                  <BentoArt type="ielts-bulb" className="w-full h-full" />
                </div>

                <div className="relative z-10 pt-2">
                  <button
                    onClick={openIelts}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors group/btn"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 2: PTE */}
              <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 mb-4 shadow-2xs">
                    Test Preparation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Test <span className="font-editorial-italic font-normal">PTE</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[220px]">
                    Ace your PTE exam with confidence—master the test format, sharpen your skills
                  </p>
                </div>

                {/* 3D Books & Grad Cap graphic */}
                <div className="relative h-32 sm:h-36 my-2 group-hover:scale-105 transition-transform">
                  <BentoArt type="pte-books" className="w-full h-full" />
                </div>

                <div className="relative z-10 pt-2">
                  <button
                    onClick={openPte}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors group/btn"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Wide Card: Learn German Language */}
            <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="relative z-10 max-w-md">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  Learn <span className="font-editorial-italic font-normal">German Language</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Master the German language with immersive lessons and precision mock tests designed to boost your fluency and confidence!
                </p>
                <button
                  onClick={openGerman}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors group/btn"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* 3D German Dictionary with Headphones graphic */}
              <div className="relative w-44 sm:w-56 h-40 sm:h-44 shrink-0 group-hover:scale-105 transition-transform">
                <BentoArt type="german-dict" className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Right Block (4 cols): Job Opportunity Tall Card */}
          <div id="jobs" className="lg:col-span-4 group bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Job <span className="font-editorial-italic font-normal">Opportunity</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                Discover your dream job with opportunities tailored to your skills!
              </p>

              {/* Country Pill Buttons matching Screenshot 4 */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <button
                  onClick={() => openJob('Germany')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-800 transition-all shadow-2xs hover:border-slate-300"
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden inline-flex items-center justify-center shrink-0 border border-slate-300">
                    🇩🇪
                  </span>
                  Jobs in Germany
                </button>

                <button
                  onClick={() => openJob('UAE')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-800 transition-all shadow-2xs hover:border-slate-300"
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden inline-flex items-center justify-center shrink-0 border border-slate-300">
                    🇦🇪
                  </span>
                  Jobs in UAE
                </button>
              </div>
            </div>

            {/* 3D Medical Kit & Stethoscope Graphic */}
            <div className="relative h-48 sm:h-56 my-2 group-hover:scale-105 transition-transform flex items-center justify-center">
              <BentoArt type="medical-kit" className="w-full h-full max-h-52" />
            </div>

            <div className="relative z-10 pt-4">
              <button
                onClick={onOpenCounselling}
                className="w-full py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-colors text-center shadow-md shadow-amber-400/20"
              >
                Apply for Overseas Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Test Prep / Job Details */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">{activeModal.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">{activeModal.subtitle}</p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">What’s Included:</h4>
                {activeModal.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 font-medium mb-6">
                🗓️ {activeModal.batches}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setActiveModal(null);
                    onOpenCounselling();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-colors text-center shadow-sm"
                >
                  Book Free Demo Class
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
