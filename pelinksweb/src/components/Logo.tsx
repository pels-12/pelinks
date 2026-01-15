import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/PELINKS LOGO WITHOUT  TAGLINE PNG FORMAT.png" 
        alt="Pelinks Synergy Logo" 
        className="h-24 sm:h-28 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
