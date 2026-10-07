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
          <img
            src="/images/visitor-visa-traveler.png"
            alt="Traveler with luggage"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      );

    case 'student':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <img
            src="/images/student-visa-student.png"
            alt="Student carrying books and wearing a backpack"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      );

    case 'worker':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <img
            src="/images/worker-visa-worker.png"
            alt="Construction worker wearing a hard hat and safety vest"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      );

    case 'citizenship':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <img
            src="/images/citizenship-family.png"
            alt="Family traveling together with their luggage"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      );

    case 'business':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <img
            src="/images/business-visa-partners.png"
            alt="Business professionals standing together"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      );

    default:
      return null;
  }
};
