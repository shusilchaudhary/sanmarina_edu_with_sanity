interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="space-y-0" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-200 last:border-b-0 py-6 first:pt-0"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <h3 className="text-lg font-semibold text-[#001F3F] mb-3" itemProp="name">
            {faq.question}
          </h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p className="text-gray-700 leading-relaxed" itemProp="text">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
