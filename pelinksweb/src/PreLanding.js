import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PreLanding.css';

const PreLanding = ({ onComplete }) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const completedRef = useRef(false);

  const services = [
    { name: 'Signage Solutions', image: '/images/SIGNAGE/1035935666.jpg' },
    { name: 'Smart Homes & Security', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80&fit=crop' },
    { name: 'General Printing Services', image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80&fit=crop' },
    { name: 'Procurements and General Contracts', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop' },
    { name: 'ICT Outsourcing', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80&fit=crop' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const completeAndExit = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setFadeOut(true);
    setTimeout(() => onComplete(), 700);
  };

  return (
    <div className={`pre-landing-container ${fadeOut ? 'fade-out' : ''}`} onClick={completeAndExit}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeServiceIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${services[activeServiceIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a2e]/95 via-[#001a2e]/90 to-[#00080d]/98" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00080d]/85 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="pre-landing-content">
        <div className="logo-section">
          <img
            src={process.env.PUBLIC_URL + '/PSL_WHITE_CYAN_ICON_PNG.png'}
            alt="Pelinks Synergy Logo"
            className="w-80 md:w-96 h-40 drop-shadow-2xl"
          />
          <h1 className="logo-text">Pelinks Synergy Ltd</h1>
        </div>

        <p className="tagline">Welcome to Pelinks Synergy</p>
        <p className="tagline">Top Notch services</p>

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
                className="service-card active"
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
              />
            ))}
          </div>
        </motion.div>

        <p className="mission-text">Bringing your ideas to life across the World.</p>

        <div className="cta-section">
          <button className="cta-button" onClick={completeAndExit}>
            <span className="cta-text">Explore Our Work</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreLanding;
