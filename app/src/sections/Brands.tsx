import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: 'IKEA', logo: '/images/logo-ikea.png' },
  { name: 'Prime Video', logo: '/images/logo-primevideo.png' },
  { name: 'Upskill Digital Academy', logo: null, text: 'Upskill' },
  { name: 'Dr. Clare Clinic', logo: null, text: 'Dr. Clare' },
  { name: 'Galway Study Academy', logo: null, text: 'Galway Study' },
  { name: 'Soak Wellness', logo: '/images/logo-soak.png' },
];

// Duplicate for seamless marquee
const marqueeBrands = [...brands, ...brands];

export default function Brands() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="brands"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-12 px-6 opacity-0">
        <p className="section-label mb-4">BRANDS I'VE WORKED WITH</p>
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold gradient-text">
          Trusted By
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="flex animate-marquee">
          {marqueeBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 md:h-12 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="font-playfair text-2xl md:text-3xl font-semibold text-text-secondary hover:text-text-primary hover:gradient-text transition-all duration-300 whitespace-nowrap">
                  {brand.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
