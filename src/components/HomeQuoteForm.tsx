'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Send, CircleAlert as AlertCircle } from 'lucide-react';
import { FLOORING_TYPES } from '../constants/services';
import { HONEYPOT_FIELD } from '../lib/spam-check';
import HoneypotField from './HoneypotField';

// Inline lead form for the homepage: name + phone + email + flooring type,
// plus an optional "how did you hear about us" (lead-source attribution).
// Submits to /api/contact, which emails the lead via Resend.
export default function HomeQuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    flooring_type: '',
    heard_about: '',
    accepted_terms: false,
  });
  // Set on mount (client only) so the API can tell a person from a script
  // that posts instantly. See src/lib/spam-check.ts.
  const mountedAt = useRef<number | null>(null);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);
  const [submitting, setSubmitting] = useState(false);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trap = new FormData(e.currentTarget).get(HONEYPOT_FIELD);
    const elapsed_ms = mountedAt.current ? Date.now() - mountedAt.current : null;
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source_page: 'home',
          elapsed_ms,
          [HONEYPOT_FIELD]: typeof trap === 'string' ? trap : '',
        }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || 'Failed to submit');
      }
      router.push('/thank-you');
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

  const inputClass =
    'w-full border border-stone-200 rounded-lg px-4 py-3 text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors text-[0.9375rem] bg-white';

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-white rounded-xl border border-stone-200 shadow-sm p-5 sm:p-6"
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

      <div className="mt-3 sm:mt-4">
        <label htmlFor="heard_about" className="block text-[0.8125rem] font-bold text-charcoal mb-1.5">
          How did you hear about us? <span className="font-normal text-stone-500">(optional)</span>
        </label>
        <input
          id="heard_about"
          type="text"
          name="heard_about"
          value={formData.heard_about}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Google, a friend, ChatGPT..."
          className={inputClass}
        />
      </div>

      <HoneypotField />

      <div className="flex items-start gap-2.5 mt-5">
        <input
          type="checkbox"
          name="accepted_terms"
          id="home_quote_accepted_terms"
          checked={formData.accepted_terms}
          onChange={handleChange}
          required
          // 24px minimum touch target. Was 16px (w-4 h-4) and is a REQUIRED
          // field gating submission, on a page where ~55% of sessions are mobile.
          className="mt-0.5 flex-shrink-0 w-6 h-6 accent-gold cursor-pointer"
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
        <div role="alert" className="flex items-start gap-2 text-red-700 text-[0.8125rem] bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 mt-4">
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
