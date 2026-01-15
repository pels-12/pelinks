import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import InfoBar from './InfoBar';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';
import { NavLink } from '../types/navigation';

interface NavbarProps {
  onLoginClick?: () => void;
}

function Navbar({ onLoginClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const loginTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: NavLink[] = [
    {
      label: 'About Us',
      href: '#about',
      submenu: [
        { label: 'Board Members', href: '#board' },
        { label: 'Management', href: '#management' },
        { label: 'Core Values', href: '#values' },
      ],
    },
    {
      label: 'Services',
      href: '#services',
      submenu: [
        { label: 'Signage & LED Displays', href: '#signage' },
        { label: 'Smart Home Technology', href: '#smart-home' },
        { label: 'Security Systems', href: '#security' },
        { label: 'General Printing', href: '#printing' },
        { label: 'Fabrication & Construction', href: '#fabrication' },
        { label: 'Cladding & Facade Systems', href: '#cladding' },
        { label: 'IT & Tech Consultancy', href: '#it-tech' },
        { label: 'Procurement & Contracts', href: '#procurement' },
      ],
    },
    {
      label: 'Products',
      href: '#products',
      submenu: [
        { label: 'Pelinks Visuals', href: '/pelinks-visuals', isRoute: true },
        { label: 'Pelinks Solutions', href: '#solutions' },
      ],
    },
    { label: 'Industries We Serve', href: '#industries' },
    { label: 'Gallery', href: '#gallery' },
    {
      label: 'Resources',
      href: '#resources',
      submenu: [
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Download Our Profile', href: '#profile' },
      ],
    },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <InfoBar phone={["+234 814 361 7840", "+234 703 010 3285"]} email="hello@pelinks.com.ng" />

      {/* Sticky Navigation Bar - Duna Style */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b h-28 flex items-center ${
          isScrolled
            ? 'bg-white/60 backdrop-blur-xl shadow-lg border-white/20'
            : 'bg-white/80 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-start">
            {/* Logo - Home Button */}
            <a href="#home" className="flex-shrink-0 mx-auto lg:mx-0 lg:ml-40 xl:ml-48">
              <Logo className="cursor-pointer" />
            </a>

            {/* Desktop Menu - Center */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
              {menuItems.map((item) =>
                item.submenu ? (
                  <div key={item.label}>
                    <DropdownMenu
                      label={item.label}
                      items={item.submenu}
                      className="text-base font-medium text-gray-700 hover:text-[#003459]"
                    />
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base text-gray-700 font-medium hover:text-[#003459] transition-colors duration-200 no-underline"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            {/* Right Side - Extreme Right */}
            <div className="flex items-center gap-4 flex-shrink-0 absolute right-4 lg:relative lg:right-0">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Login Button with Dropdown */}
              <div 
                className="relative hidden sm:block"
                onMouseEnter={() => {
                  if (loginTimeoutRef.current) clearTimeout(loginTimeoutRef.current);
                  setLoginDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  loginTimeoutRef.current = setTimeout(() => {
                    setLoginDropdownOpen(false);
                  }, 100);
                }}
              >
                <button
                  className="inline-flex items-center gap-2 px-8 py-3 text-[15px] font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                >
                  Login
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${loginDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Login Dropdown */}
                <div
                  className={`absolute right-0 pt-2 w-64 transform transition-all duration-200 ease-out origin-top-right z-50 ${
                    loginDropdownOpen
                      ? 'opacity-100 scale-100 visible'
                      : 'opacity-0 scale-95 invisible'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                    <a
                      href="#client-login"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-blue-50 transition-colors duration-150 group"
                    >
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#003459] transition-colors">
                        <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700 group-hover:text-[#003459]">Client Login</span>
                    </a>
                    <a
                      href="#staff-login"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-blue-50 transition-colors duration-150 group"
                    >
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#003459] transition-colors">
                        <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700 group-hover:text-[#003459]">Staff Login</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        items={menuItems}
        onClose={() => setMobileMenuOpen(false)}
        onLoginClick={onLoginClick || (() => {})}
      />
    </>
  );
}

export default Navbar;
