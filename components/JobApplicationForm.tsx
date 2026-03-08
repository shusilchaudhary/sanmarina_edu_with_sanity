"use client";

import React, { useState, useEffect } from "react";
import { Loader2, CheckCircle2, Briefcase, FileText } from "lucide-react";

interface JobApplicationFormProps {
  defaultPosition?: string;
}

const POSITIONS = [
  { value: "Content Creator", label: "Content Creator" },
  { value: "Europe Counsellor", label: "Europe Counsellor" },
] as const;

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  defaultPosition,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: defaultPosition || "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  useEffect(() => {
    if (defaultPosition) {
      setFormData((prev) => ({ ...prev, position: defaultPosition }));
    }
  }, [defaultPosition]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("message", formData.message);
      if (resumeFile) {
        formDataToSend.append("resume", resumeFile);
      }

      const { submitJobApplication } =
        await import("@/app/career/apply/actions");
      const result = await submitJobApplication(formDataToSend);

      if (result.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: "",
        });
        setResumeFile(null);
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Network error. Please email info@sanmarina.edu.np");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#001F3F] mb-2">
          Apply for This Position
        </h3>
        <p className="text-gray-500 text-sm">
          Fill in your details and we&apos;ll get back to you soon.
        </p>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
          <CheckCircle2 size={20} />
          <span className="font-medium">
            Thank you! We&apos;ll review your application and contact you
            shortly.
          </span>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="_gotcha"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            placeholder="Your full name"
          />
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
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="+977 9800000000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Position Applying For *
          </label>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
          >
            <option value="">Select position</option>
            {POSITIONS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Resume / CV (Optional)
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file && file.size > MAX_FILE_SIZE) {
                setError("Resume must be under 5MB.");
                return;
              }
              setResumeFile(file || null);
              setError(null);
            }}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-[#001F3F] file:font-semibold file:cursor-pointer"
          />
          <p className="mt-1 text-xs text-gray-500">
            PDF, DOC or DOCX. Max 5MB.
          </p>
          {resumeFile && (
            <p className="mt-1 text-sm text-green-600 font-medium flex items-center gap-1">
              <FileText size={14} /> {resumeFile.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cover Letter / Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
            placeholder="Tell us about yourself and why you'd like to join San Marina..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#001F3F] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Briefcase size={20} />
              Submit Application
            </>
          )}
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-500 text-center">
        You can also email your resume to{" "}
        <a
          href="mailto:info@sanmarina.edu.np"
          className="text-[#001F3F] font-semibold hover:underline"
        >
          info@sanmarina.edu.np
        </a>
      </p>
    </div>
  );
};

export default JobApplicationForm;
