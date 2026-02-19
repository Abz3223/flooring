'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { FAQ } from '../../types/database';

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const fetchFAQs = async () => {
      const { data } = await supabase
        .from('faqs')
        .select('*')
        .order('sort_order');

      if (data) {
        setFaqs(data);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading font-bold text-navy mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Common questions about flooring installation in Toronto and the GTA
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-background rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-oak/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 flex items-center justify-between text-left min-h-[60px]"
              >
                <h3 className="text-base sm:text-lg font-heading font-semibold text-navy pr-3 sm:pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-oak flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-oak flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-5 md:px-6 pb-3 sm:pb-4">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-oak hover:bg-oak-light text-navy px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px]"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
