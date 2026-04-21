import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | San Marina Education Consultancy Nepal',
  description: 'Privacy Policy of San Marina Education Consultancy. Learn how we collect, use, and protect your personal information when you use our study abroad services.',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/privacy-policy/',
  },
};

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you:
    
• Fill out consultation request or contact forms (name, email, phone number, nationality)
• Submit a job application (resume, cover letter, educational qualifications)
• Subscribe to our newsletter (email address)
• Communicate with us via email, phone, or social media

We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, and time spent on our site through standard web analytics tools.`,
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: `San Marina Education Consultancy uses the information we collect to:

• Respond to your consultation requests and provide study abroad guidance
• Process job applications and contact shortlisted candidates
• Send relevant updates, scholarship alerts, and study abroad news (only if you have opted in)
• Improve the quality and relevance of our website content and services
• Comply with legal obligations and resolve any disputes
• Protect the security of our website and prevent fraud

We do not use your personal information for automated decision-making or profiling.`,
  },
  {
    id: 'information-sharing',
    title: '3. Information Sharing & Disclosure',
    content: `We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:

• **With universities and institutions**: If you give us permission to submit your profile as part of an application process
• **With embassies or visa authorities**: Only when required as part of visa application assistance you have specifically requested
• **With service providers**: Trusted third-party tools (e.g., email delivery services, analytics platforms) that help us operate our website — they are bound by confidentiality
• **Legal requirements**: If required by law, court order, or government authority

All third parties we work with are required to keep your information secure and use it only for the specific purpose for which it was shared.`,
  },
  {
    id: 'data-retention',
    title: '4. Data Retention',
    content: `We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law.

• Consultation inquiry data is typically retained for up to 2 years
• Job application data is retained for 6 months after the application process concludes
• Newsletter subscriber data is retained until you unsubscribe

You may request deletion of your data at any time by contacting us (see Section 7).`,
  },
  {
    id: 'cookies',
    title: '5. Cookies & Tracking',
    content: `Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device. We use:

• **Essential cookies**: Necessary for the website to function correctly
• **Analytics cookies**: Help us understand how visitors interact with our website (e.g., Google Analytics) — collected anonymously
• **Preference cookies**: Remember your preferences for future visits

You can control cookies through your browser settings. Disabling cookies may affect some features of our website. We do not use cookies for advertising or tracking across other websites.`,
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    content: `You have the following rights regarding your personal information:

• **Right to access**: Request a copy of the information we hold about you
• **Right to correction**: Request correction of any inaccurate information
• **Right to deletion**: Request that we delete your personal information, subject to legal obligations
• **Right to withdraw consent**: Withdraw consent for marketing communications at any time by clicking "unsubscribe" in any email or contacting us directly
• **Right to object**: Object to the processing of your data in certain circumstances

To exercise any of these rights, please contact us using the details in Section 7.`,
  },
  {
    id: 'contact',
    title: '7. Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:

• **Email**: info@sanmarina.edu.np
• **Head Office**: Tinkune, Kathmandu, Nepal — 015922004
• **Baneshwor Branch**: Beside Sky Bridge, 5th Floor — 015927731
• **Dang Branch**: Ghorahi, Dang — 082591130
• **Itahari Branch**: Itahari, Sunsari — 980003731

We aim to respond to all privacy-related queries within 5 business days.`,
  },
  {
    id: 'updates',
    title: '8. Updates to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the "Last Updated" date at the top of this page.

We encourage you to review this policy periodically. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Shield className="text-[#001F3F]" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-[#001F3F]">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            <strong>Last Updated:</strong> April 21, 2026 &nbsp;·&nbsp;
            <strong>Effective Date:</strong> April 21, 2026
          </p>
          <p className="mt-5 text-gray-600 leading-relaxed max-w-3xl">
            San Marina Education Consultancy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website <a href="https://www.sanmarina.edu.np" className="text-blue-600 font-semibold hover:underline">sanmarina.edu.np</a> or
            use our consultancy services. Please read this policy carefully.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-sm font-bold text-[#001F3F] uppercase tracking-wider mb-4">Contents</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-14">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#001F3F] mb-4 pb-2 border-b border-gray-200">
                {s.title}
              </h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                {s.content.split('**').map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="text-[#001F3F] font-semibold">{part}</strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Questions About Your Privacy?</h2>
          <p className="text-blue-200 mb-6">Contact us directly and we will be happy to help.</p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
