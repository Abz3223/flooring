'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-charcoal/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 safe-area-pb">
        <div className="flex gap-3 max-w-sm mx-auto">
          <a
            href="tel:+16479050050"
            className="flex-1 flex items-center justify-center gap-2 bg-surface text-charcoal font-semibold text-sm py-3 px-4 rounded-lg transition-colors active:bg-stone-200"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            (647) 905-0050
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center bg-gold hover:bg-gold-hover text-white font-semibold text-sm py-3 px-4 rounded-lg transition-colors"
          >
            Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
