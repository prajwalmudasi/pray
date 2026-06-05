import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'Performance Marketing',
  'PPC Campaigns',
  'Meta Ads',
  'Google Ads',
  'Google Analytics',
  'Data Analysis',
  'Power BI',
  'Tableau',
  'Brand Strategy',
  'Social Media Management',
  'Content Creation',
  'SEO/SEM',
  'Media Buying',
  'CRM Management',
];

export default function CV() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

      if (contentRef.current) {
        const blocks = contentRef.current.querySelectorAll('.cv-block');
        gsap.fromTo(
          blocks,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (skillsRef.current) {
        const tags = skillsRef.current.children;
        gsap.fromTo(
          tags,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            stagger: 0.04,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 90%',
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
      id="cv"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10"
      style={{ background: 'rgba(255, 255, 255, 0.015)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 opacity-0">
          <p className="section-label mb-4">MY RESUME</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold gradient-text mb-6">
            Curriculum Vitae
          </h2>
          <button
            className="inline-flex items-center gap-2 font-inter text-sm font-medium text-teal border border-teal px-6 py-3 rounded-full hover:bg-teal hover:text-dark transition-all duration-300"
            onClick={() => alert('CV download coming soon!')}
          >
            <Download size={16} />
            Download CV
          </button>
        </div>

        {/* CV Content */}
        <div ref={contentRef} className="space-y-8">
          {/* Header Block */}
          <div className="cv-block glass rounded-2xl p-6 md:p-8 opacity-0">
            <h3 className="font-playfair text-3xl font-bold text-text-primary mb-4">
              Prajwal Mudasi
            </h3>
            <div className="flex flex-wrap gap-4 text-text-secondary">
              <span className="flex items-center gap-2 font-inter text-sm">
                <MapPin size={14} className="text-teal" />
                Ireland
              </span>
              <span className="flex items-center gap-2 font-inter text-sm">
                <Mail size={14} className="text-teal" />
                prajwalconnects@gmail.com
              </span>
              <span className="flex items-center gap-2 font-inter text-sm">
                <Phone size={14} className="text-teal" />
                +353 892038728
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="cv-block opacity-0">
            <h4 className="font-inter text-[13px] uppercase font-semibold text-teal tracking-[0.15em] mb-3">
              SUMMARY
            </h4>
            <p className="font-inter text-[15px] text-text-secondary leading-[1.7]">
              Results-driven digital marketing professional with expertise in analytics
              and performance marketing. Specializes in PPC campaign management,
              data visualization, and brand strategy. Proven track record of scaling
              brands through data-driven insights and creative digital solutions across
              Meta and Google advertising platforms.
            </p>
          </div>

          {/* Education */}
          <div className="cv-block opacity-0">
            <h4 className="font-inter text-[13px] uppercase font-semibold text-teal tracking-[0.15em] mb-4">
              EDUCATION
            </h4>
            <div className="space-y-4 border-l-2 border-teal/20 pl-6">
              <div>
                <p className="font-inter text-base font-semibold text-text-primary">
                  Master of Science (MSc) Digital Marketing
                </p>
                <p className="font-inter text-sm text-text-secondary">
                  University of Galway, Ireland | 2025–2026 | Grade: 2:2
                </p>
              </div>
              <div>
                <p className="font-inter text-base font-semibold text-text-primary">
                  Bachelor of Commerce
                </p>
                <p className="font-inter text-sm text-text-secondary">
                  Gogte College of Commerce, India | 2022–2025 | Grade: 1st Class
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="cv-block opacity-0">
            <h4 className="font-inter text-[13px] uppercase font-semibold text-teal tracking-[0.15em] mb-4">
              EXPERIENCE &amp; ROLES
            </h4>
            <div className="space-y-5 border-l-2 border-teal/20 pl-6">
              <div>
                <p className="font-inter text-base font-semibold text-text-primary">
                  Marketing Analyst
                </p>
                <p className="font-inter text-sm text-teal mb-1">
                  Upskill Digital Academy | Belgaum, India
                </p>
                <p className="font-inter text-sm text-text-secondary">
                  Managed performance marketing campaigns, analyzed data trends, and
                  optimized PPC strategies across Meta and Google Ads.
                </p>
              </div>
              <div>
                <p className="font-inter text-base font-semibold text-text-primary">
                  Social Media Manager
                </p>
                <p className="font-inter text-sm text-teal mb-1">
                  Galway Study Academy | Galway, Ireland
                </p>
                <p className="font-inter text-sm text-text-secondary">
                  Built brand presence from scratch on Instagram and TikTok, achieving
                  significant organic growth through strategic content.
                </p>
              </div>
              <div>
                <p className="font-inter text-base font-semibold text-text-primary">
                  Podcaster
                </p>
                <p className="font-inter text-sm text-teal mb-1">
                  Dr. Clare Clinic | Galway, Ireland
                </p>
                <p className="font-inter text-sm text-text-secondary">
                  Produced and hosted podcast episodes on holistic health topics,
                  managed social media content strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="cv-block opacity-0">
            <h4 className="font-inter text-[13px] uppercase font-semibold text-teal tracking-[0.15em] mb-4">
              SKILLS
            </h4>
            <div ref={skillsRef} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tag-style opacity-0">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
