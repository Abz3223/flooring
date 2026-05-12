'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a typical flooring installation take?',
    a: 'Most residential projects are completed in 1–3 days depending on the size and complexity. Larger commercial jobs may take longer. We\'ll give you a realistic timeline before work begins.',
  },
  {
    q: 'Do you provide a warranty on your installations?',
    a: 'Yes, every installation is backed by our 5-year workmanship warranty. If anything goes wrong due to installation quality, we\'ll fix it at no charge. Material warranties vary by manufacturer.',
  },
  {
    q: 'What areas of Toronto and the GTA do you serve?',
    a: 'We serve all of Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, Pickering, and surrounding communities throughout the Greater Toronto Area.',
  },
  {
    q: 'Do I need to supply the flooring materials or do you provide them?',
    a: 'We can work both ways. Our contractors can source premium materials at competitive trade pricing, or we can install materials you\'ve already purchased. We\'ll advise on quantities and quality.',
  },
  {
    q: 'What is included in the free estimate?',
    a: 'Our estimates include a site assessment, material recommendations, detailed scope of work, and a transparent price breakdown. There\'s no obligation and no hidden fees.',
  },
  {
    q: 'Can you install flooring over an existing floor?',
    a: 'In many cases, yes. We\'ll assess the condition of your existing floor during the estimate. Some installations can go directly over existing flooring while others require full removal. We\'ll advise on the best approach.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about working with Toronto's flooring installers.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-background transition-colors"
                >
                  <span className="font-heading font-semibold text-navy text-sm sm:text-base">{faq.q}</span>
                  {open === i ? (
                    <ChevronUp className="w-5 h-5 text-oak flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {open === i && (
                  <div className="px-5 pb-4 bg-background border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
