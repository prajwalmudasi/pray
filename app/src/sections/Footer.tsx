import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-inter text-[13px] text-text-secondary">
            Designed &amp; Built by{' '}
            <span className="text-teal font-medium">Prajwal Mudasi</span>
          </p>
          <p className="font-inter text-[13px] text-text-secondary/60 mt-1">
            2025
          </p>
        </div>

        <button
          onClick={handleBackToTop}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:gradient-bg hover:text-white hover:border-transparent transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
