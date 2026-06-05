import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      portraitRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        greetingRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.3
      )
      .fromTo(
        nameRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.5
      )
      .fromTo(
        taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.8
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        1.2
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleScrollClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 z-10">
        {/* Portrait */}
        <div ref={portraitRef} className="flex-shrink-0 opacity-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div
              className="absolute inset-0 rounded-full gradient-bg p-[2px] transition-shadow duration-500 hover:shadow-glow"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                <img
                  src="/images/prajwal-portrait.png"
                  alt="Prajwal Mudasi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <p
            ref={greetingRef}
            className="font-inter text-lg md:text-xl font-light text-text-secondary mb-2 opacity-0"
          >
            Hi, I'm
          </p>
          <h1
            ref={nameRef}
            className="font-playfair text-5xl md:text-7xl font-bold gradient-text mb-4 opacity-0"
          >
            Prajwal Mudasi
          </h1>
          <p
            ref={taglineRef}
            className="font-inter text-lg md:text-xl font-light tracking-[0.15em] uppercase text-text-primary opacity-0"
          >
            Welcome to my world
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-0"
        onClick={handleScrollClick}
      >
        <span className="font-inter text-xs text-text-secondary tracking-wide">
          Scroll for my portfolio
        </span>
        <ChevronDown className="w-5 h-5 text-text-secondary animate-bounce-slow" />
      </div>
    </section>
  );
}
