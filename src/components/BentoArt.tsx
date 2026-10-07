import React from 'react';

interface BentoArtProps {
  type: 'ielts-bulb' | 'pte-books' | 'german-dict' | 'medical-kit';
  className?: string;
}

export const BentoArt: React.FC<BentoArtProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'ielts-bulb':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full drop-shadow-xl" aria-label="IELTS Lightbulbs">
            <defs>
              <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#830dfa" />
                <stop offset="50%" stopColor="#830dfa" />
                <stop offset="100%" stopColor="#830dfa" />
              </radialGradient>
              <linearGradient id="armSleeve1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="armSleeve2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
            </defs>

            {/* Ambient Aura */}
            <circle cx="100" cy="55" r="45" fill="#830dfa" opacity="0.6" />

            {/* Arm 1 (Left - smaller bulb) */}
            <rect x="35" y="125" width="22" height="55" rx="6" fill="url(#armSleeve2)" />
            <rect x="39" y="105" width="14" height="25" rx="5" fill="#fed7aa" />
            {/* Bulb 1 */}
            <circle cx="46" cy="85" r="18" fill="url(#bulbGlow)" />
            <rect x="42" y="98" width="8" height="6" rx="1" fill="#94a3b8" />
            <polygon points="46,75 48,82 54,82 50,86 52,92 46,88 40,92 42,86 38,82 44,82" fill="#ffffff" opacity="0.7" />

            {/* Arm 3 (Right - medium bulb) */}
            <rect x="145" y="120" width="22" height="60" rx="6" fill="#f43f5e" />
            <rect x="149" y="100" width="14" height="24" rx="5" fill="#fed7aa" />
            {/* Bulb 3 */}
            <circle cx="156" cy="78" r="20" fill="url(#bulbGlow)" />
            <rect x="151" y="93" width="10" height="7" rx="1" fill="#94a3b8" />
            <polygon points="156,68 158,74 164,74 160,78 162,84 156,80 150,84 152,78 148,74 154,74" fill="#ffffff" opacity="0.7" />

            {/* Arm 2 (Center - large bulb held high) */}
            <rect x="88" y="115" width="24" height="65" rx="6" fill="url(#armSleeve1)" />
            <rect x="93" y="85" width="14" height="35" rx="5" fill="#fed7aa" />
            {/* Bulb 2 Main */}
            <circle cx="100" cy="52" r="28" fill="url(#bulbGlow)" />
            <rect x="94" y="74" width="12" height="10" rx="2" fill="#64748b" />
            <rect x="96" y="81" width="8" height="3" fill="#334155" />
            {/* Filament / Core */}
            <path d="M 94 56 Q 100 42 106 56" stroke="#ffffff" strokeWidth="2.5" fill="none" />
            <polygon points="100,40 103,48 111,48 105,53 107,61 100,56 93,61 95,53 89,48 97,48" fill="#ffffff" opacity="0.8" />
          </svg>
        </div>
      );

    case 'pte-books':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full drop-shadow-xl" aria-label="PTE Books & Graduation Cap">
            <defs>
              <linearGradient id="bookPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="gradCap" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#4338ca" />
              </linearGradient>
            </defs>

            {/* Floating Notebook / Tablet */}
            <rect x="85" y="25" width="85" height="110" rx="14" transform="rotate(8 127 80)" fill="url(#bookPurple)" stroke="#4338ca" strokeWidth="2" />
            <rect x="92" y="32" width="71" height="96" rx="10" transform="rotate(8 127 80)" fill="#e0e7ff" opacity="0.5" />
            {/* Pink Bookmark Ribbon */}
            <path d="M 145 28 L 145 68 L 138 60 L 131 68 L 131 28 Z" fill="#ec4899" />

            {/* Pencil floating */}
            <rect x="175" y="55" width="8" height="55" rx="3" transform="rotate(18 179 82)" fill="#830dfa" />
            <polygon points="174,115 178,125 182,113" fill="#fed7aa" />

            {/* Graduation Cap in foreground */}
            <polygon points="85,95 135,115 85,135 35,115" fill="url(#gradCap)" />
            {/* Cap skull rim underneath */}
            <path d="M 55 124 Q 85 142 115 124 L 115 140 Q 85 158 55 140 Z" fill="#3730a3" />
            {/* Lavender Tassel */}
            <circle cx="85" cy="115" r="3" fill="#830dfa" />
            <path d="M 85 115 Q 115 120 120 148" stroke="#830dfa" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="117" y="146" width="6" height="12" rx="2" fill="#830dfa" />

            {/* Cute star sparkles */}
            <polygon points="40,65 42,70 48,70 44,74 46,80 40,76 34,80 36,74 32,70 38,70" fill="#830dfa" />
          </svg>
        </div>
      );

    case 'german-dict':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full drop-shadow-xl" aria-label="German Language Dictionary with Headphones">
            <defs>
              <linearGradient id="headphoneBlack" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* German Flag Dictionary Book */}
            {/* Spine & Pages Shadow */}
            <rect x="75" y="45" width="80" height="115" rx="8" fill="#e2e8f0" />
            <rect x="70" y="40" width="85" height="115" rx="8" fill="#1e293b" />

            {/* German Flag Tricolor stripes on book cover */}
            {/* Black stripe */}
            <path d="M 70 40 H 155 V 75 H 70 Z" fill="#0f172a" />
            {/* Red stripe */}
            <path d="M 70 75 H 155 V 110 H 70 Z" fill="#dc2626" />
            {/* Lavender stripe */}
            <path d="M 70 110 H 155 V 150 Q 155 155 150 155 H 75 Q 70 155 70 150 Z" fill="#830dfa" />

            {/* German text "Deutsch" on the book */}
            <text x="112" y="97" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13" letterSpacing="1" fontFamily="sans-serif">
              Deutsch
            </text>
            <text x="76" y="115" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="7" transform="rotate(-90 76 115)">
              DEUTSCH
            </text>

            {/* Over-ear Headphones wrap */}
            {/* Headband arch */}
            <path d="M 52 95 Q 52 20 112 20 Q 172 20 172 95" stroke="url(#headphoneBlack)" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M 70 26 Q 112 16 154 26" stroke="#94a3b8" strokeWidth="2" fill="none" />

            {/* Left Ear Cushion */}
            <rect x="42" y="75" width="20" height="42" rx="10" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <rect x="46" y="80" width="12" height="32" rx="6" fill="#1e293b" />

            {/* Right Ear Cushion */}
            <rect x="162" y="75" width="20" height="42" rx="10" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <rect x="166" y="80" width="12" height="32" rx="6" fill="#1e293b" />

            {/* Microphone Boom */}
            <path d="M 52 108 Q 50 145 92 145" stroke="#0f172a" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="94" cy="145" r="6" fill="#ef4444" />
          </svg>
        </div>
      );

    case 'medical-kit':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" aria-label="Job Opportunity Medical Kit and Stethoscope">
            <defs>
              <linearGradient id="firstAidRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>

            {/* Clipboard on the background left */}
            <rect x="25" y="45" width="70" height="95" rx="8" fill="#830dfa" stroke="#830dfa" strokeWidth="2" />
            {/* Clipboard top clip */}
            <rect x="45" y="38" width="30" height="12" rx="4" fill="#94a3b8" />
            <circle cx="60" cy="44" r="2.5" fill="#475569" />
            {/* Checklist lines */}
            <line x1="38" y1="65" x2="80" y2="65" stroke="#830dfa" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="38" y1="80" x2="80" y2="80" stroke="#830dfa" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="38" y1="95" x2="80" y2="95" stroke="#830dfa" strokeWidth="2.5" strokeLinecap="round" />
            {/* Heart EKG badge on clipboard */}
            <circle cx="72" cy="115" r="10" fill="#fca5a5" />
            <path d="M 66 115 L 70 115 L 72 110 L 74 120 L 76 115 L 79 115" stroke="#b91c1c" strokeWidth="1.5" fill="none" />

            {/* Red Medical First Aid Kit */}
            {/* Handle */}
            <path d="M 85 85 L 85 70 Q 85 64 95 64 L 115 64 Q 125 64 125 70 L 125 85" fill="none" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
            {/* Bag Body */}
            <rect x="65" y="82" width="80" height="65" rx="12" fill="url(#firstAidRed)" stroke="#b91c1c" strokeWidth="2" />
            {/* White First Aid Cross */}
            <rect x="98" y="98" width="14" height="34" rx="3" fill="#ffffff" />
            <rect x="88" y="108" width="34" height="14" rx="3" fill="#ffffff" />

            {/* Stethoscope */}
            {/* Ear tubes */}
            <path d="M 148 60 Q 155 75 160 90" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 175 60 Q 170 75 165 90" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="147" cy="58" r="3" fill="#0284c7" />
            <circle cx="176" cy="58" r="3" fill="#0284c7" />
            {/* Y connector & Tube */}
            <path d="M 162.5 90 Q 165 140 135 155 Q 115 165 125 178" stroke="#38bdf8" strokeWidth="4" fill="none" />
            {/* Chest piece (bell) */}
            <circle cx="125" cy="178" r="12" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            <circle cx="125" cy="178" r="7" fill="#f1f5f9" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
