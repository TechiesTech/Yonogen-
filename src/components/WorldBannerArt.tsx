import React from 'react';

export const WorldBannerArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-2xl">
        <defs>
          <radialGradient id="globeBlue" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="60%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </radialGradient>
          <linearGradient id="sandStone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="50%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="metalEiffel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
        </defs>

        {/* Floating Mini Hot Air Balloon */}
        <ellipse cx="65" cy="55" rx="14" ry="17" fill="#38bdf8" />
        <ellipse cx="65" cy="55" rx="5" ry="17" fill="#f43f5e" />
        <rect x="62" y="74" width="6" height="5" rx="1" fill="#b45309" />
        <line x1="59" y1="71" x2="62" y2="74" stroke="#64748b" strokeWidth="0.8" />
        <line x1="71" y1="71" x2="68" y2="74" stroke="#64748b" strokeWidth="0.8" />

        {/* Blue Globe in background */}
        <circle cx="155" cy="98" r="48" fill="url(#globeBlue)" />
        {/* Continents on globe */}
        <path d="M 140 75 Q 160 70 170 85 Q 160 100 145 95 Z" fill="#86efac" opacity="0.8" />
        <path d="M 130 110 Q 145 105 155 125 Q 140 135 130 120 Z" fill="#86efac" opacity="0.8" />
        <ellipse cx="155" cy="98" rx="46" ry="16" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* Big Ben Clock Tower (Back center) */}
        <rect x="182" y="48" width="28" height="110" fill="url(#sandStone)" />
        <polygon points="180,48 196,15 212,48" fill="#475569" />
        <circle cx="196" cy="65" r="8" fill="#ffffff" stroke="#92400e" strokeWidth="1.5" />
        <line x1="196" y1="65" x2="196" y2="60" stroke="#000000" strokeWidth="1" />
        <line x1="196" y1="65" x2="200" y2="65" stroke="#000000" strokeWidth="1" />

        {/* Statue of Liberty (Back left) */}
        <polygon points="120,40 125,95 110,95" fill="#5eead4" />
        <circle cx="118" cy="38" r="6" fill="#2dd4bf" />
        {/* Torch arm */}
        <line x1="114" y1="42" x2="105" y2="28" stroke="#2dd4bf" strokeWidth="3" />
        <circle cx="104" cy="26" r="3" fill="#facc15" />

        {/* Colosseum / Classical Arch facade on bottom left */}
        <path d="M 40 180 L 40 135 Q 85 130 130 135 L 130 180 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="1" />
        <path d="M 50 175 L 50 155 Q 60 148 70 155 L 70 175 Z" fill="#7c2d12" />
        <path d="M 80 175 L 80 155 Q 90 148 100 155 L 100 175 Z" fill="#7c2d12" />
        <path d="M 110 175 L 110 155 Q 120 148 125 155 L 125 175 Z" fill="#7c2d12" />

        {/* Eiffel Tower in Foreground */}
        <path d="M 98 178 L 122 80 L 138 80 L 162 178 Q 130 155 98 178 Z" fill="url(#metalEiffel)" />
        <polygon points="125,80 130,28 135,80" fill="url(#metalEiffel)" />
        <line x1="130" y1="28" x2="130" y2="18" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="130" cy="18" r="2.5" fill="#fef08a" />
        {/* Arch opening */}
        <path d="M 116 178 Q 130 162 144 178 Z" fill="#1f2937" opacity="0.7" />

        {/* Modern High-speed train or travel bus in foreground */}
        <rect x="75" y="172" width="60" height="22" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="75" y="178" width="60" height="4" fill="#0284c7" />
        <rect x="80" y="174" width="10" height="6" rx="1" fill="#38bdf8" />
        <rect x="94" y="174" width="10" height="6" rx="1" fill="#38bdf8" />
        <rect x="108" y="174" width="10" height="6" rx="1" fill="#38bdf8" />
        <rect x="122" y="174" width="8" height="6" rx="1" fill="#38bdf8" />
        <circle cx="88" cy="194" r="3.5" fill="#334155" />
        <circle cx="122" cy="194" r="3.5" fill="#334155" />

        {/* Tiny clouds */}
        <ellipse cx="230" cy="115" rx="16" ry="8" fill="#ffffff" opacity="0.9" />
        <ellipse cx="50" cy="110" rx="14" ry="7" fill="#ffffff" opacity="0.9" />
      </svg>
    </div>
  );
};
