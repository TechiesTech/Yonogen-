import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CITY_DESTINATIONS, TestimonialReview } from '../data/mockData';
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
  const [destinationPage, setDestinationPage] = useState(0);
  const [isDestinationsPaused, setIsDestinationsPaused] = useState(false);
  const destinationsPerPage = 4;
  const destinationPageCount = Math.ceil(CITY_DESTINATIONS.length / destinationsPerPage);
  const visibleDestinations = CITY_DESTINATIONS.slice(
    destinationPage * destinationsPerPage,
    (destinationPage + 1) * destinationsPerPage
  );

  useEffect(() => {
    if (destinationPageCount < 2 || isDestinationsPaused) return;

    const intervalId = window.setInterval(() => {
      setDestinationPage((page) => (page + 1) % destinationPageCount);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [destinationPageCount, isDestinationsPaused]);

  return (
    <section id="testimonials" className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Destination Cities Grid matching Screenshot 3 Top */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              <span className="font-editorial-italic font-normal"> Your Journey </span> Beyond <br />
              Borders
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              Explore vibrant global cities offering world-ranked universities, vibrant culture, and high post-study employment.
            </p>
          </div>

          <div
            onMouseEnter={() => setIsDestinationsPaused(true)}
            onMouseLeave={() => setIsDestinationsPaused(false)}
            onFocusCapture={() => setIsDestinationsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsDestinationsPaused(false);
              }
            }}
          >
            <div
              key={destinationPage}
              className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6"
            >
              {visibleDestinations.map((city) => {
                const isSelected = selectedCity === city.id;
                return (
                  <div key={city.id} className="group cursor-pointer text-center">
                    <button
                      type="button"
                      onClick={() => setSelectedCity(city.id)}
                      className={`relative block aspect-square w-full overflow-hidden rounded-[32px] border-2 shadow-md transition-all duration-300 group-hover:shadow-xl ${
                        isSelected ? 'border-amber-500 ring-4 ring-amber-100/80 scale-102' : 'border-transparent'
                      }`}
                      aria-pressed={isSelected}
                      aria-label={`Select ${city.name}, ${city.country}`}
                    >
                      <img
                        src={city.imageUrl}
                        alt={city.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                      <div className="absolute inset-x-3 bottom-3 text-center">
                        <span className="inline-block rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-800 opacity-0 shadow-sm backdrop-blur-md transition-opacity group-hover:opacity-100">
                          {city.universities} Universities · ★ {city.studentsRating}
                        </span>
                      </div>
                    </button>
                    <h4 className="mt-3.5 text-base font-bold text-slate-800 transition-colors group-hover:text-amber-600 sm:text-lg">
                      {city.name}
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-500">{city.country}</p>
                  </div>
                );
              })}
            </div>

            {destinationPageCount > 1 && (
              <div className="mx-auto mt-6 flex max-w-5xl items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setDestinationPage((page) => (page - 1 + destinationPageCount) % destinationPageCount)}
                  className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  aria-label="Show previous destinations"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2" aria-label="Destination pages">
                  {Array.from({ length: destinationPageCount }, (_, pageIndex) => (
                    <button
                      key={pageIndex}
                      type="button"
                      onClick={() => setDestinationPage(pageIndex)}
                      className={`h-2.5 rounded-full transition-all ${
                        pageIndex === destinationPage
                          ? 'w-7 bg-violet-500'
                          : 'w-2.5 bg-violet-200 hover:bg-violet-300'
                      }`}
                      aria-label={`Show destination page ${pageIndex + 1}`}
                      aria-current={pageIndex === destinationPage ? 'true' : undefined}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setDestinationPage((page) => (page + 1) % destinationPageCount)}
                  className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  aria-label="Show next destinations"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
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
            </div>
          </div>

          {/* Premium Customer Feedback Grid & Destination Filters */}
          <CustomerFeedback onSelectReview={onSelectReview} />
        </div>

      </div>
    </section>
  );
};
