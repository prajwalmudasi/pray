import { useEffect, useRef } from 'react';

export default function GradientOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    const orb = orbRef.current;
    if (!orb) return;

    if (isTouchDevice) {
      orb.style.left = '50%';
      orb.style.top = '50%';
      orb.style.transform = 'translate(-50%, -50%)';
      orb.classList.add('animate-float');
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const lerp = 0.08;
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * lerp;

      if (orb) {
        orb.style.left = `${currentRef.current.x}px`;
        orb.style.top = `${currentRef.current.y}px`;
        orb.style.transform = 'translate(-50%, -50%)';
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed pointer-events-none z-0"
      style={{
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 212, 170, 0.12) 0%, rgba(0, 168, 232, 0.06) 35%, rgba(123, 97, 255, 0.03) 60%, transparent 70%)',
        filter: 'blur(80px)',
        willChange: 'transform',
      }}
    />
  );
}
