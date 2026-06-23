import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Briefcase, 
  Award,
  FileText,
  Plane,
  Home,
  Star,
  Quote,
  ChevronRight,
  Globe,
  Users
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in UK from Nepal | Complete Guide',
  description: 'Complete 2026 guide for Nepali students: UK student visa from Nepal, cost to study in UK from Nepal, Graduate Route UK 2026, study and work in UK. Visa £527, London £13,761 maintenance. QEAC certified consultants in Kathmandu.',
  keywords: 'study in uk from nepal, uk student visa from nepal, uk student route visa 2026, study in uk from nepal requirements, cost to study in uk from nepal, graduate route uk 2026, study and work in uk, study in uk without ielts, uk scholarships for nepali students, uk visa process from nepal',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/uk/',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/uk/',
    title: 'Study in UK from Nepal – Complete 2026 Guide',
    description: 'Complete 2026 guide for Nepali students to study in UK. UK student visa requirements, cost breakdown, scholarships, work rights, and Graduate Route.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.sanmarina.edu.np/assets/uk_study.jpg',
        width: 1200,
        height: 630,
        alt: 'Study in UK from Nepal - Complete 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in UK from Nepal – Complete 2026 Guide',
    description: 'Complete 2026 guide for Nepali students to study in UK. UK student visa requirements, cost breakdown, scholarships, work rights.',
    images: ['https://www.sanmarina.edu.np/assets/uk_study.jpg'],
  },
};

