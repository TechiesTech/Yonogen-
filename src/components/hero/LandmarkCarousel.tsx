import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LandmarkCard } from '../../data/mockData';

const LANDMARK_FLOAT_CLASSES = [
  "animate-float-1",
  "animate-float-2",
  "animate-float-3",
  "animate-float-4",
  "animate-float-5",
];

const LANDMARK_HEIGHTS = [
  "h-55 sm:h-68",
  "h-62 sm:h-76",
  "h-55 sm:h-66",
  "h-62 sm:h-76",
  "h-55 sm:h-70",
];

interface LandmarkCarouselProps {
  visibleLandmarks: LandmarkCard[];
  landmarkPage: number;
  landmarkPageCount: number;
  onSelectLandmark: (landmark: LandmarkCard) => void;
  onPageChange: (newPage: number) => void;
  onPause: (paused: boolean) => void;
}

export const LandmarkCarousel: React.FC<LandmarkCarouselProps> = ({
  visibleLandmarks,
  landmarkPage,
  landmarkPageCount,
  onSelectLandmark,
  onPageChange,
  onPause,
}) => {
  return (
    <div
      onMouseEnter={() => onPause(true)}
      onMouseLeave={() => onPause(false)}
      onFocusCapture={() => onPause(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onPause(false);
        }
      }}
    >
      <div
        key={landmarkPage}
        className="flex flex-wrap lg:flex-nowrap justify-center items-end gap-3.5 sm:gap-4 max-w-5xl mx-auto px-2"
      >
        {visibleLandmarks.map((landmark, idx) => {
          const isLcpCandidate = landmarkPage === 0 && idx === 0;
          return (
            <div
              role="button"
              tabIndex={0}
              key={landmark.id}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-20 cursor-pointer border-2 border-white/90 w-[46%] sm:w-45 md:w-50 lg:w-53.75 shrink-0 ${LANDMARK_FLOAT_CLASSES[idx % LANDMARK_FLOAT_CLASSES.length]} ${LANDMARK_HEIGHTS[idx % LANDMARK_HEIGHTS.length]}`}
              aria-label={`Explore ${landmark.city}, ${landmark.country}`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelectLandmark(landmark);
                }
              }}
              onClick={() => onSelectLandmark(landmark)}
            >
              <img
                src={landmark.imageUrl}
                srcSet={
                  isLcpCandidate
                    ? `${landmark.imageUrl.replace("w=500", "w=320")} 320w, ${landmark.imageUrl} 500w, ${landmark.imageUrl.replace("w=500", "w=720")} 720w`
                    : undefined
                }
                sizes={isLcpCandidate ? "(max-width: 640px) 46vw, 215px" : undefined}
                alt={`${landmark.city} ${landmark.country}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                loading={isLcpCandidate ? "eager" : "lazy"}
                fetchPriority={isLcpCandidate ? "high" : undefined}
                decoding="async"
                width="215"
                height="304"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/50 group-hover:via-black/10 transition-colors" />
              <div className="relative z-10 pt-2 px-2 flex justify-center">
                <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-[11px] font-extrabold tracking-wider uppercase shadow-md backdrop-blur-md ${landmark.badgeBg}`}>
                  {landmark.city}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 z-10 text-center flex flex-col items-center">
                <span className="text-[10px] sm:text-xs font-bold text-white drop-shadow-md">
                  {landmark.country}
                </span>
                <span className="text-[9px] sm:text-[10px] text-white/80 font-medium mt-0.5 line-clamp-1">
                  {landmark.id === "united-kingdom"
                    ? "UK · Top Global Unis"
                    : landmark.id === "canada"
                    ? "Canada · Post-Study PSW"
                    : landmark.id === "australia"
                    ? "Australia · World-Class Unis"
                    : landmark.id === "united-states"
                    ? "USA · STEM OPT"
                    : landmark.id === "germany"
                    ? "Germany · Free Tuition"
                    : landmark.id === "ireland"
                    ? "Ireland · Tech Hub"
                    : landmark.id === "france"
                    ? "France · Schengen"
                    : landmark.id === "finland"
                    ? "Finland · Innovation"
                    : landmark.id === "new-zealand"
                    ? "New Zealand · Work Visa"
                    : "Italy · Design & Fashion"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {landmarkPageCount > 1 && (
        <div className="mx-auto mt-2.5 sm:mt-4 flex max-w-5xl items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onPageChange((landmarkPage - 1 + landmarkPageCount) % landmarkPageCount)}
            className="rounded-full border border-slate-200 p-1.5 sm:p-2 text-slate-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
            aria-label="Show previous destinations"
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2" aria-label="Destination pages">
            {Array.from({ length: landmarkPageCount }, (_, pageIndex) => (
              <button
                key={pageIndex}
                type="button"
                onClick={() => onPageChange(pageIndex)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  pageIndex === landmarkPage
                    ? "w-6 sm:w-7 bg-violet-500"
                    : "w-2 bg-violet-200 hover:bg-violet-300"
                }`}
                aria-label={`Show destination page ${pageIndex + 1}`}
                aria-current={pageIndex === landmarkPage ? "true" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => onPageChange((landmarkPage + 1) % landmarkPageCount)}
            className="rounded-full border border-slate-200 p-1.5 sm:p-2 text-slate-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
            aria-label="Show next destinations"
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>
      )}
    </div>
  );
};