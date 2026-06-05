import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'Google Analytics GA4',
    issuer: 'Google',
  },
  {
    title: 'Power BI',
    issuer: 'Microsoft',
  },
  {
    title: 'Meta Ads Manager',
    issuer: 'Meta',
  },
  {
    title: 'Google Ads',
    issuer: 'Google',
  },
];

export default function Licenses() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { rotateX: -15, opacity: 0 },
          {
            rotateX: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 opacity-0">
          <p className="section-label mb-4">CERTIFICATIONS</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold gradient-text">
            Licenses &amp; Credentials
          </h2>
        </div>

        {/* Certifications Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: '1000px' }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 text-center opacity-0"
            >
              {/* Badge Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-inter text-base font-semibold text-text-primary mb-1">
                {cert.title}
              </h3>
              <p className="font-inter text-sm text-text-secondary mb-3">
                {cert.issuer}
              </p>

              {/* Verified Badge */}
              <span className="inline-block font-inter text-[11px] font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                Verified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
