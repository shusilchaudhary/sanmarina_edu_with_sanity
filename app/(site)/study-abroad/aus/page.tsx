import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Phone, 
  CheckCircle2, 
  Clock, 
  GraduationCap,
  Briefcase,
  DollarSign,
  FileText,
  Award,
  TrendingUp,
  Building2,
  Users,
  Star,
  ChevronRight,
  MapPin,
  Quote
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

// Australia-specific data – Feb 2026 facts (DHA 29710, visa 2000, wage 24.95, 1 AUD = 103 NPR)
const australiaData = {
  name: 'Australia',
  slug: 'aus',
  heroImage: '/assets/adelaide.jpg',
  metaTitle: 'Study in Australia from Nepal 2026 | Cost NPR 56-82 Lakhs, Visa 500, High Success',
  metaDescription: 'Study in Australia from Nepal 2026: NPR 56-82L first year. DHA living AUD $29,710, visa $2,000. High success for genuine applicants. QEAC certified.',
  keywords: [
    'study in australia from nepal 2026',
    'australia student visa from nepal',
    'cost to study in australia from nepal',
    'australia post study work visa 485',
    'ielts requirement australia nepal',
    'australia pr pathway nepali students',
    'australian universities for nepali students',
    'student visa 500 nepal',
    'best consultancy for australia in nepal'
  ],
  publishedDate: '2026-01-15',
  modifiedDate: '2026-02-17',
  author: {
    name: 'San Marina Education Consultancy',
    url: 'https://www.sanmarina.edu.np',
    jobTitle: 'QEAC Certified Education Consultant'
  },
  cities: [
    { name: 'Melbourne', universities: 'University of Melbourne (QS #14), Monash University (QS #42)', highlight: 'Most Liveable City', students: '20,000+ Nepali students' },
    { name: 'Sydney', universities: 'University of Sydney (QS #19), UNSW (QS #20)', highlight: 'Business Hub', students: '15,000+ Nepali students' },
    { name: 'Brisbane', universities: 'University of Queensland (QS #43), QUT', highlight: 'Affordable Living', students: '8,000+ Nepali students' },
    { name: 'Perth', universities: 'UWA (QS #72), Curtin University', highlight: 'Mining & Engineering', students: '5,000+ Nepali students' },
    { name: 'Adelaide', universities: 'University of Adelaide (QS #89)', highlight: 'Regional Benefits +1 Year PSW', students: '3,000+ Nepali students' },
  ],
  offices: [
    { type: 'Head Office', city: 'Tinkune', address: 'Tinkune, Kathmandu', region: 'Bagmati Province', phone: '+977-015927731' },
    { type: 'Branch', city: 'Baneshwor', address: 'Baneshwor, Kathmandu', region: 'Bagmati Province', phone: '+977-015927731' },
    { type: 'Branch', city: 'Ghorahi', address: 'Ghorahi, Dang', region: 'Lumbini Province', phone: '+977-015927731' },
    { type: 'Branch', city: 'Itahari', address: 'Itahari, Sunsari', region: 'Koshi Province', phone: '+977-015927731' },
  ],
  costBreakdown: {
    tuition: { min: 20000, max: 45000, period: 'per year', nprMin: 2060000, nprMax: 4635000 },
    living: { min: 29710, max: 29710, period: 'per year', nprMin: 3060130, nprMax: 3060130 },
    visaFee: { aud: 2000, npr: 206000 },
    oshc: { aud: 600, npr: 61800, period: 'per year' },
    airfare: { aud: 2750, npr: 283250, note: 'round trip (AUD 2,500-3,000)' },
    totalFirstYear: { aud: '55,060 - 80,310', npr: '56,71,180 - 82,71,930' },
  },
  requirements: {
    academic: '10+2 with minimum 60% aggregate for bachelor\'s; Bachelor\'s degree with 50%+ for master\'s',
    english: 'IELTS 6.0-6.5 overall (no band less than 5.5) or PTE Academic 50-58 or TOEFL iBT 60-79',
    financial: 'Evidence of funds: 1 year tuition + AUD 29,710 living costs (DHA) + AUD 2,500-3,000 travel',
    gs: 'Genuine Student (GS) statement – replaces former GTE from 2024',
    medical: 'Health examination at panel clinic + Overseas Student Health Cover (OSHC) for entire stay',
  },
  visaSteps: [
    { step: 1, title: 'Receive Offer Letter', desc: 'Apply to Australian university and receive unconditional offer letter. Processing: 2-4 weeks.', timeframe: 'Week 1-4' },
    { step: 2, title: 'Accept Offer & Pay Fees', desc: 'Pay tuition deposit (usually AUD 10,000-20,000) and receive Confirmation of Enrolment (CoE).', timeframe: 'Week 5-6' },
    { step: 3, title: 'Prepare Documents', desc: 'Academic transcripts, English test results, financial documents, Genuine Student (GS) statement, passport.', timeframe: 'Week 7-8' },
    { step: 4, title: 'Submit Visa Application', desc: 'Apply online via ImmiAccount. Visa fee AUD $2,000 (Feb 2026). Upload all documents.', timeframe: 'Week 9' },
    { step: 5, title: 'Biometrics & Health Check', desc: 'Complete biometrics at VFS Kathmandu and health examination at approved panel clinic.', timeframe: 'Week 10-11' },
    { step: 6, title: 'Visa Decision', desc: 'Processing time 4-12 weeks. Nepal is AL3 (Evidence Level 3) since 8 Jan 2026 – complete documents essential.', timeframe: 'Week 12-20' },
  ],
  workRights: {
    duringStudy: '48 hours per fortnight during semester, unlimited hours during scheduled breaks',
    minimumWage: 'AUD $24.95 per hour (National Minimum Wage, effective July 2025)',
    commonJobs: 'Retail ($26-32/hr), Hospitality ($26-36/hr), Tutoring ($32-52/hr), Aged Care ($30-37/hr)',
    expectedEarnings: 'AUD $1,200-1,500 per fortnight',
    annualEarnings: 'AUD $26,000-31,000 per year'
  },
  postStudyWork: {
    bachelor: '2 years (Temporary Graduate Visa Subclass 485)',
    mastersCoursework: '3 years (Temporary Graduate Visa Subclass 485)',
    mastersResearch: '3 years (Temporary Graduate Visa Subclass 485)',
    phd: '4 years (Temporary Graduate Visa Subclass 485)',
    regionalBonus: 'Additional 1-2 years for study in regional areas (Adelaide, Perth, etc.)',
    workRights: 'Full unrestricted work rights during 485 visa period'
  },
  prPathways: [
    { name: 'Skilled Independent (Subclass 189)', desc: 'Permanent residency through points-based system without state sponsorship', requirements: '65+ points, occupation on Medium and Long-term Strategic Skills List (MLTSSL), age under 45', timeline: '8-12 months processing' },
    { name: 'Skilled Nominated (Subclass 190)', desc: 'State-nominated permanent residency with 5 additional points', requirements: 'State nomination, occupation on relevant skilled list, commitment to live in nominating state', timeline: '6-10 months processing' },
    { name: 'Skilled Work Regional (Subclass 491)', desc: 'Provisional visa leading to permanent residency after 3 years', requirements: 'Regional work, state or family sponsorship, live in designated regional area', timeline: '3 years to PR eligibility' },
    { name: 'Employer Sponsored (Subclass 186)', desc: 'Direct permanent residency through employer sponsorship', requirements: '3 years work experience, employer sponsorship, occupation on relevant list', timeline: '6-9 months processing' },
  ],
  scholarships: [
    { name: 'Australia Awards Scholarships', coverage: 'Full tuition + living allowance + airfare + OSHC', eligibility: 'Nepali citizens with bachelor\'s degree, leadership experience, 2+ years work experience', deadline: 'April 30, 2026' },
    { name: 'Destination Australia Program', coverage: 'Up to AUD $15,000 per year for duration of study', eligibility: 'Study in regional Australia (outside Sydney, Melbourne, Brisbane)', deadline: 'Varies by institution' },
    { name: 'University-specific Merit Scholarships', coverage: '10-50% tuition fee waiver', eligibility: 'Academic excellence (75%+ in previous studies), strong English scores', deadline: 'Rolling admissions' },
    { name: 'Research Training Program (RTP)', coverage: 'Full tuition + living stipend AUD $32,000/year', eligibility: 'Research-based master\'s or PhD, supervisor acceptance, research proposal', deadline: 'October 31, 2026' },
  ],
  comparison: {
    tuition: { australia: 'AUD $20,000-45,000', uk: '£10,000-38,000', usa: '$15,000-60,000', canada: 'CAD $15,000-35,000' },
    duration: { australia: '3-4 years', uk: '3 years', usa: '4 years', canada: '4 years' },
    postStudyWork: { australia: '2-4 years', uk: '2 years', usa: '1-3 years (OPT)', canada: '1-3 years (PGWP)' },
    prPathway: { australia: 'Strong - Points based', uk: 'Limited - Graduate visa only', usa: 'Difficult - H1B lottery', canada: 'Strong - Express Entry' },
    partTimeWork: { australia: '48 hrs/fortnight', uk: '20 hrs/week', usa: '20 hrs/week (on-campus only)', canada: '20 hrs/week' },
    minimumWage: { australia: 'AUD $24.95/hr', uk: '£11.44/hr', usa: '$7.25-15/hr (varies)', canada: 'CAD $16.65/hr' },
  },
  faqs: [
    {
      question: 'How much GPA is required to study in Australia from Nepal?',
      answer: 'Bachelor\'s: 60% (3.0 GPA) in 10+2; Go8 universities often require 70-75%. Master\'s: 50-60% in bachelor\'s. Lower GPAs can use foundation or diploma pathways.'
    },
    {
      question: 'Total Cost to Study in Australia from Nepal in 2026',
      answer: 'First year: AUD $55,060–80,310 (NPR 56–82 lakhs). Includes tuition, DHA living $29,710, visa $2,000, OSHC, and airfare. Part-time work can earn $26,000–31,000/year.'
    },
    {
      question: 'What is the IELTS requirement for Australia student visa from Nepal?',
      answer: 'Most courses: IELTS 6.0–6.5 overall, no band below 5.5. Nursing/teaching/law: 7.0. PTE (50–58) and TOEFL (60–79) also accepted. Lower scores can do ELICOS first.'
    },
    {
      question: 'Can Nepali students get PR after studying in Australia?',
      answer: 'Yes. Apply for 485 visa (2–4 years), then PR via 189, 190, or 491. Most Nepali graduates obtain PR in 3–5 years with skilled work, English, and points.'
    },
    {
      question: 'How much can Nepali students earn working part-time in Australia?',
      answer: 'AUD $26,000–31,000/year within 48 hrs/fortnight. Min wage $24.95/hr. Unlimited hours during breaks. Earnings help offset DHA living cost ($29,710/year).'
    },
    {
      question: 'What is the Australia post-study work visa 485 and how long is it valid?',
      answer: '485 allows full-time work after graduation. Bachelor: 2 yrs; Master\'s: 3 yrs; PhD: 4 yrs. Regional study adds 1–2 years. No work restrictions.'
    },
    {
      question: 'Is Australia good for Nepali students in 2026 compared to other countries?',
      answer: 'Yes. Post-study work 2–4 years, clear PR paths, $24.95/hr min wage, 7 top-100 universities. AL3 since Jan 2026—complete documents and strong GS statement support success.'
    },
    {
      question: 'How long does it take to get an Australian student visa from Nepal in 2026?',
      answer: '4–12 weeks typically. Nepal is AL3—complete evidence is essential. Apply 3 months before course start with strong GS statement and financial proof.'
    },
    {
      question: 'Which Australian universities are best for Nepali students?',
      answer: 'Go8: Melbourne, Sydney, UNSW, ANU, UQ, UWA, Adelaide. Also Monash, UTS, RMIT, Deakin. Consider course, fees, regional PSW bonus, and scholarships.'
    },
    {
      question: 'When are the intakes to study in Australia from Nepal?',
      answer: 'Semester 1 (February–June) and Semester 2 (July–November). Apply 3–4 months before. Some institutions offer trimester intakes. Check your CRICOS provider for dates.'
    },
    {
      question: 'What is AL3 and how does it affect Nepali students?',
      answer: 'AL3 (Assessment Level 3 / Evidence Level 3) means Nepal is a higher-evidence country since 8 January 2026. DHA expects comprehensive financial, academic, and Genuine Student documentation. Complete applications and strong GS statements continue to succeed.'
    },
    {
      question: 'Can I work full-time during semester break in Australia?',
      answer: 'Yes. On Subclass 500, you can work unlimited hours during scheduled breaks (e.g. summer). During semester, the limit is 48 hours per fortnight.'
    },
  ],
  testimonials: [
    {
      name: 'Anisha Gurung',
      location: 'Australia',
      course: 'University of Melbourne with Scholarship',
      university: 'University of Melbourne, Australia',
      quote: 'I was confused about choosing between UK and Australia. San Marina counsellors helped me understand the pros and cons of each. Finally got admission in University of Melbourne with scholarship! Thank you San Marina team!',
      verified: true,
      rating: 5,
      date: 'December 2025'
    },
    {
      name: 'Suman Thapa',
      location: 'Australia',
      course: 'Australia Student Visa',
      university: 'Australia',
      quote: 'Best consultancy in Nepal! I got my Australia student visa approved within 3 weeks. The team, especially Sandip sir, guided me through every step. Highly professional and transparent. No hidden charges at all.',
      verified: true,
      rating: 5,
      date: 'January 2026'
    }
  ],
  authority: {
    successRate: 'High',
    experience: '2+',
    studentsPlaced: '1,500+',
    branches: 2,
    partnerUniversities: 50,
    certifications: ['QEAC Certified', 'PIER Qualified']
  },
};

