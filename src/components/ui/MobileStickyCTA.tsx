'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

// Sticky bottom bar that appears after the visitor scrolls past the hero
// (~400px). Mobile/tablet only (`lg:hidden`). Two equal-width tap targets
// (≥48px high) sit above the iOS home-indicator via safe-area inset.
export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="bg-charcoal/95 backdrop-blur-sm border-t border-white/10 shadow-2xl px-3 py-3">
        <div className="flex gap-2.5 max-w-md mx-auto">
          <a
            href="tel:+16479050050"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-charcoal font-bold text-sm py-3.5 px-3 rounded-lg transition-colors active:bg-stone-200 min-h-[48px]"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center bg-gold hover:bg-gold-hover text-white font-bold text-sm py-3.5 px-3 rounded-lg transition-colors min-h-[48px]"
          >
            Book Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
