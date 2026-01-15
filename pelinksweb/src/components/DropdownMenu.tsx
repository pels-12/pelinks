import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from '../types/navigation';

interface DropdownMenuProps {
  label: string;
  items: NavLink[];
  className?: string;
}

export default function DropdownMenu({ label, items, className = '' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Small delay to prevent flickering
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 px-3 py-2 text-base font-medium transition-colors duration-200 no-underline ${
          isOpen ? 'text-[#003459]' : 'text-gray-700 hover:text-[#003459]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 opacity-60 ${isOpen ? 'rotate-180 text-[#003459]' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 pt-2 w-56 transform transition-all duration-200 ease-out origin-top-left z-50 ${
          isOpen
            ? 'opacity-100 scale-100 visible'
            : 'opacity-0 scale-95 invisible'
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
          {items.map((item: NavLink, index: number) => (
            item.isRoute ? (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#003459] hover:bg-slate-50 transition-colors duration-150 no-underline"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#003459] hover:bg-slate-50 transition-colors duration-150 no-underline"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
