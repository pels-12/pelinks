"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    id: 1,
    title: "LED Display Screens",
    description: "Transform your storefront or event space with vivid LED displays. Our screens deliver brilliant clarity in any lighting condition, perfect for retail, corporate lobbies, and outdoor advertising across Lagos and beyond.",
    icon: "📺",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    id: 2,
    title: "ACP & Stainless Steel Cladding",
    description: "Protect and beautify your building with premium cladding solutions. Our aluminum composite panels and stainless steel finishes are engineered to withstand harsh weather while maintaining a sharp, professional appearance year after year.",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    id: 3,
    title: "3D Channel Letters",
    description: "Make your brand stand out day and night with custom illuminated channel letters. We fabricate precision-cut dimensional letters with LED lighting, ideal for storefronts, malls, and corporate headquarters.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&q=80"
  },
  {
    id: 4,
    title: "Lightboxes & Flex Banners",
    description: "Maximize visibility with our professional lightboxes and weather-resistant flex banners. Whether indoors or outdoors, we deliver advertising solutions that capture attention and endure the elements.",
    icon: "💡",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80"
  },
  {
    id: 5,
    title: "Wayfinding & Directional Signage",
    description: "Guide visitors effortlessly through your facility with clear, professional wayfinding systems. From office complexes to hotels and hospitals, we design intuitive signage that enhances the user experience.",
    icon: "🧭",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
  },
  {
    id: 6,
    title: "Vehicle Branding",
    description: "Turn your vehicles into mobile billboards with our expert vehicle wrapping and branding services. High-quality vinyl graphics designed to withstand Nigerian roads while promoting your business everywhere you go.",
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
  }
];

export default function PelinksVisualsServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003459] mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Powering spaces with innovation, design, and technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/50 cursor-pointer"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003459]/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#003459] mb-3 group-hover:text-[#007EA7] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button className="inline-flex items-center gap-2 text-[#007EA7] font-semibold hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#007EA7] text-white font-semibold text-lg rounded-lg hover:bg-[#006891] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Request a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#003459] text-[#003459] font-semibold text-lg rounded-lg hover:bg-[#003459] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              View Our Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-medium">200+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">10+ Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
