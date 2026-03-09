import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight, CheckCircle2, Brain, BarChart2, Sparkles, Target } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Personality Test | Career Assessment Nepal',
  description: 'Personality test for Nepali students to discover best course and country for study abroad. Career assessment Nepal, study abroad career guidance. Free consultation. Top 5 education consultancy.',
  keywords: 'personality test for nepali students, career assessment nepal, best course after +2 nepal, study abroad career guidance, career counselling nepal, best course after 12 nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/personality-test/',
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/personality-test/',
    title: 'Personality Test for Nepali Students | Career & Course Guidance - San Marina',
    description: 'Discover your best course and country for study abroad. Career assessment for +2 and bachelor graduates in Nepal.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personality Test for Nepali Students | Career Assessment',
    description: 'Best course after +2 Nepal. Study abroad career guidance.',
  },
};

const pageData = {
  lastUpdated: 'February 2026',
  author: { name: 'San Marina Education Consultancy', role: 'QEAC Certified', expertise: 'Career assessment for Nepali students' },
  processSteps: [
    { step: 1, title: 'Book Your Session', desc: 'Register via our consultation form or WhatsApp. We schedule a convenient slot—online or in-person at our Kathmandu office. No commitment required.' },
    { step: 2, title: 'Complete the Assessment', desc: 'Our structured assessment covers interests, strengths, values, and aspirations. Takes 20–30 minutes. Questions are designed to reveal your natural inclinations without bias.' },
    { step: 3, title: 'Get Your Results', desc: 'Receive a personalized report: recommended streams, courses, and countries. We segment results by personality type, career goals, and study abroad fit.' },
    { step: 4, title: 'One-on-One Debrief', desc: 'Our counsellors explain your results and answer questions. We map your profile to real options—Australia, UK, USA, Canada, Germany, Japan—with course and budget clarity.' },
    { step: 5, title: 'Action Plan', desc: 'Leave with a clear next steps roadmap: which exams to take, when to apply, and how to proceed. Optional: continue with admission or counselling services.' },
  ],
  resultSegments: [
    { title: 'Stream Recommendation', desc: 'Science, Commerce, Arts, or mixed—based on strengths and interests' },
    { title: 'Course Fit', desc: 'Engineering, Business, Health, Humanities, IT—aligned with your personality' },
    { title: 'Country Suitability', desc: 'Budget, culture, post-study work—matched to your goals' },
    { title: 'Timeline & Roadmap', desc: 'When to apply, which tests (IELTS/PTE), intake windows' },
  ],
  faqs: [
    {
      question: 'What is personality test for Nepali students?',
      answer: 'Personality test for Nepali students is a structured assessment that helps you discover your strengths, interests, and career fit. At San Marina, we use it to recommend the best course after +2, suitable study abroad destination (USA, UK, Australia, Canada, Germany, etc.), and career path. The test combines interest mapping, value alignment, and aptitude indicators—designed for students in Nepal planning higher education or study abroad.',
    },
    {
      question: 'What is career assessment in Nepal?',
      answer: 'Career assessment in Nepal helps students choose the right field and study path. It includes interest inventories, strength identification, and goal alignment. San Marina offers career assessment for +2 graduates, A-level students, and those considering study abroad. We provide personality-based recommendations for course, country, and timeline—with one-on-one debrief and actionable roadmap.',
    },
    {
      question: 'What is the best course after +2 in Nepal for study abroad?',
      answer: 'The best course after +2 Nepal depends on your interests, strengths, budget, and goals. Science students often choose Engineering, Medicine, IT, or Natural Sciences; Commerce students Business, Economics, Finance; Arts students Humanities, Social Sciences, Design. Our personality test helps identify your fit. We then map options across Australia, UK, USA, Canada, Germany, Japan—considering tuition, scholarships, and post-study work.',
    },
    {
      question: 'How does study abroad career guidance work?',
      answer: 'Study abroad career guidance at San Marina combines personality assessment with destination expertise. We assess your profile, recommend courses and countries, explain costs and scholarships, and outline application timeline. Guidance includes IELTS/PTE planning, document prep, and next steps. No obligation after the assessment—you can proceed with our admission or visa services if you choose.',
    },
    {
      question: 'Is the personality test free?',
      answer: 'San Marina offers a free initial consultation. The full personality assessment and debrief may be part of our counselling package—we provide transparent pricing when you book. Many students use the assessment as the first step before admission counselling or visa support. Contact us via consultation form or WhatsApp for current offerings.',
    },
    {
      question: 'Can I take the personality test online from Nepal?',
      answer: 'Yes. We offer online personality assessment for students across Nepal—Kathmandu, Pokhara, Biratnagar, and beyond. You can complete the assessment remotely and join a video debrief with our counsellor. In-person sessions are also available at our Kathmandu office. Book via our website or WhatsApp.',
    },
    {
      question: 'How long does the assessment take?',
      answer: 'The personality assessment takes approximately 20–30 minutes. The one-on-one debrief adds 30–45 minutes. Total time: about 1 hour. We recommend booking when you can focus without interruptions. Results are shared during the debrief—no waiting period.',
    },
    {
      question: 'What does the personality test result include?',
      answer: 'Your result includes: stream recommendation (Science/Commerce/Arts), course fit (e.g. Engineering, Business, IT), country suitability (considering budget, culture, post-study work), and a timeline with next steps. We explain each recommendation and answer your questions. You leave with a clear action plan for study abroad or local higher education.',
    },
    {
      question: 'Is the assessment based on psychology or AI?',
      answer: 'Our assessment uses validated frameworks aligned with career counselling best practices. It is designed by experienced counsellors and interpreted by our QEAC-certified team. We do not rely on unverified AI—results are explained by humans who understand Nepal\'s education landscape and study abroad pathways. Transparency and accuracy matter.',
    },
    {
      question: 'Who should take the personality test?',
      answer: 'Ideal for: +2 graduates unsure about course choice, students considering study abroad, parents who want data-driven guidance for their child, career changers exploring new fields, anyone confused between multiple options (e.g. engineering vs business, Nepal vs abroad). Early assessment helps—best before finalising +2 stream or university applications.',
    },
    {
      question: 'How accurate is career assessment for Nepali students?',
      answer: 'Accuracy depends on honest answers and skilled interpretation. We use structured instruments and experienced counsellors. No assessment is 100% predictive—we treat results as a strong guide, not a final verdict. Many students find it clarifies options they had not considered. Combined with one-on-one counselling, it significantly improves decision confidence.',
    },
    {
      question: 'Which is the best career counselling in Nepal for study abroad?',
      answer: 'The best career counselling in Nepal for study abroad offers personality assessment, country-specific expertise, and transparent next steps. San Marina is among Nepal\'s top 5 education consultancies—QEAC certified, with high visa success for genuine applicants. We provide personality test, admission counselling, visa support, and scholarship guidance. Book a free consultation to experience our approach.',
    },
  ],
};

