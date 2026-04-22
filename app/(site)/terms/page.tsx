import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | San Marina Education Consultancy',
  description: 'Terms and conditions for using San Marina Education Consultancy services. Read our service agreement, disclaimers, and client responsibilities.',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/terms/',
  },
  robots: 'index, follow',
};

export default function TermsPage() {
  const lastUpdated = 'April 2026';

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-[#001F3F] pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-1.5" size={13} />
            <span className="text-white">Terms & Conditions</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
          <p className="text-blue-300 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12 prose prose-lg max-w-none
          prose-headings:text-[#001F3F] prose-headings:font-bold
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-li:text-gray-600">

          <p className="text-gray-500 text-sm bg-blue-50 rounded-xl p-4 not-prose mb-8">
            Please read these Terms and Conditions carefully before using the services of San Marina Education Consultancy. By using our services, you agree to be bound by these terms.
          </p>

          <h2>1. About San Marina Education Consultancy</h2>
          <p>
            San Marina Education Consultancy (&quot;San Marina&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a registered education consultancy based in Nepal, with offices in Kathmandu (Baneshwor), Dang (Ghorahi), and Itahari (Sunsari). We provide study abroad counselling, visa guidance, application assistance, and related educational services to students in Nepal.
          </p>

          <h2>2. Services We Provide</h2>
          <p>San Marina provides the following services to clients:</p>
          <ul>
            <li>Study abroad counselling and destination guidance</li>
            <li>University and college selection assistance</li>
            <li>Application preparation and submission support</li>
            <li>Student visa application guidance (Australia, UK, USA, Canada, Japan, Europe, and others)</li>
            <li>English language test preparation referral (IELTS, PTE, TOEFL)</li>
            <li>Scholarship identification and application support</li>
            <li>Pre-departure briefings and orientation</li>
          </ul>

          <h2>3. No Guarantee of Visa or Admission</h2>
          <p>
            San Marina provides guidance and support throughout the application and visa process. However, <strong>we do not guarantee</strong> university admission, visa approval, or scholarship awards. Final decisions rest solely with the respective universities, institutions, embassies, and government immigration authorities.
          </p>
          <p>
            Visa and admission outcomes depend on individual applicant profiles, documentation, and decisions made by authorities beyond our control. We will always work diligently to present the strongest possible application on your behalf.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>As a client of San Marina, you agree to:</p>
          <ul>
            <li>Provide accurate, truthful, and complete information and documentation</li>
            <li>Inform us immediately of any changes to your personal, academic, or financial circumstances</li>
            <li>Meet all deadlines communicated to you by our team</li>
            <li>Pay agreed service fees in full and on time</li>
            <li>Not submit fraudulent, forged, or misleading documents — doing so may result in visa bans and legal consequences</li>
            <li>Understand that final decisions on visas and admissions are made by third-party authorities</li>
          </ul>

          <h2>5. Fees and Payments</h2>
          <p>
            Service fees vary depending on the destination country, level of study, and services required. All fees will be clearly communicated before any service agreement is signed. Fees once paid are non-refundable unless otherwise agreed in writing. San Marina is not responsible for university application fees, visa fees, health surcharges, or any third-party costs.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            We treat all client information with strict confidentiality. Your personal documents and information will only be shared with universities, embassies, or institutions as necessary to complete your application. We will never sell or share your data with third parties for marketing purposes. Please refer to our{' '}
            <Link href="/privacy-policy/">Privacy Policy</Link> for full details.
          </p>

          <h2>7. Website Use</h2>
          <p>
            The content on this website (sanmarina.edu.np) is provided for general information purposes only. While we strive to keep information accurate and up to date, visa rules, tuition fees, and admission requirements change frequently. Always verify critical information directly with the relevant university or embassy before making decisions.
          </p>
          <p>
            You may not copy, reproduce, or redistribute content from this website without written permission from San Marina Education Consultancy.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites (universities, embassies, scholarship portals). San Marina is not responsible for the content, accuracy, or privacy practices of third-party websites. Links are provided for your convenience only.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, San Marina Education Consultancy shall not be liable for any indirect, incidental, or consequential loss arising from visa refusals, admission rejections, missed deadlines due to client error, or reliance on information provided on this website. Our total liability to any client shall not exceed the service fees paid to us.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes your acceptance of the updated terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of Nepal. Any disputes arising from these terms or our services shall be subject to the jurisdiction of the courts of Nepal.
          </p>

          <h2>12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li><strong>San Marina Education Consultancy</strong></li>
            <li>Baneshwor, Kathmandu, Nepal</li>
            <li>Email: <a href="mailto:yubraj@sanmarina.edu.np">yubraj@sanmarina.edu.np</a></li>
            <li>Phone: <a href="tel:+9779802372605">+977 980-2372605</a></li>
            <li>Website: <Link href="/">www.sanmarina.edu.np</Link></li>
          </ul>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/privacy-policy/" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
          <span className="text-gray-300">·</span>
          <Link href="/contact/" className="text-blue-600 hover:underline font-medium">Contact Us</Link>
          <span className="text-gray-300">·</span>
          <Link href="/" className="text-blue-600 hover:underline font-medium">Home</Link>
        </div>
      </section>
    </main>
  );
}
