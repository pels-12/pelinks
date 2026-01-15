"use client";

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Adebayo Oluwaseun",
    position: "Operations Manager, GTBank",
    text: "We needed a reliable security system for our new branch in Lekki, and Pelinks delivered beyond expectations. Their team was professional, the installation was quick, and the system has been running smoothly for over a year now.",
    rating: 5
  },
  {
    id: 2,
    name: "Chioma Nwosu",
    position: "Director, Ikeja City Mall",
    text: "Our mall's facade was looking tired, so we contacted Pelinks for a cladding upgrade. The transformation was incredible. They handled everything from design to installation, and finished ahead of schedule. Foot traffic increased noticeably after the renovation.",
    rating: 5
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    position: "Facilities Manager, Chevron Nigeria",
    text: "We've worked with Pelinks on multiple projects—conference room automation, wayfinding signage, and printing services. What stands out is their consistency. They show up on time, communicate clearly, and the quality is always solid.",
    rating: 5
  },
  {
    id: 4,
    name: "Grace Adekunle",
    position: "Homeowner, Banana Island",
    text: "I wanted a proper smart home setup but wasn't sure where to start. Pelinks walked me through everything, recommended what made sense for my budget, and installed it all in two days. My house feels like it's from the future now.",
    rating: 5
  }
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "We Actually Show Up",
    description: "When we say Tuesday at 10am, we mean it. Your time is valuable."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Clear Pricing",
    description: "Upfront quotes with no hidden charges. What you see is what you pay."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Built to Last",
    description: "Quality materials that handle Lagos weather year after year."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Fast Support",
    description: "We don't disappear after the job. Our support team picks up."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 px-6 bg-[#003459] overflow-hidden">
      {/* Faded Background Image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=1920&q=80&fit=crop)'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#001a2b]/50 backdrop-blur-[2px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Combined Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-3">
                What Our Clients Say
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Real feedback from people we've worked with
              </p>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#007EA7]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#F5F5F5] text-base sm:text-lg leading-relaxed mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <p className="text-[#007EA7] font-bold text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prev}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-[#007EA7] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-[#007EA7] w-6' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-[#007EA7] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-3">
                Why Choose Pelinks Synergy
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Honest work and people who show up
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#007EA7]/50 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="w-12 h-12 bg-[#007EA7]/10 rounded-lg flex items-center justify-center text-[#007EA7] mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
