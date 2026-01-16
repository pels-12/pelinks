import React, { useState } from 'react';
import './Navigation.css';
import { useTheme } from './ThemeProvider';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const menuItems = [
    { name: 'Home', href: '/#home' },
    {
      name: 'About Us',
      href: '/#about',
      submenu: [
        { name: 'Board Members', href: '/#board' },
        { name: 'Management', href: '/#management' },
        { name: 'Core Values', href: '/#values' }
      ]
    },
    {
      name: 'Services',
      href: '/#services',
      submenu: [
        { name: 'Signage & LED Displays', href: '/#signage' },
        { name: 'Smart Home Technology', href: '/#smart-home' },
        { name: 'Security Systems', href: '/#security' },
        { name: 'General Printing', href: '/#printing' },
        { name: 'Cladding & Facade Systems', href: '/#cladding' },
        { name: 'IT & Tech Consultancy', href: '/#it-tech' },
        { name: 'Procurement & Contracts', href: '/#procurement' }
      ]
    },
    {
      name: 'Products',
      href: '/#products',
      submenu: [
        { name: 'Pelinks Visuals', href: '/pelinks-visuals' },
        { name: 'Pelinks Solutions', href: '/#solutions' }
      ]
    },
    {
      name: 'Industries We Serve',
      href: '/industries',
      submenu: [
        { name: 'Real Estate & Property Development', href: '/industries/real-estate' },
        { name: 'Retail & Commercial Businesses', href: '/industries/retail' },
        { name: 'Hospitality (Hotels, Clubs & Restaurants)', href: '/industries/hospitality' },
        { name: 'Government & Public Institutions', href: '/industries/government' },
        { name: 'Education (Schools, Colleges & Universities)', href: '/industries/education' },
        { name: 'Healthcare (Hospitals & Clinics)', href: '/industries/healthcare' },
        { name: 'Banking & Financial Institutions', href: '/industries/banking' },
        { name: 'Oil & Gas, Engineering & Utilities', href: '/industries/oil-gas' },
        { name: 'Religious Organizations & Event Centers', href: '/industries/religious' },
        { name: 'Manufacturing & Industrial Facilities', href: '/industries/manufacturing' }
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    {
      name: 'Resources',
      href: '/#resources',
      submenu: [
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Download Our Profile', href: '/#profile' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo-icon">P</div>
            <span className="logo-text">Pelinks Synergy</span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="navbar-items">
              {menuItems.map((item) => (
                <div key={item.name} className="nav-item">
                  {item.submenu ? (
                    <>
                      <button
                        className="nav-link dropdown-toggle"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <span className="dropdown-icon">▼</span>
                      </button>
                      <div
                        className={`dropdown-menu ${
                          openDropdown === item.name ? 'active' : ''
                        }`}
                      >
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.name}
                            href={subitem.href}
                            className="dropdown-item"
                            onClick={closeMenu}
                          >
                            {subitem.name}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Login Button */}
              <div className="nav-item">
                <button
                  className="nav-link login-btn"
                  onClick={() => setLoginModalOpen(true)}
                >
                  Login
                </button>
              </div>

              {/* Theme Toggle */}
              <div className="nav-item">
                <button
                  className="nav-link theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {loginModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setLoginModalOpen(false)}
        >
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setLoginModalOpen(false)}
            >
              ✕
            </button>
            <h2>Login</h2>
            <div className="login-options">
              <button className="login-option client-login">
                <span className="login-icon">👤</span>
                <span className="login-text">Client Login</span>
              </button>
              <button className="login-option staff-login">
                <span className="login-icon">👨‍💼</span>
                <span className="login-text">Staff Login</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