export default function PersonalityTestPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Personality Test for Nepali Students',
        description: 'Career assessment and personality-based course/country recommendation for study abroad. Best course after +2, study abroad career guidance.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
          telephone: '+9779802372602',
        },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: 'Career Assessment',
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
          { '@type': 'ListItem', position: 3, name: 'Personality Test', item: 'https://www.sanmarina.edu.np/services/personality-test/' },
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
            <span className="text-white">Personality Test</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Personality Test for Nepali Students
            <br />
            <span className="text-blue-300">Discover Your Best Course & Country for Study Abroad</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            Career assessment Nepal—find the best course after +2, the right study abroad destination, and a clear roadmap. Structured assessment, expert debrief, actionable guidance. One of Nepal&apos;s top 5 education consultancies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /> WhatsApp – Book Free Assessment
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
            <strong>Personality test for Nepali students:</strong> A structured career assessment that helps you discover the best course after +2 and the right study abroad destination. Combines interests, strengths, and goals to recommend streams (Science/Commerce/Arts), courses (Engineering, Business, IT, etc.), and countries (Australia, UK, USA, Canada, Germany). Includes one-on-one debrief and actionable roadmap. Offered by San Marina—one of Nepal&apos;s top 5 education consultancies. Online and in-person. Book via consultation form or WhatsApp.
          </p>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Career assessment for +2 and bachelor graduates</li>
            <li>Best course after +2 Nepal, study abroad country fit</li>
            <li>Stream, course, and country recommendations</li>
          </ul>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Brain size={28} />, value: 'Structured', label: 'Assessment framework' },
              { icon: <BarChart2 size={28} />, value: 'Personalized', label: 'Results & debrief' },
              { icon: <Target size={28} />, value: 'QEAC', label: 'Certified counsellors' },
              { icon: <Sparkles size={28} />, value: 'Top 5', label: 'Consultancy in Nepal' },
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

      {/* Step-by-Step Process */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Our Assessment Process – Step by Step</h2>
        <div className="space-y-8">
          {pageData.processSteps.map((s) => (
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

      {/* AI Credibility / Methodology */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Our Approach – Transparent & Expert-Driven</h2>
          <p className="text-gray-700 mb-4">
            Our personality assessment uses validated career counselling frameworks—not unverified AI. Questions are designed by experienced counsellors and interpreted by our QEAC-certified team. We combine interest mapping, strength identification, and goal alignment with real-world knowledge of Nepal&apos;s education system and study abroad pathways. You receive human-led debrief and recommendations you can trust.
          </p>
          <p className="text-gray-600">
            <strong>Why it matters:</strong> Generic AI tools often miss Nepal-specific context—tuition costs, scholarship options, visa timelines. Our counsellors factor in your budget, family preferences, and realistic post-study outcomes. No black box—we explain every recommendation.
          </p>
        </div>
      </section>

      {/* Results Segmentation */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">What Your Results Include</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pageData.resultSegments.map((r, i) => (
            <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-bold text-[#001F3F] mb-1">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Take the First Step – Book Your Assessment</h2>
          <p className="text-blue-200 mb-6">
            Discover your best course and country. No obligation. Free consultation available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp – Book Now
            </a>
          </div>
          <p className="text-sm text-blue-300 mt-6">
            Mention &quot;Personality Assessment&quot; when booking for priority scheduling.
          </p>
        </div>
      </section>

      {/* Country & Course Guidance Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">From Assessment to Action</h2>
          <p className="text-gray-700 mb-6">
            After your personality test, we map your results to real options. Popular destinations for Nepali students: Australia (post-study work, quality education), UK (1-year masters, Graduate Route), USA (STEM OPT, diverse programmes), Canada (PR pathway), Germany (tuition-free, scholarships), Japan (MEXT, tech focus). We consider budget, career goals, and your personality fit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/study-abroad/aus/" className="px-5 py-2.5 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100 transition-colors shadow-sm">Australia</Link>
            <Link href="/study-abroad/uk/" className="px-5 py-2.5 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100 transition-colors shadow-sm">UK</Link>
            <Link href="/study-abroad/usa/" className="px-5 py-2.5 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100 transition-colors shadow-sm">USA</Link>
            <Link href="/study-abroad/can/" className="px-5 py-2.5 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100 transition-colors shadow-sm">Canada</Link>
            <Link href="/study-abroad/eur/germany/" className="px-5 py-2.5 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100 transition-colors shadow-sm">Germany</Link>
            <Link href="/study-abroad/jp/" className="px-5 py-2.5 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100 transition-colors shadow-sm">Japan</Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-6">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Book Consultation</Link>
            <Link href="/services/online-counselling/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Online Counselling</Link>
            <Link href="/services/admission/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Admission</Link>
            <Link href="/services/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">All Services</Link>
            <Link href="/scholarships/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Scholarships</Link>
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
          <h2 className="text-3xl font-bold text-white mb-4">Find Your Path – Start with Personality Assessment</h2>
          <p className="text-blue-200 mb-8">
            Best course after +2, right country for study abroad. Career assessment Nepal—expert-driven, transparent, actionable.
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
