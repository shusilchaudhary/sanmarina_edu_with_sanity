import { Briefcase, Clock } from 'lucide-react';
import type { CountryData } from '../data';

interface CountryWorkRightsProps {
  country: CountryData;
}

export default function CountryWorkRights({ country }: CountryWorkRightsProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-6">
              Part-Time Work Rights
            </h2>
            <div className="bg-blue-600 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
              <Briefcase size={120} className="absolute -bottom-8 -right-8 opacity-10" />
              <p className="text-lg md:text-xl leading-relaxed font-medium relative z-10">
                {country.partTimeWork}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-6">
              Post-Study Work Options
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {country.postStudyWork}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3">
                  <Clock className="text-blue-600" size={20} />
                  <span className="font-bold text-blue-900">Job Search Visa Available</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3">
                  <Briefcase className="text-blue-600" size={20} />
                  <span className="font-bold text-blue-900">Career Growth Opportunities</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