// 2026 data: visa £527, London £13,761, outside £10,539, IHS £776/yr, 1 GBP ≈ 170 NPR
const ukData = {
  country: 'United Kingdom',
  slug: 'uk',
  heroImage: '/assets/london.jpg',
  lastUpdated: 'February 2026',
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'UK Student Route specialists for Nepali students since 2014',
  },
  description: 'The UK offers world-class education with 4 universities in QS Top 10. Nepali students can work 20 hours/week during term and full-time during holidays. Graduate Route allows 2 years post-study work (3 years for PhD).',
  stats: {
    universities: '150+',
    nepaliStudents: '30,000+',
    visaSuccess: '95%+',
    pswDuration: '2 Years',
  },
  universities: [
    { name: 'University of Oxford', rank: 'QS #3', location: 'Oxford', popular: 'Law, PPE, Medicine', nepaliStudents: '100+' },
    { name: 'University of Cambridge', rank: 'QS #5', location: 'Cambridge', popular: 'Engineering, CS, Economics', nepaliStudents: '80+' },
    { name: 'Imperial College London', rank: 'QS #2', location: 'London', popular: 'Engineering, Medicine, Business', nepaliStudents: '500+' },
    { name: 'UCL', rank: 'QS #9', location: 'London', popular: 'Architecture, Law, Psychology', nepaliStudents: '800+' },
    { name: 'University of Edinburgh', rank: 'QS #27', location: 'Edinburgh', popular: 'AI, Data Science, Business', nepaliStudents: '400+' },
    { name: 'University of Manchester', rank: 'QS #34', location: 'Manchester', popular: 'Engineering, Business, Pharmacy', nepaliStudents: '600+' },
  ],
  cities: [
    { name: 'London', universities: 'Imperial (QS #2), UCL (QS #9), LSE (QS #50)', highlight: 'Global Financial Hub', students: '5,000+ Nepali students', livingCost: '£1,300-£1,500/month' },
    { name: 'Manchester', universities: 'University of Manchester (QS #34)', highlight: 'Affordable Living', students: '2,000+ Nepali students', livingCost: '£900-£1,100/month' },
    { name: 'Edinburgh', universities: 'University of Edinburgh (QS #27)', highlight: 'Scottish Capital', students: '1,500+ Nepali students', livingCost: '£1,000-£1,200/month' },
    { name: 'Birmingham', universities: 'University of Birmingham (QS #80)', highlight: 'Second Largest City', students: '1,200+ Nepali students', livingCost: '£850-£1,000/month' },
    { name: 'Glasgow', universities: 'University of Glasgow (QS #78)', highlight: 'Scottish Culture', students: '1,000+ Nepali students', livingCost: '£800-£950/month' },
  ],
  offices: [
    { type: 'Head Office', city: 'Tinkune', address: 'Tinkune, Kathmandu', region: 'Bagmati Province', phone: '+977-015927731' },
    { type: 'Branch', city: 'Baneshwor', address: 'Baneshwor, Kathmandu', region: 'Bagmati Province', phone: '+977-015927731' },
    { type: 'Branch', city: 'Ghorahi', address: 'Ghorahi, Dang', region: 'Lumbini Province', phone: '+977-015927731' },
    { type: 'Branch', city: 'Itahari', address: 'Itahari, Sunsari', region: 'Koshi Province', phone: '+977-015927731' },
  ],
  costBreakdown: {
    tuition: { min: 10000, max: 38000, period: 'per year', nprMin: 1700000, nprMax: 6460000 },
    livingLondon: { min: 13761, max: 13761, period: '9 months (London £1,529/mo)', nprMin: 2339370, nprMax: 2339370 },
    livingOutside: { min: 10539, max: 10539, period: '9 months (outside London £1,171/mo)', nprMin: 1791630, nprMax: 1791630 },
    visa: { amount: 527, npr: 89590 },
    ihs: { amount: 776, npr: 131920, period: 'per year' },
    airfare: { amount: 900, npr: 153000 },
  },
  requirements: [
    'Valid Passport (minimum 6 months validity)',
    'CAS (Confirmation of Acceptance for Studies) from UK university',
    'Proof of English proficiency (IELTS UKVI 6.0+ or equivalent)',
    'Academic transcripts and certificates',
    'Financial evidence: Tuition fees + £13,761 (London) or £10,539 (outside London) for 28 consecutive days',
    'TB test certificate from approved clinic',
    'ATAS certificate (for sensitive subjects)',
    'Parental consent (if under 18)',
  ],
  workRights: {
    termTime: '20 hours/week',
    vacation: 'Full-time',
    minimumWage: '£11.44/hour (21+)',
    typicalJobs: 'Retail, Hospitality, Customer Service, Campus roles',
  },
  graduateRoute: {
    duration: '2 Years (3 Years for PhD)',
    workAllowed: 'Any skill level, no sponsorship required',
    switchToWork: 'Can switch to Skilled Worker visa',
    bringFamily: 'Yes, dependents allowed',
  },
  scholarships: [
    { name: 'Chevening Scholarship', amount: 'Full tuition + £1,100/month stipend', eligibility: 'Leadership potential, 2+ years work experience' },
    { name: 'Commonwealth Scholarship', amount: 'Full tuition + living allowance', eligibility: 'Commonwealth citizens, academic excellence' },
    { name: 'GREAT Scholarship', amount: '£10,000', eligibility: 'Specific countries including Nepal' },
    { name: 'University-specific scholarships', amount: '£2,000-£10,000', eligibility: 'Merit-based, varies by university' },
    { name: 'British Council Scholarships', amount: 'Full/Partial funding', eligibility: 'Women in STEM, specific subjects' },
  ],
  testimonials: [
    {
      name: 'Prashant Sah',
      location: 'UK',
      course: 'UK Student Visa',
      university: 'United Kingdom',
      quote: 'My UK visa was granted within just 24 hrs of biometric. Thankyou all SAN Marina team.',
      verified: true,
      rating: 5,
      date: '7 months ago'
    },
  ],
  authority: {
    successRate: '95%+',
    experience: '2+',
    studentsPlaced: '1,500+',
    certifications: ['QEAC Certified', 'PIER Qualified', 'British Council Trained'],
  },
  faqs: [
    {
      question: 'How much does it cost to study in UK from Nepal in 2026?',
      answer: 'Cost to study in UK from Nepal: first year £20,000–£52,000 (NPR 34–88 lakhs). Tuition £10,000–38,000; London maintenance £13,761; outside London £10,539; UK student visa fee £527; IHS £776/year. 1 GBP ≈ 170 NPR (Feb 2026).'
    },
    {
      question: 'What are study in UK from Nepal requirements in 2026?',
      answer: 'Study in UK from Nepal requirements: CAS from UK university, proof of English (IELTS UKVI 6.0+ or equivalent), funds for tuition plus £13,761 (London) or £10,539 (outside London) held 28 days, TB test, valid passport. Visa £527; IHS £776/year.'
    },
    {
      question: 'Can I apply for UK student visa from Kathmandu?',
      answer: 'Yes. The UK visa process from Nepal is handled via VFS Global in Kathmandu. Applicants from Kathmandu, Dang, Itahari, and across Nepal submit online, then attend biometrics at the Kathmandu centre. Processing typically 3 weeks.'
    },
    {
      question: 'Can Nepali students study and work in UK?',
      answer: 'Yes. Student Route visa holders can work 20 hours per week during term and full-time during holidays. Minimum wage £11.44/hour (21+). After graduation, Graduate Route UK 2026 allows 2 years (3 for PhD) of unrestricted work.'
    },
    {
      question: 'What is the Graduate Route UK 2026?',
      answer: 'Graduate Route UK 2026 lets international graduates stay and work in UK for 2 years (3 for PhD). No sponsorship or job offer needed. You can switch to Skilled Worker visa during this period. Dependents may join.'
    },
    {
      question: 'Which UK scholarships for Nepali students are available in 2026?',
      answer: 'UK scholarships for Nepali students: Chevening (full funding + stipend), Commonwealth (full funding), GREAT (£10,000), university merit awards (£2,000–£10,000), British Council Women in STEM. Each has distinct eligibility; apply early.'
    },
    {
      question: 'How long does the UK visa process from Nepal take?',
      answer: 'UK visa process from Nepal: standard 3 weeks from biometrics. Priority (5 days) and super-priority (24 hours) cost extra. Most Nepali applicants receive decisions within 2–3 weeks when documents are complete.'
    },
    {
      question: 'Is IELTS mandatory? Can I study in UK without IELTS?',
      answer: 'IELTS UKVI is standard (6.0+, no band below 5.5). Study in UK without IELTS is possible via English-medium degree exemption, PTE Academic UKVI, TOEFL iBT, Duolingo (some universities), or pre-sessional courses. Check your university.'
    },
    {
      question: 'What is CAS and why do I need it for UK student visa?',
      answer: 'CAS (Confirmation of Acceptance for Studies) is a unique reference from your UK university after you accept an offer and pay deposit. It lists your course, fees, and details. You cannot apply for UK student visa without CAS.'
    },
    {
      question: 'Can I switch from Graduate Route to Skilled Worker visa?',
      answer: 'Yes. During or after your Graduate Route period, you can apply for a Skilled Worker visa if you secure a job with a licensed sponsor. Many Nepali graduates use this pathway for long-term UK residence.'
    },
    {
      question: 'When are the intakes to study in UK from Nepal?',
      answer: 'UK universities offer September (main intake) and January (secondary). Most courses begin in September. Apply via UCAS for undergraduate; direct application for postgraduate. Apply 6–9 months before your intended start date.'
    },
    {
      question: 'What types of accommodation are available for Nepali students in UK?',
      answer: 'On-campus halls (£100–250/week), shared houses (£80–150/week), private flats (£150–300/week). London costs more than Manchester, Birmingham, Glasgow, or Edinburgh. Many universities guarantee first-year accommodation.'
    },
  ],
};

