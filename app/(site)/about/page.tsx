import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Globe,
  CheckCircle2,
  Phone,
  ChevronRight,
  Shield,
  Building2,
  MapPin,
  Star,
  GraduationCap,
  TrendingUp,
  User,
} from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About San Marina | Best Consultancy Nepal",
  description:
    "San Marina: QEAC & PIER certified study abroad consultancy. 1,500+ students placed in Australia, UK, USA, Canada, Japan. 4 branches: Kathmandu, Dang. Free consultation.",
  keywords:
    "about san marina, best education consultancy nepal, study abroad consultancy kathmandu, QEAC certified nepal, PIER qualified consultancy",
  alternates: {
    canonical: "https://www.sanmarina.edu.np/about/",
  },
  openGraph: {
    title: "About San Marina | Best Education Consultancy in Nepal",
    description:
      "QEAC & PIER certified. 1,500+ students placed. 4 branches. Free IELTS & Japanese classes.",
    url: "https://www.sanmarina.edu.np/about/",
  },
};

type TeamMember = {
  id?: string;
  name: string;
  role: string;
  image_url: string;
  branch: string;
  sort_order: number;
  active: boolean;
};
type SiteSetting = { key: string; value: string };

const FALLBACK_MEMBERS: TeamMember[] = [
  {
    name: "Sandip Baraili",
    role: "Chief Operating Officer",
    image_url: "/assets/Sandip_baraili.jpeg",
    branch: "head-office",
    sort_order: 1,
    active: true,
  },
  {
    name: "Sanjay Shrestha",
    role: "Manager",
    image_url: "/assets/sanjay_001.png",
    branch: "head-office",
    sort_order: 2,
    active: true,
  },
  {
    name: "Nita Ghimire",
    role: "Admin",
    image_url: "/assets/nita_miss_01.png",
    branch: "head-office",
    sort_order: 3,
    active: true,
  },
  {
    name: "Sujana Shrestha",
    role: "Counsellor",
    image_url: "/assets/sujana_miss_03.jpeg",
    branch: "baneshwor",
    sort_order: 4,
    active: true,
  },
   {
    name: "Yubraj Khanal",
    role: "Counsellor",
    image_url: "/assets/yubraj_khanal_01.jpeg",
    branch: "head-office",
    sort_order: 1,
    active: true,
  },
  {
    name: "Shreejana Basnet",
    role: "Admission Officer",
    image_url: "/assets/srijana_miss.jpeg",
    branch: "head-office",
    sort_order: 5,
    active: true,
  },
  {
    name: "Sujata Gautam",
    role: "Front Desk Officer",
    image_url: "/assets/sujata_gautam_01.jpeg",
    branch: "head-office",
    sort_order: 6,
    active: true,
  },
 
  {
    name: "Sangeeta Jaishi",
    role: "Receptionist & Content Creator",
    image_url: "/assets/sangeeta.png",
    branch: "baneshwor",
    sort_order: 2,
    active: true,
  },
  {
    name: "Shusil Chaudhary",
    role: "Digital Marketing Officer",
    image_url: "/assets/shusil.png",
    branch: "baneshwor",
    sort_order: 3,
    active: true,
  },
  {
    name: "Shalik",
    role: "Managing Director",
    image_url: "/assets/shalik_02.png",
    branch: "dang",
    sort_order: 1,
    active: true,
  },
  {
    name: "Laxmi Budhathoki",
    role: "Japanese Language Teacher & Counsellor",
    image_url: "/assets/laxmi_budhathoki.png",
    branch: "dang",
    sort_order: 2,
    active: true,
  },
];

const FALLBACK_SETTINGS: Record<string, string> = {
  stat_students: "1,500+",
  stat_universities: "100+",
  stat_branches: "4",
  stat_experience: "2+",
  phone_head_office: "015-922004",
  phone_baneshwor: "015927731",
  phone_dang: "082591130",
  address_head_office: "Tinkune, Kathmandu",
  address_baneshwor: "Beside Sky Bridge, 5th Floor",
  address_dang: "Ghorahi, Dang",
};

