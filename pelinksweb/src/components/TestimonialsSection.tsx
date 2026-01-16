"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: "Adaeze Okon",
    role: "Head of Facilities, Sterling Bank",
    text: "Pelinks handled our signage refresh across 14 branches without disrupting operations. Clear planning, neat execution, and the finish still looks sharp months later."
  },
  {
    name: "Tunde Adebisi",
    role: "GM, Victoria Crest Properties",
    text: "From CCTV to access control, the team delivered a secure estate rollout on time. Response times have stayed consistent post-handover—no chasing required."
  },
  {
    name: "Halima Yusuf",
    role: "Brand Lead, Abuja Trade Expo",
    text: "Large-format printing, wayfinding, and LED screens—Pelinks coordinated all vendors and kept us calm. Deadlines were tight; they met every one."
  },
  {
    name: "Emeka Nnaji",
    role: "IT Manager, FinServe Africa",
    text: "They modernized our server room and signage in one project. Cabling is disciplined, labeling is clean, and the team stayed professional throughout."
  },
  {
    name: "Kemi George",
    role: "Founder, Lekki Wellness Hub",
    text: "Reception signage, ambient lighting, and digital displays were delivered as promised. The space feels premium and on-brand for our clients."
  },
  {
    name: "Ibrahim Sule",
    role: "Plant Manager, NorthGate Manufacturing",
    text: "Industrial CCTV and perimeter alarms were installed with zero downtime. Clear training for our team and tidy documentation."
  }
];

const stats = [
  { label: "Projects Delivered", value: "350+" },
  { label: "Industries Served", value: "12" },
  { label: "Years of Experience", value: "6" }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-20 lg:py-28 px-6 bg-[#003459] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00243a] via-[#003459] to-[#001f33] opacity-90" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-[#007EA7]/10 blur-3xl -top-12 -left-20" />
        <div className="absolute w-80 h-80 rounded-full bg-white/5 blur-3xl bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-[#007EA7] text-sm font-semibold tracking-[0.18em] uppercase mb-3">Trusted by Clients</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-4">What Our Clients Say</h2>
          <p className="text-[#BFC7CE] text-base sm:text-lg">Calm, verified feedback from organizations that rely on us across Nigeria. <span className="text-[#007EA7] font-semibold">6+ years of proven experience.</span></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="bg-white/5 border border-white/10 hover:border-[#007EA7]/40 transition-all duration-300 rounded-2xl p-6 sm:p-7 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4">
                <svg className="w-6 h-6 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M18 13v3a1 1 0 01-1 1h-5v-4h3.5a.5.5 0 00.5-.5V9a4 4 0 00-4-4h-1a1 1 0 00-1 1v1a1 1 0 01-1 1H7a4 4 0 00-4 4v4a1 1 0 001 1h5v-4H5.5a.5.5 0 01-.5-.5V9c0-3.314 2.686-6 6-6h1a6 6 0 016 6v4a1 1 0 01-1 1h-1z" />
                </svg>
              </div>
              <p className="text-[#F5F5F5] text-base sm:text-lg leading-relaxed mb-5">“{item.text}”</p>
              <div>
                <p className="text-[#007EA7] font-semibold text-base sm:text-lg">{item.name}</p>
                <p className="text-[#BFC7CE] text-sm">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-[#F5F5F5] mb-2">{stat.value}</p>
              <p className="text-[#BFC7CE] text-sm font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
