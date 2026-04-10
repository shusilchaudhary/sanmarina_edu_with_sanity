"use client";

import { useSearchParams } from "next/navigation";

/**
 * Native HTML form – posts directly to Formsubmit.co (no JavaScript required).
 * First submission sends a verification email to info@sanmarina.edu.np – click the link to activate.
 */
export default function ContactFormNative({
  redirectPath = "/contact/",
}: {
  redirectPath?: string;
}) {
  const searchParams = useSearchParams();
  const submitted = searchParams?.get("submitted") === "1";
  const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@sanmarina.edu.np";
  const nextUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${redirectPath}?submitted=1`
      : `https://www.sanmarina.edu.np${redirectPath}?submitted=1`;

  return (
    <div className="space-y-5">
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-center">
          Thank you! We&apos;ll contact you shortly.
        </div>
      )}
      <form
        action={`https://formsubmit.co/${email}`}
        method="POST"
        className="space-y-5"
      >
        <input
          type="hidden"
          name="_subject"
          value="Consultation Request – San Marina"
        />
        <input type="hidden" name="_next" value={nextUrl} />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="+977 9800000000"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Destination *
            </label>
            <select
              name="destination"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
            >
              <option value="">Select Country</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Europe">Europe</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Intake
            </label>
            <select
              name="intake"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
            >
              <option value="">Select (Optional)</option>
              <option value="Jan/Feb 2026">Jan/Feb 2026</option>
              <option value="Sep/Oct 2026">Sep/Oct 2026</option>
              <option value="2027">2027</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            name="message"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            placeholder="Tell us about your study abroad goals..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#001F3F] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors"
        >
          Book Free Consultation
        </button>
      </form>
    </div>
  );
}
