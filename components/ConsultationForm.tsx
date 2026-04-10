'use client';

import React, { useState } from 'react';
import { ShieldCheck, Loader2, CheckCircle2 } from 'lucide-react';

interface ConsultationFormProps {
  title?: string;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ title = "Book a Free Consultation" }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    intake: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;
    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      // Option 1: Formspree
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `Consultation – ${formData.firstName} ${formData.lastName}`,
            _replyto: formData.email,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            destination: formData.destination || 'Not specified',
            intake: formData.intake || 'Not specified',
            message: formData.message || 'No message',
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && !data.errors) {
          setSuccess(true);
          setFormData({ firstName: '', lastName: '', email: '', phone: '', destination: '', intake: '', message: '' });
          setTimeout(() => setSuccess(false), 5000);
          setLoading(false);
          return;
        }
        const errMsg = data.errors?.[0]?.message || data.error || (res.status === 404 ? 'Invalid form ID. Check Formspree form ID.' : `Error ${res.status}. Call 015922004.`);
        setError(errMsg);
        setLoading(false);
        return;
      }

      // Option 2: Web3Forms
      if (!web3Key) {
        setError('Form not configured. Add NEXT_PUBLIC_FORMSPREE_CONTACT_ID (formspree.io) or NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local');
        setLoading(false);
        return;
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `Consultation – ${formData.firstName} ${formData.lastName} (${formData.destination || 'General'})`,
          botcheck: '',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          destination: formData.destination || 'Not specified',
          intake: formData.intake || 'Not specified',
          message: formData.message || 'No message',
        }),
      });
      const result = await res.json().catch(() => ({}));

      if (result.success) {
        setSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', destination: '', intake: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.message || result.body?.message || result.error || `Error ${res.status}. Call 015922004.`);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Network error. Please call us at 015922004.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#001F3F] mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">Fill in your details and our experts will reach out to you.</p>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
          <CheckCircle2 size={20} />
          <span className="font-medium">Thank you! We&apos;ll contact you shortly.</span>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot for spam */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
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

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Destination *</label>
            <select
              name="destination"
              required
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Intake</label>
            <select
              name="intake"
              value={formData.intake}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            >
              <option value="">Select Intake (Optional)</option>
              <option value="Jan/Feb 2026">Jan/Feb 2026</option>
              <option value="Mar/Apr 2026">Mar/Apr 2026</option>
              <option value="May/Jun 2026">May/Jun 2026</option>
              <option value="Jul/Aug 2026">Jul/Aug 2026</option>
              <option value="Sep/Oct 2026">Sep/Oct 2026</option>
              <option value="2027">2027</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
            placeholder="Tell us about your study abroad goals..."
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
            'Book Free Consultation'
          )}
        </button>
      </form>

      <div className="flex items-center justify-center gap-4 pt-6 text-xs font-medium text-gray-400">
        <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-[#0056b3]" /> Your information is safe</span>
        <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-[#0056b3]" /> Expert guidance only</span>
      </div>
    </div>
  );
};

export default ConsultationForm;
