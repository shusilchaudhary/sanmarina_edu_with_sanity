import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight, CheckCircle2, FileCheck, Clock, Shield, MapPin } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Student Visa Service Nepal | F1, UK, Germany',
  description: 'Student visa service in Nepal for USA, UK, Germany, Australia, Canada & Europe. F1 visa, UK student visa consultancy, document support, interview prep. Best student visa consultancy in Nepal. Free consultation.',
  keywords: 'student visa service, student visa service in nepal, student visa consultancy in nepal, student visa assistance, visa processing service for students, f1 visa service in nepal, uk student visa consultancy, germany student visa service, australia student visa assistance',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/student-visa-service-nepal/',
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/student-visa-service-nepal/',
    title: 'Student Visa Service Nepal | Best Visa Consultancy for Nepali Students 2026',
    description: 'F1, UK, Germany, Australia student visa assistance from Kathmandu. Document support, interview prep. Free consultation.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Visa Service Nepal | Visa Assistance for 2026 Intake',
    description: 'USA, UK, Germany, Australia, Canada student visa support from Kathmandu.',
  },
};

const pageData = {
  lastUpdated: 'February 2026',
  author: { name: 'San Marina Education Consultancy', role: 'QEAC Certified', expertise: 'Student visa assistance for Nepali students' },
  visaProcess: [
    { step: 1, title: 'Initial Consultation & Document Assessment', desc: 'We review your offer letter, financial proof, and academic documents. We identify gaps early and create a personalized visa preparation checklist.' },
    { step: 2, title: 'Document Collection & Verification', desc: 'We guide you through gathering transcripts, bank statements, sponsorship letters, and country-specific requirements. Every document is verified before submission.' },
    { step: 3, title: 'Application Preparation', desc: 'We fill visa forms correctly, prepare supporting documents, and ensure compliance with embassy or consulate requirements. No detail is overlooked.' },
    { step: 4, title: 'Interview Preparation (where applicable)', desc: 'For USA, UK, and other interview-based visas, we conduct mock interviews and provide country-specific tips. You enter the interview confident and prepared.' },
    { step: 5, title: 'Submission & Follow-up', desc: 'We help you submit your application and track progress. We respond to any requests for additional documents promptly.' },
  ],
  countries: [
    { name: 'USA', visa: 'F1', path: '/study-abroad/usa/', highlights: 'DS-160, SEVIS, embassy interview, I-20' },
    { name: 'UK', visa: 'Student Route', path: '/study-abroad/uk/', highlights: 'CAS, TB test, financial proof, credibility interview' },
    { name: 'Germany', visa: 'National D', path: '/study-abroad/eur/germany/', highlights: 'Blocked account, APS (if applicable), appointment at embassy' },
    { name: 'Australia', visa: 'Subclass 500', path: '/study-abroad/aus/', highlights: 'GTE, health insurance, ImmiAccount' },
    { name: 'Canada', visa: 'Study Permit', path: '/study-abroad/can/', highlights: 'SDS or regular, biometrics, IRCC portal' },
    { name: 'Europe', visa: 'Schengen / National', path: '/study-abroad/eur/', highlights: 'Norway, Italy, Austria, Romania—country-specific' },
  ],
  commonDocs: [
    'Valid passport (minimum 6 months validity)',
    'University offer letter / Letter of Acceptance',
    'Proof of funds (bank statements, sponsorship letter)',
    'Academic transcripts and certificates',
    'English proficiency test (IELTS/PTE/TOEFL)',
    'Health insurance (where required)',
    'TB test / medical (UK, Australia)',
    'Completed visa application form',
    'Passport-sized photographs',
    'Statement of Purpose / GTE letter (where applicable)',
  ],
  faqs: [
    {
      question: 'How much does student visa service cost in Nepal?',
      answer: 'Student visa service cost in Nepal varies by consultancy and destination. San Marina offers transparent pricing based on country (USA, UK, Germany, Australia, Canada, Europe). Our fees cover document preparation, application review, interview coaching, and follow-up support. We provide a clear quote after your free consultation. Government visa fees (embassy, SEVIS, etc.) are separate and disclosed upfront. No hidden charges.',
    },
    {
      question: 'What documents are required for student visa from Nepal?',
      answer: 'Common documents required for student visa from Nepal: valid passport (6+ months), university offer letter, proof of funds (bank statements, sponsorship), academic transcripts, English test scores (IELTS/PTE/TOEFL), health insurance, TB test (UK/Australia), completed application form, and passport photos. USA requires I-20 and SEVIS; UK requires CAS and TB certificate; Germany may require blocked account and APS. We provide a country-specific checklist and document review.',
    },
    {
      question: 'How long does student visa processing take?',
      answer: 'Student visa processing time varies by country: USA F1 typically 2–6 weeks after interview; UK Student Route 3–8 weeks; Germany 4–12 weeks; Australia 4–8 weeks; Canada 4–12 weeks. Peak seasons (July–September for autumn intake) can extend timelines. We recommend applying 8–12 weeks before your course start. San Marina helps you meet deadlines and respond to any document requests quickly.',
    },
    {
      question: 'Can consultancy guarantee student visa?',
      answer: 'No reputable consultancy can guarantee a student visa. Visa decisions are made by embassies and immigration authorities. San Marina provides thorough preparation—document support, application review, interview prep—to give genuine applicants the best chance. We have high visa success for genuine applicants. We do not make false promises or guarantee outcomes we cannot control.',
    },
    {
      question: 'Which is the best student visa consultancy in Nepal?',
      answer: 'The best student visa consultancy in Nepal offers transparent pricing, country-specific expertise, document support, and interview preparation. San Marina provides student visa service in Nepal for USA (F1), UK, Germany, Australia, Canada, and Europe. We offer free consultation, clear process explanation, and no false guarantees. Look for QEAC certification and genuine applicant success rates. Located in Kathmandu—visit or book online for visa assistance near you.',
    },
    {
      question: 'What is F1 visa service in Nepal?',
      answer: 'F1 visa service in Nepal helps Nepali students applying for US student visas. Services include I-20 review, SEVIS fee guidance, DS-160 form support, document preparation (financial proof, academic records), and mock visa interview practice. The US Embassy in Kathmandu conducts interviews; we ensure you are fully prepared. Processing typically 2–6 weeks after interview. Book a free consultation for F1 visa assistance.',
    },
    {
      question: 'Do you provide UK student visa consultancy?',
      answer: 'Yes. Our UK student visa consultancy covers CAS verification, financial proof (28-day rule), TB test booking, credibility interview preparation, and application submission via UKVI. We guide you through the Student Route (post-2020) requirements. Processing usually 3–8 weeks. We help Nepali students applying to UK universities for 2026 intake.',
    },
    {
      question: 'What does Germany student visa service include?',
      answer: 'Germany student visa service includes blocked account setup guidance, appointment booking at German Embassy Kathmandu, document checklist (admission letter, APS if required, financial proof, health insurance), and application review. Processing 4–12 weeks depending on season. We support students applying to German universities for 2026 intake.',
    },
    {
      question: 'Is Australia student visa assistance available from Kathmandu?',
      answer: 'Yes. Our Australia student visa assistance includes GTE (Genuine Temporary Entrant) statement support, OSHC (health insurance) guidance, financial proof preparation, ImmiAccount setup, and document checklist. Processing 4–8 weeks typically. We serve students across Nepal from our Kathmandu office—book online or visit for student visa service near you.',
    },
    {
      question: 'Where is San Marina located in Nepal?',
      answer: 'San Marina Education Consultancy is based in Kathmandu, Nepal. We offer in-person consultations and remote support for students across Nepal—Pokhara, Biratnagar, and beyond. For local SEO: search "student visa service near me" or "student visa consultancy Kathmandu" to find us. Ensure NAP (Name, Address, Phone) consistency on your Google Business Profile and website.',
    },
  ],
};

