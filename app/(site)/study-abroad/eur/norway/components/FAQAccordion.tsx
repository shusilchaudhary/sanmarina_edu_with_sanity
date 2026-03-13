interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="space-y-0">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-200 last:border-b-0 py-6 first:pt-0"
        >
          <h3 className="text-lg font-semibold text-[#001F3F] mb-3">
            {faq.question}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
