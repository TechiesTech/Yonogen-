import React from 'react';
import { LandmarkCard } from '../../data/mockData';

interface CountryPillsRowProps {
  row1Countries: LandmarkCard[];
  row2Countries: LandmarkCard[];
  onCountryClick: (country: LandmarkCard) => void;
}

export const CountryPillsRow: React.FC<CountryPillsRowProps> = ({
  row1Countries,
  row2Countries,
  onCountryClick,
}) => {
  return (
    <div className="mt-3 sm:mt-6 max-w-4xl mx-auto space-y-1.5 sm:space-y-2 px-2">
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
        {row1Countries.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onCountryClick(c)}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium bg-white text-slate-700 border border-slate-200/85 shadow-xs hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 transition-all cursor-pointer"
          >
            <img
              src={c.imageUrl}
              alt={c.country}
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover shadow-xs border border-white"
              loading="lazy"
              decoding="async"
              width="20"
              height="20"
            />
            <span>{c.country}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
        {row2Countries.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onCountryClick(c)}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium bg-white text-slate-700 border border-slate-200/85 shadow-xs hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 transition-all cursor-pointer"
          >
            <img
              src={c.imageUrl}
              alt={c.country}
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover shadow-xs border border-white"
              loading="lazy"
              decoding="async"
              width="20"
              height="20"
            />
            <span>{c.country}</span>
          </button>
        ))}
      </div>
    </div>
  );
};