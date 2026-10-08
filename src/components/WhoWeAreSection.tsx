import React from 'react';
import PhotoFrames from './PhotoFrames';

export const WhoWeAreSection: React.FC = () => {
  return (
    <section id="about-us" className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Stats Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              {/* Badge matching Screenshot 2 */}
              <div className="inline-block mb-3">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  Who We Are?
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                <span className="font-editorial-italic font-normal">Excellence</span> in Consulting <br />
                &amp; Management.
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              <span className="font-semibold text-[#830dfa]">YOLOgen</span> Consultant helps people plan their next step abroad. Whether you want to study, work, visit, or migrate, our team can guide you through visa options, documents, and the application process. We also support course selection and overseas career planning, with clear guidance tailored to your goals at every step.
            </p>

            {/* Stats Grid matching Screenshot 2 with vertical purple accent lines */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-6 sm:gap-x-10 pt-2 max-w-xl">
              {/* Stat 1 */}
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-indigo-600 rounded-full shrink-0" />
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">500+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Clients supported</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-indigo-600 rounded-full shrink-0" />
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">98%</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Visa Success Rate</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-indigo-600 rounded-full shrink-0" />
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">150+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Partner Universities</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-indigo-600 rounded-full shrink-0" />
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">12+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Irregular Overlapping PhotoFrames Column (5 cols) beside Excellence in Consulting */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient soft glow behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 via-sky-100/30 to-purple-100/30 blur-2xl rounded-full pointer-events-none" />

            <PhotoFrames />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoWeAreSection;