async function getData() {
  try {
    const supabase = createServerSupabaseClient();
    const [teamRes, settingsRes] = await Promise.all([
      supabase
        .from("team_members")
        .select("*")
        .eq("active", true)
        .order("branch")
        .order("sort_order"),
      supabase.from("site_settings").select("key, value"),
    ]);
    const members = teamRes.data?.length ? teamRes.data : FALLBACK_MEMBERS;
    const settingsMap: Record<string, string> = { ...FALLBACK_SETTINGS };
    for (const s of settingsRes.data ?? []) settingsMap[s.key] = s.value;
    return { members, settings: settingsMap };
  } catch {
    return { members: FALLBACK_MEMBERS, settings: FALLBACK_SETTINGS };
  }
}

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Student-First Approach",
    description:
      "Your goals and budget come first. We only recommend universities that truly match your profile.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Complete Transparency",
    description:
      "No hidden costs or false promises. We keep you informed at every single step of the process.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Expertise",
    description:
      "Our certified counsellors know exactly how to navigate complex visa rules and help genuine applicants succeed.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Network",
    description:
      "Partnerships with 100+ universities worldwide give you access to the best education opportunities.",
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-lg group-hover:shadow-xl transition-shadow mb-4 relative">
        {member.image_url ? (
          <Image
            src={member.image_url}
            alt={`${member.name} - ${member.role}`}
            width={256}
            height={256}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-300">
            <User size={64} />
          </div>
        )}
      </div>
      <h3 className="font-bold text-[#001F3F] text-center">{member.name}</h3>
      <p className="text-sm text-gray-500 text-center">{member.role}</p>
    </div>
  );
}

const BRANCH_LABELS: Record<string, string> = {
  "head-office": "Head Office",
  baneshwor: "Baneshwor Branch",
  dang: "Dang Branch",
};

