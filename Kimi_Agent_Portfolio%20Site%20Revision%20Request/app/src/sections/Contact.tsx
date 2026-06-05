import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (rightRef.current) {
        const fields = rightRef.current.querySelectorAll('.form-field');
        gsap.fromTo(
          rightRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        gsap.fromTo(
          fields,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10"
      style={{ background: 'rgba(255, 255, 255, 0.015)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">GET IN TOUCH</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold gradient-text">
            Let's Work Together
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Contact Info */}
          <div ref={leftRef} className="opacity-0">
            <p className="font-inter text-base text-text-secondary leading-[1.7] mb-8">
              Have a project in mind? Let's create something amazing together.
              I'm always open to discussing new opportunities in digital marketing,
              performance analytics, and brand strategy.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <MapPin size={16} className="text-teal" />
                </div>
                <span className="font-inter text-sm text-text-primary">
                  Ireland
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <Mail size={16} className="text-teal" />
                </div>
                <span className="font-inter text-sm text-text-primary">
                  prajwalconnects@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <Phone size={16} className="text-teal" />
                </div>
                <span className="font-inter text-sm text-text-primary">
                  +353 892038728
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:gradient-bg hover:text-white hover:border-transparent transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:gradient-bg hover:text-white hover:border-transparent transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:gradient-bg hover:text-white hover:border-transparent transition-all duration-300"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div ref={rightRef} className="opacity-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-teal transition-colors resize-none"
                />
              </div>
              <div className="form-field">
                <button
                  type="submit"
                  className="w-full gradient-bg text-white font-inter text-sm font-semibold py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
