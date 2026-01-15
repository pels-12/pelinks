"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 px-6 bg-[#003459] overflow-hidden">
      {/* Faded Background Image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80&fit=crop)'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#001a2b]/50 backdrop-blur-[2px]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6">
            Let's Talk About Your Project
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Whether you need signage, security, printing, or smart home setup—we're here to help. Give us a call or schedule a consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#007EA7] text-white font-semibold text-lg rounded-lg hover:bg-[#006891] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#007EA7]/30"
            >
              Request a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.a>

            <motion.a
              href="/profile.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Download Our Profile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+234 814 361 7840</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>hello@pelinks.com.ng</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
