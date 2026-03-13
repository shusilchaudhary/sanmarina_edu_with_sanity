import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Compass, 
  BookOpen, 
  FileCheck, 
  Plane, 
  Users, 
  Award,
  Brain,
  ArrowRight,
  ChevronRight 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study Abroad Services | Visa & IELTS Nepal',
  description: 'Study abroad services: counselling, student visa, IELTS/PTE prep, scholarship help. Kathmandu, Dang, Itahari. High visa success. 1,500+ placed.',
  keywords: 'study abroad services nepal, student visa service kathmandu, IELTS coaching, education consultancy services',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/',
  },
  openGraph: {
    title: 'Study Abroad Services | San Marina Nepal',
    description: 'Counselling, visa, test prep, scholarship assistance. High visa success.',
    url: 'https://www.sanmarina.edu.np/services/',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.sanmarina.edu.np/services/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does San Marina offer for study abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Online counselling, admission counselling, student visa services, personality assessment, test preparation (IELTS, PTE, etc.), scholarship assistance, and pre-departure support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does San Marina help with student visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. USA F1, UK, Germany, Australia, Canada, Europe. Document checklist, interview coaching, transparent pricing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where are San Marina services available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kathmandu (Tinkune, Baneshwor), Dang, and Itahari. Online counselling available nationwide.',
          },
        },
      ],
    },
  ],
};

const services = [
  {
    id: 'online-counselling',
    icon: <Users className="w-8 h-8" />,
    title: 'Online Counselling',
    description: 'Get expert guidance from the comfort of your home. Virtual consultations with our certified counselors to discuss your study abroad plans.',
    features: ['One-on-one sessions', 'Profile evaluation', 'Career roadmap', 'Free initial consultation'],
  },
  {
    id: 'admission',
    icon: <Compass className="w-8 h-8" />,
    title: 'Admission Counselling',
    description: 'End-to-end support for university applications. We help you select the right course and institution based on your academic profile.',
    features: ['University shortlisting', 'Course selection', 'Application preparation', 'SOP/LOR guidance'],
  },
  {
    id: 'student-visa-service-nepal',
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Student Visa Services',
    description: 'Expert student visa assistance for <Link href="/study-abroad/usa/" className="text-blue-600 hover:underline">USA</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/aus/" className="text-blue-600 hover:underline">Australia</Link>, <Link href="/study-abroad/can/" className="text-blue-600 hover:underline">Canada</Link> & Europe. Document support, interview preparation, transparent pricing.',
    features: ['USA F1 & UK visa', 'Document checklist', 'Interview coaching', 'Transparent pricing'],
  },
  {
    id: 'personality-test',
    icon: <Brain className="w-8 h-8" />,
    title: 'Personality Assessment',
    description: 'Discover your best course after +2 and the right study abroad destination. Career assessment for Nepali students with expert debrief.',
    features: ['Stream & course fit', 'Country recommendation', 'One-on-one debrief', 'Action plan'],
  },
  {
    id: 'test-prep',
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Test Preparation',
    description: 'Comprehensive coaching for IELTS, PTE, TOEFL, GRE, and more. Small batch sizes with personalized attention from certified trainers.',
    features: ['IELTS/PTE/TOEFL', 'GRE/GMAT prep', 'Mock tests', 'Study materials'],
  },
  {
    id: 'scholarship',
    icon: <Award className="w-8 h-8" />,
    title: 'Scholarship Assistance',
    description: 'Guidance on securing scholarships and financial aid. We help you identify and apply for relevant funding opportunities.',
    features: ['Scholarship search', 'Application support', 'Essay guidance', 'Financial planning'],
  },
  {
    id: 'pre-departure',
    icon: <Plane className="w-8 h-8" />,
    title: 'Pre-Departure Support',
    description: 'Complete preparation for your journey abroad. From accommodation to cultural orientation, we ensure you are ready.',
    features: ['Accommodation help', 'Flight booking', 'Cultural briefing', 'Alumni network'],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Services</span>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive support for your study abroad journey. From initial counseling to pre-departure preparation, we are with you every step of the way.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book free consultation</Link>
              {' · '}
              <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Study abroad</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#001F3F] mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}/`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - AEO */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Services FAQ</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">What services does San Marina offer?</p>
              <p className="text-gray-600 text-sm">Counselling, visa, test prep (IELTS/PTE), scholarship help, pre-departure. <Link href="/services/student-visa-service-nepal/" className="text-blue-600 font-semibold hover:underline">Visa service</Link>, <Link href="/services/test-prep/ielts/" className="text-blue-600 font-semibold hover:underline">IELTS</Link>.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">Do you help with student visa?</p>
              <p className="text-gray-600 text-sm">Yes. USA F1, UK, Germany, Australia, Canada, Europe. Document support, interview prep.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">Where are services available?</p>
              <p className="text-gray-600 text-sm">Kathmandu, Dang, Itahari. <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">4 branches</Link>. Online counselling nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, dedication, and personalized attention to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 'High', label: 'Visa success for genuine applicants' },
              { number: '1,500+', label: 'Students Placed' },
              { number: '100+', label: 'Partner Universities' },
              { number: '2+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-200 mb-8">
            Book a free consultation with our experts and take the first step towards your dream education.
          </p>
          <Link
            href="/consultation/"
            className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Book Free Consultation
          </Link>
          <p className="mt-6 text-sm text-blue-200">
            <Link href="/study-abroad/" className="underline font-medium">Study abroad</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Free consultation</Link>
            {' · '}
            <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">Contact</Link>
          </p>
          <Link href="/consultation/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
