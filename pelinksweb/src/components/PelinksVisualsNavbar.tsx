"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const solutionsItems = [
  "Smart Displays",
  "Visual Branding",
  "Installation & Fabrication",
  "Maintenance Services",
  "Pricing Overview",
  "Portfolio Showcase",
  "Partner Program"
];

const helpDeskItems = [
  "About Pelinks Visuals",
  "Company Info",
  "Contact Us",
  "Online Support",
  "FAQs",
  "Visual Design Guidelines",
  "Submit Feedback"
];

export default function PelinksVisualsNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#007EA7] text-white py-2 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          whileHover={{ animationPlayState: "paused" }}
          className="whitespace-nowrap text-sm font-medium"
        >
          Professional signage solutions • LED displays • Building cladding • Wayfinding systems • Get a free quote today • Professional signage solutions • LED displays • Building cladding • Wayfinding systems • Get a free quote today
        </motion.div>
      </div>

      <nav
        className={`sticky top-0 z-50 bg-[#F5F5F5] transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img
                src="/images/PELINKS LOGO WITHOUT  TAGLINE PNG FORMAT.png"
                alt="Pelinks Visuals"
                className="h-16 w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/visuals/brand"
                className="text-[#003459] font-semibold hover:text-[#007EA7] transition-colors"
              >
                Brand
              </a>
              <a
                href="/visuals/print"
                className="text-[#003459] font-semibold hover:text-[#007EA7] transition-colors"
              >
                Print
              </a>
              <a
                href="/visuals/package"
                className="text-[#003459] font-semibold hover:text-[#007EA7] transition-colors"
              >
                Package
              </a>

              <DropdownMenu
                label="Solutions"
                items={solutionsItems}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <DropdownMenu
                label="Help Desk"
                items={helpDeskItems}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {/* Wishlist Icon */}
              <button
                className="relative p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                aria-label="Wishlist"
              >
                <svg
                  className="w-6 h-6 text-[#003459] hover:text-[#007EA7] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#007EA7] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Icon */}
              <button
                className="relative p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                aria-label="Shopping cart"
              >
                <svg
                  className="w-6 h-6 text-[#003459] hover:text-[#007EA7] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#007EA7] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button className="px-6 py-3 bg-[#007EA7] text-white font-semibold rounded-lg hover:bg-[#006891] transition-colors">
                Request a Quote
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#003459]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                <a href="/visuals/brand" className="block text-[#003459] font-semibold py-2">
                  Brand
                </a>
                <a href="/visuals/print" className="block text-[#003459] font-semibold py-2">
                  Print
                </a>
                <a href="/visuals/package" className="block text-[#003459] font-semibold py-2">
                  Package
                </a>

                <MobileDropdown label="Solutions" items={solutionsItems} />
                <MobileDropdown label="Help Desk" items={helpDeskItems} />

                <button className="w-full px-6 py-3 bg-[#007EA7] text-white font-semibold rounded-lg">
                  Request a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

function DropdownMenu({
  label,
  items,
  activeDropdown,
  setActiveDropdown
}: {
  label: string;
  items: string[];
  activeDropdown: string | null;
  setActiveDropdown: (val: string | null) => void;
}) {
  const isOpen = activeDropdown === label;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center gap-1 text-[#003459] font-semibold hover:text-[#007EA7] transition-colors">
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
          >
            {items.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 text-sm text-[#003459] hover:bg-[#007EA7]/10 hover:text-[#007EA7] transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({ label, items }: { label: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-[#003459] font-semibold py-2"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-4 space-y-2"
          >
            {items.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-[#003459] py-1 hover:text-[#007EA7]"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
