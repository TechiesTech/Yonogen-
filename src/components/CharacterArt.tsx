import React from 'react';

interface CharacterArtProps {
  type: 'visitor' | 'student' | 'worker' | 'citizenship' | 'business';
  className?: string;
}

export const CharacterArt: React.FC<CharacterArtProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'visitor':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Traveler with bucket/safari hat, sunglasses, lavender shirt, suitcase */}
          <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl" aria-label="Visitor Visa Traveler">
            <defs>
              <linearGradient id="suitYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
              <linearGradient id="suitcaseGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
              <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fdba74" />
              </linearGradient>
            </defs>

            {/* Suitcase on the left */}
            <rect x="18" y="125" width="45" height="70" rx="8" fill="url(#suitcaseGold)" stroke="#830dfa" strokeWidth="2" />
            <rect x="23" y="132" width="35" height="56" rx="4" fill="#830dfa" opacity="0.6" />
            <line x1="18" y1="160" x2="63" y2="160" stroke="#830dfa" strokeWidth="2" />
            {/* Suitcase handle */}
            <path d="M 33 125 L 33 90 Q 33 85 40 85 Q 47 85 47 90 L 47 125" fill="none" stroke="#830dfa" strokeWidth="3" />
            {/* Wheels */}
            <circle cx="28" cy="198" r="4.5" fill="#334155" />
            <circle cx="53" cy="198" r="4.5" fill="#334155" />

            {/* Traveler Body */}
            {/* Legs */}
            <rect x="90" y="170" width="14" height="40" rx="6" fill="url(#skin)" />
            <rect x="114" y="170" width="14" height="40" rx="6" fill="url(#skin)" />
            {/* Shoes */}
            <rect x="86" y="206" width="22" height="12" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="112" y="206" width="22" height="12" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Shorts */}
            <rect x="82" y="148" width="48" height="26" rx="5" fill="#cbd5e1" />
            <line x1="106" y1="152" x2="106" y2="174" stroke="#94a3b8" strokeWidth="2" />

            {/* Torso / Lavender T-Shirt */}
            <rect x="76" y="98" width="56" height="54" rx="14" fill="url(#suitYellow)" />
            <circle cx="104" cy="98" r="8" fill="#830dfa" />

            {/* Arm holding tablet/map */}
            <path d="M 76 108 L 56 128 L 62 136 L 80 120" fill="url(#suitYellow)" />
            <rect x="42" y="122" width="24" height="32" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="54" cy="138" r="5" fill="#ffffff" opacity="0.8" />

            {/* Head & Beard */}
            <circle cx="104" cy="62" r="24" fill="url(#skin)" />
            {/* Brown Beard */}
            <path d="M 88 64 Q 104 88 120 64 Q 118 84 104 88 Q 90 84 88 64 Z" fill="#78350f" />
            {/* Cool Sunglasses */}
            <rect x="88" y="52" width="14" height="10" rx="3" fill="#1e293b" />
            <rect x="106" y="52" width="14" height="10" rx="3" fill="#1e293b" />
            <line x1="102" y1="56" x2="106" y2="56" stroke="#1e293b" strokeWidth="2" />

            {/* Safari Sun Hat */}
            <ellipse cx="104" cy="42" rx="36" ry="10" fill="#830dfa" stroke="#830dfa" strokeWidth="1.5" />
            <path d="M 82 42 Q 104 22 126 42 Z" fill="#830dfa" />
            <rect x="85" y="38" width="38" height="4" fill="#830dfa" />

            {/* Airplane stamp badge floating */}
            <circle cx="160" cy="115" r="16" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <path d="M 152 118 L 168 112 L 157 122 Z" fill="#10b981" />
          </svg>
        </div>
      );

    case 'student':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Student with glasses, backpack, books */}
          <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl" aria-label="Student Visa Student">
            <defs>
              <linearGradient id="hoodiePink" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="studSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fbcfe8" />
              </linearGradient>
            </defs>

            {/* Backpack strap left */}
            <rect x="68" y="95" width="8" height="42" rx="4" fill="#0284c7" />

            {/* Body / Sweater */}
            <rect x="72" y="94" width="60" height="66" rx="16" fill="url(#hoodiePink)" />
            {/* White collar */}
            <polygon points="94,94 102,106 110,94" fill="#ffffff" />

            {/* Arm holding textbook stack */}
            <path d="M 68 110 L 52 145 L 75 145 Z" fill="#db2777" />
            {/* Textbooks in hand */}
            <rect x="42" y="132" width="36" height="12" rx="2" fill="#38bdf8" />
            <rect x="45" y="122" width="30" height="10" rx="2" fill="#830dfa" />
            <rect x="48" y="114" width="25" height="8" rx="2" fill="#34d399" />

            {/* Right hand waving */}
            <path d="M 128 110 L 148 100 L 158 85 L 150 82 L 138 98 Z" fill="url(#studSkin)" />
            {/* Floating sparkle note */}
            <circle cx="165" cy="80" r="3" fill="#830dfa" />

            {/* Neck */}
            <rect x="96" y="82" width="12" height="16" fill="url(#studSkin)" />

            {/* Head */}
            <circle cx="102" cy="58" r="26" fill="url(#studSkin)" />
            {/* Modern Hair */}
            <path d="M 78 52 Q 95 24 122 36 Q 132 44 128 62 Q 124 45 106 42 Q 88 42 80 54 Z" fill="#451a03" />

            {/* Round stylish glasses */}
            <circle cx="93" cy="58" r="9" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="113" cy="58" r="9" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="102" y1="58" x2="104" y2="58" stroke="#0f172a" strokeWidth="2.5" />
            {/* Eyes & Smile */}
            <circle cx="93" cy="58" r="3.5" fill="#1e293b" />
            <circle cx="113" cy="58" r="3.5" fill="#1e293b" />
            <path d="M 96 70 Q 103 76 110 70" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />

            {/* Floating graduation star */}
            <polygon points="155,40 158,48 166,48 160,53 162,61 155,56 148,61 150,53 144,48 152,48" fill="#830dfa" />
          </svg>
        </div>
      );

    case 'worker':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Skilled Worker with hard hat, beard, safety vest */}
          <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl" aria-label="Worker Visa">
            <defs>
              <linearGradient id="helmetYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
            </defs>

            {/* Worker Body */}
            <rect x="70" y="96" width="64" height="70" rx="12" fill="#64748b" />
            {/* Safety vest stripes */}
            <rect x="80" y="96" width="12" height="70" fill="#830dfa" />
            <rect x="112" y="96" width="12" height="70" fill="#830dfa" />
            <rect x="70" y="130" width="64" height="10" fill="#830dfa" />

            {/* Arms on hips - confident pose */}
            <path d="M 70 108 L 48 135 L 56 150 L 72 132" fill="#475569" />
            <path d="M 134 108 L 156 135 L 148 150 L 132 132" fill="#475569" />

            {/* Neck */}
            <rect x="96" y="80" width="12" height="18" fill="#fed7aa" />

            {/* Head with beard and glasses */}
            <circle cx="102" cy="58" r="24" fill="#fed7aa" />
            {/* Dark Beard */}
            <path d="M 86 58 Q 102 85 118 58 Q 114 80 102 84 Q 90 80 86 58 Z" fill="#334155" />
            {/* Glasses */}
            <rect x="88" y="50" width="12" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="2" />
            <rect x="104" y="50" width="12" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="2" />
            <line x1="100" y1="54" x2="104" y2="54" stroke="#0f172a" strokeWidth="2" />
            {/* Friendly smile inside beard */}
            <path d="M 96 66 Q 102 70 108 66" stroke="#ffffff" strokeWidth="2" fill="none" />

            {/* Lavender Construction Hard Hat */}
            <ellipse cx="102" cy="38" rx="28" ry="14" fill="url(#helmetYellow)" stroke="#830dfa" strokeWidth="1.5" />
            <path d="M 80 38 Q 102 14 124 38 Z" fill="#830dfa" />
            <rect x="98" y="16" width="8" height="24" rx="2" fill="#830dfa" opacity="0.6" />
          </svg>
        </div>
      );

    case 'citizenship':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Family: Dad, Mom, and Child */}
          <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl" aria-label="Citizenship Family">
            <defs>
              <linearGradient id="dadOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </linearGradient>
              <linearGradient id="momPink" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>

            {/* Dad on Left */}
            <rect x="42" y="80" width="45" height="75" rx="12" fill="url(#dadOrange)" />
            <circle cx="64" cy="52" r="18" fill="#fed7aa" />
            <path d="M 48 48 Q 64 28 80 44 Q 82 54 78 58 Q 72 40 56 46 Z" fill="#451a03" />
            <circle cx="60" cy="52" r="2.5" fill="#1e293b" />
            <circle cx="70" cy="52" r="2.5" fill="#1e293b" />
            <path d="M 61 60 Q 65 64 69 60" stroke="#c2410c" strokeWidth="1.5" fill="none" />

            {/* Mom on Right */}
            <rect x="115" y="86" width="45" height="75" rx="12" fill="url(#momPink)" />
            <circle cx="138" cy="54" r="18" fill="#fed7aa" />
            <path d="M 120 54 Q 138 28 156 50 Q 158 75 148 78 Q 146 50 130 50 Z" fill="#78350f" />
            <circle cx="133" cy="54" r="2.5" fill="#1e293b" />
            <circle cx="143" cy="54" r="2.5" fill="#1e293b" />
            <path d="M 134 62 Q 138 66 142 62" stroke="#be185d" strokeWidth="1.5" fill="none" />

            {/* Child in Center (Front) */}
            <rect x="85" y="125" width="34" height="48" rx="8" fill="#3b82f6" />
            <circle cx="102" cy="104" r="15" fill="#fed7aa" />
            <path d="M 88 100 Q 102 82 116 100 Q 114 108 92 108 Z" fill="#451a03" />
            <circle cx="98" cy="104" r="2" fill="#1e293b" />
            <circle cx="106" cy="104" r="2" fill="#1e293b" />
            <path d="M 99 111 Q 102 114 105 111" stroke="#1d4ed8" strokeWidth="1.5" fill="none" />

            {/* Protective hugging hands */}
            <path d="M 72 100 Q 86 112 88 126" stroke="#830dfa" strokeWidth="3" fill="none" />
            <path d="M 130 100 Q 116 112 114 126" stroke="#db2777" strokeWidth="3" fill="none" />

            {/* House/Citizenship badge */}
            <polygon points="102,68 110,75 94,75" fill="#830dfa" />
          </svg>
        </div>
      );

    case 'business':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Two business executives in dark suits shaking hands */}
          <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl" aria-label="Business Visa Partners">
            <defs>
              <linearGradient id="suitDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* Exec 1 (Left) */}
            <rect x="40" y="75" width="46" height="85" rx="10" fill="url(#suitDark)" />
            {/* White shirt & blue tie */}
            <polygon points="58,75 63,88 68,75" fill="#ffffff" />
            <polygon points="61,84 65,84 63,105" fill="#3b82f6" />
            {/* Head 1 */}
            <circle cx="63" cy="50" r="18" fill="#fed7aa" />
            <path d="M 48 46 Q 63 26 78 44 Z" fill="#1e293b" />
            <circle cx="58" cy="50" r="2.5" fill="#0f172a" />
            <circle cx="68" cy="50" r="2.5" fill="#0f172a" />
            <path d="M 60 58 Q 63 62 67 58" stroke="#0f172a" strokeWidth="1.5" fill="none" />

            {/* Exec 2 (Right) */}
            <rect x="114" y="75" width="46" height="85" rx="10" fill="url(#suitDark)" />
            {/* White shirt & red tie */}
            <polygon points="132,75 137,88 142,75" fill="#ffffff" />
            <polygon points="135,84 139,84 137,105" fill="#ef4444" />
            {/* Head 2 */}
            <circle cx="137" cy="50" r="18" fill="#fed7aa" />
            <path d="M 122 46 Q 137 26 152 44 Z" fill="#475569" />
            {/* Glasses on Exec 2 */}
            <rect x="127" y="47" width="8" height="6" rx="1" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="139" y="47" width="8" height="6" rx="1" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="135" y1="50" x2="139" y2="50" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="131" cy="50" r="2" fill="#0f172a" />
            <circle cx="143" cy="50" r="2" fill="#0f172a" />
            <path d="M 133 58 Q 137 62 141 58" stroke="#0f172a" strokeWidth="1.5" fill="none" />

            {/* Handshake in Center */}
            <path d="M 72 105 L 94 116" stroke="#fed7aa" strokeWidth="7" strokeLinecap="round" />
            <path d="M 128 105 L 106 116" stroke="#fed7aa" strokeWidth="7" strokeLinecap="round" />
            <rect x="94" y="112" width="12" height="10" rx="3" fill="#830dfa" />

            {/* Deal Sparkle */}
            <polygon points="100,96 102,102 108,102 103,106 105,112 100,108 95,112 97,106 92,102 98,102" fill="#830dfa" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
