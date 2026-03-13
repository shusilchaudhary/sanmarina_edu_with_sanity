import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight, CheckCircle2, Compass, GraduationCap, Award, FileCheck } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Admission Counselling | University Nepal',
  description: 'Admission consultancy in Nepal for study abroad. End-to-end university application support: shortlisting, SOP, LOR, scholarship guidance. Best admission process for Nepali students 2026. Book free consultation.',
  keywords: 'admission consultancy nepal, study abroad admission process nepal, university admission guidance nepali students, admission counselling nepal 2026, study abroad admission consultancy kathmandu',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/admission/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/admission/',
    title: 'Admission Counselling for Study Abroad | Nepal University Application - San Marina',
    description: 'End-to-end admission support for Nepali students. University shortlisting, SOP/LOR, scholarship advisory. high visa success for genuine applicants. Book now.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-26',
    modifiedTime: '2026-02-26',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admission Counselling Nepal | Study Abroad University Applications',
    description: 'University shortlisting, SOP, scholarship guidance for Nepali students.',
  },
};

const pageData = {
  lastUpdated: 'February 2026',
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad admission for Nepali students',
  },
  admissionSteps: [
    { step: 1, title: 'Profile Evaluation & Goal Setting', desc: 'We assess your academic background, test scores, work experience, and career goals to create a personalized admission roadmap.' },
    { step: 2, title: 'University & Course Shortlisting', desc: 'Based on your profile, budget, and preferences, we shortlist 5–10 universities across Australia, UK, USA, Canada, Europe, Japan, and more.' },
    { step: 3, title: 'Document Preparation', desc: 'Transcripts, certificates, English test scores (IELTS/PTE/TOEFL), SOP, LOR, CV/Resume—we guide and review every document.' },
    { step: 4, title: 'Application Submission', desc: 'We help you fill applications correctly, meet deadlines, and avoid common mistakes. Scholarship applications included where applicable.' },
    { step: 5, title: 'Offer Management & Visa Coordination', desc: 'Once you receive offers, we help you choose the best option and coordinate with our visa team for seamless student visa processing.' },
  ],
  countries: [
    { name: 'Australia', path: '/study-abroad/aus/' },
    { name: 'UK', path: '/study-abroad/uk/' },
    { name: 'USA', path: '/study-abroad/usa/' },
    { name: 'Canada', path: '/study-abroad/can/' },
    { name: 'Germany', path: '/study-abroad/eur/germany/' },
    { name: 'Norway', path: '/study-abroad/eur/norway/' },
    { name: 'Italy', path: '/study-abroad/eur/italy/' },
    { name: 'Japan', path: '/study-abroad/jp/' },
  ],
  faqs: [
    {
      question: 'What is admission consultancy in Nepal?',
      answer: 'Admission consultancy in Nepal helps Nepali students apply to universities abroad. Services include profile evaluation, university shortlisting, document preparation (SOP, LOR, transcripts), application submission, and scholarship guidance. San Marina provides end-to-end support for Bachelor, Master, and PhD applications to Australia, UK, USA, Canada, Europe, Japan, and more.',
    },
    {
      question: 'What is the study abroad admission process for Nepali students?',
      answer: 'The study abroad admission process for Nepali students: 1) Profile evaluation and goal setting, 2) University and course shortlisting, 3) Document preparation (academic transcripts, English test scores, SOP, LOR), 4) Application submission before deadlines, 5) Offer acceptance and visa coordination. Timeline varies by country—typically 6–18 months before intake. September/autumn 2026 intake deadlines fall Dec 2025–April 2026 for most universities.',
    },
    {
      question: 'How do I get university admission guidance as a Nepali student?',
      answer: 'Book a free consultation with San Marina. We assess your profile, discuss your preferred countries and budget, and create a personalized admission plan. We shortlist universities, guide SOP/LOR writing, review documents, and help submit applications. Our counsellors are QEAC certified with high visa success for genuine applicants and 1,500+ students placed. Available for Bachelor, Master, PhD, and diploma programmes.',
    },
    {
      question: 'Does admission counselling include scholarship guidance?',
      answer: 'Yes. Our admission service includes scholarship advisory. We identify DAAD (Germany), Norwegian Quota, Italian DSU, Romanian Government, OeAD (Austria), university-specific awards, and partial scholarships. We assess your eligibility and help you apply alongside your main application. Scholarship deadlines often differ from admission deadlines—early planning helps.',
    },
    {
      question: 'How does visa coordination work with admission services?',
      answer: 'After you receive a university offer, we hand you over to our visa team. They prepare your student visa application, document checklist, financial proofs, and (if needed) interview preparation. Admission and visa services work together so there are no gaps. Many students use our end-to-end admission + visa package for a streamlined experience.',
    },
    {
      question: 'Which countries do you support for university admission from Nepal?',
      answer: 'Australia, UK, USA, Canada, Germany, Norway, Austria, Italy, Romania, Slovakia, Japan, South Korea, New Zealand, and more. We specialise in both traditional destinations (AU/UK/USA/CA) and affordable options (Germany tuition-free, Italy DSU, Romania government scholarship) for Nepali students planning 2026 intake.',
    },
    {
      question: 'What documents are needed for university admission abroad?',
      answer: 'Typically: academic transcripts and certificates, English test scores (IELTS/PTE/TOEFL), Statement of Purpose (SOP), 2–3 Letters of Recommendation (LOR), CV/Resume, passport copy, and financial documents. Requirements vary by country and programme. We provide a customized checklist and review everything before submission.',
    },
    {
      question: 'When should I start the admission process for September 2026 intake?',
      answer: 'Start 12–18 months ahead. For September/autumn 2026: begin by Dec 2025–March 2026. Scholarship deadlines (DAAD, Norwegian Quota, Italian Govt) often fall Jan–April. Early start allows time for IELTS/PTE, document gathering, and multiple application rounds if needed.',
    },
    {
      question: 'Is admission counselling suitable for Bachelor and Masters applicants?',
      answer: 'Yes. We support Bachelor (UG), Master (PG), PhD, and diploma programmes. Process and documents differ by level—we tailor our guidance. Many Nepali students apply for Master programmes in Germany, UK, Australia, and USA; we have strong expertise in postgraduate admissions.',
    },
    {
      question: 'Can parents be involved in the admission process?',
      answer: 'Yes. Parents are welcome in consultations. We discuss costs, scholarships, visa requirements, and university reputation—so families can make informed decisions. Many Nepali parents prefer to be involved in university shortlisting and financial planning. We communicate in Nepali and English.',
    },
    {
      question: 'What is the fee for admission counselling in Nepal?',
      answer: 'San Marina offers a free initial consultation. Admission service fees depend on the package (number of universities, country mix, scholarship support). We provide transparent pricing after your profile assessment. No obligation after the free call. Contact us via consultation form or WhatsApp for details.',
    },
    {
      question: 'What makes San Marina the best admission consultancy in Nepal?',
      answer: 'QEAC certified counsellors, high visa success for genuine applicants, 1,500+ students placed, 100+ partner universities, 2+ years of experience. We offer end-to-end support from profile evaluation to visa, including scholarship guidance. Transparent process, no false promises. Trusted by Nepali students and parents for 2026 intake and beyond.',
    },
  ],
};

