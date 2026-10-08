import React from 'react';

const REVIEWS = [
  {
    id: 'r1',
    role: 'MBBS Abroad Student',
    text: 'I am Abhinav Kaushik from Jaipur, pursuing my medical degree at Nanjing Medical University in China. YOLOgen Consultant has guided me throughout my study-abroad journey, from understanding the process to preparing for my move. I appreciate their dedicated support along the way.',
    rating: 4.5,
    name: 'Abhinav Kaushik',
    program: 'MBBS Abroad',
    avatar: 'https://res.cloudinary.com/droqi9jl3/image/upload/v1791471194/abhinav-kaushik_wbknph.png',
  },
  {
    id: 'r2',
    role: 'MBBS Abroad Student',
    text: 'YOLOgen Consultant made my dream of studying MBBS abroad come true. I am Parul Vickku, and I had a wonderful experience with the counseling team. They guided me step by step with complete transparency, making my university admission and visa process smooth and stress-free.',
    rating: 4.5,
    name: 'Parul Vickku',
    program: 'MBBS Abroad',
    avatar: 'https://res.cloudinary.com/droqi9jl3/image/upload/v1791472338/ChatGPT_Image_Oct_8_2026_08_42_04_PM_soljyg.png',
  },
  {
    id: 'r3',
    role: 'Work Permit Professional',
    text: 'YOLOgen Consultant provided exceptional guidance for my international work visa. I am Rohan Mehta from Delhi, and the team managed my job documentation, contract review, and visa stamping with complete transparency and speed. A truly dependable consultancy for global careers!',
    rating: 4.5,
    name: 'Rohan Mehta',
    program: 'European Work Permit',
    avatar: 'https://res.cloudinary.com/droqi9jl3/image/upload/v1791472036/ChatGPT_Image_Oct_8_2026_08_36_42_PM_ryptcb.png',
  },
  {
    id: 'r4',
    role: 'Skilled Migration Client',
    text: 'The entire migration and visa journey with YOLOgen Consultant was smooth, transparent, and completely hassle-free. I am Sneha Patel from Mumbai. From profile assessment to visa filing and migration paperwork, their expert team was proactive, reliable, and supportive throughout.',
    rating: 4.5,
    name: 'Sneha Patel',
    program: 'Skilled Migration & PR',
    avatar: 'https://res.cloudinary.com/droqi9jl3/image/upload/v1791472036/ChatGPT_Image_Oct_8_2026_08_35_36_PM_onxwhe.png',
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

export const CustomerFeedback: React.FC = () => {
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
              <path d="M0 22V13.4C0 10.3333 0.633333 7.73333 1.9 5.6C3.16667 3.46667 5.13333 1.66667 7.8 0.2L9.8 3C8.2 3.93333 7 5.06667 6.2 6.4C5.4 7.73333 5 9.26667 5 11H10V22H0ZM18 22V13.4C18 10.3333 18.6333 7.73333 19.9 5.6C21.1667 3.46667 23.1333 1.66667 25.8 0.2L27.8 3C26.2 3.93333 25 5.06667 24.2 6.4C23.4 7.73333 23 9.26667 23 11H28V22H18Z" fill="#830dfa" fillOpacity="0.18" />
            </svg>
          </div>

          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">{review.role}</p>

          <p className="text-sm text-slate-700 leading-relaxed line-clamp-5 flex-1">
            {review.text}
          </p>

          <StarRating rating={review.rating} />

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
