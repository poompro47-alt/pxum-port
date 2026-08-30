// components/Icon_Badge.tsx
import React from 'react';

interface IconBadgeProps {
  icon: React.ReactNode;
  className?: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({ icon, className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black border-2 border-red-500/70 rounded-lg md:rounded-xl text-white text-sm md:text-xl shadow-[0_0_15px_rgba(239,68,68,0.4)] ${className}`}
    >
      {icon}
    </div>
  );
};

export default IconBadge;