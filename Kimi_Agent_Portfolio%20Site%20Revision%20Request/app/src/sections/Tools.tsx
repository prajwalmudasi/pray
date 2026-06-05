import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  BarChart3,
  LineChart,
  Code,
  Search,
  TrendingUp,
  Cloud,
  PenTool,
  PieChart,
  AreaChart,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: 'Meta Ads Manager', category: 'Advertising Platform', icon: Target },
  { name: 'Google Ads', category: 'PPC Advertising', icon: BarChart3 },
  { name: 'Google Analytics', category: 'Web Analytics', icon: LineChart },
  { name: 'GTM & Hotjar', category: 'Tag Management', icon: Code },
  { name: 'Google Search Console', category: 'SEO Tool', icon: Search },
  { name: 'SEMrush', category: 'SEO & SEM', icon: TrendingUp },
  { name: 'Salesforce', category: 'CRM', icon: Cloud },
  { name: 'Adobe Creative Cloud', category: 'Design', icon: PenTool },
  { name: 'Power BI', category: 'Data Viz', icon: PieChart },
  { name: 'Tableau', category: 'Data Viz', icon: AreaChart },
];

export default function Tools() {
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
          { scale: 0.98, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
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
      id="tools"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 opacity-0">
          <p className="section-label mb-4">TOOLS I USE</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold gradient-text">
            My Tech Stack
          </h2>
        </div>

        {/* Tools Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-surface border border-white/5 hover:border-teal/20 transition-all duration-300 opacity-0"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-3">
                  <IconComponent className="w-6 h-6 text-teal" />
                </div>
                <p className="font-inter text-sm font-semibold text-text-primary mb-1">
                  {tool.name}
                </p>
                <p className="font-inter text-xs text-text-secondary">
                  {tool.category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
