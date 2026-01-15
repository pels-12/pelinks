"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Pelinks Visuals",
    subtitle: "Signage & Cladding Solutions",
    description: "We handle everything from LED displays to building cladding. If you need signage that works in Lagos weather, we've got the experience and the team to install it properly.",
    items: [
      "LED Display Screens",
      "ACP & Stainless Steel Cladding",
      "3D Channel Letters",
      "Lightboxes & Flex Banners",
      "Installation & Maintenance",
      "Wayfinding Signage",
      "Vehicle Branding"
    ]
  },
  {
    id: 2,
    title: "Pelinks Solutions",
    subtitle: "Smart Home | Security Systems | Tech Integration",
    description: "Security cameras, access control, smart lighting, and automation that actually works. We install and maintain systems for homes, offices, and warehouses across Nigeria.",
    items: [
      "Smart Lighting & Automation",
      "CCTV & Surveillance",
      "Access Control (Biometric, RFID, Keypad)",
      "Remote Monitoring",
      "Automatic Gates & Barriers",
      "Alarm Systems & Intercoms",
      "IT Infrastructure Setup"
    ]
  },
  {
    id: 3,
    title: "Pelinks Imprint",
    subtitle: "Printing & Promotional Solutions",
    description: "General printing, large format, business cards, event materials. We run a print facility in Lagos and deliver across the country.",
    items: [
      "Large Format Printing",
      "Business Cards & Brochures",
      "Event Branding Materials",
      "Branded Gift Items",
      "Corporate Stationery",
      "Custom Apparel"
    ]
  },
  {
    id: 4,
    title: "Fabrication & Construction",
    subtitle: "Metal Works + Structural Projects",
    description: "Metal fabrication, structural installations, and construction projects. Quality craftsmanship for residential and commercial builds across Nigeria.",
    items: [
      "Metal Fabrication & Welding",
      "Structural Steel Works",
      "Gates & Railings",
      "Roof & Canopy Installations",
      "Building Construction",
      "Renovation & Upgrades"
    ]
  },
  {
    id: 5,
    title: "Procurement & General Contracts",
    subtitle: "Supply Chain + Project Execution",
    description: "We source office equipment, handle installations, and manage logistics. From procurement to deployment, we coordinate the technical details.",
    items: [
      "Office Equipment & Electronics",
      "Security Device Installations",
      "Facility Maintenance",
      "Supply Chain & Logistics",
      "Interior Materials"
    ]
  },
  {
    id: 6,
    title: "IT Consultancy",
    subtitle: "System Integration + Corporate IT Support",
    description: "IT infrastructure setup, system deployment, and ongoing technical support for businesses across Nigeria.",
    items: [
      "Business Process Automation",
      "IT Infrastructure Deployment",
      "Server & Network Setup",
      "Corporate IT Support & Maintenance",
      "IT Advisory Services"
    ]
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.8 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#002235] py-16 md:py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Powering spaces with innovation, design, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div key={service.id}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-[#007EA7] text-white font-semibold rounded-lg hover:bg-[#006891] transition-colors active:scale-95">
            Request a Consultation
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/5 transition-all active:scale-95">
            Download Our Profile
          </button>
          <button className="px-8 py-4 border-2 border-[#007EA7] text-[#007EA7] font-semibold rounded-lg hover:bg-[#007EA7]/10 transition-all active:scale-95">
            Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full bg-[#003459] border border-white/10 rounded-lg p-6 md:p-8 hover:border-[#007EA7]/50 hover:shadow-xl hover:shadow-[#007EA7]/10 transition-all cursor-pointer"
    >
      <div className="mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-[#007EA7] font-medium mb-3">
          {service.subtitle}
        </p>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-2 mb-6">
        {service.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-[#007EA7] mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button className="w-full px-6 py-3 bg-[#007EA7] text-white font-semibold rounded-lg hover:bg-[#006891] transition-colors active:scale-95">
        Learn More
      </button>
    </motion.div>
  );
}

