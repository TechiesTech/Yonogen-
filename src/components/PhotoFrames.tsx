import React, { useEffect, useState } from "react";
import "./PhotoFrames.css";

const frames = [
  {
    src: "/images/airport-travel.jpg",
    alt: "International airport travel",
  },
  {
    src: "/images/students-collaborating.jpg",
    alt: "Students collaborating in a university library",
  },
  {
    src: "/images/career-teamwork.jpg",
    alt: "Professionals collaborating on a career project",
  },
];

export default function PhotoFrames() {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % frames.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="photo-frame-section">
      <div className="photo-frame-container">
        <div
          className="photo-frame-track"
          style={{ transform: `translateX(-${activeFrame * 100}%)` }}
          aria-live="polite"
        >
          {frames.map((frame) => (
            <div className="photo-frame-slide" key={frame.src}>
              <img src={frame.src} alt={frame.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="photo-frame-indicators" aria-label="Choose an image">
          {frames.map((frame, index) => (
            <button
              aria-label={`Show image ${index + 1}: ${frame.alt}`}
              aria-current={activeFrame === index ? "true" : undefined}
              className={activeFrame === index ? "active" : ""}
              key={frame.src}
              onClick={() => setActiveFrame(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
