"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PelinksVisualsHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5]">
      {/* Background with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          }}
        />
        
        {/* Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5]/95 via-[#F5F5F5]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F5F5]/90" />
        
        {/* Decorative Geometric Accent */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#007EA7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#003459]/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-left"
      >
        <div className="max-w-3xl">
          {/* Badge/Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#007EA7]/10 border border-[#007EA7]/20 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-[#007EA7] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#003459]">Professional Signage Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#003459] leading-tight mb-6"
          >
            Pelinks Visuals
            <span className="block text-[#007EA7] mt-2">Signage & Cladding Solutions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl"
          >
            We deliver innovative signage systems and premium cladding solutions built to last. From LED displays to architectural facades, our team brings precision craftsmanship and technical expertise to every project across Nigeria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#007EA7] text-white font-semibold text-lg rounded-lg hover:bg-[#006891] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100"
            >
              Request a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#003459] text-[#003459] font-semibold text-lg rounded-lg hover:bg-[#003459] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
            >
              View Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: "⚡", label: "10+ Years Experience" },
              { icon: "🏆", label: "ISO Certified" },
              { icon: "🛠️", label: "Full Installation" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-200/50">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm font-semibold text-[#003459]">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-[#003459]/70">Scroll to explore</span>
        <svg className="w-6 h-6 text-[#007EA7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}
