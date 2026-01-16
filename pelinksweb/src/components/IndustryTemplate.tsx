"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface IndustryTemplateProps {
  title: string;
  intro: string;
  content: string[];
  images?: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

export default function IndustryTemplate({ title, intro, content, images = [] }: IndustryTemplateProps) {
  // Default placeholder images if none provided
  const defaultImages = [
    '/images/placeholder-signage.jpg',
    '/images/placeholder-led.jpg',
    '/images/placeholder-smart-home.jpg',
    '/images/placeholder-security.jpg',
    '/images/placeholder-automation.jpg',
    '/images/placeholder-cctv.jpg'
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="bg-[#001829] text-[#F5F5F5] min-h-screen">
      <Navbar onLoginClick={() => {}} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[65vh] lg:h-[70vh] flex items-center bg-gradient-to-br from-[#003459] via-[#002D4A] to-[#001829] mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 w-full">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-left max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5F5] mb-8 leading-tight">
              {title}
            </h1>
            <p className="text-[#007EA7] text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
              Empowering Industries with Innovative Signage, Smart Security, and Digital Solutions
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Industry Content Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 space-y-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 text-left"
          >
            <p className="text-[#BFC7CE] text-lg sm:text-xl leading-relaxed text-left">
              {intro}
            </p>
            
            <div className="space-y-4 text-left">
              {content.map((paragraph, index) => (
                <p key={index} className="text-[#F5F5F5]/90 text-base sm:text-lg leading-relaxed text-left">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Solutions in Action - Image Gallery */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8 pt-12 border-t border-[#007EA7]/30 text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] text-left">Solutions in Action</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden bg-[#003459]/40 border border-[#007EA7]/30 group hover:border-[#007EA7]/60 transition-all duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-[#BFC7CE] text-sm text-center p-4">
                    Image placeholder – {title} solution {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-r from-[#003459] via-[#002D4A] to-[#001829] border border-[#007EA7]/30 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          >
            <div className="space-y-3 text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5]">Ready to Transform Your Space?</h3>
              <p className="text-[#BFC7CE] text-base sm:text-lg max-w-2xl">
                Let's help you deliver impact, safety, and efficiency — all in one go.
              </p>
              <div className="space-y-1 text-[#F5F5F5] text-base sm:text-lg">
                <a href="mailto:hello@pelinks.com.ng" className="hover:text-[#007EA7] transition-colors block">hello@pelinks.com.ng</a>
                <div className="hover:text-[#007EA7] transition-colors">+2348143617840</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#007EA7] text-[#F5F5F5] font-semibold rounded-lg hover:bg-[#0095c5] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Contact Us Now
            </Link>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
