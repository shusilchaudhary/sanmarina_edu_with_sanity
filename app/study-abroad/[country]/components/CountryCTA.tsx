import Link from 'next/link';
import { Phone } from 'lucide-react';

interface CountryCTAProps {
  countryName: string;
}

export default function CountryCTA({ countryName }: CountryCTAProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0056b3] to-[#001F3F] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your {countryName} Journey Today!
            </h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Get expert guidance from Nepal&apos;s leading education consultancy. 
              Free consultation available at our Kathmandu and Pokhara offices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation/"
                className="bg-white text-[#001F3F] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/9779802372602"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