const comparisonData = [
  { country: 'UK', countrySlug: null, tuition: '£10,000-38,000', living: '£10,539-13,761', work: '20 hrs/week', psw: '2 Years (PhD 3)', visaTime: '3 weeks' },
  { country: 'Australia', countrySlug: '/study-abroad/aus/', tuition: 'AUD $20,000-45,000', living: 'AUD $29,710/year', work: '48 hrs/fortnight', psw: '2-4 Years', visaTime: '4-12 weeks' },
  { country: 'Canada', countrySlug: '/study-abroad/can/', tuition: 'CAD $15,000-35,000', living: 'CAD $22,895+/year', work: '20 hrs/week', psw: '1-3 Years', visaTime: '4-12 weeks' },
];

export default function UKStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in UK from Nepal 2026 – Complete Guide',
        description: 'Complete 2026 guide: UK student visa, CAS, £13,761/£10,539 maintenance, Graduate Route 2 years. For Nepali students. San Marina Education Consultancy.',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: ukData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for UK study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in UK from Nepal', 'UK Student Route', 'Graduate Route', 'CAS', 'UKVI'],
        logo: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
        address: [
          {
            '@type': 'PostalAddress',
            name: 'Head Office',
            streetAddress: 'Tinkune, Kathmandu',
            addressLocality: 'Kathmandu',
            addressRegion: 'Bagmati Province',
            postalCode: '44600',
            addressCountry: 'NP',
          },
          {
            '@type': 'PostalAddress',
            name: 'Branch Office',
            streetAddress: 'Baneshwor, Kathmandu',
            addressLocality: 'Kathmandu',
            addressRegion: 'Bagmati Province',
            postalCode: '44600',
            addressCountry: 'NP',
          },
          {
            '@type': 'PostalAddress',
            name: 'Branch Office',
            streetAddress: 'Ghorahi, Dang',
            addressLocality: 'Ghorahi',
            addressRegion: 'Lumbini Province',
            postalCode: '22400',
            addressCountry: 'NP',
          },
          {
            '@type': 'PostalAddress',
            name: 'Branch Office',
            streetAddress: 'Itahari, Sunsari',
            addressLocality: 'Itahari',
            addressRegion: 'Koshi Province',
            postalCode: '56700',
            addressCountry: 'NP',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+977-015927731',
          contactType: 'Admissions',
          availableLanguage: ['English', 'Nepali'],
        },
      },
      {
        '@type': 'HowTo',
        name: 'UK Student Visa Process from Nepal',
        description: 'Step-by-step guide to apply for UK Student Route visa from Nepal in 2026.',
        step: [
          { '@type': 'HowToStep', name: 'Apply to UK universities', text: 'Apply to UK universities and receive offer letter.' },
          { '@type': 'HowToStep', name: 'Accept offer and pay deposit', text: 'Accept offer and pay tuition deposit (usually £2,000-£5,000).' },
          { '@type': 'HowToStep', name: 'Receive CAS', text: 'Receive CAS (Confirmation of Acceptance for Studies).' },
          { '@type': 'HowToStep', name: 'Prepare financial documents', text: 'Prepare financial documents (28 days in bank).' },
          { '@type': 'HowToStep', name: 'Complete TB test', text: 'Complete TB test at approved clinic.' },
          { '@type': 'HowToStep', name: 'Apply online', text: 'Apply online via the official UK visa application portal.' },
          { '@type': 'HowToStep', name: 'Pay visa fee and IHS', text: 'Pay visa fee (£527) and IHS (£776/year).' },
          { '@type': 'HowToStep', name: 'Book biometric appointment', text: 'Book biometric appointment at VFS Global.' },
          { '@type': 'HowToStep', name: 'Submit documents', text: 'Submit documents and attend interview (if required).' },
          { '@type': 'HowToStep', name: 'Receive decision', text: 'Receive decision (typically 3 weeks).' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.sanmarina.edu.np/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Study Abroad',
            item: 'https://www.sanmarina.edu.np/study-abroad/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Study in UK',
            item: 'https://www.sanmarina.edu.np/study-abroad/uk/',
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ukData.heroImage}
            alt="Nepali students in London, UK – study abroad destination 2026 – San Marina Education Consultancy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Study in UK</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: February 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in UK from Nepal<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Four QS Top 10 universities, one-year Master&apos;s degrees, and two years of post-study work under the Graduate Route—all within reach from Nepal.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Whether you&apos;re based in Tinkune, Baneshwor, Ghorahi, or Itahari—our Student Route specialists handle CAS preparation, VFS submissions, and Graduate Route guidance. Your first consultation is free.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply Now
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust / Source Attribution (GEO) */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            <strong>Quick answer:</strong> Study in UK from Nepal 2026: tuition £10,000–38,000/year; London maintenance £13,761, outside London £10,539 (9 months); visa £527; IHS £776/year. Graduate Route 2 years (3 for PhD). According to UK Visas and Immigration (UKVI). Verify at <a href="https://www.gov.uk/browse/visas-immigration" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">gov.uk</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {ukData.author.name} · {ukData.author.role} · {ukData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 – GEO */}
      <section className="py-6 bg-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in UK from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">£10,000–38,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">London maintenance</td><td className="p-3">£13,761 (9 months)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Outside London</td><td className="p-3">£10,539 (9 months)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa fee</td><td className="p-3">£527</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">IHS</td><td className="p-3">£776/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Graduate Route</td><td className="p-3">2 years (3 years PhD)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Part-time work</td><td className="p-3">20 hrs/week during term</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: ukData.stats.universities, label: 'Universities' },
              { value: ukData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: ukData.stats.visaSuccess, label: 'Visa Success Rate' },
              { value: ukData.stats.pswDuration, label: 'Post-Study Work' },
              { value: '1,500+', label: 'Students Placed' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in UK from Nepal?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-medium">
          <strong>In brief:</strong> The UK combines prestige with practicality—four QS Top 10 institutions, one-year Master&apos;s programmes, and the <Link href="#graduate-route" className="text-blue-600 hover:underline">Graduate Route UK 2026</Link>, which grants two years of post-study work. Over 30,000 Nepali students are already there. Visa fee £527; maintenance £13,761 (London) or £10,539 (outside London).
        </p>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            For generations, the United Kingdom has drawn ambitious students from around the world. Today, <strong>four of the QS World Top 10</strong> universities call the UK home—and that reputation translates into employability. Employers recognise UK degrees for their rigour, critical thinking, and research-led teaching.
          </p>
          <p className="mb-4">
            What sets the UK apart for many Nepali families is efficiency: a three-year Bachelor&apos;s, a one-year Master&apos;s, and then the <Link href="#graduate-route" className="text-blue-600 hover:underline">Graduate Route UK 2026</Link>—two years (three for PhD) of full work rights without employer sponsorship. The <strong>UK visa process from Nepal</strong> runs through VFS in Kathmandu; applicants from Dang, Itahari, and across the country typically receive decisions within three weeks.
          </p>
          <p className="mb-4">
            Once there, you&apos;ll join over 30,000 Nepali students in London, Manchester, Edinburgh, and beyond. The diaspora is active—student associations, cultural events, and informal networks make the transition smoother than many expect.
          </p>
        </div>
      </section>

      {/* Study in UK from Nepal Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in UK from Nepal Requirements (2026)</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> You&apos;ll need a CAS from your UK university, proof of English (IELTS UKVI 6.0+ or equivalent), and funds for tuition plus maintenance (£13,761 for London, £10,539 outside—held for 28 days). Add a TB test and valid passport. Visa fee £527; IHS £776 per year.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
            {ukData.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Study in UK / Why Do You Want to Study in UK */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Why Study in UK? Why Do You Want to Study in UK?</h2>
        <p className="text-gray-700 mb-6">
          <strong>In brief:</strong> Shorter degrees mean lower cost and faster entry to the job market. One-year Master&apos;s programmes, four QS Top 10 universities, and two years of Graduate Route work rights make the UK a strong option for career-focused applicants.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-bold text-[#001F3F] mb-3">Why Study in UK?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 1-year Master&apos;s degrees (save time & cost)</li>
              <li>• 4 universities in QS Top 10 globally</li>
              <li>• Graduate Route: 2 years post-study work</li>
              <li>• Degrees recognised worldwide</li>
              <li>• Strong Nepali student community</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-bold text-[#001F3F] mb-3">Why Do You Want to Study in UK?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Career advancement in global industries</li>
              <li>• Research excellence and facilities</li>
              <li>• English language immersion</li>
              <li>• International networking opportunities</li>
              <li>• Pathway to UK work visa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits of Studying in UK */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Benefits of Studying in UK</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> Shorter courses, part-time work during term (20 hrs/week), and two years of post-study work under the Graduate Route. You gain a globally recognised degree and international experience without the multi-year commitment required elsewhere.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Shorter Courses', desc: '1-year Master\'s vs 2 years elsewhere; 3-year Bachelor\'s' },
              { title: 'Part-Time Work', desc: '20 hrs/week during term; full-time during holidays' },
              { title: 'Graduate Route', desc: '2 years post-study work (3 years for PhD)' },
              { title: 'Global Recognition', desc: 'UK degrees valued by employers worldwide' },
              { title: 'Research Excellence', desc: 'Russell Group universities lead research' },
              { title: 'English Immersion', desc: 'Improve language skills in native environment' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-[#001F3F] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study in UK Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in UK Without IELTS</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> A few routes exist: an English-medium degree can exempt you; many universities accept PTE, TOEFL, or Duolingo; and pre-sessional courses let you meet the requirement on arrival. For the standard <Link href="/services/" className="text-blue-600 hover:underline">UK IELTS requirement</Link> and test prep, see our services page.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>English-medium degree from recognised institution: may exempt IELTS</li>
          <li>PTE Academic UKVI: accepted by many universities</li>
          <li>TOEFL iBT: check university-specific requirements</li>
          <li>Duolingo: accepted by some UK universities</li>
          <li>Pre-sessional English pathway: 6–12 weeks before course</li>
        </ul>
      </section>

      {/* Study and Work in UK */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study and Work in UK (2026)</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> During term, you can work up to 20 hours per week; during vacations, full-time. Minimum wage is £11.44/hour for those 21 and over. After graduation, the Graduate Route gives you two years (three for PhD) of unrestricted work—no sponsorship needed.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-[#001F3F] mb-3">During Study</h3>
              <p className="text-gray-700">20 hrs/week during term; full-time during holidays. No separate work permit.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-[#001F3F] mb-3">After Graduation</h3>
              <p className="text-gray-700">Graduate Route: 2 years (bachelor/master), 3 years (PhD). Any skill level, no job offer needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Study in UK for International Students */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in UK for International Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Study in UK for international students means securing a Student Route visa with a CAS, financial proof (£13,761 in London, £10,539 outside), and proof of English. Over 600,000 international students study in the UK—Nepali students are a growing and visible community in London, Manchester, and Edinburgh.
        </p>
        <p className="text-gray-700">
          Families from Kathmandu, Dang, Itahari, and nationwide come to us for UK guidance because the process—while clear—benefits from experience. We help with university shortlisting, CAS preparation, and document checks so your application reflects your strongest case.
        </p>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">
            How Much Does It Cost to Study in UK from Nepal?
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            <strong>In brief:</strong> Plan for £20,000–£52,000 in your first year (NPR 34–88 lakhs). Tuition runs £10,000–38,000 depending on course and institution; add maintenance (£13,761 London, £10,539 outside), visa (£527), and IHS (£776/year). At 1 GBP ≈ 170 NPR (Feb 2026).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <GraduationCap className="text-[#0056b3]" size={24} />
                </div>
                <h3 className="font-bold text-[#001F3F]">Tuition Fees</h3>
              </div>
              <p className="text-2xl font-bold text-[#001F3F] mb-2">
                £{ukData.costBreakdown.tuition.min.toLocaleString()}-£{ukData.costBreakdown.tuition.max.toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm mb-2">{ukData.costBreakdown.tuition.period}</p>
              <p className="text-green-600 text-sm">
                NPR {ukData.costBreakdown.tuition.nprMin.toLocaleString()}-{ukData.costBreakdown.tuition.nprMax.toLocaleString()}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Home className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-[#001F3F]">Living (London)</h3>
              </div>
              <p className="text-2xl font-bold text-[#001F3F] mb-2">
                £{ukData.costBreakdown.livingLondon.min.toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm mb-2">{ukData.costBreakdown.livingLondon.period}</p>
              <p className="text-green-600 text-sm">
                NPR {ukData.costBreakdown.livingLondon.nprMin.toLocaleString()}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Home className="text-purple-600" size={24} />
                </div>
                <h3 className="font-bold text-[#001F3F]">Living (Outside London)</h3>
              </div>
              <p className="text-2xl font-bold text-[#001F3F] mb-2">
                £{ukData.costBreakdown.livingOutside.min.toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm mb-2">{ukData.costBreakdown.livingOutside.period}</p>
              <p className="text-green-600 text-sm">
                NPR {ukData.costBreakdown.livingOutside.nprMin.toLocaleString()} (1 GBP ≈ 170 NPR)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <FileText className="text-orange-600" size={24} />
                </div>
                <h3 className="font-bold text-[#001F3F]">Visa Fee</h3>
              </div>
              <p className="text-2xl font-bold text-[#001F3F] mb-2">
                £{ukData.costBreakdown.visa.amount}
              </p>
              <p className="text-gray-600 text-sm mb-2">One-time</p>
              <p className="text-green-600 text-sm">
                NPR {ukData.costBreakdown.visa.npr.toLocaleString()}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Award className="text-red-600" size={24} />
                </div>
                <h3 className="font-bold text-[#001F3F]">IHS (Healthcare)</h3>
              </div>
              <p className="text-2xl font-bold text-[#001F3F] mb-2">
                £{ukData.costBreakdown.ihs.amount}
              </p>
              <p className="text-gray-600 text-sm mb-2">{ukData.costBreakdown.ihs.period}</p>
              <p className="text-green-600 text-sm">
                NPR {ukData.costBreakdown.ihs.npr.toLocaleString()}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-100 p-3 rounded-xl">
                  <Plane className="text-cyan-600" size={24} />
                </div>
                <h3 className="font-bold text-[#001F3F]">Airfare</h3>
              </div>
              <p className="text-2xl font-bold text-[#001F3F] mb-2">
                £{ukData.costBreakdown.airfare.amount}
              </p>
              <p className="text-gray-600 text-sm mb-2">One-way (approx)</p>
              <p className="text-green-600 text-sm">
                NPR {ukData.costBreakdown.airfare.npr.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h3 className="font-bold text-[#001F3F] mb-4">Total Cost to Study in UK from Nepal (1 Year)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600 text-sm">Outside London:</p>
                <p className="text-2xl font-bold text-[#001F3F]">£20,000-£48,000</p>
                <p className="text-green-600">NPR 34-82 Lakhs</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">In London:</p>
                <p className="text-2xl font-bold text-[#001F3F]">£22,000-£51,000</p>
                <p className="text-green-600">NPR 37-87 Lakhs</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Cost to study in UK from Nepal varies by university and city. <Link href="/scholarships/" className="text-blue-600 hover:underline">UK scholarships for Nepali students</Link> can reduce tuition. Exchange rate: 1 GBP ≈ 170 NPR (Feb 2026).
            </p>
          </div>

          <h3 className="font-bold text-[#001F3F] mt-8 mb-4">Tuition by Level (UK 2026)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Level</th><th className="p-3 text-left">Typical range/year</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">Foundation / Pre-Master&apos;s</td><td className="p-3">£10,000–18,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Bachelor&apos;s</td><td className="p-3">£12,000–28,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Master&apos;s</td><td className="p-3">£15,000–38,000</td></tr>
                <tr><td className="p-3">PhD</td><td className="p-3">£18,000–25,000 (often funded)</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-[#001F3F] mb-4">Accommodation for Nepali Students in UK</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Weekly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">On-campus halls</td><td className="p-3">£100–250</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Shared house (outside London)</td><td className="p-3">£80–150</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Private flat (London)</td><td className="p-3">£200–300</td></tr>
                <tr><td className="p-3">Homestay</td><td className="p-3">£150–200</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">Many universities guarantee first-year accommodation for international students.</p>
        </div>
      </section>

      {/* When Can I Apply? UK Intakes */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">When Can I Apply? UK Study Intakes 2026</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> UK universities offer September (main intake) and January (secondary intake). Most courses begin in September. Apply via UCAS for undergraduate programmes; direct application for postgraduate. Apply 6–9 months before your intended start date.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-[#001F3F] mb-2">September (Main)</h4>
            <p className="text-gray-700 text-sm">Most courses; largest selection. UCAS deadline typically January for UG.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="font-bold text-[#001F3F] mb-2">January (Secondary)</h4>
            <p className="text-gray-700 text-sm">Fewer courses; common for postgraduate and business programmes.</p>
          </div>
        </div>
      </section>

      {/* UK Student Visa Requirements */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">
          UK Student Visa from Nepal – Student Route 2026 Requirements & Process
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          <strong>In brief:</strong> Once you have your CAS and financial documents ready, you apply online and book biometrics at VFS Global in Kathmandu. Most applicants receive a decision within three weeks. Visa fee £527; IHS £776 per year.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
              <FileText className="text-[#0056b3]" /> Required Documents
            </h3>
            <ul className="space-y-3">
              {ukData.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
              <Clock className="text-[#0056b3]" /> Application Process
            </h3>
            <ol className="space-y-4">
              {[
                'Apply to UK universities and receive offer letter',
                'Accept offer and pay tuition deposit (usually £2,000-£5,000)',
                'Receive CAS (Confirmation of Acceptance for Studies)',
                'Prepare financial documents (28 days in bank)',
                'Complete TB test at approved clinic',
                'Apply online via the official UK visa application portal',
                'Pay visa fee (£527) and IHS (£776/year)',
                'Book biometric appointment at VFS Global',
                'Submit documents and attend interview (if required)',
                'Receive decision (typically 3 weeks)',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Financial Requirements */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Financial Requirements (28 Days)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#001F3F] mb-2">Tuition Fees</h4>
              <p className="text-gray-700">First year tuition fees must be in your bank account OR paid to the university. If partially paid, show remaining balance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#001F3F] mb-2">Maintenance Funds (2026)</h4>
              <p className="text-gray-700">
                <strong>London:</strong> £13,761 (9 months × £1,529)<br />
                <strong>Outside London:</strong> £10,539 (9 months × £1,171)
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Funds must be held for consecutive 28 days before application. Bank statements must be in English or officially translated.
          </p>
        </div>
      </section>

      {/* Work Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">
            Work Rights for Nepali Students in UK
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#0056b3]" size={28} />
              </div>
              <h3 className="font-bold text-[#001F3F] mb-2">Term Time</h3>
              <p className="text-3xl font-bold text-[#0056b3]">20</p>
              <p className="text-gray-600">hours/week</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-[#001F3F] mb-2">Vacation</h3>
              <p className="text-3xl font-bold text-green-600">Full</p>
              <p className="text-gray-600">time allowed</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-purple-600" size={28} />
              </div>
              <h3 className="font-bold text-[#001F3F] mb-2">Min Wage (21+)</h3>
              <p className="text-3xl font-bold text-purple-600">£11.44</p>
              <p className="text-gray-600">per hour</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={28} />
              </div>
              <h3 className="font-bold text-[#001F3F] mb-2">Typical Jobs</h3>
              <p className="text-gray-600 text-sm">Retail, Hospitality, Customer Service, Campus roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Graduate Route */}
      <section id="graduate-route" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">
          UK Post-Study Work Rights (Graduate Route 2026)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#001F3F] to-[#0056b3] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Graduate Route Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1" size={20} />
                <div>
                  <strong>2 Years Work Rights</strong>
                  <p className="text-blue-200 text-sm">Stay and work in UK for 2 years after graduation (3 years for PhD)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1" size={20} />
                <div>
                  <strong>No Sponsorship Required</strong>
                  <p className="text-blue-200 text-sm">Work at any skill level, no job offer needed</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1" size={20} />
                <div>
                  <strong>Switch to Work Visa</strong>
                  <p className="text-blue-200 text-sm">Can switch to <Link href="/contact/" className="text-blue-200 underline hover:text-white">Skilled Worker visa</Link> during or after Graduate Route</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 mt-1" size={20} />
                <div>
                  <strong>Bring Family</strong>
                  <p className="text-blue-200 text-sm">Dependents can join you during Graduate Route</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#001F3F] mb-6">Eligibility Requirements</h3>
            <ul className="space-y-3">
              {[
                'Successfully complete degree at UK university',
                'Valid Student Route visa at time of application',
                'Apply before student visa expires',
                'Degree must be at RQF Level 6 or above (Bachelor\'s, Master\'s, PhD)',
                'Application fee: £822 + IHS (if applicable)',
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0056b3] mt-1" size={18} />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">
            UK Scholarships for Nepali Students 2026
          </h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore <Link href="/scholarships/" className="text-blue-600 hover:underline font-medium">scholarships for study abroad</Link> including UK-specific awards. Below are key options for Nepali applicants.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukData.scholarships.map((scholarship, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-yellow-600" size={24} />
                </div>
                <h3 className="font-bold text-[#001F3F] mb-2">{scholarship.name}</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">{scholarship.amount}</p>
                <p className="text-gray-600 text-sm">{scholarship.eligibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Comparison */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">
          Best UK Cities for Nepali Students
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ukData.cities.map((city, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gradient-to-r from-[#001F3F] to-[#0056b3] p-4">
                <h3 className="text-xl font-bold text-white">{city.name}</h3>
                <p className="text-blue-200 text-sm">{city.highlight}</p>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-3">{city.universities}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Users size={14} />
                  <span>{city.students}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <DollarSign size={14} />
                  <span>Living: {city.livingCost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Country Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">
            UK vs Australia vs Canada – 2026 Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left rounded-tl-2xl">Country</th>
                  <th className="p-4 text-left">Tuition/Year</th>
                  <th className="p-4 text-left">Living/Year</th>
                  <th className="p-4 text-left">Work Rights</th>
                  <th className="p-4 text-left">PSW</th>
                  <th className="p-4 text-left rounded-tr-2xl">Visa Time</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-[#001F3F]">
                      {row.countrySlug ? (
                        <Link href={row.countrySlug} className="text-blue-600 hover:underline">{row.country}</Link>
                      ) : (
                        row.country
                      )}
                    </td>
                    <td className="p-4">{row.tuition}</td>
                    <td className="p-4">{row.living}</td>
                    <td className="p-4">{row.work}</td>
                    <td className="p-4">{row.psw}</td>
                    <td className="p-4">{row.visaTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in UK FAQs</h2>
          <p className="text-gray-600 mb-8">Find answers to common questions about studying in UK from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={ukData.faqs} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2 text-center">What Our Students Say</h2>
          <p className="text-center text-gray-600 mb-8">
            Verified Google Reviews from successful students
            <a 
              href="https://www.google.com/maps/place/San+Marina+Education+Consultancy/@27.6865225,85.3466265,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1957617c0cd7:0x4a89b90edb67f7ec!8m2!3d27.6865225!4d85.3492014!16s%2Fg%2F11w443pr97?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline ml-2"
            >
              <CheckCircle2 size={14} /> View on Google Maps
            </a>
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {ukData.testimonials.map((testimonial, i) => (
              <blockquote key={i} className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-300" />
                  {testimonial.verified && (
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      <CheckCircle2 size={12} /> Verified Google Review
                    </span>
                  )}
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <footer className="text-[#001F3F]">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.course}</p>
                  <p className="text-blue-600 text-sm">{testimonial.university}</p>
                  {testimonial.date && (
                    <p className="text-gray-400 text-xs mt-2">{testimonial.date}</p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Why Trust San Marina for Your UK Study Journey?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We handle the full journey—CAS preparation, document checks, VFS submissions, and Graduate Route planning. Our direct partnerships with 100+ UK universities, combined with <Link href="/about/" className="text-blue-600 hover:underline">QEAC and PIER certification</Link>, mean your application is in experienced hands.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 'High', label: 'Visa Success for Genuine Applicants', icon: CheckCircle2 },
              { value: ukData.authority.experience, label: 'Years Experience', icon: Clock },
              { value: ukData.authority.studentsPlaced, label: 'Students Placed', icon: Users },
              { value: '100+', label: 'UK University Partners', icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <stat.icon className="w-8 h-8 text-[#0056b3] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#001F3F]">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {ukData.authority.certifications.map((cert, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-blue-100 text-[#0056b3] px-4 py-2 rounded-full text-sm font-semibold">
                <Award size={16} /> {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0056b3] via-[#004494] to-[#003366] mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in UK from Nepal?</h2>
          <p className="text-blue-200 mb-6 text-lg">
            Start your UK student visa journey with Nepal&apos;s trusted education consultants. 
            Our team has guided 1,500+ Nepali students through the UK visa process from Nepal—from university selection to visa approval.
          </p>
          <p className="text-blue-100 mb-8">
            From CAS preparation to document checks and Graduate Route advice—we&apos;ve supported over 1,500 Nepali students on their UK journey. Visit Tinkune, Baneshwor, Ghorahi, or Itahari, or reach us on WhatsApp for immediate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Apply Now
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="underline font-medium">USA</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="underline font-medium">Germany</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
          <p className="mt-4 text-blue-400 text-xs">QEAC Certified • PIER Qualified • Student Route Specialists | Last Updated: February 2026</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="text-blue-600 font-semibold hover:underline">USA</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Free consultation</Link>
          </p>
          <Link href="/consultation/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
