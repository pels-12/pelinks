'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#001829] text-[#F5F5F5] min-h-screen">
      {/* Back to Home Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-[#003459]/90 backdrop-blur-md text-[#F5F5F5] font-medium rounded-lg hover:bg-[#007EA7] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[65vh] lg:h-[70vh] flex items-center bg-gradient-to-br from-[#003459] via-[#002D4A] to-[#001829]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left max-w-4xl"
          >
            <p className="text-[#007EA7] text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5F5] mb-8 leading-tight">
              Let's Work on Your Next Project
            </h1>
            <p className="text-[#BFC7CE] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl">
              We're ready to bring your vision to life with excellence and reliability.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 xl:gap-16">
            
            {/* Left Column - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-10 lg:col-span-2"
            >
              <div className="space-y-4 text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] text-left">
                  Pelinks Synergy Ltd.
                </h2>
                <p className="text-[#BFC7CE] text-base sm:text-lg lg:text-xl leading-relaxed text-left">
                  Your trusted partner for excellence and innovation across Nigeria.
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#007EA7]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[#F5F5F5] font-semibold text-xl mb-3 text-left">Phone</h3>
                    <a 
                      href="tel:+2348143617840" 
                      className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block mb-2 text-base sm:text-lg text-left"
                    >
                      +234 814 361 7840
                    </a>
                    <a 
                      href="tel:+2348025174610" 
                      className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block text-base sm:text-lg text-left"
                    >
                      +234 802 517 4610
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#007EA7]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[#F5F5F5] font-semibold text-xl mb-3 text-left">Email</h3>
                    <a 
                      href="mailto:hello@pelinks.com.ng" 
                      className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block mb-2 text-base sm:text-lg break-all text-left"
                    >
                      hello@pelinks.com.ng
                    </a>
                    <a 
                      href="mailto:info@pelinks.com.ng" 
                      className="text-[#BFC7CE] hover:text-[#007EA7] transition-colors block text-base sm:text-lg break-all text-left"
                    >
                      info@pelinks.com.ng
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#007EA7]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[#F5F5F5] font-semibold text-xl mb-3 text-left">Office Address</h3>
                    <address className="text-[#BFC7CE] not-italic text-base sm:text-lg leading-relaxed text-left">
                      Plot 17 Cad Zone B, Oladipo Diya Street,<br />
                      Apo Dutse, Abuja, FCT
                    </address>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-4 pt-6 border-t border-[#007EA7]/20 text-left">
                <p className="text-[#BFC7CE] text-base text-left">
                  <span className="text-[#007EA7] font-semibold">Business Hours:</span> Mon - Fri, 8:00 AM - 6:00 PM
                </p>
                <p className="text-[#007EA7] text-base font-medium flex items-center gap-2 text-left">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Response within 24 hours guaranteed
                </p>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#003459]/40 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-3xl border border-[#007EA7]/30 shadow-2xl lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Header */}
                <div className="space-y-3 pb-4 border-b border-[#007EA7]/20 text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F5] text-left">
                    Send Us a Message
                  </h2>
                  <p className="text-[#BFC7CE] text-sm sm:text-base text-left">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-3 text-left">
                  <label htmlFor="fullName" className="block text-[#F5F5F5] font-semibold text-sm sm:text-base tracking-wide text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#001829]/70 border-2 border-[#007EA7]/30 rounded-xl text-[#F5F5F5] text-base placeholder-[#BFC7CE]/40 focus:border-[#007EA7] focus:outline-none focus:ring-4 focus:ring-[#007EA7]/20 transition-all duration-300 hover:border-[#007EA7]/50 text-left"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-3 text-left">
                  <label htmlFor="email" className="block text-[#F5F5F5] font-semibold text-sm sm:text-base tracking-wide text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#001829]/70 border-2 border-[#007EA7]/30 rounded-xl text-[#F5F5F5] text-base placeholder-[#BFC7CE]/40 focus:border-[#007EA7] focus:outline-none focus:ring-4 focus:ring-[#007EA7]/20 transition-all duration-300 hover:border-[#007EA7]/50 text-left"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-3 text-left">
                  <label htmlFor="phone" className="block text-[#F5F5F5] font-semibold text-sm sm:text-base tracking-wide text-left">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#001829]/70 border-2 border-[#007EA7]/30 rounded-xl text-[#F5F5F5] text-base placeholder-[#BFC7CE]/40 focus:border-[#007EA7] focus:outline-none focus:ring-4 focus:ring-[#007EA7]/20 transition-all duration-300 hover:border-[#007EA7]/50 text-left"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                {/* Service Interested In */}
                <div className="space-y-3 text-left">
                  <label htmlFor="service" className="block text-[#F5F5F5] font-semibold text-sm sm:text-base tracking-wide text-left">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-[#001829]/70 border-2 border-[#007EA7]/30 rounded-xl text-[#F5F5F5] text-base focus:border-[#007EA7] focus:outline-none focus:ring-4 focus:ring-[#007EA7]/20 transition-all duration-300 hover:border-[#007EA7]/50 appearance-none cursor-pointer text-left"
                    >
                      <option value="" className="bg-[#001829] text-[#BFC7CE]">Select a service</option>
                      <option value="signage" className="bg-[#001829] text-[#F5F5F5]">Signage & Branding</option>
                      <option value="security" className="bg-[#001829] text-[#F5F5F5]">Security Systems</option>
                      <option value="printing" className="bg-[#001829] text-[#F5F5F5]">Printing Services</option>
                      <option value="it" className="bg-[#001829] text-[#F5F5F5]">IT Consultancy</option>
                      <option value="contracting" className="bg-[#001829] text-[#F5F5F5]">General Contracting</option>
                      <option value="other" className="bg-[#001829] text-[#F5F5F5]">Other</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#007EA7] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3 text-left">
                  <label htmlFor="message" className="block text-[#F5F5F5] font-semibold text-sm sm:text-base tracking-wide text-left">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-[#001829]/70 border-2 border-[#007EA7]/30 rounded-xl text-[#F5F5F5] text-base placeholder-[#BFC7CE]/40 focus:border-[#007EA7] focus:outline-none focus:ring-4 focus:ring-[#007EA7]/20 transition-all duration-300 hover:border-[#007EA7]/50 resize-none text-left"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 bg-gradient-to-r from-[#007EA7] to-[#006891] text-white font-bold text-lg rounded-xl hover:from-[#006891] hover:to-[#005577] transition-all duration-300 shadow-xl shadow-[#007EA7]/40 hover:shadow-2xl hover:shadow-[#007EA7]/50 flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section - Full Width 3D Style */}
      <section className="w-full bg-[#003459]/30 py-20 sm:py-24">
        <div className="max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] text-center px-6">
              Our Location
            </h2>
            <div className="w-full h-[500px] lg:h-[600px] relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9876543210123!2d7.491302315!3d9.0123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMzIuNCJOIDfCsDI5JzI4LjciRQ!5e1!3m2!1sen!2sng!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pelinks Synergy Location"
                className="w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#001829]/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-r from-[#003459] to-[#007EA7]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8"
        >
          <p className="text-[#F5F5F5]/90 text-xl sm:text-2xl lg:text-3xl font-medium">
            Prefer a direct conversation?
          </p>
          <a 
            href="tel:+2348143617840" 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white block hover:text-[#BFC7CE] transition-colors"
          >
            +234 814 361 7840
          </a>
          <motion.a
            href="tel:+2348143617840"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-white text-[#003459] font-semibold text-lg rounded-xl hover:bg-[#F5F5F5] transition-all duration-300 shadow-2xl"
          >
            Request a Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
