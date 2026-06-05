import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: '/images/logo-ikea.png',
    category: 'Brand Extension Strategy',
    title: 'IKEA Move',
    description:
      'Developed "IKEA Move" — a branded house service extension concept for IKEA offering end-to-end movers and packers service. Created tiered bundles integrating digital tools, real-time tracking, and sustainable packaging aligned with Democratic Design principles.',
    metrics: 'Brand Architecture | Service Design | University of Galway',
  },
  {
    image: '/images/upskill-ig.png',
    category: 'Performance Marketing',
    title: 'Upskill Digital Academy',
    description:
      'Managed complete digital marketing strategy for this ed-tech academy in Belgaum. Focused on Meta & Google Ads, content strategy, and lead generation for job-oriented courses.',
    metrics: '2,799 Followers | 794 Posts | Education Website',
  },
  {
    image: '/images/tableau-dashboard.jpg',
    category: 'Data Analytics',
    title: 'Business Intelligence Dashboard',
    description:
      'Freelance data visualization project creating interactive Tableau dashboards. Built comprehensive sales analytics with regional performance mapping and customer segmentation.',
    metrics: 'Tableau | KPI Tracking | Data Visualization',
  },
  {
    image: '/images/powerbi-dashboard.jpg',
    category: 'Marketing Analytics',
    title: 'Prime Video Analytics Dashboard',
    description:
      'Marketing analyst internship project building a Power BI dashboard for streaming platform analytics. Tracked viewer engagement, content performance, and subscriber growth metrics.',
    metrics: 'Power BI | Viewer Analytics | Content Performance',
  },
  {
    image: '/images/galway-ig.png',
    category: 'Social Media Management',
    title: 'Galway Study Academy',
    description:
      'Grew this Irish education brand from scratch on Instagram and TikTok. Built organic reach through strategic content, achieving significant engagement in the education sector.',
    metrics: '743 Followers | 118 Posts | Organic Growth',
  },
  {
    image: '/images/drclare-ig.png',
    category: 'Podcasting & Social Media',
    title: 'Dr. Clare Clinic',
    description:
      'Handled Instagram management and podcast production for this holistic health clinic in Galway. Created engaging health content and produced podcast episodes on wellness topics.',
    metrics: '590 Followers | 226 Posts | Podcast Production',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 opacity-0">
          <p className="section-label mb-4">MY WORK</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold gradient-text">
            Projects I've Worked On
          </h2>
        </div>

        {/* Project Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden card-hover opacity-0"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="font-inter text-[11px] uppercase tracking-[0.1em] text-blue mb-2">
                  {project.category}
                </p>
                <h3 className="font-inter text-lg font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="font-inter text-sm text-text-secondary leading-relaxed mb-3 line-clamp-3">
                  {project.description}
                </p>
                <p className="font-inter text-xs font-medium text-teal">
                  {project.metrics}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
