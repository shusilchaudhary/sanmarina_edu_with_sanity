import type { CountryData } from '../data';

interface CountryComparisonProps {
  country: CountryData;
}

export default function CountryComparison({ country }: CountryComparisonProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-8 text-center">
            {country.name} at a Glance
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {country.comparisonPoints.map((point, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                  {point.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
