import React from 'react';

interface CharacterArtProps {
  type: 'visitor' | 'student' | 'worker' | 'citizenship' | 'business';
  className?: string;
}

export const CharacterArt: React.FC<CharacterArtProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'visitor':
      return (
        <img
          src="https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791471195/visitor-visa-traveler_pwcj9z.png"
          alt="Traveler with luggage"
          className={`w-full h-full object-contain drop-shadow-xl ${className}`}
          loading="lazy"
          decoding="async"
        />
      );

    case 'student':
      return (
        <img
          src="https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791471195/student-visa-student_metmms.png"
          alt="Student carrying books and wearing a backpack"
          className={`w-full h-full object-contain drop-shadow-xl ${className}`}
          loading="lazy"
          decoding="async"
        />
      );

    case 'worker':
      return (
        <img
          src="https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791471195/worker-visa-worker_chpck4.png"
          alt="Construction worker wearing a hard hat and safety vest"
          className={`w-full h-full object-contain drop-shadow-xl ${className}`}
          loading="lazy"
          decoding="async"
        />
      );

    case 'citizenship':
      return (
        <img
          src="https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791471194/citizenship-family_kvkwc5.png"
          alt="Family traveling together with their luggage"
          className={`w-full h-full object-contain drop-shadow-xl ${className}`}
          loading="lazy"
          decoding="async"
        />
      );

    case 'business':
      return (
        <img
          src="https://res.cloudinary.com/droqi9jl3/image/upload/f_auto,q_auto/v1791471194/business-visa-partners_aiihbf.png"
          alt="Business professionals standing together"
          className={`w-full h-full object-contain drop-shadow-xl ${className}`}
          loading="lazy"
          decoding="async"
        />
      );

    default:
      return null;
  }
};
