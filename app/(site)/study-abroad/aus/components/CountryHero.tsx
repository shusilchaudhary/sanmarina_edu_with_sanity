import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import type { CountryData } from '../data';

interface CountryHeroProps {
  country: CountryData;
}

export default function CountryHero({ country }: CountryHeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      <Image
        src={country.heroImage}
        alt={`Study in ${country.name} from Nepal`}
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <Link
            href="/study-abroad/"
            className="inline-flex items-center gap-2 text-white/90 mb-6 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to Destinations</span>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Study in {country.name} from Nepal 2026
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {country.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/977015927731"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg"
            >
              <Phone size={18} />
              <span>WhatsApp Consultation</span>
            </a>
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
