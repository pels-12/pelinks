"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.95]);

  const services = [
    "Signage Solutions",
    "Smart Homes",
    "Security Systems",
    "General Printing Services",
    "General Contracts"
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#001a2e] via-[#003459] to-[#002a45]"
      >
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 126, 167, 0.03) 2px, rgba(0, 126, 167, 0.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 126, 167, 0.03) 2px, rgba(0, 126, 167, 0.03) 4px)
          `,
          animation: 'gridPulse 20s ease-in-out infinite'
        }} />
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#007EA7] rounded-full blur-[180px] opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#007EA7] rounded-full blur-[160px] opacity-15 animate-pulse-slower" />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#003459]/80 via-[#003459]/85 to-[#003459]/90"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,126,167,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,126,167,0.1),transparent_60%)]" />

      <motion.div
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          Infrastructure Built<br />for the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Comprehensive technology solutions engineered for reliability, security, and
          operational excellence across Nigeria and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm md:text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {service}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#007EA7] rounded-lg shadow-lg shadow-[#007EA7]/25 hover:shadow-xl hover:shadow-[#007EA7]/35 transition-all duration-300"
          >
            Request a Quote
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
