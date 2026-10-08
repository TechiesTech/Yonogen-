import React from 'react';
import { TestimonialReview } from '../data/mockData';

interface CustomerFeedbackProps {
  onSelectReview: (review: TestimonialReview) => void;
}

const REVIEWS = [
  {
    id: 'r1',
    role: 'MBBS Abroad Student',
    text: 'Jagvimal Consultancy – A Symbol of Trust And Determination. I am Abhinav Kaushik from Jaipur– a student of Nanjing medical university (China) really enjoying and pursuing my medical degree here. Jagvimal Consultancy has been very helpful throughout the journey.',
    rating: 4.5,
    name: 'Abhinav Kaushik',
    program: 'MBBS Abroad',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=260&q=80',
  },
  {
    id: 'r2',
    role: 'MBBS Abroad Student',
    text: 'Jagvimal Consultancy – A Symbol of Trust And Determination. I am Parul Vickku and I had a great experience with the counseling team. They guided me step by step and made my dream of studying MBBS abroad come true.',
    rating: 4.5,
    name: 'Parul Vickku',
    program: 'MBBS Abroad',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=260&q=80',
  },
  {
    id: 'r3',
    role: 'MBBS Abroad Student',
    text: 'Jagvimal Consultancy – A Symbol of Trust And Determination. I am Rohan Mehta from Delhi– a student of Kazan Federal University (Russia). The support from the team was incredible from application to arrival.',
    rating: 4.5,
    name: 'Rohan Mehta',
    program: 'MBBS Abroad',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=260&q=80',
  },
  {
    id: 'r4',
    role: 'MBBS Abroad Student',
    text: 'Jagvimal Consultancy – A Symbol of Trust And Determination. I am Sneha Patel from Mumbai. The entire admission process was smooth, transparent and hassle-free. I am now studying at a top medical university abroad.',
    rating: 4.5,
    name: 'Sneha Patel',
    program: 'MBBS Abroad',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=260&q=80',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      <div className="flex text-amber-400 text-sm">
        {Array.from({ length: full }).map((_, i) => <span key={i}>★</span>)}
        {half && <span className="text-amber-300">★</span>}
      </div>
      <span className="text-slate-500 text-xs font-semibold ml-1">{rating}</span>
    </div>
  );
};

export const CustomerFeedback: React.FC<CustomerFeedbackProps> = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      {REVIEWS.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3"
        >
          {/* Quote icon */}
          <div className="text-amber-500" style={{ fontSize: '2rem', lineHeight: 1 }}>
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 22V13.4C0 10.3333 0.633333 7.73333 1.9 5.6C3.16667 3.46667 5.13333 1.66667 7.8 0.2L9.8 3C8.2 3.93333 7 5.06667 6.2 6.4C5.4 7.73333 5 9.26667 5 11H10V22H0ZM18 22V13.4C18 10.3333 18.6333 7.73333 19.9 5.6C21.1667 3.46667 23.1333 1.66667 25.8 0.2L27.8 3C26.2 3.93333 25 5.06667 24.2 6.4C23.4 7.73333 23 9.26667 23 11H28V22H18Z" fill="#830dfa" fillOpacity="0.18"/>
            </svg>
          </div>

          {/* Role */}
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">{review.role}</p>

          {/* Review text */}
          <p className="text-sm text-slate-700 leading-relaxed line-clamp-5 flex-1">
            {review.text}
          </p>

          {/* Star rating */}
          <StarRating rating={review.rating} />

          {/* Divider */}
          <div className="border-t border-slate-100 pt-3 flex items-center gap-3">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-100 shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">{review.name}</p>
              <p className="text-[11px] text-slate-500 truncate">{review.program}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