export default function StudentVisaServiceNepalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Student Visa Service Nepal',
        description: 'Student visa assistance for Nepali students applying to USA, UK, Germany, Australia, Canada, and Europe. Document support, application preparation, interview coaching.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
          telephone: '+9779802372602',
        },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: 'Student Visa Assistance',
      },
      {
        '@type': 'FAQPage',
        mainEntity: pageData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.sanmarina.edu.np/services/' },
          { '@type': 'ListItem', position: 3, name: 'Student Visa Service Nepal', item: 'https://www.sanmarina.edu.np/services/student-visa-service-nepal/' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyCTA />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#001F3F] via-[#002244] to-[#001a33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/services/" className="hover:text-white">Services</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Student Visa Service Nepal</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Student Visa Service in Nepal
            <br />
            <span className="text-blue-300">USA · UK · Germany · Australia · Canada · Europe – 2026 Intake</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            End-to-end student visa assistance from Kathmandu. Document support, application preparation, visa interview coaching. Best student visa consultancy in Nepal for genuine applicants. Free consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /> WhatsApp – Book Now
            </a>
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer / Featured Snippet */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Quick Answer</h2>
          <p className="text-gray-700 mb-4">
            <strong>Student visa service in Nepal:</strong> Professional visa processing service for students applying to USA (F1), UK, Germany, Australia, Canada, and Europe. Includes document support, application preparation, and visa interview preparation. Processing times vary by country (typically 3–12 weeks). No consultancy can guarantee a visa; San Marina prepares genuine applicants thoroughly. Located in Kathmandu—free consultation for student visa assistance near you.
          </p>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>F1 visa service (USA), UK student visa consultancy, Germany student visa service</li>
            <li>Australia student visa assistance, Canada study permit, Europe (Schengen/National)</li>
            <li>Document checklist, interview prep, transparent pricing</li>
          </ul>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={28} />, value: 'High', label: 'Visa success for genuine applicants' },
              { icon: <FileCheck size={28} />, value: 'Document', label: 'Support & review' },
              { icon: <Clock size={28} />, value: '2+', label: 'Years experience' },
              { icon: <MapPin size={28} />, value: 'Kathmandu', label: 'Visa service near you' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="text-[#001F3F]">{s.icon}</div>
                <div>
                  <p className="text-xl font-bold text-[#001F3F]">{s.value}</p>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Visa Process */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Our Visa Processing Service – Step by Step</h2>
        <div className="space-y-8">
          {pageData.visaProcess.map((s) => (
            <div key={s.step} className="flex gap-6">
              <div className="w-12 h-12 bg-[#001F3F] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="font-bold text-[#001F3F] mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Country-Wise Breakdown */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Country-Wise Visa Assistance</h2>
          <p className="text-gray-700 mb-8">
            Our student visa consultancy in Nepal covers all major study destinations. Each country has specific requirements—we tailor our support accordingly.
          </p>
          <div className="space-y-6">
            {pageData.countries.map((c) => (
              <div key={c.name} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-[#001F3F]">{c.name} – {c.visa}</h3>
                  <Link href={c.path} className="text-blue-600 font-semibold text-sm hover:underline">
                    Study in {c.name} →
                  </Link>
                </div>
                <p className="text-sm text-gray-600">{c.highlights}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Student Visa Documentation Support</h2>
        <p className="text-gray-700 mb-6">
          Common documents required for student visa from Nepal. We provide a country-specific checklist and verify each item before submission.
        </p>
        <ul className="grid md:grid-cols-2 gap-3">
          {pageData.commonDocs.map((doc, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
              <span className="text-gray-700">{doc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Interview Preparation */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Visa Interview Preparation</h2>
          <p className="text-gray-700 mb-4">
            USA (F1), UK, and some other countries require visa interviews. We conduct mock interviews with country-specific questions: study plans, financial proof, post-study intentions, and credibility. You will know what to expect and how to respond confidently. Our counsellors share common rejection reasons so you can avoid them.
          </p>
          <p className="text-gray-600">
            <strong>Tip:</strong> Genuine applicants who prepare well have the best chance. No consultancy can guarantee approval—we maximise yours.
          </p>
        </div>
      </section>

      {/* Processing Timeline */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Typical Processing Timeline</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-3">Country</th>
                <th className="p-3">Typical Processing</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b"><td className="p-3">USA (F1)</td><td className="p-3">2–6 weeks post-interview</td></tr>
              <tr className="border-b"><td className="p-3">UK</td><td className="p-3">3–8 weeks</td></tr>
              <tr className="border-b"><td className="p-3">Germany</td><td className="p-3">4–12 weeks</td></tr>
              <tr className="border-b"><td className="p-3">Australia</td><td className="p-3">4–8 weeks</td></tr>
              <tr className="border-b"><td className="p-3">Canada</td><td className="p-3">4–12 weeks</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          *Peak seasons (e.g. July–September for autumn intake) may extend timelines. Apply 8–12 weeks before course start.
        </p>
      </section>

      {/* Transparent Pricing */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Transparent Pricing</h2>
          <p className="text-gray-700 mb-4">
            Student visa service cost varies by destination and package. We provide a clear quote after your free consultation—no hidden fees. Government charges (embassy fees, SEVIS, health insurance, etc.) are separate and explained upfront. We believe in honest pricing; you will know exactly what you pay.
          </p>
          <Link href="/consultation/" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            Get a personalized quote →
          </Link>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready for Visa Assistance?</h2>
          <p className="text-blue-200 mb-6">
            Book a free consultation. We assess your profile, discuss your destination, and outline next steps for student visa service in Nepal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> Call / WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-[#001F3F] mb-4">Student Visa Service Near You</h2>
        <p className="text-gray-700 mb-4">
          San Marina is based in Kathmandu, Nepal. We serve students across Nepal—from Pokhara to Biratnagar—with in-person and remote support. For local searches: <strong>student visa service near me</strong>, <strong>student visa consultancy Kathmandu</strong>, <strong>best visa consultancy in Nepal</strong>. Ensure your Google Business Profile matches our NAP (Name, Address, Phone) for consistency.
        </p>
        <p className="text-gray-600 text-sm">
          <strong>NAP consistency tip:</strong> Use the same business name, address, and phone number on your website, Google Business Profile, and social profiles. This helps local SEO and trust.
        </p>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-6">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Book Consultation</Link>
            <Link href="/services/admission/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Admission Counselling</Link>
            <Link href="/services/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">All Services</Link>
            <Link href="/study-abroad/usa/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Study in USA</Link>
            <Link href="/study-abroad/uk/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Study in UK</Link>
            <Link href="/contact/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={pageData.faqs} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Visa Journey Today</h2>
          <p className="text-blue-200 mb-8">
            Best student visa consultancy in Nepal. Document support, interview prep, transparent pricing. Free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp Now
            </a>
          </div>
          <p className="text-sm text-blue-300 mt-6">
            {pageData.author.name} · {pageData.author.role} · {pageData.author.expertise}
          </p>
        </div>
      </section>
    </main>
  );
}
