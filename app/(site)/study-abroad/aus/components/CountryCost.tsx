import type { CountryData } from '../data';

interface CountryCostProps {
  country: CountryData;
}

export default function CountryCost({ country }: CountryCostProps) {
  const costs = [
    { label: 'Tuition Fees', value: country.tuitionRange },
    { label: 'Living Costs', value: country.livingCost },
    { label: 'Currency', value: country.currency },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-4">
            Cost of Study in {country.name}
          </h2>
          
          <p className="text-gray-600 mb-8 bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-sm inline-block">
            <span className="font-bold text-yellow-800">Note:</span> Proper financial planning is important for Nepali students applying to {country.name}.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Expense Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Estimated Range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {costs.map((cost, i) => (
                  <tr key={i}>
                    <td className="px-6 py-5 font-bold text-[#001F3F]">{cost.label}</td>
                    <td className="px-6 py-5 text-blue-600 font-semibold">{cost.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-[#001F3F] mb-3">Financial Planning Tips</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Start saving early and maintain consistent bank transactions</li>
              <li>• Explore scholarship opportunities available for Nepali students</li>
              <li>• Consider part-time work options to support living expenses</li>
              <li>• Budget for initial setup costs (flight, insurance, deposits)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
