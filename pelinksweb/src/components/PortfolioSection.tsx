"use client";

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "First Bank Corporate Signage",
    description: "Complete LED signage and wayfinding system for First Bank headquarters in Victoria Island.",
    category: "Signage",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    fullDescription: "We delivered a comprehensive signage solution for First Bank's corporate headquarters, including illuminated channel letters, digital displays at key entry points, and an intuitive wayfinding system spanning 12 floors. The project was completed in 8 weeks and has enhanced visitor experience significantly."
  },
  {
    id: 2,
    title: "Lekki Smart Villa Automation",
    description: "Full smart home installation for a 7-bedroom residence in Lekki Phase 1.",
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    fullDescription: "This luxury villa features complete home automation including lighting control, climate management, motorized blinds, and a centralized entertainment system. Residents control everything from a custom mobile app or voice commands through integrated smart assistants."
  },
  {
    id: 3,
    title: "GTBank Branch Security Upgrade",
    description: "CCTV and access control installation across 15 GTBank branches nationwide.",
    category: "Security",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    fullDescription: "We deployed enterprise-grade security systems across GTBank branches in Lagos, Abuja, and Port Harcourt. Each location received HD IP cameras, biometric access control, and integration with the bank's central security monitoring center."
  },
  {
    id: 4,
    title: "Dangote Group Annual Report",
    description: "Premium printing and binding for Dangote Group's 2024 annual corporate report.",
    category: "Printing",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80",
    fullDescription: "We produced 5,000 copies of Dangote Group's annual report with spot UV finishing, foil stamping, and premium paper stock. The project included design consultation, proofing, and delivery to shareholders across West Africa."
  },
  {
    id: 5,
    title: "Ikeja City Mall Facade Cladding",
    description: "ACP cladding and illuminated signage for the mall's main entrance renovation.",
    category: "Signage",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    fullDescription: "This project transformed the mall's dated facade with modern aluminum composite panels and integrated LED signage. The installation improved aesthetics and visibility, contributing to increased foot traffic since completion."
  },
  {
    id: 6,
    title: "Banana Island Residence Security",
    description: "Perimeter security and smart surveillance for a high-net-worth estate in Banana Island.",
    category: "Security",
    image: "https://images.unsplash.com/photo-1558002038-bb0b3e55b4cb?w=800&q=80",
    fullDescription: "We designed and installed a comprehensive security system including thermal cameras, license plate recognition, and 24/7 remote monitoring. The estate now has multi-layered protection with seamless integration to the client's mobile devices."
  },
  {
    id: 7,
    title: "Chevron Office Smart Integration",
    description: "Conference room automation and smart lighting for Chevron Nigeria offices.",
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    fullDescription: "Our team equipped 8 conference rooms with automated lighting, motorized screens, one-touch video conferencing, and occupancy-based climate control. The installation has reduced energy consumption by 30% while improving meeting efficiency."
  },
  {
    id: 8,
    title: "Access Bank Marketing Collateral",
    description: "Large-format printing for Access Bank's nationwide marketing campaign.",
    category: "Printing",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    fullDescription: "We produced banners, posters, and standees for over 200 Access Bank branches nationwide. The campaign materials were printed on UV-resistant substrates to ensure durability across various Nigerian weather conditions."
  }
];

const categories = ["All", "Signage", "Smart Home", "Security", "Printing"];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 px-6 bg-[#003459] overflow-hidden">
      {/* Faded Background Image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fit=crop)'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#001a2b]/50 backdrop-blur-[2px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#007EA7]/10 border border-[#007EA7]/30 rounded-full text-[#007EA7] text-sm font-semibold tracking-wide uppercase">
              Our Work
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-4">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Real projects delivered across Nigeria—signage, security, smart homes, and more
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#007EA7] text-white shadow-xl shadow-[#007EA7]/40 scale-105"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/20 hover:border-[#007EA7]/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.03, y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#007EA7]/60 hover:shadow-2xl hover:shadow-[#007EA7]/30 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003459]/90 via-[#003459]/40 to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-[#007EA7] text-white text-xs font-bold rounded-full shadow-lg">
                    {project.category}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#007EA7]/0 group-hover:bg-[#007EA7]/10 transition-colors duration-500" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2 group-hover:text-[#007EA7] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#007EA7] text-white font-semibold text-lg rounded-xl hover:bg-[#006891] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#007EA7]/40 hover:scale-105"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-[#007EA7]/60 transition-all duration-300 hover:scale-105"
            >
              View Full Portfolio
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#002235] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002235] to-transparent" />
                
                {/* Category Tag */}
                <span className="absolute bottom-4 left-6 px-4 py-1.5 bg-[#007EA7] text-white text-sm font-semibold rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#007EA7] text-white font-semibold rounded-lg hover:bg-[#006891] transition-colors"
                  >
                    Discuss Similar Project
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
