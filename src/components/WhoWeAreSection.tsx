import React from 'react';
import StudentHeroCard from './StudentHeroCard';

export const WhoWeAreSection: React.FC = () => {
  return (
    <section id="about-us" className="relative overflow-hidden bg-white py-10 sm:py-14">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/droqi9jl3/image/upload/v1791471195/who-we-are-background_il5zyf.jpg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-white/85" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>
                <span className="font-semibold text-[#830dfa]">YOLOgen</span> is an international travel, education, and migration consultancy helping individuals and families turn their global ambitions into reality. We offer a wide range of services including study abroad programs, college and university admissions, student visas, international job opportunities, work visas, PR and migration pathways, family trips, hotel bookings, and travel assistance. From choosing the right destination and course to preparing documents and navigating the visa process, our team provides personalized guidance at every step.
              </p>
              <p>
                With a client-focused approach, <span className="font-semibold text-[#830dfa]">YOLOgen</span> aims to make international travel, education, and migration simple, transparent, and hassle-free. Whether you are planning to study, work, settle, travel, or explore new opportunities abroad, we connect you with the right options and support you throughout your journey. <span className="font-semibold text-slate-900">YOLOgen — Your Journey. Your Opportunity. Your World.</span>
              </p>
            </div>

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

          {/* Right — StudentHeroCard beside Excellence in Consulting */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <StudentHeroCard />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoWeAreSection;
