"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: "Real Estate & Property Development",
    intro: "Branded environments, exterior signage, and smart access for estates, malls, and mixed-use developments.",
    bullets: [
      "Façade and pylon signage with compliant lighting",
      "Wayfinding, parking, and tenant directory systems",
      "CCTV, access control, and visitor management",
      "Digital displays for leasing and announcements"
    ]
  },
  {
    title: "Retail & Commercial Businesses",
    intro: "High-visibility retail signage and secure, tech-forward customer experiences.",
    bullets: [
      "Storefront lightboxes, window graphics, and POS displays",
      "In-store digital signage and menu boards",
      "Surveillance, alarm, and intrusion detection",
      "Energy-efficient lighting retrofits"
    ]
  },
  {
    title: "Hospitality (Hotels, Clubs & Restaurants)",
    intro: "Welcoming, on-brand experiences that guide guests effortlessly while protecting assets.",
    bullets: [
      "Exterior identity and canopy signage",
      "Room, amenity, and wayfinding systems",
      "CCTV and access control for guest and staff areas",
      "Digital menu boards and ambience lighting"
    ]
  },
  {
    title: "Government & Public Institutions",
    intro: "Durable, compliant signage and security solutions for civic buildings and campuses.",
    bullets: [
      "Building identification and directional systems",
      "Secure perimeter, bollards, and lighting",
      "Command-center displays and monitoring",
      "Access management for staff and visitors"
    ]
  },
  {
    title: "Education (Schools, Colleges & Universities)",
    intro: "Safe, legible campuses with clear guidance for students, staff, and visitors.",
    bullets: [
      "Campus maps, directional, and block signage",
      "Classroom and dorm ID systems",
      "Surveillance, access control, and alarms",
      "Digital notice boards for events and alerts"
    ]
  },
  {
    title: "Healthcare (Hospitals & Clinics)",
    intro: "Patient-safe wayfinding and always-on security for critical environments.",
    bullets: [
      "Emergency, triage, and department signage",
      "Illuminated exterior and parking guidance",
      "CCTV, access, and nurse-call integrations",
      "Cleanable, antimicrobial sign materials"
    ]
  },
  {
    title: "Banking & Financial Institutions",
    intro: "Trusted, secure environments with premium brand presence and risk-aware systems.",
    bullets: [
      "Branch façades, ATMs surrounds, and branding",
      "Queue management and digital info displays",
      "Vault-grade CCTV and access control",
      "Discreet alarm and monitoring solutions"
    ]
  },
  {
    title: "Oil & Gas, Engineering & Utilities",
    intro: "Robust, field-ready signage and integrated safety/security for critical operations.",
    bullets: [
      "Hazard, safety, and compliance signage",
      "Yard, depot, and terminal identification",
      "Long-range surveillance and thermal imaging",
      "Industrial access control and time attendance"
    ]
  },
  {
    title: "Religious Organizations & Event Centers",
    intro: "Clear, welcoming environments for large gatherings with reliable crowd guidance.",
    bullets: [
      "Site identity, marquee, and directional signage",
      "LED boards for announcements and schedules",
      "CCTV and access control for halls and offices",
      "Parking guidance and safety lighting"
    ]
  },
  {
    title: "Manufacturing & Industrial Facilities",
    intro: "Production-ready safety, navigation, and security built for uptime.",
    bullets: [
      "Plant, warehouse, and zone identification",
      "Safety, lockout/tagout, and compliance signage",
      "Perimeter, yard, and loading bay surveillance",
      "Control-room displays and monitoring"
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

export default function IndustriesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pelinks Synergy Ltd.",
    url: "https://www.pelinks.com.ng",
    logo: "https://www.pelinks.com.ng/PSL_WHITE_ICON_PNG.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hello@pelinks.com.ng",
        telephone: "+2348143617840",
        contactType: "customer support",
        areaServed: "NG",
        availableLanguage: ["en"]
      }
    ],
    serviceArea: { "@type": "Country", name: "Nigeria" },
    knowsAbout: industries.map((i) => i.title),
    makesOffer: [
      {
        "@type": "OfferCatalog",
        name: "Industries We Serve",
        itemListElement: industries.map((i) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: i.title }
        }))
      }
    ]
  };

  return (
    <div className="bg-[#001829] text-[#F5F5F5] min-h-screen">
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

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[65vh] lg:h-[70vh] flex items-center bg-gradient-to-br from-[#003459] via-[#002D4A] to-[#001829]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 w-full">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-left max-w-4xl"
          >
            <p className="text-[#007EA7] text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
              Industries We Serve
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5F5] mb-8 leading-tight">
              Empowering Industries with Innovative Signage, Smart Security, and Digital Solutions
            </h1>
            <p className="text-[#BFC7CE] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl">
              We design, engineer, and deploy tailored solutions that help every sector operate confidently—on-brand, secure, and future-ready.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 space-y-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-left"
          >
            <p className="text-[#BFC7CE] text-base sm:text-lg leading-relaxed text-justify">
              Pelinks Synergy supports mission-critical environments across Nigeria with signage, smart security, and digital systems engineered for each sector’s realities. Every deployment is scoped for compliance, durability, and a cohesive brand experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16"
          >
            {industries.map((industry, idx) => (
              <article key={industry.title} className="space-y-4">
                <div className="pl-4 border-l-4 border-[#007EA7]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] leading-snug">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-[#BFC7CE] text-base sm:text-lg leading-relaxed">
                  {industry.intro}
                </p>
                <ul className="space-y-2 text-[#F5F5F5]/90">
                  {industry.bullets.map((item) => (
                    <li key={item} className="leading-relaxed list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
                {idx < industries.length - 1 && (
                  <div className="h-px bg-white/10 mt-6" />
                )}
              </article>
            ))}
          </motion.div>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#003459]/40 backdrop-blur-md border border-[#007EA7]/30 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5]">Why Choose Pelinks Synergy</h2>
              <p className="text-[#BFC7CE] text-base sm:text-lg leading-relaxed">
                Trust built on sector depth, engineered delivery, and integrated technology.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#F5F5F5]/90 list-disc list-inside">
              <li>Deep understanding of Nigerian industries</li>
              <li>Custom-engineered solutions for every sector</li>
              <li>End-to-end services</li>
              <li>Tech-forward and compliant</li>
              <li>Unified smart security & integration</li>
            </ul>
          </motion.section>

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
                Talk to us about signage, smart security, and digital systems tailored to your industry.
              </p>
              <div className="space-y-1 text-[#F5F5F5] text-base sm:text-lg">
                <a href="mailto:hello@pelinks.com.ng" className="hover:text-[#007EA7] transition-colors">hello@pelinks.com.ng</a>
                <div className="hover:text-[#007EA7] transition-colors">+2348143617840</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#007EA7] text-[#F5F5F5] font-semibold rounded-lg hover:bg-[#0095c5] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </motion.section>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
