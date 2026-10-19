import React from "react";

const REVIEWS = [
  {
    id: "r1",
    role: "MBBS Abroad Student",
    text: "I had so many doubts about studying medicine abroad, but Yologen helped me get clarity at every step. The team was approachable and explained the process in simple words. It made the experience feel much less stressful.",
    rating: 5,
    name: "Parul",
    program: "MBBS Abroad",
    avatar:
      "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791472338/ChatGPT_Image_Oct_8_2026_08_42_04_PM_soljyg.png",
  },
  {
    id: "r2",
    role: "Work Permit Professional",
    text: "Moving to Europe for work was a big decision for me. Yologen helped me understand the process and the documentation involved. Their guidance made the steps easier to navigate, and I am excited about this new chapter!",
    rating: 4,
    name: "Rohan",
    program: "European Work Permit",
    avatar:
      "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791472036/ChatGPT_Image_Oct_8_2026_08_36_42_PM_ryptcb.png",
  },
  {
    id: "r3",
    role: "MBBS Abroad Student",
    text: "Yologen made the whole process of planning my MBBS abroad much easier. They guided me through the admission and documentation steps and helped me understand what to do next. Really helpful support throughout my journey!",
    rating: 4.5,
    name: "Abhinav",
    program: "MBBS Abroad",
    avatar:
      "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791471194/abhinav-kaushik_wbknph.png",
  },
  {
    id: "r4",
    role: "Skilled Migration Client",
    text: "The skilled migration and PR process can feel confusing when you first start. Yologen helped me understand the requirements and organize the next steps. I appreciated having guidance while exploring opportunities overseas.",
    rating: 4,
    name: "Sneha",
    program: "Skilled Migration & PR",
    avatar:
      "https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791472036/ChatGPT_Image_Oct_8_2026_08_35_36_PM_onxwhe.png",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      <div className="flex text-amber-400 text-sm">
        {Array.from({ length: full }).map((_, i) => (
          <span key={i}>★</span>
        ))}
        {half && <span className="text-amber-300">★</span>}
      </div>
      <span className="text-slate-500 text-xs font-semibold ml-1">
        {rating}
      </span>
    </div>
  );
};

export const CustomerFeedback: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-10 sm:py-14 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-3 sm:pb-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
              Client Review
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Kind words <br />
            from Our{" "}
            <span className="font-editorial-italic font-normal">Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3"
            >
              {/* Quote icon */}
              <div
                className="text-amber-500"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 22V13.4C0 10.3333 0.633333 7.73333 1.9 5.6C3.16667 3.46667 5.13333 1.66667 7.8 0.2L9.8 3C8.2 3.93333 7 5.06667 6.2 6.4C5.4 7.73333 5 9.26667 5 11H10V22H0ZM18 22V13.4C18 10.3333 18.6333 7.73333 19.9 5.6C21.1667 3.46667 23.1333 1.66667 25.8 0.2L27.8 3C26.2 3.93333 25 5.06667 24.2 6.4C23.4 7.73333 23 9.26667 23 11H28V22H18Z"
                    fill="#830dfa"
                    fillOpacity="0.18"
                  />
                </svg>
              </div>

              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                {review.role}
              </p>

              <p className="text-sm text-slate-700 leading-relaxed line-clamp-5 flex-1">
                {review.text}
              </p>

              <StarRating rating={review.rating} />

              <div className="border-t border-slate-100 pt-3 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-100 shrink-0"
                  loading="lazy"
                  decoding="async"
                  width="36"
                  height="36"
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {review.name}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {review.program}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};