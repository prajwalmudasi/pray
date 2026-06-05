import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: '2+',
    numericValue: 2,
    label: 'Years of Experience',
    detail: 'Performance marketing & digital analytics',
  },
  {
    number: '3',
    numericValue: 3,
    label: 'Different Roles',
    detail: 'Marketing Analyst | Social Media Manager | Podcaster',
  },
  {
    number: '2',
    numericValue: 2,
    label: 'Degrees',
    detail: 'MSc Digital Marketing | Bachelor of Commerce',
  },
  {
    number: '2',
    numericValue: 2,
    label: 'Countries',
    detail: 'Ireland | India',
  },
];

export default function WhatIDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            onComplete: () => {
              // Animate numbers counting up
              numberRefs.current.forEach((ref, i) => {
                if (ref) {
                  const target = stats[i].numericValue;
                  gsap.fromTo(
                    ref,
                    { innerText: '0' },
                    {
                      innerText: target,
                      duration: 1.5,
                      ease: 'power2.out',
                      snap: { innerText: 1 },
                      onUpdate: function () {
                        const val = Math.round(parseFloat(ref.innerText || '0'));
                        ref.innerText = val + (i === 0 ? '+' : '');
                      },
                    }
                  );
                }
              });
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-i-do"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10"
      style={{ background: 'rgba(255, 255, 255, 0.015)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 opacity-0">
          <p className="section-label mb-4">WHAT I DO</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold gradient-text">
            Experience &amp; Background
          </h2>
        </div>

        {/* Stats Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-[20px] p-10 text-center opacity-0"
            >
              <span
                ref={(el) => { numberRefs.current[index] = el; }}
                className="font-playfair text-5xl font-bold gradient-text block mb-3"
              >
                {stat.number}
              </span>
              <p className="font-inter text-sm font-medium text-text-primary uppercase tracking-[0.1em] mb-2">
                {stat.label}
              </p>
              <p className="font-inter text-sm text-text-secondary">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
