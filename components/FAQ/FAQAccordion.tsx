'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

/**
 * FAQAccordion — A premium, SEO-optimized, and fully accessible FAQ component.
 * Features:
 * - Semantic HTML5 structure (section, h2, h3, p)
 * - JSON-LD Schema.org FAQPage injection for AI/Google crawlers
 * - Full ARIA accessibility (button, aria-expanded, aria-controls)
 * - Mobile responsive, modern Stripe-style UI
 */
export default function FAQAccordion({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about our services.",
  faqs 
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD for Search Engines and AI Crawlers
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-white sm:py-24" aria-labelledby="faq-heading">
      {/* JSON-LD Injection for Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Semantic Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 
            id="faq-heading" 
            className="text-3xl font-bold tracking-tight text-[#001F3F] sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-7 text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const controlId = `faq-content-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <div 
                key={index}
                className={`
                  group rounded-2xl border transition-all duration-200 
                  ${isOpen ? 'border-[#001F3F] shadow-sm bg-blue-50/30' : 'border-gray-200 hover:border-blue-300 hover:shadow-md'}
                `}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={controlId}
                    className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  >
                    <span className="text-lg font-semibold text-[#001F3F]">
                      {faq.question}
                    </span>
                    <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-[#001F3F]' : 'text-gray-400 group-hover:text-blue-500'}`} />
                    </span>
                  </button>
                </h3>

                <div
                  id={controlId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-[1000px] opacity-100 mb-2' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base leading-7 text-gray-700 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
