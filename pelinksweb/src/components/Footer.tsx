'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003459] text-[#F5F5F5] w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Column 1: Logo & Tagline Block */}
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="flex justify-start">
              <img 
                src="/PSL_WHITE_CYAN_ICON_PNG.png" 
                alt="Pelinks Synergy Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[#007EA7] text-base sm:text-lg font-medium text-left">Top Notch Service</p>
              <p className="text-[#BFC7CE] text-sm sm:text-base leading-relaxed text-left">
                <span className="font-bold text-[#F5F5F5]">PELINKS</span> Synergy Ltd. is a multi-disciplinary solutions company rooted in Nigeria with a growing reputation for excellence, innovation, and reliability. We specialize in delivering top-notch services across:
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav className="space-y-4 sm:space-y-6 text-left">
            <h3 className="text-[#F5F5F5] font-semibold text-base sm:text-lg text-left">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200 inline-block text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200 inline-block text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="/#services" 
                  className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200 inline-block text-sm sm:text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/#clients" 
                  className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200 inline-block text-sm sm:text-base"
                >
                  Our Clients
                </a>
              </li>
              <li>
                <a 
                  href="/#portfolio" 
                  className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200 inline-block text-sm sm:text-base"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200 inline-block text-sm sm:text-base"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200 inline-block text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Contact Info */}
          <address className="space-y-4 sm:space-y-6 not-italic text-left">
            <h3 className="text-[#F5F5F5] font-semibold text-base sm:text-lg text-left">Get in Touch</h3>
            
            <div className="space-y-3 sm:space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#007EA7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="space-y-1">
                  <a 
                    href="tel:+2348143617840" 
                    className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block text-sm sm:text-base break-all"
                  >
                    +234 814 361 7840
                  </a>
                  <a 
                    href="tel:+2348025174610" 
                    className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block text-sm sm:text-base break-all"
                  >
                    +234 802 517 4610
                  </a>
                </div>
              </div>
              
              {/* Email Addresses */}
              <div className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#007EA7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div className="space-y-1">
                  <a 
                    href="mailto:info@pelinks.com.ng" 
                    className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block text-sm sm:text-base break-all"
                  >
                    info@pelinks.com.ng
                  </a>
                  <a 
                    href="mailto:hello@pelinks.com.ng" 
                    className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block text-sm sm:text-base break-all"
                  >
                    hello@pelinks.com.ng
                  </a>
                </div>
              </div>
            </div>
          </address>

          {/* Column 4: Social Links */}
          <div className="space-y-4 sm:space-y-6 text-left">
            <h3 className="text-[#F5F5F5] font-semibold text-base sm:text-lg text-left">Follow Us</h3>
            
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <a
                href="https://instagram.com/pelinks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/pelinks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/pelinks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/pelinks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/pelinks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFC7CE] hover:text-[#007EA7] hover:scale-105 transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#F5F5F5]/10">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
            <p className="text-[#BFC7CE] text-xs sm:text-sm text-left">
              © {currentYear} Pelinks Synergy Ltd. All rights reserved.
            </p>
            <p className="text-[#BFC7CE] text-xs sm:text-sm text-left sm:text-right">
              Designed & Built with Excellence
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