export default async function AboutPage() {
  const { members, settings } = await getData();

  const branchOrder = ["head-office", "baneshwor", "dang"];
  const byBranch: Record<string, TeamMember[]> = {};
  for (const m of members) {
    if (!byBranch[m.branch]) byBranch[m.branch] = [];
    byBranch[m.branch].push(m);
  }

  const stats = [
    {
      number: settings.stat_students || "1,500+",
      label: "Students Placed Successfully",
    },
    {
      number: settings.stat_universities || "100+",
      label: "Partner Universities Worldwide",
    },
    { number: settings.stat_branches || "4", label: "Branches Across Nepal" },
    { number: settings.stat_experience || "2+", label: "Years of Experience" },
  ];

  const branches = [
    {
      name: "Head Office",
      location: settings.address_head_office || "Tinkune, Kathmandu",
      phone: settings.phone_head_office || "015-922004",
    },
    {
      name: "Baneshwor Branch",
      location: settings.address_baneshwor || "Beside Sky Bridge, 5th Floor",
      phone: settings.phone_baneshwor || "015927731",
    },
    {
      name: "Dang Branch",
      location: settings.address_dang || "Ghorahi, Dang",
      phone: settings.phone_dang || "082591130",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sanmarina.edu.np/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://www.sanmarina.edu.np/about/",
          },
        ],
      },
      {
        "@type": "Organization",
        name: "San Marina Education Consultancy",
        url: "https://www.sanmarina.edu.np",
        logo: "https://www.sanmarina.edu.np/assets/san_marina_logo.png",
        description:
          "Best education consultancy in Nepal for study abroad. QEAC & PIER certified. 1,500+ students placed. Expert guidance for Australia, UK, USA, Canada, Japan & Europe.",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Tinkune",
            addressRegion: "Kathmandu",
            addressCountry: "NP",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Baneshwor",
            addressRegion: "Kathmandu",
            addressCountry: "NP",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Ghorahi",
            addressRegion: "Dang",
            addressCountry: "NP",
          },
        ],
        telephone: "+977015927731",
        sameAs: [
          "https://www.facebook.com/profile.php?id=61578047634707",
          "https://www.instagram.com/sanmarinaeducation",
          "https://www.linkedin.com/company/san-marina-education-consultancy/",
        ],
        numberOfEmployees: { "@type": "QuantitativeValue", value: 7 },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is San Marina Education Consultancy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "San Marina is a QEAC and PIER certified education consultancy in Nepal. We have placed 1,500+ students in Australia, UK, USA, Canada, Japan, and Europe. We have 4 branches in Kathmandu and Dang",
            },
          },
          {
            "@type": "Question",
            name: "Where are San Marina branches located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "San Marina has 4 branches: Head Office in Tinkune, Kathmandu; Baneshwor, Kathmandu; Ghorahi, Dang;. All offer free consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Is San Marina QEAC certified?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. San Marina is QEAC (Qualified Education Agent Counsellor) certified for Australia and PIER qualified. We maintain high visa success for genuine applicants.",
            },
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
      <section className="relative pt-28 pb-24 min-h-[85vh] flex items-center bg-gradient-to-br from-[#001F3F] via-[#002244] to-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <nav className="text-sm text-blue-200 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">About Us</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">
                  Nepal&apos;s Most Trusted Education Partner
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About San Marina
                <br />
                <span className="text-blue-300">
                  Best Education Consultancy in Nepal
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
                Since our founding, San Marina Education Consultancy has been
                the trusted partner for ambitious Nepali students seeking
                world-class education abroad. We don&apos;t just process
                applications—we build futures.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/consultation/"
                  className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
                >
                  Start Your Journey <ChevronRight size={20} />
                </Link>
                <Link
                  href="/success-stories/"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Success Stories
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                  <Image
                    src="/assets/office_team_01.jpg"
                    alt="San Marina team collaborating at office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#001F3F]">
                      {settings.stat_students || "1,500+"}
                    </p>
                    <p className="text-sm text-gray-600">Students Placed</p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-green-600">High</p>
                    <p className="text-sm text-gray-600">Visa Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              As a leading education consultancy in Nepal, we maintain
              industry-recognised certifications that attest to our expertise
              and credibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "QEAC Certified",
                desc: "Qualified Education Agent Counsellor (Australia)",
              },
              {
                icon: Award,
                title: "PIER Qualified",
                desc: "Professional International Education Resource",
              },
              {
                icon: Building2,
                title: "50+ Australian Partners",
                desc: "Direct university & college partnerships",
              },
              {
                icon: CheckCircle2,
                title: "High Visa Success",
                desc: "For genuine applicants across all destinations",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#001F3F] rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#001F3F]">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-8 lg:p-12 bg-[#001F3F] rounded-3xl text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award size={28} className="text-amber-400" /> Our Mission
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To empower Nepali students with world-class education
                opportunities by providing expert guidance, transparent
                processes, and unwavering support throughout their study abroad
                journey.
              </p>
            </div>
            <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe size={28} className="text-amber-300" /> Our Vision
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To be the most trusted and sought-after education consultancy in
                Nepal, known for our integrity, expertise, and commitment to
                student success on the global stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced counsellors, language instructors, and support staff
              dedicated to your success.
            </p>
          </div>
          {branchOrder.map((branchKey) => {
            const branchMembers = byBranch[branchKey];
            if (!branchMembers?.length) return null;
            return (
              <div key={branchKey} className="mb-16">
                <h3 className="text-2xl font-bold text-[#001F3F] mb-8 text-center border-b pb-4">
                  {BRANCH_LABELS[branchKey]}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {branchMembers.map((member, index) => (
                    <MemberCard key={member.id ?? index} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at San Marina Education
              Consultancy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:bg-white transition-all border border-transparent hover:border-blue-100"
              >
                <div className="w-14 h-14 bg-[#001F3F] rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach – Branches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Our Reach Across Nepal
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four strategically located branches to serve students from every
              region of Nepal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <MapPin className="w-6 h-6 text-[#001F3F] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001F3F]">{branch.name}</h3>
                  <p className="text-gray-600 text-sm">{branch.location}</p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-blue-600 font-semibold text-sm hover:underline mt-1 block"
                  >
                    {branch.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Why Choose San Marina?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nepal&apos;s leading study abroad consultancy—QEAC certified,
              transparent, and dedicated to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Personalised counselling based on your academic profile and budget",
              "Expert guidance for university and course selection",
              "Comprehensive visa documentation support",
              <span key="ielts">
                IELTS preparation &{" "}
                <Link
                  href="/services/test-prep/ielts/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  free IELTS classes
                </Link>{" "}
                at Baneshwor
              </span>,
              <span key="scholarships">
                <Link
                  href="/scholarships/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Scholarship application
                </Link>{" "}
                assistance
              </span>,
              "Pre-departure briefing and support",
              "Post-arrival assistance in destination country",
              "Alumni network access for ongoing support",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-gray-700 font-medium pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-labelledby="about-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="about-faq-heading"
            className="text-3xl font-bold text-[#001F3F] mb-12 text-center"
          >
            About San Marina – FAQ
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                What is San Marina Education Consultancy?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                San Marina is a QEAC and PIER certified education consultancy in
                Nepal. We have placed 1,500+ students in Australia, UK, USA,
                Canada, Japan, and Europe. We have 4 branches in Kathmandu and
                Dang offering free consultation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                Where are San Marina branches located?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                San Marina has 4 branches: Head Office in Tinkune, Kathmandu;
                Baneshwor, Kathmandu; Ghorahi, Dang.{" "}
                <Link
                  href="/contact/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View contact details
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                Is San Marina QEAC certified?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. San Marina is QEAC (Qualified Education Agent Counsellor)
                certified for Australia and PIER qualified. We maintain high
                visa success for genuine applicants across all{" "}
                <Link
                  href="/study-abroad/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  study abroad destinations
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-blue-200 mb-8">
            Book a free consultation with our expert counsellors. No
            obligation—just honest advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/977015927731"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg"
            >
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
