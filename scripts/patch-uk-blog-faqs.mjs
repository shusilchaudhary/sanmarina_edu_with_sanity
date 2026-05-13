const POST_ID = "23822029-b48e-491c-907b-3e413b9e36ac";

const faq = [
  {
    question: "How much does it cost to study in UK from Nepal in 2026?",
    answer: "Total first-year cost ranges NPR 35–42 lakhs at budget universities outside London, NPR 45–58 lakhs at mid-range, and NPR 65–85 lakhs in London. Tuition starts at £9,000/year (Bradford, Teesside, Coventry) ≈ NPR ~17.5 lakhs. The UKVI bank balance is £10,539 outside London (NPR ~20.5L) held for 28 consecutive days before you apply."
  },
  {
    question: "Can I study in UK without IELTS from Nepal?",
    answer: "Yes. Over 30 UK universities accept a Medium of Instruction (MOI) letter from your school/college, or Grade 12 English marks of 60%+, instead of IELTS. UKVI fully accepts this route for the Student Visa. Important exception: BSc Nursing requires IELTS Academic 7.0 (no sub-band below 6.5) for NMC registration. Universities like Bradford, Teesside, and Coventry commonly accept MOI letters."
  },
  {
    question: "What is the UK student visa bank balance requirement for Nepal 2026?",
    answer: "£10,539 (NPR ~20.5 lakhs) if studying outside London, or £13,761 (NPR ~26.8 lakhs) if in London — held for 28 consecutive days in a UKVI-approved Nepali bank (NIC Asia, Global IME, Standard Chartered Nepal). A confirmed scholarship letter reduces this requirement by that exact scholarship amount. The 28-day period must end no more than 31 days before your visa application date."
  },
  {
    question: "Which are the best UK universities for Nepali students in 2026?",
    answer: "Top choices for affordability and visa success: University of Bradford (£9,000/yr, MOI accepted), Teesside University (£9,500/yr), Coventry University (£15,000/yr), University of Hertfordshire, and Manchester Metropolitan University. For rankings: University of Manchester, University of Edinburgh, and King's College London are top-tier but cost £20,000–£30,000/yr. San Marina has strong CAS relationships with 25+ UK universities."
  },
  {
    question: "How long does the UK student visa process take from Nepal?",
    answer: "Standard processing is 3 weeks (15 working days) from biometrics at VFS Global Thapathali. Priority processing is 5 working days (costs £500 extra). Super-priority is next business day (£800 extra). In practice, most Nepali applicants receive a decision within 2–4 weeks on standard. Apply at least 6–8 weeks before your course start date. A CAS letter from your university is required before you can submit the visa application."
  },
  {
    question: "Can I study nursing in UK from Nepal?",
    answer: "Yes. BSc Nursing is a 3-year programme costing £11,000–£22,000/year. You need IELTS Academic 6.5 for university admission and 7.0 (no band below 6.5) for NMC registration to practice as a nurse in the UK. Nursing is on the UK Shortage Occupation List — NHS and private hospitals actively recruit Nepali nurses. NHS Registered Nurse starting salary is £29,970/year (Band 5). Very strong post-graduation employment prospects."
  },
  {
    question: "What documents are required for UK student visa from Nepal?",
    answer: "Core documents: (1) CAS letter from university, (2) Academic transcripts and certificates, (3) IELTS result or MOI letter (English proof), (4) Financial evidence — bank statements showing £10,539 held 28+ consecutive days, (5) NOC from MoEST Nepal, (6) Passport valid 6+ months beyond course end, (7) Tuberculosis (TB) test certificate from IOM Nepal Kathmandu, (8) ATAS certificate if required for your course, (9) Accommodation booking confirmation, (10) Personal statement or cover letter."
  },
  {
    question: "Can Nepali students bring dependants (spouse/children) to UK?",
    answer: "Since January 2025, dependent visa rights are restricted. Only PhD and research-based postgraduate students can bring a spouse or children under the Student Route. Students on taught Master's programmes, undergraduate degrees, or pre-sessional English courses cannot bring dependants. This is a major policy change that affected many Nepali students planning family migration."
  },
  {
    question: "Are education loans available in Nepal for UK study?",
    answer: "Yes. NIC Asia Bank, Nabil Bank, Global IME Bank, and Siddhartha Bank offer education loans ranging NPR 15–75 lakhs at 10–13% annual interest. You need: confirmed university offer letter, property collateral (for larger amounts), and a guarantor. Loan sanction letters can be submitted to UKVI as supplementary financial evidence — but you still need actual liquid funds in a bank account for the 28-day requirement. Loan processing takes 2–4 weeks."
  },
  {
    question: "What is the UK Graduate Route Visa for Nepali students?",
    answer: "The UK Graduate Route Visa lets you stay and work in the UK for 2 years after a Bachelor's or Master's (3 years after PhD). No job offer required — you can work any job, any role, any hours. The National Minimum Wage is £12.71/hour (April 2026). This visa is a stepping stone to the Skilled Worker Visa and eventually Indefinite Leave to Remain (ILR) after 5 years continuous residence. Only available if you studied at a licensed Tier 4 sponsor university."
  },
  {
    question: "What NOC is required for UK student visa from Nepal?",
    answer: "A No Objection Certificate (NOC) from Nepal's Ministry of Education, Science and Technology (MoEST) is mandatory for all Nepali students going to UK. Apply at the MoEST office, Keshar Mahal, Kathmandu with your offer letter and passport copy. Cost: ~NPR 2,000. Processing: 3–7 working days. The NOC is submitted with your UKVI application. Missing this is one of the most common and entirely avoidable rejection reasons for Nepali UK visa applicants."
  },
  {
    question: "How much can I work while studying in UK as a Nepali student?",
    answer: "During term time: 20 hours/week maximum. During official university holidays (summer, winter, Easter): unlimited hours. At the April 2026 National Minimum Wage of £12.71/hour, 20 hrs/week earns approximately £1,016/month (NPR ~1.98 lakhs). This typically covers food (£200–£300/month), transport (£50–£80/month), and personal expenses. Rent (£400–£700/month outside London) still requires family support or savings."
  },
  {
    question: "What are the Chevening Scholarship requirements for Nepali students?",
    answer: "Chevening is the UK Government flagship scholarship — covers full tuition, living expenses (~£1,200/month), flights, and visa fees for a 1-year Master's. Requirements: (1) Nepali citizenship, (2) Bachelor's degree with good grades, (3) 2+ years full-time work experience, (4) IELTS 6.5 minimum with no band below 6.0, (5) Apply to 3 UK universities and secure at least 1 unconditional offer. Applications open July–November each year for courses starting the following September. Roughly 20–30 Chevening awards are given to Nepal per year."
  },
  {
    question: "What is the TB test requirement for UK student visa from Nepal?",
    answer: "All applicants from Nepal applying for a UK visa of 6+ months must provide a Tuberculosis (TB) test certificate from an approved clinic. The test must be done at IOM Nepal (International Organization for Migration), Kamaladi, Kathmandu — the only UKVI-approved clinic in Nepal. Cost: NPR ~4,000–5,000. Results within 3–5 working days. The certificate is valid for 6 months. A private hospital TB test is not accepted — it must be IOM Nepal specifically."
  },
  {
    question: "What is a CAS letter and how do I get one from a UK university?",
    answer: "A Confirmation of Acceptance for Studies (CAS) is a unique reference number issued by your UK university after you accept an unconditional offer and pay the required deposit (usually £1,000–£2,000). You cannot apply for a UK Student Visa without a CAS. It contains your course details, fees, start date, and the university's sponsor licence number. Universities typically issue CAS 1–6 months before your course starts. San Marina coordinates directly with UK university admissions teams to expedite CAS issuance for our students."
  }
];

async function patchFaqs() {
  console.log("Patching UK blog post with 15 FAQs...");
  const res = await fetch(`http://localhost:3000/api/admin/posts/${POST_ID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sanmarina2026",
    },
    body: JSON.stringify({ faq }),
  });
  const data = await res.json();
  if (data.success) {
    console.log(`✅ Updated successfully — ${faq.length} FAQs saved.`);
  } else {
    console.error("❌ Error:", data.error);
  }
}

patchFaqs();
