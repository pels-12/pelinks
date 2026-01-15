import React from 'react';
import PelinksVisualsNavbar from './components/PelinksVisualsNavbar';
import PelinksVisualsHero from './components/PelinksVisualsHero';
import PelinksVisualsServices from './components/PelinksVisualsServices';

const PelinksVisuals = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <PelinksVisualsNavbar />
      
      {/* Hero Section */}
      <PelinksVisualsHero />

      {/* Services Section */}
      <PelinksVisualsServices />

      {/* Footer */}
      <footer className="bg-[#002235] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Pelinks Visuals. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PelinksVisuals;
