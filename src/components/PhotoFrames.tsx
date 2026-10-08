import React from "react";
import "./PhotoFrames.css";

const frames = [
  {
    src: "/images/airport-travel.jpg",
    className: "frame frame-travel",
    alt: "International airport travel",
  },
  {
    src: "/images/students-collaborating.jpg",
    className: "frame frame-student",
    alt: "Students collaborating in a university library",
  },
  {
    src: "/images/career-teamwork.jpg",
    className: "frame frame-career",
    alt: "Professionals collaborating on a career project",
  },
];

export default function PhotoFrames() {
  return (
    <div className="photo-frame-section">
      <div className="photo-frame-container">

        {/* Travel and migration */}
        <div className={frames[0].className}>
          <img src={frames[0].src} alt={frames[0].alt} loading="lazy" />
        </div>

        {/* Study */}
        <div className={frames[1].className}>
          <img src={frames[1].src} alt={frames[1].alt} loading="lazy" />
        </div>

        {/* Work */}
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
