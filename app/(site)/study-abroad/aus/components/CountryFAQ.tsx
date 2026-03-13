import type { CountryData } from '../data';

interface CountryFAQProps {
  country: CountryData;
}

export default function CountryFAQ({ country }: CountryFAQProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {country.faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#001F3F] mb-3 flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <div className="flex items-start gap-3 pl-1">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">
                    A
                  </span>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
