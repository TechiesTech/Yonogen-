import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroSlideProps {
  badgeIcon: LucideIcon;
  badgeIconColorClass: string;
  badgeText: string;
  bgImageUrl: string;
  bgImageSrcSet?: string;
  isLcpCandidate?: boolean;
  titlePrefix: string;
  flipWord: string;
  flipWordColorClass: string;
  description: string;
  primaryBtnText: string;
  primaryBtnIcon: LucideIcon;
  secondaryBtnText: string;
  primaryBtnBgClass: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({
  badgeIcon: BadgeIcon,
  badgeIconColorClass,
  badgeText,
  bgImageUrl,
  bgImageSrcSet,
  isLcpCandidate = false,
  titlePrefix,
  flipWord,
  flipWordColorClass,
  description,
  primaryBtnText,
  primaryBtnIcon: PrimaryBtnIcon,
  secondaryBtnText,
  primaryBtnBgClass,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] px-4 py-8 flex items-center justify-center overflow-hidden animate-fade-in transition-opacity duration-700 w-full">
      <img
        src={bgImageUrl}
        srcSet={bgImageSrcSet}
        sizes={bgImageSrcSet ? "100vw" : undefined}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority={isLcpCandidate ? "high" : "auto"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 text-center">
        <div className="inline-block mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-lg">
            <BadgeIcon className={`w-4 h-4 ${badgeIconColorClass}`} />
            {badgeText}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
          {titlePrefix} <br />
          <span className={`animate-text-flip font-editorial-italic font-bold ${flipWordColorClass} mx-2 inline-block`}>
            {flipWord}
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed px-2">
          {description}
        </p>
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onPrimaryClick}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full ${primaryBtnBgClass} text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2 cursor-pointer`}
          >
            <PrimaryBtnIcon className="w-4 h-4" /> {primaryBtnText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/50 shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            {secondaryBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};