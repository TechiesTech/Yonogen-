import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Phone, Mail, MapPin } from 'lucide-react';

export const NewsletterAndFooterSection: React.FC<{ onOpenCallback: () => void }> = ({ onOpenCallback }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div id="contact" className="bg-[#fcfdff] py-10 sm:py-14 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card matching Screenshot 6 & 7 */}
        <div className="relative max-w-5xl mx-auto rounded-[36px] bg-gradient-to-r from-amber-100/90 via-orange-50 to-emerald-50/80 px-4 py-3 sm:px-6 sm:py-4 md:px-7 md:py-5 overflow-visible shadow-lg border border-amber-200/80 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            
            {/* Left 3D World Landmarks Art (5 cols) */}
            <div className="relative lg:col-span-5 flex items-center justify-center min-h-56 sm:min-h-64">
              <div className="absolute inset-x-0 -top-24 bottom-0 sm:-top-28 lg:inset-x-auto lg:left-[-10%] lg:right-auto lg:-top-32 lg:-bottom-12 mx-auto lg:mx-0 w-full max-w-md sm:max-w-lg lg:w-[130%] lg:max-w-none">
                <img
                  src="/images/world-landmarks.png"
                  alt="World landmarks surrounding a globe"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Content & Email Form (7 cols) */}
            <div className="lg:col-span-7 lg:pl-14 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Start your <br />
                <span className="font-editorial-italic font-normal">Overseas Education</span> <br />
                Journey!
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Receive free university scholarship updates, visa rule alerts, and direct invitation to university spot assessment interviews.
              </p>

              {/* Email Form matching Screenshot 6 & 7 */}
              {subscribed ? (
                <div className="flex items-center gap-2 p-3.5 bg-white/90 backdrop-blur-sm rounded-full text-emerald-800 text-xs sm:text-sm font-semibold max-w-md border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Welcome aboard! You will receive our free 2026 Admissions Playbook.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative max-w-md">
                  <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-md border border-amber-200/80 focus-within:ring-2 focus-within:ring-amber-400/30">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-transparent px-5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="shrink-0 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-sm"
                    >
                      Send <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Social Links Row matching Screenshot 6 & 7 */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-20">
          
          {/* Linkedin */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 text-xs sm:text-sm font-medium text-slate-700 transition-all"
          >
            <div className="w-5 h-5 rounded-md bg-[#0a66c2] text-white flex items-center justify-center font-bold text-[11px]">
              in
            </div>
            Linkedin
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-pink-300 text-xs sm:text-sm font-medium text-slate-700 transition-all"
          >
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-[11px]">
              📷
            </div>
            Instagram
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400 text-xs sm:text-sm font-medium text-slate-700 transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-[#1877f2] text-white flex items-center justify-center font-bold text-[11px]">
              f
            </div>
            Facebook
          </a>

          {/* Twitter (X) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-400 text-xs sm:text-sm font-medium text-slate-700 transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">
              𝕏
            </div>
            Twitter
          </a>

          {/* Whatsapp */}
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 text-xs sm:text-sm font-medium text-slate-700 transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-[#25d366] text-white flex items-center justify-center font-bold text-[11px]">
              💬
            </div>
            Whatsapp
          </a>

          {/* Youtube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-red-300 text-xs sm:text-sm font-medium text-slate-700 transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-[10px]">
              ▶
            </div>
            Youtube
          </a>
        </div>

        {/* 5 Column Navigation Grid matching Screenshot 6 & 7 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-16 border-b border-slate-200/80 text-left">
          
          {/* Col 1: Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider mb-4 flex items-center gap-1">
              <span className="text-amber-500 font-extrabold">/</span> Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><a href="#about-us" className="hover:text-amber-600 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-amber-600 transition-colors">Blogs</a></li>
              <li><a href="#testimonials" className="hover:text-amber-600 transition-colors">Stories</a></li>
              <li><a href="#testimonials" className="hover:text-amber-600 transition-colors">Videos</a></li>
              <li><button onClick={onOpenCallback} className="hover:text-amber-600 transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 2: Top Countries */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider mb-4 flex items-center gap-1">
              <span className="text-amber-500 font-extrabold">/</span> Top Countries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><a href="#home" className="hover:text-amber-600 transition-colors">UK</a></li>
              <li><a href="#home" className="hover:text-amber-600 transition-colors">Germany</a></li>
              <li><a href="#home" className="hover:text-amber-600 transition-colors">Australia</a></li>
              <li><a href="#home" className="hover:text-amber-600 transition-colors">Canada</a></li>
              <li><a href="#home" className="hover:text-amber-600 transition-colors">New Zealand</a></li>
            </ul>
          </div>

          {/* Col 3: IELTS Center */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider mb-4 flex items-center gap-1">
              <span className="text-amber-500 font-extrabold">/</span> IELTS Center
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><span className="hover:text-amber-600 cursor-pointer">Jaipur</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">Sikar</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">Chandigarh</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">Mohali</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">Dubai</span></li>
            </ul>
          </div>

          {/* Col 4: Courses /Jobs */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider mb-4 flex items-center gap-1">
              <span className="text-amber-500 font-extrabold">/</span> Courses /Jobs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><a href="#jobs" className="hover:text-amber-600 transition-colors">Nursing Jobs in Germany</a></li>
              <li><a href="#study-abroad" className="hover:text-amber-600 transition-colors">MHA in UK</a></li>
              <li><a href="#jobs" className="hover:text-amber-600 transition-colors">Ausbildung in Germany</a></li>
            </ul>
          </div>

          {/* Col 5: Intakes */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider mb-4 flex items-center gap-1">
              <span className="text-amber-500 font-extrabold">/</span> Intakes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><span className="hover:text-amber-600 cursor-pointer">Jan Intake UK</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">May Intake UK</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">September Intake UK</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">February Intake Australia</span></li>
              <li><span className="hover:text-amber-600 cursor-pointer">July Intake Australia</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Jagvimal Overseas Consultants</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>Govt. of India Registered &amp; British Council Certified</span>
            <span>·</span>
            <button onClick={onOpenCallback} className="hover:text-amber-600">Privacy Policy</button>
            <span>·</span>
            <button onClick={onOpenCallback} className="hover:text-amber-600">Terms of Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};
