import React, { useEffect, useMemo, useRef, useState } from 'react';

type Slide = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

type ScrollerImage = {
  src: string;
  alt: string;
};

interface DarkHeroCarouselProps {
  slides?: Slide[];
  scrollerImages?: ScrollerImage[];
}

export default function DarkHeroCarousel({ slides, scrollerImages }: DarkHeroCarouselProps) {
  const defaultSlides: Slide[] = useMemo(
    () => [
      {
        eyebrow: 'Pelinks Synergy Ltd.',
        title: 'Premium Signage, Smart Tech & Printing',
        subtitle: 'One-stop solutions delivered with precision, speed, and quality across Nigeria.',
        imageSrc: '/PSL_BRANDCOULOR_PNG.png',
        imageAlt: 'Pelinks logo',
        primaryCta: { label: 'Explore Services', href: '#services' },
        secondaryCta: { label: 'Get in Touch', href: '#contact' },
      },
      {
        eyebrow: 'Smart Home & Security',
        title: 'Modern automation and protection',
        subtitle: 'CCTV, access control, and smart living systems designed for reliability.',
        imageSrc: '/PSL_BLACK_ICON_PNG.png',
        imageAlt: 'Security icon',
        primaryCta: { label: 'View Solutions', href: '#services' },
        secondaryCta: { label: 'Request a Quote', href: '#contact' },
      },
      {
        eyebrow: 'General Printing',
        title: 'Print that looks premium',
        subtitle: 'Large format, branding, and production-quality finishing for your business.',
        imageSrc: '/PSL_ICON_PNG.png',
        imageAlt: 'Printing icon',
        primaryCta: { label: 'See Printing', href: '#services' },
        secondaryCta: { label: 'Talk to Us', href: '#contact' },
      },
      {
        eyebrow: 'Cladding & Facade',
        title: 'Build with confidence',
        subtitle: 'Professional execution with clean details and durable materials.',
        imageSrc: '/PSL_WHITE_CYAN_ICON_PNG.png',
        imageAlt: 'Facade icon',
        primaryCta: { label: 'Our Work', href: '#gallery' },
        secondaryCta: { label: 'Contact', href: '#contact' },
      },
      {
        eyebrow: 'Procurement & Contracts',
        title: 'Reliable project delivery',
        subtitle: 'Structured sourcing, execution, and support — end to end.',
        imageSrc: '/PSL_WHITE_ICON_PNG.png',
        imageAlt: 'Contracts icon',
        primaryCta: { label: 'Learn More', href: '#about' },
        secondaryCta: { label: 'Start a Project', href: '#contact' },
      },
    ],
    []
  );

  const defaultScroller: ScrollerImage[] = useMemo(
    () => [
      { src: '/PSL_BRANDCOULOR_PNG.png', alt: 'Pelinks brand logo' },
      { src: '/PSL_BLACK_ICON_PNG.png', alt: 'Pelinks icon black' },
      { src: '/PSL_ICON_PNG.png', alt: 'Pelinks icon' },
      { src: '/PSL_WHITE_CYAN_ICON_PNG.png', alt: 'Pelinks icon white cyan' },
      { src: '/PSL_WHITE_ICON_PNG.png', alt: 'Pelinks icon white' },
      { src: '/QR Code Table Tent.jpg', alt: 'Pelinks QR code table tent' },
    ],
    []
  );

  const actualSlides = slides && slides.length ? slides : defaultSlides;
  const actualScroller = scrollerImages && scrollerImages.length ? scrollerImages : defaultScroller;

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<any>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % actualSlides.length);
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [actualSlides.length, isPaused]);

  const slide = actualSlides[active];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(0,52,89,0.35),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(0,126,167,0.25),transparent_60%),radial-gradient(800px_circle_at_50%_90%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
      </div>

      <div
        className="relative max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 lg:pt-18"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            {slide.eyebrow ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#003459]" />
                {slide.eyebrow}
              </div>
            ) : null}

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              {slide.title}
            </h1>

            {slide.subtitle ? (
              <p className="mt-5 text-base sm:text-lg text-white/75 max-w-2xl">
                {slide.subtitle}
              </p>
            ) : null}

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              {slide.primaryCta ? (
                <a
                  href={slide.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#003459] px-7 py-3 text-[15px] font-semibold text-white hover:bg-[#002a46] transition-colors"
                >
                  {slide.primaryCta.label}
                </a>
              ) : null}

              {slide.secondaryCta ? (
                <a
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {slide.secondaryCta.label}
                </a>
              ) : null}
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center gap-2">
              {actualSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === active ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Featured cards (GlobalGiving-like, dark) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#007EA7]/25 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#003459]/30 blur-2xl" />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white/80">Featured</div>
                  <div className="text-xs text-white/55">Click a card to switch slides</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActive((prev) => (prev - 1 + actualSlides.length) % actualSlides.length);
                      if (cardsRef.current) cardsRef.current.scrollBy({ left: -340, behavior: 'smooth' });
                    }}
                    aria-label="Scroll left"
                    className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors grid place-items-center"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActive((prev) => (prev + 1) % actualSlides.length);
                      if (cardsRef.current) cardsRef.current.scrollBy({ left: 340, behavior: 'smooth' });
                    }}
                    aria-label="Scroll right"
                    className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors grid place-items-center"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-5 relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-950/40 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-950/40 to-transparent" />

                <div
                  ref={cardsRef}
                  className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
                >
                  {actualSlides.map((s, idx) => {
                    const isActive = idx === active;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActive(idx)}
                        className={`snap-start text-left min-w-[260px] sm:min-w-[300px] rounded-2xl border transition-all duration-200 p-5 relative overflow-hidden group ${
                          isActive
                            ? 'border-[#003459] bg-white/10 shadow-[0_0_0_1px_rgba(0,52,89,0.35)]'
                            : 'border-white/10 bg-white/5 hover:bg-white/8'
                        }`}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(500px_circle_at_30%_30%,rgba(0,52,89,0.25),transparent_60%)]" />

                        <div className="relative flex items-start justify-between gap-3">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-white/70">
                                FEATURED
                              </span>
                              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-white/70">
                                NIGERIA
                              </span>
                            </div>

                            <div className="text-sm font-semibold text-white/90">
                              {s.eyebrow || 'Pelinks'}
                            </div>

                            <div className="text-base font-semibold leading-snug">
                              {s.title}
                            </div>
                          </div>

                          {s.imageSrc ? (
                            <img
                              src={s.imageSrc}
                              alt={s.imageAlt || ''}
                              className="h-12 w-12 object-contain opacity-95"
                              loading="lazy"
                            />
                          ) : null}
                        </div>

                        {s.subtitle ? (
                          <div className="relative mt-3 text-sm text-white/65 line-clamp-3">
                            {s.subtitle}
                          </div>
                        ) : null}

                        <div className="relative mt-4 flex items-center gap-3">
                          {s.primaryCta ? (
                            <a
                              href={s.primaryCta.href}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center rounded-full bg-[#003459] px-4 py-2 text-xs font-semibold text-white hover:bg-[#002a46] transition-colors"
                            >
                              {s.primaryCta.label}
                            </a>
                          ) : null}

                          {s.secondaryCta ? (
                            <a
                              href={s.secondaryCta.href}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                            >
                              {s.secondaryCta.label}
                            </a>
                          ) : null}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75">
                Auto-rotates every 6s • Hover to pause
              </div>
            </div>
          </div>
        </div>

        {/* Photo scroller */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex items-end justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg font-semibold">Gallery Preview</h2>
              <p className="text-sm text-white/60">A quick scroll of featured visuals</p>
            </div>
            <a href="#gallery" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              View full gallery →
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="photo-marquee" role="list" aria-label="Photo scroller">
              {[...actualScroller, ...actualScroller].map((img, idx) => (
                <div
                  key={`${img.src}-${idx}`}
                  className="photo-marquee__item"
                  role="listitem"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-20 sm:h-24 w-auto object-contain opacity-95"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 text-xs text-white/45">
            Tip: replace the scroller images with real project photos anytime.
          </div>
        </div>
      </div>
    </section>
  );
}
