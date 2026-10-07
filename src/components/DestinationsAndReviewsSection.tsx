import React, { useState } from 'react';
import { Play, Star, ChevronRight, Quote, Award, Sparkles } from 'lucide-react';
import { CITY_DESTINATIONS, CLIENT_TESTIMONIALS, TestimonialReview } from '../data/mockData';
import { CustomerFeedback } from './CustomerFeedback';

interface DestinationsAndReviewsSectionProps {
  onSelectReview: (review: TestimonialReview) => void;
  onOpenCounselling: () => void;
}

export const DestinationsAndReviewsSection: React.FC<DestinationsAndReviewsSectionProps> = ({
  onSelectReview,
  onOpenCounselling
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('melbourne');
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  const activeStory = CLIENT_TESTIMONIALS[activeStoryIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Destination Cities Grid matching Screenshot 3 Top */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              <span className="font-editorial-italic font-normal">Wish</span> to study <br />
              Aboard
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              Explore vibrant global cities offering world-ranked universities, vibrant culture, and high post-study employment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {CITY_DESTINATIONS.map((city) => {
              const isSelected = selectedCity === city.id;
              return (
                <div
                  key={city.id}
                  onClick={() => setSelectedCity(city.id)}
                  className="group cursor-pointer text-center"
                >
                  <div
                    className={`relative aspect-square rounded-[32px] overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border-2 ${
                      isSelected ? 'border-amber-500 ring-4 ring-amber-100/80 scale-102' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={city.imageUrl}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating mini info badge */}
                    <div className="absolute bottom-3 inset-x-3 text-center">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-semibold text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {city.universities} Universities · ★ {city.studentsRating}
                      </span>
                    </div>
                  </div>
                  <h4 className="mt-3.5 text-base sm:text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                    {city.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Reviews Section matching Screenshot 3 Middle */}
        <div className="pt-8 pb-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block mb-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
                Client Review
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Kind words <br />
              from Our <span className="font-editorial-italic font-normal">Clients</span>
            </h2>

            {/* Clean Trust Ratings Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-5">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold shadow-2xs">
                <span className="text-red-500 font-extrabold text-sm">C</span>lutch 4.5/5.0 <span className="text-amber-400">★★★★★</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold shadow-2xs">
                <span className="text-blue-500 font-bold">Google</span> Reviews 4.5/5.0 <span className="text-amber-400">★★★★★</span>
              </div>
              <div className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                1,480+ Verified International Students
              </div>
            </div>
          </div>

          {/* Premium Customer Feedback Grid & Destination Filters */}
          <CustomerFeedback onSelectReview={onSelectReview} />
        </div>

        {/* Results Speak the Loudest Section matching Screenshot 3 Bottom */}
        <div className="mt-16 text-center">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
              Our Testimonial
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
            Results Speak <br className="sm:hidden" />
            the <span className="font-editorial-italic font-normal">Loudest</span>
          </h2>

          {/* Interactive Spotlight Card */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50/50 via-white to-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-md text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <img
                  src={activeStory.avatar}
                  alt={activeStory.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-300 shadow-sm"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{activeStory.name}</h4>
                  <p className="text-xs text-amber-800 font-semibold">
                    {activeStory.role} · {activeStory.university} ({activeStory.country})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  Visa Approved
                </span>
                <button
                  onClick={() => onSelectReview(activeStory)}
                  className="p-2 rounded-full bg-white shadow-sm hover:bg-amber-50 text-amber-600 transition-colors border border-slate-100"
                  aria-label="Play testimonial video"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-slate-700 leading-relaxed italic">
              "{activeStory.quote}"
            </p>

            {/* Switchers */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex gap-1.5">
                {CLIENT_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeStoryIndex ? 'w-6 bg-amber-500' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`View story ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={onOpenCounselling}
                className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 group"
              >
                Start Your Story <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
