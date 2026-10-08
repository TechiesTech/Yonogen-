import React from "react";
import "./PhotoFrames.css";

const frames = [
  {
    src: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
    className: "frame frame-city",
    alt: "City & Historic University Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    className: "frame frame-student",
    alt: "International Student",
  },
  {
    src: "/images/graduate-celebrating.jpg",
    className: "frame frame-graduate",
    alt: "Graduate Celebrating",
  },
];

export default function PhotoFrames() {
  return (
    <div className="photo-frame-section">
      <div className="photo-frame-container">

        {/* Top / City */}
        <div className={frames[0].className}>
          <img src={frames[0].src} alt={frames[0].alt} loading="lazy" />
        </div>

        {/* Middle / Student */}
        <div className={frames[1].className}>
          <img src={frames[1].src} alt={frames[1].alt} loading="lazy" />
        </div>

        {/* Bottom / Graduate */}
        <div className={frames[2].className}>
          <img src={frames[2].src} alt={frames[2].alt} loading="lazy" />
        </div>

        {/* Floating cursor */}
        <div className="floating-cursor">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3L10 25L15 18L22 26L26 22L19 14L28 12L5 3Z"
              fill="#F59E0B"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
    </div>
  );
}
