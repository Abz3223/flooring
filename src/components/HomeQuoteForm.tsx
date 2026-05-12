'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FLOORING_TYPES } from '../constants/services';

// Tight 4-field inline lead form for the homepage. Designed for minimum
// friction: name + phone + email + flooring type. Submits to /api/contact
// which emails the lead via Resend.
export default function HomeQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    flooring_type: '',
    accepted_terms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source_page: 'home' }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || 'Failed to submit');
      }
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        flooring_type: '',
        accepted_terms: false,
      });
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to submit. Please call us at (647) 905-0050.';
      setError(msg);
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-6 bg-white rounded-xl border border-stone-200 shadow-sm">
        <div className="w-16 h-16 bg-gold-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-gold" strokeWidth={2} />
        </div>
        <h3 className="font-serif font-extrabold text-charcoal text-xl mb-2">
          Request Received
        </h3>
        <p className="text-stone-500 text-[0.9375rem]">
          We&apos;ll be in touch within a few hours during business hours. For
          urgent inquiries, call us at <strong className="text-charcoal">(647) 905-0050</strong>.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full border border-stone-200 rounded-lg px-4 py-3 text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors text-[0.9375rem] bg-white';

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 sm:p-6"
    >
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-[0.8125rem] font-bold text-charcoal mb-1.5">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[0.8125rem] font-bold text-charcoal mb-1.5">
            Phone <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            placeholder="(416) 555-0100"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 mt-3 sm:mt-4">
        <div>
          <label htmlFor="email" className="block text-[0.8125rem] font-bold text-charcoal mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="flooring_type" className="block text-[0.8125rem] font-bold text-charcoal mb-1.5">
            Flooring Type
          </label>
          <select
            id="flooring_type"
            name="flooring_type"
            value={formData.flooring_type}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            {FLOORING_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-start gap-2.5 mt-5">
        <input
          type="checkbox"
          name="accepted_terms"
          id="home_quote_accepted_terms"
          checked={formData.accepted_terms}
          onChange={handleChange}
          required
          className="mt-1 flex-shrink-0 w-4 h-4 accent-gold cursor-pointer"
        />
        <label
          htmlFor="home_quote_accepted_terms"
          className="text-xs text-stone-500 leading-relaxed cursor-pointer"
        >
          I agree to be contacted about my flooring project per the{' '}
          <Link href="/privacy" className="text-gold hover:text-gold-hover underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {error && (
        <div className="flex items-start gap-2 text-red-700 text-[0.8125rem] bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 mt-4">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gold hover:bg-gold-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-[0.9375rem] mt-5 min-h-[52px] shadow-sm"
      >
        {submitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4" strokeWidth={2.5} />
            Request Free Estimate
          </>
        )}
      </button>
    </form>
  );
}
