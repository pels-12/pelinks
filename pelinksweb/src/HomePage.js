import React, { useState } from 'react';
import './HomePage.css';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import CinematicHeroSection from './components/CinematicHeroSectionV2';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutUsSection from './components/AboutUsSection';
import ClientsSection from './components/ClientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const HomePage = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="home-page">
      {/* Navigation */}
      <Navbar onLoginClick={() => setLoginModalOpen(true)} />

      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />

      {/* Hero Section */}
      <CinematicHeroSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio / Projects Section */}
      <PortfolioSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default HomePage;
