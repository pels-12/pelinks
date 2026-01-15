"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clients = [
  { name: "First Bank Nigeria", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=First+Bank" },
  { name: "GTBank", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=GTBank" },
  { name: "Dangote Group", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=Dangote" },
  { name: "Access Bank", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=Access+Bank" },
  { name: "Chevron Nigeria", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=Chevron" },
  { name: "MTN Nigeria", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=MTN" },
  { name: "Shoprite", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=Shoprite" },
  { name: "NNPC", logo: "https://via.placeholder.com/150x60/FFFFFF/003459?text=NNPC" }
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 px-6 bg-[#003459] overflow-hidden">
      {/* Faded Background Image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80&fit=crop)'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#001a2b]/50 backdrop-blur-[2px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] mb-3">
            Trusted By Leading Organizations
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Companies across Nigeria trust us to deliver quality work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#007EA7]/50 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-auto max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
