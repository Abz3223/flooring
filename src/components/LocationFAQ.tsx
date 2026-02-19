'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface LocationFAQProps {
  locationName: string;
}

export default function LocationFAQ({ locationName }: LocationFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: `Do you provide free estimates in ${locationName}?`,
      answer: `Yes, we offer completely free, no-obligation estimates for all flooring projects in ${locationName}. Our team will visit your property, take measurements, discuss your preferences, and provide a detailed quote.`
    },
    {
      question: `Are your flooring installers licensed and insured in ${locationName}?`,
      answer: `Absolutely. All our flooring contractors serving ${locationName} are fully licensed, insured with $2M liability coverage, and WSIB compliant. We meet all Ontario building codes and safety standards.`
    },
    {
      question: `What is your service area coverage in ${locationName}?`,
      answer: `We proudly serve all neighborhoods throughout ${locationName} and surrounding areas within a 50km radius of Toronto. If you're unsure whether we cover your specific location, please contact us and we'll confirm.`
    },
    {
      question: `Do you offer warranty on installations in ${locationName}?`,
      answer: `Yes, all our flooring installations in ${locationName} come with a comprehensive 5-year warranty covering workmanship and installation. Additionally, materials typically include manufacturer warranties ranging from 10 to 25 years.`
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Common questions about our flooring services in {locationName}
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-oak/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-navy pr-8">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-oak flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-oak flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
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