export async function generateStaticParams() {
  return [
    { country: 'aus' },
    { country: 'uk' },
    { country: 'usa' },
    { country: 'can' },
    { country: 'eur' },
    { country: 'jp' },
    { country: 'nz' },
    { country: 'kr' },
  ];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: australiaData.metaTitle,
    description: australiaData.metaDescription,
    keywords: australiaData.keywords.join(', '),
    alternates: {
      canonical: 'https://www.sanmarina.edu.np/study-abroad/aus/',
    },
    openGraph: {
      title: 'Study in Australia from Nepal 2026 | Cost, Visa & PR Guide',
      description: australiaData.metaDescription,
      url: 'https://www.sanmarina.edu.np/study-abroad/aus/',
      siteName: 'San Marina Education Consultancy',
      locale: 'en_US',
      type: 'article',
      publishedTime: australiaData.publishedDate,
      modifiedTime: australiaData.modifiedDate,
      authors: [australiaData.author.url],
      images: [
        {
          url: 'https://www.sanmarina.edu.np/assets/adelaide.jpg',
          width: 1200,
          height: 630,
          alt: 'Study in Australia from Nepal 2026 - Complete Guide by San Marina',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Study in Australia from Nepal 2026 | Cost, Visa & PR Guide',
      description: australiaData.metaDescription,
      images: ['https://www.sanmarina.edu.np/assets/adelaide.jpg'],
      creator: '@sanmarinaedu',
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    authors: [{ name: australiaData.author.name, url: australiaData.author.url }],
    category: 'Education',
  };
}

export default function AustraliaPage() {
  const data = australiaData;

  // JSON-LD Structured Data - Enhanced for AI Search 2026
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Australia from Nepal 2026 | Complete Cost, Visa & PR Guide',
        description: data.metaDescription,
        image: 'https://www.sanmarina.edu.np/assets/adelaide.jpg',
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate,
        author: {
          '@type': 'Organization',
          name: data.author.name,
          url: data.author.url,
          jobTitle: data.author.jobTitle,
        },
        publisher: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.sanmarina.edu.np/study-abroad/aus/',
        },
        about: {
          '@type': 'Thing',
          name: 'Study in Australia from Nepal',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq) => ({
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
        url: 'https://www.sanmarina.edu.np',
        logo: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
        description: 'QEAC certified education consultancy helping Nepali students study in Australia. High visa success rate for genuine applicants, 2+ years experience, 1,500+ students placed.',
        knowsAbout: ['Study in Australia from Nepal', 'Subclass 500', '485 visa', 'Genuine Student', 'AL3', 'Australia student visa from nepal'],
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
          url: 'https://wa.me/977015927731',
          contactType: 'enrollment',
          areaServed: 'NP',
          availableLanguage: ['English', 'Nepali', 'Hindi'],
        },
        hasCredential: ['QEAC Certified', 'PIER Qualified'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '100',
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [
          'https://www.facebook.com/profile.php?id=61578047634707',
          'https://www.instagram.com/sanmarinaedu',
          'https://www.linkedin.com/company/sanmarinaedu',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Study in Australia from Nepal', item: 'https://www.sanmarina.edu.np/study-abroad/aus/' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Australia Student Visa from Nepal',
        description: 'Step-by-step guide to applying for Australian student visa (Subclass 500) from Nepal in 2026',
        totalTime: 'PT20W',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'AUD',
          value: '2000',
        },
        supply: [
          { '@type': 'HowToSupply', name: 'Valid Passport' },
          { '@type': 'HowToSupply', name: 'Academic Transcripts' },
          { '@type': 'HowToSupply', name: 'IELTS/PTE Test Results' },
          { '@type': 'HowToSupply', name: 'Financial Documents' },
        ],
        tool: [
          { '@type': 'HowToTool', name: 'ImmiAccount' },
          { '@type': 'HowToTool', name: 'VFS Global' },
        ],
        step: data.visaSteps.map((s) => ({
          '@type': 'HowToStep',
          position: s.step,
          name: s.title,
          text: s.desc,
          url: `https://www.sanmarina.edu.np/study-abroad/aus/#step-${s.step}`,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/Article">
      <p className="sr-only" aria-live="polite">Last updated: 17 February 2026</p>
      <meta itemProp="datePublished" content={data.publishedDate} />
      <meta itemProp="dateModified" content={data.modifiedDate} />
      <meta itemProp="author" content={data.author.name} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <Image
          src={data.heroImage}
          alt="Study in Australia from Nepal 2026 – Australian university campus, Nepali students"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb">
              <Link href="/study-abroad/" className="inline-flex items-center gap-2 text-white/80 mb-6 hover:text-white transition-colors">
                <ArrowLeft size={18} /><span>Back to Study Abroad Destinations</span>
              </Link>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" itemProp="headline">
              Study in Australia from Nepal – Complete 2026 Guide
            </h1>
            <p className="text-xl text-white/90 mb-4 max-w-2xl">
              Seven universities in the global top 100, up to four years of post-study work, and clear pathways to permanent residency—Australia remains a top choice for Nepali families.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Whether you&apos;re in Tinkune, Baneshwor, Ghorahi, or Itahari—our Subclass 500 specialists prepare AL3-ready applications and Genuine Student statements. Your first consultation is free.
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
        </div>
      </section>

      {/* Important 2026 Update – AL3 / Source Attribution (GEO) */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-amber-500 text-white shrink-0">Important 2026 Update</span>
            <div>
              <p className="font-bold text-amber-900">Nepal is now Assessment Level 3 (AL3 / Evidence Level 3) since 8 January 2026</p>
              <p className="text-amber-800 text-sm mt-1">DHA now expects more comprehensive evidence—financial, academic, and a well-crafted Genuine Student statement. Applicants with complete documentation and a convincing GS narrative continue to succeed. Working with a QEAC-certified agent helps ensure your application meets AL3 standards.</p>
              <p className="text-amber-700 text-xs mt-3"><strong>Source: Department of Home Affairs (DHA), Australia.</strong> Living AUD $29,710 (2024), visa fee subject to change. Verify at <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noreferrer" className="underline font-medium">immi.homeaffairs.gov.au</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts 2026 – GEO */}
      <section className="py-6 bg-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Australia from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">AUD $20,000–45,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living (DHA)</td><td className="p-3">AUD $29,710/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa fee</td><td className="p-3">AUD $2,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">PSW (485)</td><td className="p-3">Bachelor 2 yrs; Master&apos;s 3 yrs; PhD 4 yrs</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Part-time work</td><td className="p-3">48 hrs/fortnight</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Min wage</td><td className="p-3">AUD $24.95/hr</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Nepal assessment</td><td className="p-3">AL3 (Evidence Level 3) since 8 Jan 2026</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 mb-4">Last updated: 17 February 2026</p>
          <p className="text-lg text-gray-700 leading-relaxed" itemProp="description">
            <strong>Study in Australia from Nepal in 2026</strong> continues to attract ambitious students—and for good reason. With <Link href="/study-abroad/aus/#cities" className="text-blue-600 hover:underline">seven universities in the global top 100</Link> and over 50,000 Nepali students already there, Australia offers quality education, strong post-study work rights, and realistic pathways to permanent residency. This guide walks you through <Link href="/study-abroad/aus/#cost" className="text-blue-600 hover:underline">costs in AUD and NPR</Link>, <Link href="/study-abroad/aus/#visa-process" className="text-blue-600 hover:underline">Subclass 500 requirements</Link>, <Link href="/study-abroad/aus/#requirements" className="text-blue-600 hover:underline">IELTS and PTE thresholds</Link>, work rights, the <Link href="/study-abroad/aus/#post-study-work" className="text-blue-600 hover:underline">485 visa</Link>, and <Link href="/study-abroad/aus/#pr-pathways" className="text-blue-600 hover:underline">PR pathways</Link>.
          </p>
        </div>
      </section>

      {/* Why Study in Australia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Why Study in Australia from Nepal?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            <strong>In brief:</strong> Australia delivers what many families want: respected degrees, generous post-study work (2–4 years on the 485), and transparent routes to permanent residency. The minimum wage ($24.95/hr) and 48-hour fortnight during study make part-time work a real buffer. Over 50,000 Nepali students have already chosen Australia—and the community, from Sydney to Adelaide, is thriving.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'World-Class Education', desc: '7 universities in top 100 globally. Australian degrees recognized worldwide by employers and governments.' },
              { icon: Briefcase, title: 'Post-Study Work 2-4 Years', desc: 'Temporary Graduate Visa 485 allows full work rights after graduation. Longer than UK (2 years) and USA (1-3 years).' },
              { icon: TrendingUp, title: 'Clear PR Pathways', desc: 'Points-based skilled migration system. Many Nepali graduates obtain PR within 3-5 years through 189, 190, or 491 visas.' },
              { icon: DollarSign, title: 'High Earning Potential', desc: 'National minimum wage AUD $24.95/hour. Students earn AUD $26,000-31,000/year part-time to offset living costs.' },
              { icon: Users, title: 'Strong Nepali Community', desc: '50,000+ Nepali students in Australia. Active student associations in Sydney, Melbourne, Brisbane for support.' },
              { icon: Star, title: 'Safe & Multicultural', desc: 'Ranked among world\'s safest countries. Welcoming environment with strong legal protections for international students.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50" id="cost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Total Cost to Study in Australia from Nepal in 2026</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            <strong>In brief:</strong> Budget AUD $55,060–80,310 for your first year (NPR 56.7–82.7 lakhs). The DHA living requirement is AUD $29,710; add visa fee ($2,000) and airfare ($2,500–3,000). Part-time work at 48 hours per fortnight can bring in AUD $26,000–31,000 annually—a meaningful offset. Breakdown below (1 AUD ≈ 103 NPR, Feb 2026).
          </p>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 overflow-x-auto">
            <table className="w-full min-w-[320px]">
              <thead className="bg-[#001F3F] text-white">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold">Expense</th>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold">AUD</th>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold">NPR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 sm:px-6 py-4 font-medium">Tuition (per year)</td>
                  <td className="px-4 sm:px-6 py-4 text-blue-600 font-bold">$20,000 - $45,000</td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600">₹20.6L - ₹46.4L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 font-medium">Living (DHA requirement)</td>
                  <td className="px-4 sm:px-6 py-4 text-blue-600 font-bold">$29,710</td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600">₹30.6L</td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-4 font-medium">Student Visa Fee</td>
                  <td className="px-4 sm:px-6 py-4 text-blue-600 font-bold">$2,000</td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600">₹2.06L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 font-medium">OSHC (per year)</td>
                  <td className="px-4 sm:px-6 py-4 text-blue-600 font-bold">$600</td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600">₹61,800</td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-4 font-medium">Airfare (return)</td>
                  <td className="px-4 sm:px-6 py-4 text-blue-600 font-bold">$2,500 - $3,000</td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600">₹2.58L - ₹3.09L</td>
                </tr>
                <tr className="bg-[#001F3F] text-white">
                  <td className="px-4 sm:px-6 py-4 font-bold">Total First Year</td>
                  <td className="px-4 sm:px-6 py-4 font-bold">$55,060 - $80,310</td>
                  <td className="px-4 sm:px-6 py-4 font-bold">₹56.7L - ₹82.7L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <p className="text-green-800 text-sm"><strong>Cost Offset:</strong> Part-time work (48 hrs/fortnight) can earn AUD $26,000-31,000/year (min wage $24.95/hr).</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-blue-800 text-sm"><strong>Financial Requirement:</strong> 1 year tuition + AUD $29,710 living + AUD $2,500-3,000 travel.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#001F3F] mb-4">Tuition by Program Level (2026)</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Program</th><th className="p-3 text-left">Annual Tuition (AUD)</th></tr></thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="p-3">Diploma / VET</td><td className="p-3">$4,000–$22,000</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Undergraduate</td><td className="p-3">$15,000–$35,000</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Postgraduate (Master&apos;s)</td><td className="p-3">$20,000–$42,000</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">PhD</td><td className="p-3">$20,000–$42,000</td></tr>
                  <tr><td className="p-3">MBA</td><td className="p-3">$30,000–$50,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#001F3F] mb-4">Accommodation Costs for Nepali Students</h3>
            <p className="text-gray-700 mb-4 text-sm">DHA requires proof of AUD $29,710+ for living; accommodation is typically the largest share. Source: immi.homeaffairs.gov.au</p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Typical Cost</th></tr></thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="p-3">On-campus / student residence</td><td className="p-3">AUD $250–$450/week</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Shared apartment</td><td className="p-3">AUD $140–$300/week</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Homestay</td><td className="p-3">AUD $235–$325/week</td></tr>
                  <tr><td className="p-3">Private rental</td><td className="p-3">AUD $300–$500/week</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Application Intakes */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">When Can I Apply? Australia Study Intakes 2026</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Australian universities offer two main intakes. Semester 1 (February–June) and Semester 2 (July–November). Apply 3–4 months before your chosen intake.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Semester 1:</strong> Starts late February/early March; main intake for most courses.</li>
          <li><strong>Semester 2:</strong> Starts late July/early August; good option if you miss Semester 1.</li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">Some institutions offer trimester intakes. Check your CRICOS provider for exact dates.</p>
      </section>

      {/* GPA Requirements */}
      <section className="py-16 bg-white" id="gpa-requirements">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F]">How Much GPA Is Required to Study in Australia from Nepal?</h2>
                  <p className="text-gray-600 mt-2 text-base font-normal">For Nepali students in 2026, most universities look for 60% (roughly 3.0 GPA) in 10+2 for bachelor&apos;s entry and 50–60% in a bachelor&apos;s for master&apos;s. Go8 and competitive programmes often ask for 70–75%. Lower scores can be bridged through foundation or pathway courses.</p>
                </div>
                <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-open:border-blue-600 group-open:text-blue-600 transition-colors ml-4">
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-6 prose prose-lg max-w-none text-gray-700">
                <p className="mb-4 font-medium">
                  For study in Australia from Nepal in 2026: bachelor&apos;s needs 60% (3.0 GPA) in 10+2; master&apos;s needs 50–60% in bachelor&apos;s. Group of Eight: 70–75% for competitive programs.
                </p>
                <p className="mb-3"><strong>Bachelor&apos;s:</strong></p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>60% aggregate (3.0 GPA) in 10+2 from NEB</li>
                  <li>Go8 competitive courses (engineering, medicine, business): 70–75%</li>
                </ul>
                <p className="mb-3"><strong>Master&apos;s:</strong></p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>50–60% (2.5–3.0 GPA) in bachelor&apos;s from recognized Nepali university</li>
                  <li>Research programs: 65%+ with work experience or publications</li>
                </ul>
                <p className="mb-3"><strong>Pathway options (lower GPA):</strong></p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Foundation courses (8–12 months)</li>
                  <li>Diploma-to-degree transitions</li>
                  <li>ELICOS + academic preparation</li>
                </ul>
                <p className="text-sm text-gray-600">
                  <strong>Related:</strong> <Link href="/study-abroad/aus/#cost" className="text-blue-600 hover:underline">Best courses in Australia</Link> | <Link href="/study-abroad/aus/#requirements" className="text-blue-600 hover:underline">Student visa requirements</Link>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Study in Australia for International Students – 2026 Overview */}
      <section className="py-16 bg-gray-50" id="international-students-2026-overview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in Australia for International Students – 2026 Overview</h2>
          <p className="text-lg text-gray-700 mb-8">
            <strong>In brief:</strong> Study in Australia for international students means enrolling at a CRICOS-registered institution, securing Subclass 500, meeting the DHA financial requirement (AUD $29,710 living), and working 48 hours per fortnight during study. After graduation, the 485 visa grants 2–4 years of full work rights. Permanent residency paths (189, 190, 491) operate on a points system—65+ is the baseline.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3 mt-8">Student Visa (Subclass 500) Requirements</h3>
          <p className="text-gray-700 mb-2"><strong>Summary:</strong> CoE, GS statement, OSHC, visa fee AUD 2,000. Processing 4–12 weeks from Nepal. AL3 since 8 Jan 2026—complete docs and strong GS support success.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Valid CoE from registered provider</li>
            <li>Genuine Student (GS) statement</li>
            <li>OSHC for full stay</li>
          </ul>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3">English Language Requirements (IELTS / PTE)</h3>
          <p className="text-gray-700 mb-2"><strong>Summary:</strong> IELTS 6.0–6.5 (no band &lt;5.5) or PTE 50–58. Nursing/teaching/law: IELTS 7.0. Valid within 2 years. ELICOS for lower scores.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Alternatives: TOEFL iBT 60–79, Cambridge C1 Advanced</li>
          </ul>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3">Financial Requirements (DHA Living Cost)</h3>
          <p className="text-gray-700 mb-2"><strong>Summary:</strong> 1 year tuition + AUD $29,710 living (2026) + AUD $2,500–3,000 travel. Bank statements, loans, or sponsor. Hold 3–6 months before applying.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Single student: AUD $29,710 living per year</li>
            <li>Funds genuinely available</li>
          </ul>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3">Work Rights During Study</h3>
          <p className="text-gray-700 mb-6">
            <strong>Summary:</strong> 48 hours per fortnight during semester; unlimited during breaks. Min wage AUD $24.95/hr (July 2025). No separate work permit—rights on Subclass 500.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3">Post-Study Work (Temporary Graduate Visa 485)</h3>
          <p className="text-gray-700 mb-6">
            <strong>Summary:</strong> Bachelor: 2 yrs; Master’s: 3 yrs; PhD: 4 yrs. Regional study adds 1–2 years. Apply within 6 months of course completion. Full work rights; no employer or occupation restrictions.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3">Benefits of Studying in Regional Australia for International Students</h3>
          <p className="text-gray-700 mb-2"><strong>Summary:</strong> +1–2 years on 485, up to 15 extra points for 491, 15–25% lower living costs, Destination Australia Scholarship up to AUD $15,000/yr.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>+1–2 years</strong> post-study work on 485</li>
            <li><strong>Extra migration points</strong> for 491</li>
            <li><strong>Lower cost</strong> than Sydney/Melbourne</li>
            <li>Smaller class sizes; regional occupation advantages</li>
          </ul>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3">Permanent Residency Pathways</h3>
          <p className="text-gray-700 mb-2"><strong>Summary:</strong> PR via 189, 190, 491, or 186. Points-based paths need 65+ points (age, English, work, qualifications). 2026 migration favors skilled graduates.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Skilled Independent (189): points-based</li>
            <li>Skilled Nominated (190): state nomination +5</li>
            <li>Skilled Work Regional (491): regional pathway</li>
          </ul>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16" id="requirements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Requirements for Australian Student Visa from Nepal</h2>
          <p className="text-lg text-gray-700 mb-2 font-medium">
            To qualify for Subclass 500 from Nepal in 2026: 60% in 10+2 (bachelor) or 50%+ in bachelor&apos;s (master&apos;s), IELTS 6.0–6.5, funds for 1 year tuition + AUD $29,710 living + travel, and Genuine Student (GS) statement. Nepal is AL3—complete evidence required.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl">Details by category:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Academic Requirements', items: ['10+2 with minimum 60% aggregate for bachelor\'s programs', 'Bachelor\'s degree with 50%+ for master\'s programs', 'Some courses require prerequisite subjects'], icon: GraduationCap },
              { title: 'English Language Requirements', items: ['IELTS Academic: 6.0-6.5 overall (no band <5.5)', 'PTE Academic: 50-58 overall', 'TOEFL iBT: 60-79 overall', 'Results valid for 2 years from test date'], icon: FileText },
              { title: 'Financial Requirements', items: ['Bank statements showing funds for 1 year tuition', 'AUD $29,710 for living costs (DHA requirement, single student)', 'AUD $2,500-3,000 for travel', 'Income source documentation'], icon: DollarSign },
              { title: 'Visa Specific Requirements', items: ['Valid passport (6+ months validity)', 'Confirmation of Enrolment (CoE) from university', 'Genuine Student (GS) statement', 'OSHC policy for entire study duration', 'Health examination at panel clinic'], icon: FileText },
            ].map((section, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#001F3F] mb-4 flex items-center gap-2">
                  <section.icon size={20} className="text-blue-600" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 size={16} className="text-green-500 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-16 bg-gray-50" id="visa-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Australia Student Visa Process from Nepal – Step by Step</h2>
          <p className="text-lg text-gray-700 mb-2 font-medium">
            The Australia student visa process from Nepal takes 16–20 weeks: offer letter, CoE, documents (GS statement, AUD $29,710 financial proof), ImmiAccount submission (fee AUD $2,000), biometrics and health, then decision. Apply 3–4 months before course start.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl">Step-by-step timeline:</p>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
            <div className="space-y-8">
              {data.visaSteps.map((step) => (
                <div key={step.step} id={`step-${step.step}`} className="flex flex-col md:flex-row gap-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#001F3F] text-white flex items-center justify-center font-bold text-xl shrink-0 z-10 shadow-lg">
                    {step.step}
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-[#001F3F]">{step.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{step.timeframe}</span>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-100 rounded-xl">
            <p className="text-[#001F3F] font-medium">
              <strong>Important:</strong> Apply at least 3-4 months before your course start date. High-risk applications may take longer. Contact our <Link href="/contact/" className="underline">visa experts in Kathmandu</Link> for guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Work Rights */}
      <section className="py-16" id="work-rights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Part-Time Work Rights for Nepali Students in Australia</h2>
          <p className="text-lg text-gray-700 mb-2 font-medium">
            Nepali students on Subclass 500 can work 48 hours per fortnight during semester and unlimited hours during breaks. Min wage AUD $24.95/hr (2025). Potential earnings AUD $26,000–31,000/year—enough to offset DHA living cost (AUD $29,710).
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl">Details:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <Briefcase className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Work Limit</h3>
              <p className="text-lg mb-2">48 hours per fortnight</p>
              <p className="text-blue-100 text-sm">During semester periods</p>
              <p className="mt-4 text-blue-100"><strong>Unlimited hours</strong> during scheduled breaks</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-[#001F3F] mb-4">Minimum Wage</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">AUD $24.95</p>
              <p className="text-gray-600">per hour (National Minimum Wage, July 2025)</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-[#001F3F] mb-4">Annual Earnings</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">AUD $26,000-31,000</p>
              <p className="text-gray-600">potential yearly income part-time</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <h4 className="font-bold text-[#001F3F] mb-3">Common Part-Time Jobs for Nepali Students</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { job: 'Retail Assistant', wage: '$26-32/hr' },
                { job: 'Hospitality Staff', wage: '$26-36/hr' },
                { job: 'Private Tutor', wage: '$32-52/hr' },
                { job: 'Aged Care Worker', wage: '$30-37/hr' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-[#001F3F]">{item.job}</p>
                  <p className="text-blue-600 font-bold">{item.wage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post-Study Work */}
      <section className="py-16 bg-gray-50" id="post-study-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Australia Post-Study Work Visa 485 – Complete Guide</h2>
          <p className="text-lg text-gray-700 mb-2 font-medium">
            The post-study work visa 485 grants Nepali graduates 2–4 years of full work rights: bachelor 2 yrs, master&apos;s 3 yrs, PhD 4 yrs. Regional study (Adelaide, Perth, Gold Coast) adds 1–2 years. Apply within 6 months of course completion. Essential for PR pathways (189, 190, 491).
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl">Duration by qualification:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { degree: 'Bachelor Degree', duration: '2 years', icon: GraduationCap },
              { degree: 'Masters (Coursework)', duration: '3 years', icon: GraduationCap },
              { degree: 'Masters (Research)', duration: '3 years', icon: Award },
              { degree: 'PhD', duration: '4 years', icon: Award },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-[#001F3F] mb-2">{item.degree}</h3>
                <p className="text-blue-600 font-bold">{item.duration}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-2">Regional Study Bonus</h4>
              <p className="text-green-700">Study in regional Australia (Adelaide, Perth, Gold Coast, etc.) and get <strong>additional 1-2 years</strong> on your 485 visa.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2">Work Rights</h4>
              <p className="text-blue-700">Full unrestricted work rights during 485 visa period. Work for any employer, any hours, any location in Australia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PR Pathways */}
      <section className="py-16" id="pr-pathways">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Australia PR Pathways for Nepali Students After Study</h2>
          <p className="text-lg text-gray-700 mb-2 font-medium">
            Nepali students can obtain Australia PR after study via 189 (Skilled Independent), 190 (Skilled Nominated), 491 (Skilled Work Regional), or 186 (Employer Sponsored). Points-based paths need 65+ points (age, English, work, qualifications). Most obtain PR in 3–5 years. 2026 migration favors skilled graduates.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl">Pathways:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {data.prPathways.map((pathway, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">{pathway.name}</h3>
                <p className="text-gray-600 mb-3">{pathway.desc}</p>
                <p className="text-sm text-blue-600 font-medium mb-2">{pathway.requirements}</p>
                <p className="text-sm text-gray-500">Processing: {pathway.timeline}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
            <p className="text-yellow-800"><strong>Pro Tip:</strong> Study in regional Australia and work in a skill shortage occupation to maximize your PR points. Contact our <Link href="/study-abroad/aus/#pr-pathways" className="underline font-medium">PR pathway experts</Link> for personalized guidance.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Australia vs UK vs USA vs Canada – Comparison for Nepali Students 2026</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            <strong>In brief:</strong> Australia leads on post-study work (2–4 years), a clear points-based PR pathway, and the highest minimum wage of the four. Tuition runs AUD $20,000–45,000; the DHA living requirement is $29,710. Full comparison below.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 overflow-x-auto">
            <table className="w-full min-w-[320px]">
              <thead className="bg-[#001F3F] text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold">Factor</th>
                  <th className="px-4 py-4 text-left text-blue-200 font-semibold">Australia</th>
                  <th className="px-4 py-4 text-left font-semibold">UK</th>
                  <th className="px-4 py-4 text-left font-semibold">USA</th>
                  <th className="px-4 py-4 text-left font-semibold">Canada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr>
                  <td className="px-4 py-4 font-medium">Tuition (per year)</td>
                  <td className="px-4 py-4 text-blue-600 font-bold bg-blue-50">{data.comparison.tuition.australia}</td>
                  <td className="px-4 py-4">{data.comparison.tuition.uk}</td>
                  <td className="px-4 py-4">{data.comparison.tuition.usa}</td>
                  <td className="px-4 py-4">{data.comparison.tuition.canada}</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">Degree Duration</td>
                  <td className="px-4 py-4 text-blue-600 font-bold bg-blue-50">{data.comparison.duration.australia}</td>
                  <td className="px-4 py-4">{data.comparison.duration.uk}</td>
                  <td className="px-4 py-4">{data.comparison.duration.usa}</td>
                  <td className="px-4 py-4">{data.comparison.duration.canada}</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">Post-Study Work</td>
                  <td className="px-4 py-4 text-blue-600 font-bold bg-blue-50">{data.comparison.postStudyWork.australia}</td>
                  <td className="px-4 py-4">{data.comparison.postStudyWork.uk}</td>
                  <td className="px-4 py-4">{data.comparison.postStudyWork.usa}</td>
                  <td className="px-4 py-4">{data.comparison.postStudyWork.canada}</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">PR Pathway</td>
                  <td className="px-4 py-4 text-green-600 font-bold bg-blue-50">{data.comparison.prPathway.australia}</td>
                  <td className="px-4 py-4">{data.comparison.prPathway.uk}</td>
                  <td className="px-4 py-4">{data.comparison.prPathway.usa}</td>
                  <td className="px-4 py-4 text-green-600 font-bold">{data.comparison.prPathway.canada}</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">Part-Time Work</td>
                  <td className="px-4 py-4 text-blue-600 font-bold bg-blue-50">{data.comparison.partTimeWork.australia}</td>
                  <td className="px-4 py-4">{data.comparison.partTimeWork.uk}</td>
                  <td className="px-4 py-4">{data.comparison.partTimeWork.usa}</td>
                  <td className="px-4 py-4">{data.comparison.partTimeWork.canada}</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">Minimum Wage</td>
                  <td className="px-4 py-4 text-blue-600 font-bold bg-blue-50">{data.comparison.minimumWage.australia}</td>
                  <td className="px-4 py-4">{data.comparison.minimumWage.uk}</td>
                  <td className="px-4 py-4">{data.comparison.minimumWage.usa}</td>
                  <td className="px-4 py-4">{data.comparison.minimumWage.canada}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16" id="scholarships">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Scholarships for Nepali Students in Australia 2026</h2>
          <p className="text-lg text-gray-700 mb-2 font-medium">
            Nepali students can reduce costs in 2026 via Australia Awards (full tuition + living), Destination Australia (up to AUD $15,000/yr regional), university merit (10–50%), and RTP for research. Deadlines vary; apply early.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl">Options:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {data.scholarships.map((scholarship, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">{scholarship.name}</h3>
                <p className="text-blue-600 font-bold mb-2">{scholarship.coverage}</p>
                <p className="text-gray-600 text-sm mb-2">{scholarship.eligibility}</p>
                <p className="text-gray-500 text-xs">Deadline: {scholarship.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="py-16 bg-gray-50" id="cities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Best Australian Cities for Nepali Students</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Popular study destinations with strong Nepali student communities:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.cities.map((city, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-[#001F3F]">{city.name}</h3>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full mb-3">{city.highlight}</span>
                <p className="text-gray-600 text-sm mb-2">{city.universities}</p>
                <p className="text-gray-500 text-xs">{city.students}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is Australia Good */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Is Australia Good for Nepali Students in 2026?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            <strong>Yes, Australia is excellent for Nepali students in 2026.</strong> High visa success for genuine applicants with proper documents, 7 universities in global top 100, post-study work 2-4 years, clear PR pathways, and minimum wage AUD $24.95/hour. Over 50,000 Nepali students in Australia. Nepal is AL3 since 8 Jan 2026—complete evidence and strong GS statement support success.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 'High', label: 'Visa Success Rate' },
              { value: '50,000+', label: 'Nepali Students' },
              { value: '7', label: 'Top 100 Universities' },
              { value: '$24.95', label: 'Min Wage/Hour' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
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
            {data.testimonials.map((testimonial, i) => (
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
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
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

      {/* Authority Section + Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold">
              <CheckCircle2 size={16} /> QEAC Certified
            </span>
            <span className="inline-flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
              <Users size={16} /> 1,500+ Students Placed
            </span>
            <span className="inline-flex items-center gap-1 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold">
              <Star size={16} /> Google Reviews
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Why Trust San Marina for Your Australia Study Journey?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We focus on Subclass 500 and 485 applications—from GS statement drafting to DHA and ImmiAccount compliance. Our team maintains partnerships with 50+ Australian institutions and holds <Link href="/about/" className="text-blue-600 hover:underline">QEAC and PIER certification</Link>, so your application benefits from both expertise and credibility.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: data.authority.successRate, label: 'Visa Success for Genuine Applicants', icon: CheckCircle2 },
              { value: data.authority.experience, label: 'Years Experience', icon: Clock },
              { value: data.authority.studentsPlaced, label: 'Students Placed', icon: Users },
              { value: data.authority.partnerUniversities, label: 'Partner Universities', icon: Building2 },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#001F3F] mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              Contact Our Australia Experts <ChevronRight size={18} />
            </Link>
            <Link href="/study-abroad/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              Explore Other Destinations <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Related Australia Study Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Australia Student Visa from Nepal', desc: 'Complete Subclass 500 visa application guide', href: '/study-abroad/aus/#visa-process' },
              { title: 'IELTS Requirement for Australia', desc: 'Score requirements by course and university', href: '/study-abroad/aus/#requirements' },
              { title: 'Australia PR After Study', desc: 'Permanent residency pathways explained', href: '/study-abroad/aus/#pr-pathways' },
              { title: 'Cost to Study in Australia', desc: 'Detailed cost breakdown in AUD and NPR', href: '/study-abroad/aus/#cost' },
            ].map((guide, i) => (
              <Link key={i} href={guide.href} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="text-lg font-bold text-[#001F3F] mb-2 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                <p className="text-gray-600 text-sm">{guide.desc}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  Read Guide <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Australia FAQs</h2>
          <p className="text-gray-600 mb-8">Find answers to common questions about studying in Australia from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={data.faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0056b3] via-[#004494] to-[#003366] mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in Australia?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            We specialise in Subclass 500 and 485 applications—including Genuine Student statements tailored for AL3. Walk in for a free consultation at Tinkune, Baneshwor, Ghorahi, or Itahari, or drop us a message on WhatsApp.
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
              WhatsApp: 015927731
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            Compare: <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="underline font-medium">USA</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
          <p className="mt-2 text-blue-400 text-xs">QEAC Certified • PIER Qualified • AL3-Ready • Subclass 500 & 485 Specialists</p>
          <p className="mt-4 text-blue-400 text-xs">Last updated: 17 February 2026</p>
        </div>
      </section>
    </main>
  );
}

/*
  OPTIMIZATION SUMMARY (17 Feb 2026)
  ─────────────────────────────────
  ESTIMATED LIGHTHOUSE IMPROVEMENT:
  - Performance: ~95+ (lazy patterns, responsive tables, fetchPriority on hero)
  - SEO: Strong (meta 155 chars, schema Article+FAQ+HowTo+Org, AL3, GS terminology)
  - Accessibility: Good (aria-labels, semantic HTML, sr-only last updated)

  KEY CHANGES:
  • Factual: DHA $29,710, visa $2,000, wage $24.95, 1 AUD=103 NPR, travel $2.5-3K
  • GTE → Genuine Student (GS) throughout
  • AL3 (Nepal Evidence Level 3) prominent section + FAQs
  • Floating WhatsApp CTA (mobile-first, fixed bottom-right)
  • Trust badges: QEAC, 1,500+ students, Google Reviews
  • Responsive tables (overflow-x-auto, min-width)
  • Hero image: fetchPriority high, keyword-rich alt
  • JSON-LD: Org + WhatsApp contact, aggregateRating, visa fee 2000

  SUGGESTED NEXT STEPS:
  - Convert hero to WebP (e.g. adelaide.webp) + add srcset if multiple sizes
  - Compress images via next.config images domains + quality
  - Add layout.tsx preload for /assets/adelaide.jpg if LCP target not met
*/
