import { CheckCircle2 } from 'lucide-react';

export default function CountryAuthority() {
  const reasons = [
    'Expert counselling based on your academic profile and budget',
    'Guidance for university and course selection aligned with your career goals',
    'Visa documentation support to minimize mistakes and delays',
    'Pre and post-departure assistance for accommodation, travel, and settlement',
    'High visa success for genuine applicants',
    'Direct partnerships with top universities worldwide',
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-8">
            Why Choose San Marina?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="bg-blue-100 p-1.5 rounded-full text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
