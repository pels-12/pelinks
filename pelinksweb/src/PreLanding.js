import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PreLanding.css';

const PreLanding = ({ onComplete }) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const services = [
    { 
      name: 'Signage Solutions',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fit=crop'
    },
    { 
      name: 'Smart Homes & Security',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80&fit=crop'
    },
    { 
      name: 'General Printing Services',
      image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80&fit=crop'
    },
    { 
      name: 'Procurements and General Contracts',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop'
    },
    { 
      name: 'ICT Outsourcing',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80&fit=crop'
    }
  ];

  // Rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000); // 3 seconds per service

    return () => clearInterval(interval);
  }, [services.length]);

  // Handle click to proceed
  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <div 
      className={`pre-landing-container ${fadeOut ? 'fade-out' : ''}`} 
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeServiceIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${services[activeServiceIndex].image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003459]/90 via-[#003459]/85 to-[#001a2b]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a2b]/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="pre-landing-content">
        {/* Logo Section */}
        <div className="logo-section">
          <img 
            src="/images/PELINKS LOGO WITHOUT  TAGLINE PNG FORMAT.png" 
            alt="PELiNKS Logo" 
            className="logo-image"
            style={{
              height: '180px',
              width: 'auto',
              filter: 'drop-shadow(0 0 30px rgba(0, 126, 167, 0.6)) drop-shadow(0 0 60px rgba(0, 126, 167, 0.4))',
              marginBottom: '1rem'
            }}
          />
          <h1 className="logo-text">Pelinks Synergy Ltd</h1>
        </div>

        {/* Tagline */}
        <p className="tagline">Welcome to Pelinks Synergy - your one stop shop</p>

        {/* Services Carousel */}
        <motion.div 
          className="services-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="services-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className={`service-card active`}
              >
                <span className="service-name">{services[activeServiceIndex].name}</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="service-dots">
            {services.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === activeServiceIndex ? 'active' : ''}`}
                style={{
                  backgroundColor: index === activeServiceIndex ? '#007EA7' : 'rgba(255, 255, 255, 0.3)',
                  boxShadow: index === activeServiceIndex ? '0 0 15px rgba(0, 126, 167, 0.5)' : 'none'
                }}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <p className="mission-text">
          Bringing your ideas to life across the World.
        </p>

        {/* Call to Action */}
        <div className="cta-section">
          <button className="cta-button" onClick={handleClick}>
            <span className="cta-text">Explore Our Work</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreLanding;
