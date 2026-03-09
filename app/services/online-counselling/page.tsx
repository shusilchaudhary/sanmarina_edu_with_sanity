import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight, Video, CheckCircle2, Users, Clock, Shield } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Online Counselling | Study Abroad Nepal',
  description: 'Online counselling for Nepali students planning study abroad in 2026. Free virtual consultation, profile evaluation, scholarship guidance. Best education consultancy in Kathmandu. Book now.',
  keywords: 'online counselling study abroad nepal, study abroad consultancy kathmandu, free consultation study abroad nepal, virtual counselling nepal students, study abroad counselling online',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/online-counselling/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/online-counselling/',
    title: 'Online Counselling for Study Abroad | Free Consultation Nepal - San Marina',
    description: 'Virtual study abroad counselling for Nepali students. Profile evaluation, scholarship guidance. Free 15-min call. Book now.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-26',
    modifiedTime: '2026-02-26',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Counselling for Study Abroad Nepal',
    description: 'Free virtual consultation. Profile evaluation, scholarship guidance.',
  },
};

const pageData = {
  lastUpdated: 'February 2026',
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students',
  },
  faqs: [
    {
      question: 'What is online counselling for study abroad?',
      answer: 'Online counselling for study abroad is virtual one-on-one sessions with certified education counsellors. You get profile evaluation, destination guidance, course selection, and scholarship advice from home—no need to visit the office. Ideal for Nepali students in Kathmandu, Pokhara, or abroad planning 2026 intake.',
    },
    {
      question: 'Is the first consultation really free?',
      answer: 'Yes. San Marina offers a free 15–20 minute initial consultation for study abroad planning. No hidden charges. During the call we assess your profile, discuss destinations (Australia, UK, USA, Canada, Europe, Japan), and outline next steps. Book via our website or WhatsApp.',
    },
    {
      question: 'Can parents join the online counselling session?',
      answer: 'Yes. Parents are welcome to join. Many Nepali families prefer attending together. We discuss budget, scholarships, visa requirements, and safety—so parents can make informed decisions. Virtual sessions work well for families outside Kathmandu.',
    },
    {
      question: 'How do I book online counselling for study abroad from Nepal?',
      answer: 'Book via: 1) Consultation form on our website (/consultation/), 2) WhatsApp +977 9802372602, 3) Call us. We will confirm a slot (Google Meet or Zoom). Sessions available Mon–Sat. Best for 2026 intake: book 12–18 months before your target semester.',
    },
    {
      question: 'What should I prepare for study abroad counselling?',
      answer: 'Have ready: your academic transcripts, English test scores (if any), preferred country/course, budget range, and questions. No formal documents required for first call. We will guide you on what to gather next for university applications.',
    },
    {
      question: 'Does online counselling cover scholarship guidance?',
      answer: 'Yes. We cover DAAD (Germany), Norwegian Quota, Italian Government, Romanian Government, OeAD (Austria), and university-specific scholarships. We assess your eligibility and suggest where to apply. Scholarship deadlines vary—booking early helps.',
    },
    {
      question: 'Which countries do you counsel for from Nepal?',
      answer: 'Australia, UK, USA, Canada, Germany, Norway, Austria, Italy, Romania, Slovakia, Japan, South Korea, New Zealand, and more. We specialise in affordable options (e.g. Germany tuition-free, Italy DSU, Romania government scholarship) for Nepali students.',
    },
    {
      question: 'Is online counselling as effective as in-person?',
      answer: 'Yes. We use the same counsellors and process as in-person. Video calls allow screen-sharing, document review, and screen-recorded action plans. Many students from outside Kathmandu prefer online for convenience. high visa success for genuine applicants applies to both modes.',
    },
    {
      question: 'What is the best time to book counselling for 2026 intake?',
      answer: 'For September/autumn 2026: book by Dec 2025–March 2026. Scholarship deadlines (e.g. DAAD, Romanian Govt) often fall Jan–April. Early counselling helps with test prep (IELTS/PTE), document prep, and application timelines.',
    },
    {
      question: 'Do you offer counselling in Nepali?',
      answer: 'Yes. Our counsellors are fluent in Nepali and English. We can conduct sessions in Nepali for students and parents who are more comfortable. Technical terms (visa, scholarship, course codes) are explained in simple language.',
    },
    {
      question: 'How long does each counselling session last?',
      answer: 'First free consultation: 15–20 minutes. Full counselling sessions: 45–60 minutes. Follow-ups as needed. We send a summary and action plan after each session. No limit on questions—we cover everything you need for your study abroad journey.',
    },
    {
      question: 'Is there a fee after the free consultation?',
      answer: 'The first consultation is free. If you choose our end-to-end services (admission, visa, test prep), fees apply as per our service packages. No obligation to commit after the free call. We provide honest guidance whether you use our services or not.',
    },
  ],
};