export default function AdmissionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Admission Counselling for Study Abroad',
        description: 'End-to-end university application support for Nepali students. Profile evaluation, university shortlisting, SOP/LOR guidance, scholarship advisory, visa coordination.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          logo: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
        },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: 'University Admission Counselling',
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
          { '@type': 'ListItem', position: 3, name: 'Admission Counselling', item: 'https://www.sanmarina.edu.np/services/admission/' },
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
            <span className="text-white">Admission Counselling</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Admission Counselling for Study Abroad
            <br />
            <span className="text-blue-300">University Application Support for Nepali Students – 2026 Intake</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            End-to-end university application support. Profile evaluation, shortlisting, SOP/LOR guidance, scholarship advisory, visa coordination. QEAC certified. High visa success for genuine applicants.
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

      {/* Featured Snippet / Quick Answer */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Quick Answer</h2>
          <p className="text-gray-700 mb-4">
            <strong>Admission consultancy in Nepal for study abroad:</strong> End-to-end support for university applications—profile evaluation, university shortlisting, document preparation (SOP, LOR), application submission, scholarship guidance, and visa coordination. Best for Nepali students targeting 2026 intake (Bachelor, Master, PhD). Start 12–18 months before your target semester. QEAC certified. High visa success for genuine applicants. 1,500+ students placed.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Profile evaluation and university shortlisting</li>
            <li>SOP, LOR, transcript review and guidance</li>
            <li>Scholarship advisory (DAAD, Norway, Italy, Romania, etc.)</li>
            <li>Visa coordination with our visa team</li>
            <li>Australia, UK, USA, Canada, Europe, Japan, and more</li>
          </ul>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <GraduationCap size={28} />, value: '1,500+', label: 'Students placed' },
              { icon: <FileCheck size={28} />, value: 'High', label: 'Visa success for genuine applicants' },
              { icon: <Compass size={28} />, value: '100+', label: 'Partner universities' },
              { icon: <Award size={28} />, value: '2+', label: 'Years experience' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="text-[#001F3F]">{s.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-[#001F3F]">{s.value}</p>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Admission Process */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Our Admission Process – Step by Step</h2>
        <div className="space-y-8">
          {pageData.admissionSteps.map((s) => (
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

      {/* Country Selection */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Country Selection Guidance</h2>
          <p className="text-gray-700 mb-6">
            We help you choose the right destination based on your profile, budget, career goals, and scholarship opportunities. Popular options for Nepali students:
          </p>
          <div className="flex flex-wrap gap-3">
            {pageData.countries.map((c) => (
              <Link key={c.name} href={c.path} className="px-5 py-2.5 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100 transition-colors shadow-sm">
                {c.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            We also support Norway, Austria, Italy, Romania, Slovakia, South Korea, New Zealand, and more. <Link href="/study-abroad/" className="text-blue-600 hover:underline">Explore study abroad destinations</Link>.
          </p>
        </div>
      </section>

      {/* Scholarship Advisory */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarship Advisory</h2>
        <p className="text-gray-700 mb-6">
          Our admission service includes scholarship guidance. We identify government and university scholarships that match your profile:
        </p>
        <ul className="space-y-3 text-gray-700">
          {['DAAD (Germany)', 'Norwegian Quota Scheme', 'Italian Government DSU', 'Romanian Government Scholarship', 'OeAD (Austria)', 'University-specific awards (partial/full)'].map((item, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/scholarships/" className="inline-block mt-6 text-blue-600 font-semibold hover:underline">
          View scholarship programmes →
        </Link>
      </section>

      {/* Visa Coordination */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Visa Coordination</h2>
          <p className="text-gray-700 mb-4">
            After you receive a university offer, our visa team takes over. We ensure a smooth handover from admission to visa—document checklist, financial proofs, application review, and interview preparation (where needed). Many students use our <strong>admission + visa package</strong> for an end-to-end experience.
          </p>
          <Link href="/services/" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            Learn about our visa services →
          </Link>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Application?</h2>
          <p className="text-blue-200 mb-6">
            Book a free consultation. We will evaluate your profile and create a personalized admission roadmap for 2026 intake.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Who Is Admission Counselling For?</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Nepali students</strong> planning 2026 intake (Bachelor, Master, PhD, Diploma)</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Scholarship applicants</strong> targeting Germany, Norway, Italy, Romania, Austria</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Parents</strong> who want professional guidance for their child&apos;s university applications</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>First-time applicants</strong> unsure about SOP, LOR, deadlines, or country selection</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Career changers</strong> exploring postgraduate options abroad</span></li>
        </ul>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-6">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Book Consultation</Link>
            <Link href="/services/online-counselling/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Online Counselling</Link>
            <Link href="/services/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">All Services</Link>
            <Link href="/scholarships/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Scholarships</Link>
            <Link href="/study-abroad/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Study Abroad</Link>
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Your University Application Today</h2>
          <p className="text-blue-200 mb-8">
            End-to-end admission support for Nepali students. Profile evaluation, shortlisting, SOP/LOR, scholarship guidance. Free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300 mt-6">
            By {pageData.author.name} · {pageData.author.role} · {pageData.author.expertise}
          </p>
        </div>
      </section>
    </main>
  );
}
