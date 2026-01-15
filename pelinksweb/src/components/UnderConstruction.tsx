"use client";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function UnderConstruction() {
  return (
    <section className="min-h-screen bg-[#003459] flex items-center justify-center px-6 sm:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center space-y-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-24 h-24 mx-auto bg-[#007EA7]/10 rounded-2xl flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            className="w-12 h-12 text-[#007EA7]"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="18" width="44" height="28" rx="6" stroke="currentColor" strokeWidth="3" />
            <path d="M20 46v4a2 2 0 002 2h20a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="3" />
            <circle cx="24" cy="28" r="3" fill="currentColor" />
            <circle cx="32" cy="28" r="3" fill="currentColor" />
            <circle cx="40" cy="28" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F5] leading-tight">Page Under Construction</h1>
          <p className="text-[#BFC7CE] text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            We’re currently working on this section to deliver a better experience. Please check back soon.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <Link
            to="/"
            className="px-7 sm:px-8 py-4 rounded-xl bg-[#007EA7] text-white font-semibold text-base sm:text-lg shadow-lg shadow-[#007EA7]/30 hover:shadow-[#007EA7]/50 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007EA7]"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-7 sm:px-8 py-4 rounded-xl border border-[#007EA7] text-[#007EA7] font-semibold text-base sm:text-lg hover:bg-[#007EA7]/10 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007EA7]"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
