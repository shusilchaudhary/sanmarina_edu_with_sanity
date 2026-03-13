import type { CountryData } from '../data';

interface CountryVisaProcessProps {
  country: CountryData;
}

export default function CountryVisaProcess({ country }: CountryVisaProcessProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-8">
            Step-by-Step Visa Process
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden sm:block" />
            
            <div className="space-y-8">
              {country.visaSteps.map((step, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center font-bold text-xl shrink-0 z-10 shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex-grow">
                    <p className="text-gray-700 font-medium leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-[#001F3F] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Entry Requirements from Nepal</h3>
            <ul className="space-y-3">
              {country.requirements.map((req, i) => (
                <li key={i} className="flex gap-3 text-blue-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
