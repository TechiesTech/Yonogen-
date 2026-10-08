import React from "react";

const StudentHeroCard: React.FC = () => {
  // Avatars using existing images as fallback
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  ];

  return (
    <div className="relative w-full max-w-[400px] mx-auto select-none">

      {/* Background soft circle — ambient behind the image */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2
                   w-[88%] aspect-square rounded-full pointer-events-none"
        style={{ background: "linear-gradient(135deg, #f8f0ff 0%, #e9edff 100%)" }}
      />

      {/* Main student image — pill/stadium shape */}
      <div
        className="relative z-10 mx-auto overflow-hidden shadow-[0_24px_60px_rgba(131,13,250,0.12)]"
        style={{
          width: "78%",
          height: "480px",
          borderRadius: "160px 160px 12px 12px",
        }}
      >
        <img
          src="/images/graduate-celebrating.jpg"
          alt="International student celebrating success"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Floating stats card */}
      <div
        className="absolute z-20 left-1/2 -translate-x-1/2 w-[84%]
                   bg-white rounded-2xl px-4 py-3
                   shadow-[0_14px_40px_rgba(0,0,0,0.13)]
                   flex items-center gap-3"
        style={{
          bottom: "40px",
          animation: "floatCard 4s ease-in-out infinite",
        }}
      >
        {/* Avatar group */}
        <div className="flex -space-x-2.5 shrink-0">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
            />
          ))}
        </div>

        {/* Text */}
        <div>
          <p className="text-base font-extrabold text-slate-900 leading-tight">50,000+</p>
          <p className="text-[11px] text-slate-500 whitespace-nowrap font-medium">Students placed globally</p>
        </div>

        {/* Accent dot */}
        <div
          className="ml-auto w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: "#830dfa" }}
        />
      </div>

      {/* Small floating badge — top right */}
      <div
        className="absolute z-20 right-0 top-16
                   bg-white rounded-xl px-3 py-2.5
                   shadow-[0_8px_24px_rgba(0,0,0,0.10)]
                   text-center"
        style={{ animation: "floatCard 5s ease-in-out infinite 1s" }}
      >
        <p className="text-lg font-extrabold text-slate-900 leading-none">98%</p>
        <p className="text-[10px] text-slate-500 font-semibold mt-0.5 whitespace-nowrap">Visa Success</p>
      </div>

    </div>
  );
};

export default StudentHeroCard;
