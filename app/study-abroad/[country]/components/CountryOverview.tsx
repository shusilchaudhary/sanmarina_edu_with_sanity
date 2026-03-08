import { CheckCircle2, MapPin, Clock, GraduationCap } from 'lucide-react';
import type { CountryData } from '../data';

interface CountryOverviewProps {
  country: CountryData;
}

export default function CountryOverview({ country }: CountryOverviewProps) {
  const highlights = [
    `Tuition: ${country.tuitionRange}`,
    `Living: ${country.livingCost}`,
    `Work: ${country.partTimeWork.split(',')[0]}`,
    'World-recognized degrees',
    `Post-study: ${country.postStudyWork.split(',')[0]}`,
    'Global networking opportunities',
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-8">
            Why Study in {country.name} from Nepal?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {highlights.map((point, i) => (
              <div 
                key={i} 
                className="bg-white p-5 rounded-xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 size={22} className="text-green-500 shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-6">
            Popular Cities for Nepali Students
          </h3>
          
          <div className="grid gap-4">
            {country.popularCities.map((city, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <h4 className="text-lg font-bold text-blue-600 flex items-center gap-2">
                    <MapPin size={18} />
                    {city.name}
                  </h4>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 w-fit">
                    {city.highlight}
                  </span>
                </div>
                <p className="text-gray-600">{city.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mt-12 mb-6">
            Study Options & Duration
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {country.studyOptions.map((opt, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-lg font-bold text-[#001F3F] mb-1">{opt.degree}</h4>
                <div className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                  <Clock size={14} />
                  {opt.duration}
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold text-[#001F3F]">Req:</span> {opt.requirement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