export default function OnlineCounsellingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Online Counselling for Study Abroad',
        description: 'Virtual study abroad counselling for Nepali students. Profile evaluation, destination guidance, scholarship advice. Free initial consultation.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          logo: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
        },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: 'Education Counselling',
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
          { '@type': 'ListItem', position: 3, name: 'Online Counselling', item: 'https://www.sanmarina.edu.np/services/online-counselling/' },
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
            <span className="text-white">Online Counselling</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Online Counselling for Study Abroad
            <br />
            <span className="text-blue-300">Free Consultation for Nepali Students – 2026 Intake</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            Virtual study abroad counselling from Nepal&apos;s top consultancy. Profile evaluation, destination guidance, scholarship advice. Free 15-minute call. No obligation.
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
            <strong>Online counselling for study abroad from Nepal:</strong> Virtual one-on-one sessions with certified counsellors. Free 15–20 min first consultation. Covers profile evaluation, country/course selection, scholarship guidance (DAAD, Norway, Italy, Romania, etc.). Book via website or WhatsApp. Ideal for 2026 intake—book 12–18 months ahead. Parents welcome. Available in Nepali and English. QEAC certified. High visa success for genuine applicants.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Free first consultation (15–20 min)</li>
            <li>Profile evaluation & destination guidance</li>
            <li>Scholarship advice (Germany, Norway, Italy, Romania, etc.)</li>
            <li>Book via /consultation/ or WhatsApp +977 9802372602</li>
            <li>QEAC certified · High visa success for genuine applicants</li>
          </ul>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Video size={28} />, value: 'Virtual', label: 'Video sessions' },
              { icon: <Shield size={28} />, value: 'Free', label: 'First consultation' },
              { icon: <Users size={28} />, value: '1,500+', label: 'Students placed' },
              { icon: <CheckCircle2 size={28} />, value: 'High', label: 'Visa success for genuine applicants' },
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

      {/* What We Cover */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">What Online Counselling Covers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Profile Evaluation', desc: 'Academic background, test scores, work experience, and goals assessed' },
            { title: 'Destination Guidance', desc: 'Australia, UK, USA, Canada, Germany, Norway, Italy, Japan & more' },
            { title: 'Course Selection', desc: 'Right programme and university based on your profile and budget' },
            { title: 'Scholarship Advice', desc: 'DAAD, Norwegian Quota, Italian DSU, Romanian Govt, university awards' },
            { title: 'Timeline & Roadmap', desc: 'When to apply, take IELTS/PTE, prepare documents for 2026 intake' },
            { title: 'Visa & Documentation', desc: 'Overview of requirements; full support available via our visa service' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-bold text-[#001F3F] mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Book a Slot', desc: 'Use our consultation form or WhatsApp. We confirm within 24 hours.' },
              { step: 2, title: 'Join the Call', desc: 'Google Meet or Zoom link sent. 15–20 min free call for first consultation.' },
              { step: 3, title: 'Get Your Roadmap', desc: 'Profile assessment, destination suggestions, scholarship options, next steps.' },
              { step: 4, title: 'Take Action', desc: 'Optional: use our admission, visa, or test prep services—or proceed on your own.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="w-12 h-12 bg-[#001F3F] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready for Your Free Consultation?</h2>
          <p className="text-blue-200 mb-6">
            Students and parents across Nepal trust San Marina for study abroad guidance. Book your free 15-minute call today.
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

      {/* Who It's For */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Who Is Online Counselling For?</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Nepali students</strong> planning 2026 intake (Bachelor, Master, PhD)</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Scholarship seekers</strong> targeting Germany, Norway, Italy, Romania, Austria</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Parents</strong> who want to understand costs, visa, and safety</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Students outside Kathmandu</strong> (Pokhara, Biratnagar, etc.) who prefer virtual sessions</span></li>
          <li className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" size={20} /> <span><strong>Early planners</strong> (12–18 months before target intake)</span></li>
        </ul>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-6">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Book Consultation</Link>
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Study Abroad Journey Today</h2>
          <p className="text-blue-200 mb-8">
            Free online counselling for Nepali students. No obligation. Book your slot via consultation form or WhatsApp.
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
