'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <button
        onClick={() => setDismissed(true)}
        className="bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md text-gray-400 hover:text-gray-600 transition-colors self-end"
        aria-label="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        className="flex items-center gap-2.5 bg-oak hover:bg-oak-light text-navy px-5 py-3 rounded-full font-bold shadow-xl transition-all hover:shadow-2xl hover:scale-105 text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>

      <a
        href="/contact"
        className="flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-full font-semibold shadow-xl transition-all hover:shadow-2xl hover:scale-105 text-sm border border-white/20"
      >
        <MessageSquare className="w-4 h-4" />
        Free Estimate
      </a>
    </div>
  );
}
