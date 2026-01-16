import React, { useState, useEffect } from 'react';

const services = [
  'Signage Solutions',
  'Smart Homes & Security',
  'General Printing Services',
  'General Contracts',
];

export default function LandingPage({ onEnter }) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (visibleIndex < services.length - 1) {
      const timer = setTimeout(() => setVisibleIndex(visibleIndex + 1), 900);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex]);

  const handleEnter = () => {
    setShowSplash(false);
    if (onEnter) onEnter();
  };

  if (!showSplash) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-primary text-light z-50 cursor-pointer transition-all duration-700"
      onClick={handleEnter}
      onTouchStart={handleEnter}
    >
      <img
        src={process.env.PUBLIC_URL + '/PSL_WHITE_ICON_PNG.png'}
        alt="Pelinks Synergy Logo"
        className="w-40 h-40 mb-6 drop-shadow-xl"
      />
      <h1 className="text-3xl font-bold mb-2 tracking-wide">Pelinks Synergy Ltd.</h1>
      <h2 className="text-xl font-semibold mb-4 italic">Top Notch Service</h2>
      <div className="flex flex-col items-center mb-6">
        {services.map((service, idx) => (
          <div
            key={service}
            className={`text-lg font-medium mb-2 transition-opacity duration-700 ${idx <= visibleIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {service}
          </div>
        ))}
      </div>
      <div className="text-base mt-2 mb-4 font-light">Bringing your ideas to life across Nigeria.</div>
      <div className="text-lg animate-pulse font-semibold mt-4">Tap or Click to Enter</div>
    </div>
  );
}
