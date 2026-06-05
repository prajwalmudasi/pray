import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertise = [
  'Performance Marketer',
  'PPC',
  'Media Buyer',
  'Meta/Google Ads',
  'Creative Specialist',
  'Google Analytics',
  'Data Analyst',
  'Brand Strategist',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        [labelRef.current, headingRef.current],
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          bioRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          0.3
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          0.5
        );

      if (tagsRef.current) {
        const tags = tagsRef.current.children;
        tl.fromTo(
          tags,
          { y: 15, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 },
          0.4
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Text Content - 3 cols */}
          <div className="md:col-span-3">
            <p ref={labelRef} className="section-label mb-4 opacity-0">
              ABOUT ME
            </p>
            <h2
              ref={headingRef}
              className="font-playfair text-3xl md:text-4xl font-semibold gradient-text mb-6 opacity-0"
            >
              Digital Marketing Graduate &amp; Performance Marketer
            </h2>
            <p
              ref={bioRef}
              className="font-inter text-base text-text-secondary leading-[1.7] mb-8 opacity-0"
            >
              MAC Digital Marketing Graduate from the University of Galway, Ireland.
              I specialize in performance marketing, PPC campaigns, and data analytics.
              With 2+ years of experience across India and Ireland, I help brands grow
              through data-driven strategies and creative digital solutions.
            </p>

            {/* Expertise Tags */}
            <div ref={tagsRef} className="flex flex-wrap gap-2 mb-8">
              {expertise.map((skill) => (
                <span key={skill} className="tag-style opacity-0">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <a
              ref={ctaRef}
              href="#projects"
              onClick={handleViewProjects}
              className="inline-block font-inter text-sm font-semibold text-white gradient-bg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow opacity-0"
            >
              View Projects
            </a>
          </div>

          {/* Decorative Element - 2 cols */}
          <div className="md:col-span-2 hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 212, 170, 0.3) 0%, rgba(0, 168, 232, 0.15) 40%, transparent 70%)',
                }}
              />
              <div
                className="absolute inset-8 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(123, 97, 255, 0.3) 0%, rgba(0, 212, 170, 0.1) 50%, transparent 70%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-6xl font-bold gradient-text opacity-40">
                  PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
