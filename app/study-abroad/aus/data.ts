export interface CountryData {
  name: string;
  slug: string;
  heroImage: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tuitionRange: string;
  livingCost: string;
  partTimeWork: string;
  postStudyWork: string;
  currency: string;
  studyOptions: {
    degree: string;
    duration: string;
    requirement: string;
  }[];
  popularCities: {
    name: string;
    description: string;
    highlight: string;
  }[];
  visaSteps: string[];
  requirements: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  comparisonPoints: {
    label: string;
    value: string;
  }[];
}

export const countryData: Record<string, CountryData> = {
  aus: {
    name: 'Australia',
    slug: 'aus',
    heroImage: '/assets/adelaide.jpg',
    description: 'Australia offers world-class education with a relaxed lifestyle. Home to 7 of the top 100 universities globally.',
    metaTitle: 'Study in Australia from Nepal 2026 | Top Universities & Visa Guide',
    metaDescription: 'Plan your 2026 studies in Australia from Nepal. Expert guidance on universities, scholarships, visa requirements & post-study work opportunities. High visa success for genuine applicants.',
    keywords: ['study in australia from nepal', 'australia student visa nepal', 'australian universities', 'study abroad australia 2026'],
    tuitionRange: 'AUD $20,000 - $45,000/year',
    livingCost: 'AUD $21,000 - $25,000/year',
    partTimeWork: 'Up to 48 hours per fortnight during semester, unlimited during breaks',
    postStudyWork: '2-4 years post-study work visa (485 visa) based on qualification level',
    currency: 'Australian Dollar (AUD)',
    studyOptions: [
      { degree: 'Foundation / Pathway', duration: '1 Year', requirement: '10+2 completed, IELTS 5.0-5.5' },
      { degree: "Bachelor's Degree", duration: '3 - 4 Years', requirement: '10+2 with 60%+, IELTS 6.0-6.5' },
      { degree: "Master's Degree", duration: '1 - 2 Years', requirement: "Bachelor's degree, IELTS 6.5+" },
      { degree: 'PhD / Research', duration: '3 - 4 Years', requirement: "Master's degree, research proposal" },
    ],
    popularCities: [
      { name: 'Sydney', description: 'Australia\'s largest city, iconic landmarks, top universities', highlight: 'Business & Tech' },
      { name: 'Melbourne', description: 'Cultural capital, most livable city, excellent universities', highlight: 'Arts & Education' },
      { name: 'Brisbane', description: 'Sunny weather, affordable living, growing tech hub', highlight: 'Research & Innovation' },
    ],
    visaSteps: [
      'Choose your course and university in Australia with San Marina guidance',
      'Apply for admission and receive offer letter',
      'Prepare financial documents and meet Genuine Temporary Entrant (GTE) requirement',
      'Submit visa application online through ImmiAccount',
      'Complete health examination and biometrics',
      'Receive visa decision and prepare for departure',
    ],
    requirements: [
      'Academic qualifications: Completed 10+2 or equivalent for bachelor\'s entry',
      'English language: IELTS 6.0-6.5 or PTE 50-58 or equivalent',
      'Financial proof: Show funds for tuition + living costs + travel',
      'Genuine Temporary Entrant (GTE) requirement',
    ],
    faqs: [
      { question: 'What is the cost of studying in Australia from Nepal?', answer: 'Tuition fees range from AUD $20,000 to $45,000 per year depending on the course and university. Living costs are approximately $21,000-$25,000 per year. Total annual cost is around AUD $40,000-$70,000.' },
      { question: 'Can Nepali students work while studying in Australia?', answer: 'Yes, international students can work up to 48 hours per fortnight during semester and unlimited hours during scheduled breaks. Minimum wage is AUD $23.23 per hour.' },
      { question: 'What is the post-study work visa for Australia?', answer: 'The Temporary Graduate Visa (subclass 485) allows 2-4 years of work rights after graduation. Bachelor\'s degree holders get 2 years, Master\'s by coursework get 3 years, and Master\'s by research/PhD get 4 years.' },
      { question: 'How long does it take to get an Australian student visa from Nepal?', answer: 'The processing time varies from 4-12 weeks depending on the completeness of documents and verification requirements. High-risk applications may take longer.' },
    ],
    comparisonPoints: [
      { label: 'Visa Success', value: 'High for genuine applicants' },
      { label: 'Post-Study Work', value: '2-4 Years' },
      { label: 'Minimum Wage', value: 'AUD $23.23/hr' },
      { label: 'Nepali Students', value: '50,000+' },
    ],
  },
  uk: {
    name: 'United Kingdom',
    slug: 'uk',
    heroImage: '/assets/london.jpg',
    description: 'The UK offers prestigious education with centuries of academic excellence. Home to Oxford, Cambridge, and many Russell Group universities.',
    metaTitle: 'Study in UK from Nepal 2026 | Russell Group Universities & Graduate Route',
    metaDescription: 'Study in UK from Nepal 2026. Expert guidance on Russell Group universities, Graduate Route visa, scholarships & admission requirements. Free consultation.',
    keywords: ['study in uk from nepal', 'uk graduate route visa', 'russell group universities', 'study abroad uk 2026'],
    tuitionRange: '£10,000 - £38,000/year',
    livingCost: '£12,000 - £15,000/year',
    partTimeWork: 'Up to 20 hours per week during term time, full-time during holidays',
    postStudyWork: '2 years post-study work visa (Graduate Route) for bachelor\'s and master\'s, 3 years for PhD',
    currency: 'British Pound (GBP)',
    studyOptions: [
      { degree: 'Foundation / Pathway', duration: '1 Year', requirement: '10+2 completed, IELTS 5.5' },
      { degree: "Bachelor's Degree", duration: '3 - 4 Years', requirement: '10+2 with 70%+, IELTS 6.0-6.5' },
      { degree: "Master's Degree", duration: '1 Year', requirement: "Bachelor's degree, IELTS 6.5+" },
      { degree: 'PhD / Research', duration: '3 - 4 Years', requirement: "Master's degree, research proposal" },
    ],
    popularCities: [
      { name: 'London', description: 'Global financial hub, world-class universities, diverse culture', highlight: 'Finance & Business' },
      { name: 'Manchester', description: 'Student-friendly, affordable, strong industrial heritage', highlight: 'Engineering & Tech' },
      { name: 'Edinburgh', description: 'Historic capital, top-ranked university, vibrant festivals', highlight: 'Arts & Humanities' },
    ],
    visaSteps: [
      'Receive unconditional offer from UK university',
      'Obtain Confirmation of Acceptance for Studies (CAS)',
      'Prepare financial documents (28 days maintenance funds)',
      'Complete online visa application and pay IHS surcharge',
      'Submit documents and attend biometric appointment at VFS',
      'Receive decision and collect passport with vignette',
    ],
    requirements: [
      'Academic qualifications: 10+2 with 70%+ for bachelor\'s, bachelor\'s degree for master\'s',
      'English language: IELTS UKVI 6.0-6.5 (no band less than 5.5)',
      'Financial requirement: £9,207 for London or £7,347 outside London (28 days)',
      'TB test certificate from approved clinic',
    ],
    faqs: [
      { question: 'What is the UK Graduate Route visa?', answer: 'The Graduate Route allows international students to stay in the UK for 2 years (3 years for PhD) to work or look for work after completing their degree. No sponsorship required.' },
      { question: 'Are scholarships available for Nepali students in UK?', answer: 'Yes, many UK universities offer scholarships including Chevening Scholarships, Commonwealth Scholarships, GREAT Scholarships, and university-specific awards covering 10-50% of tuition.' },
      { question: 'How much bank balance is required for UK student visa?', answer: 'You need to show £9,207 for London or £7,347 for outside London in your bank account for 28 consecutive days before applying. This covers 9 months of living costs.' },
      { question: 'Can I work in UK after graduation?', answer: 'Yes, the Graduate Route visa allows you to work at any skill level for 2 years (3 years for PhD). After that, you can switch to a Skilled Worker visa if you find a qualifying job.' },
    ],
    comparisonPoints: [
      { label: 'Visa Success Rate', value: '95%' },
      { label: 'Post-Study Work', value: '2-3 Years' },
      { label: 'Master Duration', value: '1 Year' },
      { label: 'Nepali Students', value: '30,000+' },
    ],
  },
  usa: {
    name: 'USA',
    slug: 'usa',
    heroImage: '/assets/newyork.jpg',
    description: 'The USA offers diverse educational opportunities with world-leading research facilities and flexible curriculum options.',
    metaTitle: 'Study in USA from Nepal 2026 | F1 Visa & STEM OPT Guide',
    metaDescription: 'Study in USA from Nepal 2026. Expert F1 visa guidance, STEM OPT extension, university selection & scholarship assistance. High visa success for genuine applicants.',
    keywords: ['study in usa from nepal', 'f1 visa nepal', 'stem opt extension', 'american universities 2026'],
    tuitionRange: '$15,000 - $60,000/year',
    livingCost: '$10,000 - $18,000/year',
    partTimeWork: 'Up to 20 hours per week on-campus during term time',
    postStudyWork: '12 months OPT (Optional Practical Training), 36 months for STEM graduates',
    currency: 'US Dollar (USD)',
    studyOptions: [
      { degree: 'Associate Degree', duration: '2 Years', requirement: '10+2 completed, TOEFL 61+' },
      { degree: "Bachelor's Degree", duration: '4 Years', requirement: '10+2 with 70%+, TOEFL 79+ / IELTS 6.5+' },
      { degree: "Master's Degree", duration: '2 Years', requirement: "Bachelor's degree, GRE/GMAT, TOEFL 90+" },
      { degree: 'PhD / Research', duration: '4 - 6 Years', requirement: "Master's degree, research proposal, funding" },
    ],
    popularCities: [
      { name: 'New York', description: 'Financial capital, diverse culture, top universities', highlight: 'Business & Finance' },
      { name: 'Boston', description: 'Education hub, historic city, Harvard & MIT nearby', highlight: 'Research & Innovation' },
      { name: 'San Francisco', description: 'Tech capital, Silicon Valley proximity, startup culture', highlight: 'Technology' },
    ],
    visaSteps: [
      'Receive I-20 form from SEVP-certified university',
      'Pay SEVIS fee ($350) and DS-160 visa application fee ($160)',
      'Complete DS-160 online nonimmigrant visa application',
      'Schedule visa interview at US Embassy Kathmandu',
      'Attend interview with required documents',
      'Receive passport with visa and prepare for travel',
    ],
    requirements: [
      'Academic qualifications: Strong academic record in 10+2 and bachelor\'s',
      'English proficiency: TOEFL 79+ or IELTS 6.5+ (varies by program)',
      'Standardized tests: SAT/ACT for bachelor\'s, GRE/GMAT for master\'s',
      'Financial proof: Bank statements showing sufficient funds',
    ],
    faqs: [
      { question: 'What is STEM OPT extension?', answer: 'STEM graduates can extend their OPT from 12 months to 36 months, giving them 3 years to work in the USA after graduation. This applies to Science, Technology, Engineering, and Mathematics fields.' },
      { question: 'How do I get a US student visa from Nepal?', answer: 'You need an I-20 from your university, pay the SEVIS fee ($350), complete the DS-160 form ($160), and attend a visa interview at the US Embassy in Kathmandu.' },
      { question: 'Can I work off-campus in USA as a student?', answer: 'Initially, you can only work on-campus. After 9 months, you may apply for Curricular Practical Training (CPT) for internships related to your field of study.' },
      { question: 'What is the F1 visa interview success rate for Nepali students?', answer: 'With proper preparation and genuine intent, the success rate is around 85-90%. San Marina provides comprehensive interview preparation to maximize your chances.' },
    ],
    comparisonPoints: [
      { label: 'Visa Success Rate', value: '90%' },
      { label: 'STEM OPT', value: '36 Months' },
      { label: 'Universities', value: '4,000+' },
      { label: 'Nepali Students', value: '15,000+' },
    ],
  },
  can: {
    name: 'Canada',
    slug: 'can',
    heroImage: '/assets/toronto.jpg',
    description: 'Canada offers quality education with immigration-friendly policies. Known for multiculturalism and high quality of life.',
    metaTitle: 'Study in Canada from Nepal 2026 | PGWP & PR Pathway Guide',
    metaDescription: 'Study in Canada from Nepal 2026. Expert guidance on study permits, PGWP, GIC, SDS stream & permanent residency pathways. Free consultation.',
    keywords: ['study in canada from nepal', 'canada study permit', 'pgwp canada', 'canada pr pathway'],
    tuitionRange: 'CAD $15,000 - $35,000/year',
    livingCost: 'CAD $10,000 - $15,000/year',
    partTimeWork: 'Up to 20 hours per week during academic sessions, full-time during breaks',
    postStudyWork: 'Up to 3 years post-graduation work permit (PGWP) depending on program length',
    currency: 'Canadian Dollar (CAD)',
    studyOptions: [
      { degree: 'Diploma / Certificate', duration: '1 - 2 Years', requirement: '10+2 completed, IELTS 6.0' },
      { degree: "Bachelor's Degree", duration: '4 Years', requirement: '10+2 with 60%+, IELTS 6.5' },
      { degree: "Master's Degree", duration: '1 - 2 Years', requirement: "Bachelor's degree, IELTS 6.5+" },
      { degree: 'PhD / Research', duration: '4 - 6 Years', requirement: "Master's degree, supervisor acceptance" },
    ],
    popularCities: [
      { name: 'Toronto', description: 'Canada\'s largest city, financial hub, diverse culture', highlight: 'Business & Finance' },
      { name: 'Vancouver', description: 'Beautiful scenery, tech hub, mild climate', highlight: 'Tech & Sustainability' },
      { name: 'Montreal', description: 'Bilingual city, affordable living, vibrant culture', highlight: 'Arts & Culture' },
    ],
    visaSteps: [
      'Receive letter of acceptance from DLI-designated institution',
      'Open GIC account with CAD $10,000 (for SDS stream)',
      'Complete medical examination with panel physician',
      'Submit study permit application online or via VFS',
      'Provide biometrics at VFS Global',
      'Receive passport request and prepare for travel',
    ],
    requirements: [
      'Acceptance letter from Designated Learning Institution (DLI)',
      'Proof of funds: GIC CAD $10,000 + first year tuition (SDS)',
      'English proficiency: IELTS 6.0+ overall, no band less than 6.0',
      'Medical examination and police clearance certificate',
    ],
    faqs: [
      { question: 'Can I get PR after studying in Canada?', answer: 'Yes, Canada offers various pathways to permanent residency for international graduates including Express Entry (Canadian Experience Class), Provincial Nominee Programs (PNP), and Atlantic Immigration Program.' },
      { question: 'What is a GIC account for Canada study permit?', answer: 'A Guaranteed Investment Certificate (GIC) is required for the SDS stream. You deposit CAD $10,000 in a Canadian bank, which releases funds monthly to cover living expenses.' },
      { question: 'How long is the post-graduation work permit in Canada?', answer: 'PGWP duration matches your study program length: 8 months-2 years program = work permit up to 3 years, 2+ years program = 3 years work permit.' },
      { question: 'What is the difference between SDS and regular stream?', answer: 'SDS (Student Direct Stream) offers faster processing (20 days) but requires IELTS 6.0+ and GIC. Regular stream has no IELTS requirement but processing takes 8-12 weeks.' },
    ],
    comparisonPoints: [
      { label: 'Visa Success Rate', value: '96%' },
      { label: 'Post-Study Work', value: '3 Years' },
      { label: 'PR Pathway', value: 'Available' },
      { label: 'Nepali Students', value: '25,000+' },
    ],
  },
  eur: {
    name: 'Europe',
    slug: 'eur',
    heroImage: '/assets/europe.jpg',
    description: 'Europe offers affordable education with rich cultural experiences. Many countries have low or no tuition fees.',
    metaTitle: 'Study in Europe from Nepal 2026 | Schengen Countries & Free Tuition',
    metaDescription: 'Study in Europe from Nepal 2026. Germany, France, Netherlands & more. Low/no tuition fees, Schengen visa benefits. Expert guidance on admission & visa.',
    keywords: ['study in europe from nepal', 'free tuition germany', 'schengen student visa', 'study abroad europe 2026'],
    tuitionRange: '€0 - €20,000/year',
    livingCost: '€8,000 - €12,000/year',
    partTimeWork: 'Varies by country, typically 10-20 hours per week',
    postStudyWork: 'Varies by country, typically 6 months to 2 years',
    currency: 'Euro (EUR)',
    studyOptions: [
      { degree: 'Bachelor\'s Degree', duration: '3 - 4 Years', requirement: '10+2 with 70%+, IELTS 6.0+ or local language B2' },
      { degree: 'Master\'s Degree', duration: '1 - 2 Years', requirement: 'Bachelor\'s degree, IELTS 6.5+ or local language B2' },
      { degree: 'PhD / Research', duration: '3 - 4 Years', requirement: 'Master\'s degree, research proposal, often funded' },
    ],
    popularCities: [
      { name: 'Berlin', description: 'Startup hub, affordable living, vibrant culture', highlight: 'Tech & Innovation' },
      { name: 'Amsterdam', description: 'International business hub, English-friendly, cycling culture', highlight: 'Business & Logistics' },
      { name: 'Paris', description: 'Fashion capital, top business schools, rich history', highlight: 'Fashion & Luxury' },
    ],
    visaSteps: [
      'Choose country and university, receive admission offer',
      'Open blocked account (Germany) or show proof of funds',
      'Purchase health insurance valid in the destination country',
      'Schedule visa appointment at respective embassy',
      'Submit documents and attend visa interview',
      'Receive visa and prepare for travel to Europe',
    ],
    requirements: [
      'Academic qualifications: Strong academic record in 10+2 and bachelor\'s',
      'Language: English IELTS 6.0+ or local language B2/C1 level',
      'Financial proof: Blocked account €11,208 (Germany) or equivalent',
      'Health insurance and valid passport',
    ],
    faqs: [
      { question: 'Which European countries offer free education?', answer: 'Germany, Norway, and Iceland offer tuition-free education at public universities. Some universities in France, Austria, and other countries have very low tuition fees (€200-2,000/year).' },
      { question: 'Do I need to learn the local language to study in Europe?', answer: 'Many master\'s programs are offered in English. However, learning the local language helps with daily life, part-time jobs, and post-study opportunities. Some bachelor\'s programs require local language proficiency.' },
      { question: 'What is a blocked account for Germany?', answer: 'A blocked account (Sperrkonto) with €11,208 is required to prove you can cover living expenses. The money is released monthly (€934/month) to the student.' },
      { question: 'Can I travel to other European countries with a student visa?', answer: 'Yes, a Schengen student visa allows travel to 27 European countries. This is a major advantage for exploring Europe during your studies.' },
    ],
    comparisonPoints: [
      { label: 'Tuition Fees', value: '€0 - €20k' },
      { label: 'Schengen Access', value: '27 Countries' },
      { label: 'Work Rights', value: '120-240 hrs/yr' },
      { label: 'Nepali Students', value: '20,000+' },
    ],
  },
  jp: {
    name: 'Japan',
    slug: 'jp',
    heroImage: '/assets/tokyo.jpg',
    description: 'Japan offers cutting-edge technology education combined with traditional culture. Known for innovation and research excellence.',
    metaTitle: 'Study in Japan from Nepal 2026 | MEXT Scholarship & JLPT Guide',
    metaDescription: 'Study in Japan from Nepal 2026. JLPT preparation, MEXT scholarship guidance, language school admission & visa support. Free consultation available.',
    keywords: ['study in japan from nepal', 'mext scholarship', 'jlpt preparation', 'japanese language school'],
    tuitionRange: '¥535,800 - ¥1,000,000/year',
    livingCost: '¥100,000 - ¥150,000/month',
    partTimeWork: 'Up to 28 hours per week with proper permission',
    postStudyWork: '6 months to 5 years depending on the visa type and employment',
    currency: 'Japanese Yen (JPY)',
    studyOptions: [
      { degree: 'Japanese Language', duration: '1 - 2 Years', requirement: '10+2 completed, JLPT N5 or language school admission' },
      { degree: 'Associate Degree', duration: '2 Years', requirement: '10+2 with 60%+, JLPT N2 or EJU' },
      { degree: 'Bachelor\'s Degree', duration: '4 Years', requirement: '10+2 with 70%+, JLPT N2 or EJU, entrance exam' },
      { degree: 'Master\'s Degree', duration: '2 Years', requirement: 'Bachelor\'s degree, JLPT N2, research plan' },
    ],
    popularCities: [
      { name: 'Tokyo', description: 'World\'s largest metropolis, tech hub, endless opportunities', highlight: 'Technology & Business' },
      { name: 'Osaka', description: 'Friendly locals, affordable living, great food', highlight: 'Manufacturing' },
      { name: 'Kyoto', description: 'Traditional culture, historic temples, top universities', highlight: 'Culture & Arts' },
    ],
    visaSteps: [
      'Receive Certificate of Eligibility (COE) from university',
      'Prepare visa application documents including financial proof',
      'Submit application to Japanese Embassy in Kathmandu',
      'Wait for visa processing (typically 5-10 working days)',
      'Receive visa and book flight to Japan',
      'Complete residence registration after arrival in Japan',
    ],
    requirements: [
      'Academic qualifications: Good academic record in previous studies',
      'Japanese language: JLPT N5 for language schools, N2 for universities',
      'Financial proof: Show ¥1,500,000+ for first year expenses',
      'Certificate of Eligibility (COE) from sponsoring institution',
    ],
    faqs: [
      { question: 'Do I need to know Japanese to study in Japan?', answer: 'Many universities now offer English-taught programs (G30/SGU). However, JLPT N2 or N1 is often required for Japanese-taught programs and is highly beneficial for daily life and part-time work.' },
      { question: 'What is the MEXT scholarship?', answer: 'MEXT (Ministry of Education, Culture, Sports, Science and Technology) offers full scholarships covering tuition, monthly stipend (¥117,000-¥145,000), and airfare. Highly competitive but excellent opportunity.' },
      { question: 'Can I work part-time in Japan as a student?', answer: 'Yes, with a "Permission to Engage in Activity other than that Permitted" stamp on your residence card, you can work up to 28 hours per week. Common jobs include convenience stores, restaurants, and tutoring.' },
      { question: 'What is JLPT and how do I prepare for it?', answer: 'JLPT (Japanese Language Proficiency Test) has 5 levels (N1-N5). San Marina offers JLPT preparation classes from N5 to N2 levels to help you achieve the required proficiency for university admission.' },
    ],
    comparisonPoints: [
      { label: 'MEXT Scholarship', value: 'Full Funding' },
      { label: 'Part-time Work', value: '28 hrs/week' },
      { label: 'Tech Opportunities', value: 'Excellent' },
      { label: 'Nepali Students', value: '5,000+' },
    ],
  },
  nz: {
    name: 'New Zealand',
    slug: 'nz',
    heroImage: '/assets/auckland.jpg',
    description: 'New Zealand offers quality education in a stunning natural environment. Known for work-life balance and outdoor lifestyle.',
    metaTitle: 'Study in New Zealand from Nepal 2026 | Universities & Work Visa',
    metaDescription: 'Study in New Zealand from Nepal 2026. Expert guidance on universities, post-study work visa, scholarships & admission requirements. Free consultation.',
    keywords: ['study in new zealand from nepal', 'nz post study work visa', 'new zealand universities', 'study abroad nz'],
    tuitionRange: 'NZD $22,000 - $32,000/year',
    livingCost: 'NZD $15,000 - $20,000/year',
    partTimeWork: 'Up to 20 hours per week during term time, full-time during holidays',
    postStudyWork: 'Up to 3 years post-study work visa depending on qualification level',
    currency: 'New Zealand Dollar (NZD)',
    studyOptions: [
      { degree: 'Diploma / Certificate', duration: '1 - 2 Years', requirement: '10+2 completed, IELTS 5.5' },
      { degree: 'Bachelor\'s Degree', duration: '3 Years', requirement: '10+2 with 60%+, IELTS 6.0' },
      { degree: 'Graduate Diploma', duration: '1 Year', requirement: 'Bachelor\'s degree, IELTS 6.5' },
      { degree: 'Master\'s Degree', duration: '1 - 2 Years', requirement: 'Bachelor\'s degree, IELTS 6.5+' },
    ],
    popularCities: [
      { name: 'Auckland', description: 'Largest city, major universities, diverse culture', highlight: 'Business & Education' },
      { name: 'Wellington', description: 'Capital city, creative hub, compact and walkable', highlight: 'Arts & Government' },
      { name: 'Christchurch', description: 'Garden city, rebuilding innovation, outdoor activities', highlight: 'Engineering & Innovation' },
    ],
    visaSteps: [
      'Receive offer of place from NZQA-approved institution',
      'Prepare financial evidence (funds for tuition + living costs)',
      'Complete medical examination and chest X-ray',
      'Submit student visa application online',
      'Provide biometrics if required',
      'Receive eVisa and prepare for travel to New Zealand',
    ],
    requirements: [
      'Offer of place from NZQA-approved education provider',
      'English proficiency: IELTS 6.0+ or PTE 50+',
      'Financial proof: NZD $15,000+ per year living costs + tuition',
      'Medical certificate and police clearance',
    ],
    faqs: [
      { question: 'Is New Zealand good for Nepali students?', answer: 'Yes, New Zealand is very welcoming to international students with excellent education quality, safe environment, and pathways to residency. The country has a growing Nepali community.' },
      { question: 'What are the part-time work opportunities in New Zealand?', answer: 'Students can work in hospitality, retail, tutoring, and other sectors. The minimum wage is NZD $22.70 per hour (as of 2024), providing good income to support living expenses.' },
      { question: 'Can I get PR after studying in New Zealand?', answer: 'Yes, after completing a qualification on the Long Term Skill Shortage List and gaining skilled employment, you can apply for residence through the Skilled Migrant Category.' },
      { question: 'How long does it take to process a New Zealand student visa?', answer: 'Processing typically takes 4-8 weeks. Using the online application system and providing complete documents can help speed up the process.' },
    ],
    comparisonPoints: [
      { label: 'Visa Success Rate', value: '94%' },
      { label: 'Post-Study Work', value: '3 Years' },
      { label: 'Minimum Wage', value: 'NZD $22.70/hr' },
      { label: 'Nepali Students', value: '8,000+' },
    ],
  },
  kr: {
    name: 'South Korea',
    slug: 'kr',
    heroImage: '/assets/south_korea.jpg',
    description: 'South Korea offers innovative education in technology and business. Known for K-culture, advanced technology, and global companies.',
    metaTitle: 'Study in South Korea from Nepal 2026 | GKS Scholarship & TOPIK',
    metaDescription: 'Study in South Korea from Nepal 2026. GKS scholarship guidance, TOPIK preparation, university admission & D-2 visa support. Free consultation.',
    keywords: ['study in south korea from nepal', 'gks scholarship', 'topik preparation', 'korean universities'],
    tuitionRange: 'KRW 4,000,000 - 10,000,000/semester',
    livingCost: 'KRW 800,000 - 1,200,000/month',
    partTimeWork: 'Up to 25 hours per week with proper permission',
    postStudyWork: 'Up to 2 years job seeker visa after graduation',
    currency: 'South Korean Won (KRW)',
    studyOptions: [
      { degree: 'Korean Language', duration: '1 Year', requirement: '10+2 completed, language school admission' },
      { degree: 'Bachelor\'s Degree', duration: '4 Years', requirement: '10+2 with 70%+, TOPIK 3+ or English program' },
      { degree: 'Master\'s Degree', duration: '2 Years', requirement: 'Bachelor\'s degree, TOPIK 4+ or English program' },
      { degree: 'PhD / Research', duration: '3 Years', requirement: 'Master\'s degree, research proposal, advisor acceptance' },
    ],
    popularCities: [
      { name: 'Seoul', description: 'Dynamic capital, tech hub, global companies', highlight: 'Technology & Business' },
      { name: 'Busan', description: 'Coastal city, film festival, relaxed atmosphere', highlight: 'Maritime & Tourism' },
      { name: 'Daejeon', description: 'Science hub, KAIST university, research focus', highlight: 'Science & Research' },
    ],
    visaSteps: [
      'Receive admission letter and standard admission certificate',
      'Prepare financial documents showing KRW 20,000,000+',
      'Complete visa application form and pay fee',
      'Submit documents to Korean Embassy in Kathmandu',
      'Wait for visa processing (typically 2-4 weeks)',
      'Receive D-2 visa and prepare for travel to Korea',
    ],
    requirements: [
      'Admission from Korean university (Certificate of Admission)',
      'Korean language: TOPIK Level 3-4 or English proficiency for English programs',
      'Financial proof: KRW 20,000,000+ in bank account',
      'Health certificate and valid passport',
    ],
    faqs: [
      { question: 'What is the GKS scholarship?', answer: 'Global Korea Scholarship (GKS) covers full tuition, monthly allowance (KRW 1,000,000), airfare, Korean language training, and medical insurance. Available for bachelor\'s and master\'s degrees.' },
      { question: 'Do I need TOPIK for Korean universities?', answer: 'Many universities require TOPIK Level 3 or 4 for Korean-taught programs. English-taught programs (GSIS) are available but limited. San Marina offers TOPIK preparation classes.' },
      { question: 'Can I work part-time in Korea as a student?', answer: 'Yes, with permission from the university and immigration, you can work up to 25 hours per week during semester and unlimited during breaks. Common jobs include tutoring, translation, and service industry.' },
      { question: 'What are popular courses for Nepali students in Korea?', answer: 'Popular fields include Engineering, Computer Science, Business Administration, K-Pop & Entertainment, and Korean Language & Literature. Many students also pursue degrees in Automotive and Electronics engineering.' },
    ],
    comparisonPoints: [
      { label: 'GKS Scholarship', value: 'Full + Stipend' },
      { label: 'Part-time Work', value: '25 hrs/week' },
      { label: 'Tech Giants', value: 'Samsung, LG, HYBE' },
      { label: 'Nepali Students', value: '3,000+' },
    ],
  },
};
