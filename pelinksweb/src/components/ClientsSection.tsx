"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clients = [
  { name: "GTBank", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "Chevron Nigeria", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "Dangote Group", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "Access Bank", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "MTN Nigeria", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "First Bank", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "Shoprite", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "NNPC", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "Seplat Energy", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "Lafarge Africa", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "BUA Group", logo: "/PSL_WHITE_ICON_PNG.png" },
  { name: "Arik Air", logo: "/PSL_WHITE_ICON_PNG.png" }
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 px-6 bg-[#002b48] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00243a] via-[#002b48] to-[#001f33] opacity-95" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#007EA7] text-sm font-semibold tracking-[0.18em] uppercase mb-3">Clients We’ve Worked With</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] mb-3">Quiet confidence. Proven delivery.</h2>
          <p className="text-[#BFC7CE] text-base sm:text-lg max-w-3xl mx-auto">Selected partners across banking, oil & gas, retail, real estate, and technology in Nigeria.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name + index}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * index }}
              className="flex items-center justify-center p-4 sm:p-5 rounded-xl bg-white/5 border border-white/5 hover:border-[#007EA7]/40 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 sm:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-200 filter grayscale"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
