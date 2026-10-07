import React from 'react';

interface LandmarkArtProps {
  type: 'eiffel' | 'towerbridge' | 'pagoda' | 'stbasil' | 'sydneyopera';
  className?: string;
}

export const LandmarkArt: React.FC<LandmarkArtProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'eiffel':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* 3D isometric styled Eiffel Tower pedestal */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="eiffelBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="50%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
              <linearGradient id="podiumGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d1fae5" />
                <stop offset="100%" stopColor="#a7f3d0" />
              </linearGradient>
              <linearGradient id="goldTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
            </defs>

            {/* Isometric Podium Base */}
            <polygon points="100,165 170,140 100,120 30,140" fill="url(#podiumGreen)" />
            <polygon points="30,140 100,165 100,180 30,155" fill="#6ee7b7" />
            <polygon points="100,165 170,140 170,155 100,180" fill="#34d399" />

            {/* Little 3D bushes/trees around base */}
            <circle cx="55" cy="142" r="7" fill="#10b981" />
            <circle cx="70" cy="148" r="6" fill="#059669" />
            <circle cx="130" cy="148" r="6" fill="#059669" />
            <circle cx="145" cy="142" r="7" fill="#10b981" />

            {/* Cloud puffs around */}
            <ellipse cx="45" cy="120" rx="14" ry="10" fill="#ffffff" opacity="0.9" />
            <ellipse cx="155" cy="122" rx="14" ry="10" fill="#ffffff" opacity="0.9" />

            {/* Eiffel Legs & Base Arch */}
            <path d="M 68 132 L 80 85 L 120 85 L 132 132 Q 100 115 68 132 Z" fill="url(#eiffelBase)" />
            <path d="M 85 132 Q 100 120 115 132 L 110 100 L 90 100 Z" fill="#4b5563" opacity="0.6" />

            {/* First Platform */}
            <rect x="74" y="82" width="52" height="6" rx="2" fill="#4b5563" />
            <rect x="76" y="80" width="48" height="3" fill="#9ca3af" />

            {/* Mid Section */}
            <polygon points="82,80 88,48 112,48 118,80" fill="url(#eiffelBase)" />
            <line x1="88" y1="48" x2="112" y2="80" stroke="#4b5563" strokeWidth="2" />
            <line x1="112" y1="48" x2="88" y2="80" stroke="#4b5563" strokeWidth="2" />

            {/* Second Platform */}
            <rect x="85" y="45" width="30" height="5" rx="1.5" fill="#374151" />

            {/* Upper Spire */}
            <polygon points="92,45 98,15 102,15 108,45" fill="url(#eiffelBase)" />
            <line x1="100" y1="15" x2="100" y2="5" stroke="#830dfa" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="100" cy="5" r="3" fill="url(#goldTop)" />

            {/* Light beam / glow */}
            <polygon points="100,5 60,0 140,0" fill="#830dfa" opacity="0.18" />
          </svg>
        </div>
      );

    case 'towerbridge':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="stoneWall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="50%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
              <linearGradient id="bridgeWater" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>

            {/* Water podium */}
            <polygon points="100,165 175,140 100,118 25,140" fill="url(#bridgeWater)" />
            <polygon points="25,140 100,165 100,175 25,150" fill="#1d4ed8" />
            <polygon points="100,165 175,140 175,150 100,175" fill="#1e40af" />

            {/* Left Tower */}
            <rect x="48" y="55" width="32" height="85" rx="2" fill="url(#stoneWall)" stroke="#830dfa" strokeWidth="1" />
            {/* Left Tower Roofs */}
            <polygon points="44,55 64,25 64,55" fill="#0284c7" />
            <polygon points="64,25 84,55 64,55" fill="#0369a1" />
            <circle cx="64" cy="22" r="2.5" fill="#830dfa" />
            {/* Windows Left */}
            <rect x="58" y="70" width="12" height="18" rx="6" fill="#1e293b" />
            <rect x="58" y="100" width="12" height="18" rx="6" fill="#1e293b" />

            {/* Right Tower */}
            <rect x="120" y="55" width="32" height="85" rx="2" fill="url(#stoneWall)" stroke="#830dfa" strokeWidth="1" />
            {/* Right Tower Roofs */}
            <polygon points="116,55 136,25 136,55" fill="#0284c7" />
            <polygon points="136,25 156,55 136,55" fill="#0369a1" />
            <circle cx="136" cy="22" r="2.5" fill="#830dfa" />
            {/* Windows Right */}
            <rect x="130" y="70" width="12" height="18" rx="6" fill="#1e293b" />
            <rect x="130" y="100" width="12" height="18" rx="6" fill="#1e293b" />

            {/* Upper Walkway */}
            <rect x="78" y="62" width="44" height="8" fill="#38bdf8" />
            <line x1="80" y1="62" x2="120" y2="62" stroke="#bae6fd" strokeWidth="2" />
            <line x1="80" y1="70" x2="120" y2="70" stroke="#0284c7" strokeWidth="2" />

            {/* Lower Drawbridge Span */}
            <rect x="80" y="112" width="40" height="8" fill="#0284c7" />
            {/* Suspension Cords */}
            <path d="M 48 90 Q 25 125 18 135" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <path d="M 152 90 Q 175 125 182 135" stroke="#38bdf8" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'pagoda':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="pagodaRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <linearGradient id="roofGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
            </defs>

            {/* Base platform */}
            <polygon points="100,168 165,145 100,126 35,145" fill="#f87171" opacity="0.3" />
            <rect x="65" y="140" width="70" height="15" rx="3" fill="#e5e7eb" />
            <rect x="70" y="135" width="60" height="8" rx="2" fill="#d1d5db" />

            {/* Tier 1 Level */}
            <rect x="75" y="105" width="50" height="30" fill="url(#pagodaRed)" stroke="#991b1b" strokeWidth="1" />
            {/* Columns & lattice */}
            <line x1="88" y1="105" x2="88" y2="135" stroke="#830dfa" strokeWidth="2.5" />
            <line x1="112" y1="105" x2="112" y2="135" stroke="#830dfa" strokeWidth="2.5" />
            <rect x="94" y="112" width="12" height="18" fill="#7f1d1d" />

            {/* Tier 1 Eaves (curved) */}
            <path d="M 50 108 Q 100 95 150 108 Q 100 85 50 108 Z" fill="url(#roofGold)" stroke="#830dfa" strokeWidth="1.5" />

            {/* Tier 2 Level */}
            <rect x="80" y="78" width="40" height="20" fill="url(#pagodaRed)" />
            <line x1="92" y1="78" x2="92" y2="98" stroke="#830dfa" strokeWidth="2" />
            <line x1="108" y1="78" x2="108" y2="98" stroke="#830dfa" strokeWidth="2" />

            {/* Tier 2 Eaves */}
            <path d="M 60 78 Q 100 68 140 78 Q 100 60 60 78 Z" fill="url(#roofGold)" stroke="#830dfa" strokeWidth="1.5" />

            {/* Tier 3 Level */}
            <rect x="86" y="56" width="28" height="16" fill="url(#pagodaRed)" />

            {/* Tier 3 Eaves */}
            <path d="M 70 56 Q 100 48 130 56 Q 100 40 70 56 Z" fill="url(#roofGold)" stroke="#830dfa" strokeWidth="1.5" />

            {/* Finial / Spire */}
            <polygon points="97,42 100,22 103,42" fill="#830dfa" />
            <circle cx="100" cy="20" r="3.5" fill="#830dfa" />
            <line x1="100" y1="20" x2="100" y2="10" stroke="#830dfa" strokeWidth="2" strokeLinecap="round" />
            <circle cx="100" cy="10" r="2" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'stbasil':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="domeSwirl1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
              <linearGradient id="domeSwirl2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="domeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
            </defs>

            {/* Stone Wall Pedestal */}
            <rect x="55" y="115" width="90" height="45" rx="3" fill="#b91c1c" />
            <rect x="58" y="120" width="84" height="3" fill="#ffffff" opacity="0.4" />
            <rect x="58" y="135" width="84" height="3" fill="#ffffff" opacity="0.4" />

            {/* Arches at base */}
            <path d="M 65 160 L 65 140 Q 72 132 80 140 L 80 160 Z" fill="#7f1d1d" />
            <path d="M 92 160 L 92 135 Q 100 125 108 135 L 108 160 Z" fill="#7f1d1d" />
            <path d="M 120 160 L 120 140 Q 128 132 135 140 L 135 160 Z" fill="#7f1d1d" />

            {/* Left Tower & Onion Dome */}
            <rect x="58" y="70" width="24" height="45" fill="#dc2626" />
            {/* Left Onion Dome */}
            <path d="M 60 70 Q 52 50 70 38 Q 88 50 80 70 Z" fill="url(#domeSwirl2)" />
            <line x1="70" y1="38" x2="70" y2="30" stroke="#830dfa" strokeWidth="2" />
            <line x1="67" y1="33" x2="73" y2="33" stroke="#830dfa" strokeWidth="1.5" />

            {/* Right Tower & Onion Dome */}
            <rect x="118" y="70" width="24" height="45" fill="#dc2626" />
            <path d="M 120 70 Q 112 50 130 38 Q 148 50 140 70 Z" fill="url(#domeSwirl1)" />
            <line x1="130" y1="38" x2="130" y2="30" stroke="#830dfa" strokeWidth="2" />
            <line x1="127" y1="33" x2="133" y2="33" stroke="#830dfa" strokeWidth="1.5" />

            {/* Central Main Tower (Taller) */}
            <rect x="85" y="55" width="30" height="60" fill="#991b1b" />
            <path d="M 85 55 Q 75 30 100 15 Q 125 30 115 55 Z" fill="url(#domeGold)" stroke="#830dfa" strokeWidth="1.5" />
            <line x1="100" y1="15" x2="100" y2="5" stroke="#830dfa" strokeWidth="2.5" />
            <line x1="96" y1="9" x2="104" y2="9" stroke="#830dfa" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'sydneyopera':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="operaShell" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#e5e7eb" />
              </linearGradient>
              <linearGradient id="harborSea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="graniteBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>

            {/* Water podium */}
            <polygon points="100,168 180,140 100,118 20,140" fill="url(#harborSea)" />
            <polygon points="20,140 100,168 100,178 20,150" fill="#0369a1" />
            <polygon points="100,168 180,140 180,150 100,178" fill="#075985" />

            {/* Shore / Green walkway edge */}
            <polygon points="98,155 168,133 100,122 35,138" fill="#10b981" opacity="0.6" />

            {/* Opera House Concrete Podium Base */}
            <polygon points="95,148 160,128 100,118 45,135" fill="url(#graniteBase)" />

            {/* Small Shell 1 */}
            <path d="M 50 135 Q 65 95 82 125 Z" fill="url(#operaShell)" stroke="#d1d5db" strokeWidth="1" />
            <path d="M 53 133 Q 66 102 78 126 Z" fill="#e2e8f0" />

            {/* Main Shell 1 (Large left) */}
            <path d="M 65 132 Q 90 60 118 128 Z" fill="url(#operaShell)" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M 72 130 Q 94 72 110 126 Z" fill="#f8fafc" />
            {/* Glass curtain wall inside shell */}
            <path d="M 108 126 Q 102 100 116 128 Z" fill="#38bdf8" opacity="0.7" />

            {/* Main Shell 2 (Center peak) */}
            <path d="M 100 128 Q 128 68 152 132 Z" fill="url(#operaShell)" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M 106 127 Q 130 78 145 130 Z" fill="#f8fafc" />

            {/* Minor Shell 3 (Right tail) */}
            <path d="M 135 130 Q 155 98 168 135 Z" fill="url(#operaShell)" stroke="#d1d5db" strokeWidth="1" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
