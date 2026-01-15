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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Let's discuss your project!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+234 (0) XXX XXX XXXX</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@pelinksynergy.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>Nigeria</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
