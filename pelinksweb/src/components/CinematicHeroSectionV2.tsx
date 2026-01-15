"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface ServiceScreen {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
}

const services: ServiceScreen[] = [
  {
    id: 1,
    title: "Signage Solutions",
    description: "Professional signage and LED displays for storefronts, buildings, and outdoor branding. Built to last in Nigerian weather.",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fit=crop",
  },
  {
    id: 2,
    title: "Smart Homes",
    description: "Control your home from your phone. Lighting, climate, and security automation that works reliably.",
    backgroundImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80&fit=crop",
  },
  {
    id: 3,
    title: "Security Systems",
    description: "CCTV, access control, and perimeter security for offices, warehouses, and estates. Reliable protection you can count on.",
    backgroundImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80&fit=crop",
  },
  {
    id: 4,
    title: "General Printing Services",
    description: "Large-format banners, vehicle branding, and corporate materials. Quality printing delivered on schedule.",
    backgroundImage: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80&fit=crop",
  },
  {
    id: 5,
    title: "Fabrication and Construction",
    description: "Metal fabrication, structural work, and construction projects. Quality craftsmanship for residential and commercial builds.",
    backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80&fit=crop",
  },
  {
    id: 6,
    title: "Procurements and General Contracts",
    description: "Electrical installations, facility upgrades, and system deployments. Projects delivered across multiple states.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop",
  },
  {
    id: 7,
    title: "ICT Outsourcing",
    description: "Managed IT services, network administration, and technical support. We keep your systems running smoothly.",
    backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80&fit=crop",
  },
];

export default function CinematicHeroSection() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 1000], [0, isMobile ? 50 : 150]);
  const contentY = useTransform(scrollY, [0, 1000], [0, isMobile ? 30 : 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % services.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentScreen(index);
  };

  const handlePrevious = () => {
    setCurrentScreen((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentScreen((prev) => (prev + 1) % services.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#001a2b]">
      <AnimatePresence mode="wait">
        <motion.div
          key={services[currentScreen].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 w-full h-[110%]"
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${services[currentScreen].backgroundImage})`,
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#003459]/75 via-[#003459]/70 to-[#001a2b]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a2b]/70 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 pt-20 pb-32"
      >
        <motion.div
          style={{ y: contentY }}
          className="max-w-7xl w-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={services[currentScreen].id}
              initial={{ opacity: 0, y: isMobile ? 30 : 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isMobile ? -30 : -60 }}
              transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-4 md:mb-6 flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-[#007EA7]/15 border border-[#007EA7]/40 rounded-full backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#007EA7] rounded-full animate-pulse" />
                  <span className="text-[#007EA7] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    {services[currentScreen].title}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight px-2 lg:px-0"
              >
                {services[currentScreen].title.split(' ')[0]}
                <br />
                <span className="text-white/80">
                  {services[currentScreen].title.split(' ').slice(1).join(' ')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto lg:mx-0 mb-8 md:mb-12 px-4 lg:px-0"
              >
                {services[currentScreen].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center lg:justify-start items-center px-4 lg:px-0"
              >
                <button className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#007EA7] text-white text-base md:text-lg font-semibold rounded-xl hover:bg-[#006891] transition-all duration-500 hover:shadow-2xl hover:shadow-[#007EA7]/30 active:scale-95 touch-manipulation">
                  <span className="flex items-center justify-center gap-3">
                    Request a Quote
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white/40 text-white text-base md:text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-500 backdrop-blur-sm active:scale-95 touch-manipulation">
                  View All Services
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-4">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => handleIndicatorClick(index)}
            className="group relative touch-manipulation"
            aria-label={`View ${service.title}`}
          >
            <div
              className={`h-0.5 sm:h-1 rounded-full transition-all duration-700 ${
                index === currentScreen
                  ? 'w-12 sm:w-20 bg-[#007EA7] shadow-lg shadow-[#007EA7]/50'
                  : 'w-6 sm:w-10 bg-white/25 hover:bg-white/40'
              }`}
            />
            <div className="hidden md:block absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              <div className="bg-[#003459]/95 backdrop-blur-md border border-[#007EA7]/40 px-4 py-2 rounded-lg shadow-xl">
                <span className="text-white text-sm font-medium">{service.title}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 sm:bottom-10 right-4 sm:right-10 z-20 flex items-center gap-2 sm:gap-3">
        <button
          onClick={handlePrevious}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-[#007EA7] transition-all duration-500 backdrop-blur-sm group touch-manipulation active:scale-90"
          aria-label="Previous service"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#007EA7] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-[#007EA7] transition-all duration-500 backdrop-blur-sm group touch-manipulation active:scale-90"
          aria-label="Next service"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#007EA7] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
