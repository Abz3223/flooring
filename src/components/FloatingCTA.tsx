'use client';

import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToQuote}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-oak hover:bg-oak-light active:bg-oak-light text-navy font-bold py-3 px-4 sm:py-3.5 sm:px-5 md:py-4 md:px-6 rounded-full shadow-2xl transition-all duration-300 flex items-center space-x-1.5 sm:space-x-2 z-40 min-h-[48px] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Get Free Estimate"
    >
      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-sm sm:text-base">Free Estimate</span>
    </button>
  );
}
