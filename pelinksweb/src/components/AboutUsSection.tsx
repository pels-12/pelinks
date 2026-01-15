"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projectImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    alt: "Corporate signage installation"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    alt: "Smart home automation"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    alt: "Security system installation"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80",
    alt: "Premium printing services"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Office automation project"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    alt: "LED display installation"
  }
];

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({ clients: 0, projects: 0, years: 0, satisfaction: 0 });

  // Counter animation effect
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      clients: 500,
      projects: 1000,
      years: 6,
      satisfaction: 100
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const sliderVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 px-6 bg-[#003459] overflow-hidden">
      {/* Faded Background Image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop)'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#001a2b]/50 backdrop-blur-[2px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-8">
              About Us
            </h2>

            <div className="space-y-6 text-[#F5F5F5]/90 text-base sm:text-lg leading-relaxed">
              <p className="text-justify">
                Pelinks Synergy Ltd. is a multi-disciplinary solutions company rooted in Nigeria with a growing reputation for excellence, innovation, and reliability. We specialize in delivering top-notch services across:
              </p>

              <ul className="space-y-3 pl-0">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-[#007EA7]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 11h-3.17l2.54-2.54a.996.996 0 000-1.41l-6-6a.996.996 0 00-1.41 0L10.41 3.6 8.88 2.07a.996.996 0 00-1.41 0l-6 6a.996.996 0 000 1.41L4 12H1c-.55 0-1 .45-1 1s.45 1 1 1h3v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h3c.55 0 1-.45 1-1s-.45-1-1-1zm-8 9h-2v-4h2v4zm4 0h-2v-6H9v6H7v-8.41L12 6.59l5 5V20z"/>
                    </svg>
                  </div>
                  <span>Signage & LED Display Technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-[#007EA7]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  <span>Smart Security Systems & Smart Homes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-[#007EA7]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-8h-4v4h4v-4z"/>
                    </svg>
                  </div>
                  <span>General Printing & Branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-[#007EA7]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                    </svg>
                  </div>
                  <span>IT Consultancy & Digital Infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-[#007EA7]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                  </div>
                  <span>Procurement & General Contracting</span>
                </li>
              </ul>

              {/* CTA Button Inline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 flex justify-start"
              >
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#007EA7] text-white font-semibold text-lg rounded-lg hover:bg-[#006891] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#007EA7]/30 hover:scale-105"
                >
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image Slider */}
          <motion.div
            variants={sliderVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2 relative lg:col-span-7"
          >
            <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden bg-black/20">
              {/* Slides */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={projectImages[currentSlide].src}
                    alt={projectImages[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003459]/60 to-transparent" />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg font-semibold">
                      {projectImages[currentSlide].alt}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#007EA7] transition-all duration-300 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#007EA7] transition-all duration-300 z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-[#007EA7] w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 pt-16 border-t border-[#007EA7]/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: counters.clients, suffix: "+", label: "Happy Clients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { number: counters.projects, suffix: "+", label: "Projects Completed", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: counters.years, suffix: "+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: counters.satisfaction, suffix: "%", label: "Satisfaction Rate", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#007EA7] mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                
                {/* Number */}
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#007EA7] mb-2">
                  {stat.number}{stat.suffix}
                </h3>
                
                {/* Label */}
                <p className="text-[#F5F5F5]/90 text-sm sm:text-base font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
