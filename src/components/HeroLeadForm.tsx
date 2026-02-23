'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FLOORING_TYPES } from '../constants/services';

interface HeroLeadFormProps {
  sourcePage?: string;
}

export default function HeroLeadForm({ sourcePage = 'hero' }: HeroLeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    flooring_type: '',
    message: '',
    accepted_terms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
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
        body: JSON.stringify({ ...formData, source_page: sourcePage }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || 'Failed to submit');
      }
      setSubmitted(true);
      setFormData({ name: '', phone: '', flooring_type: '', message: '', accepted_terms: false });
    } catch (err) {
      setError('Unable to submit. Please call us directly.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-navy text-lg mb-1">Request Received!</h3>
        <p className="text-gray-500 text-sm">We'll call you back within 2 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Full Name *"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number *"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm"
        />
      </div>
      <div>
        <select
          name="flooring_type"
          value={formData.flooring_type}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm bg-white"
        >
          <option value="">Flooring Type (optional)</option>
          {FLOORING_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={2}
          placeholder="Project details (optional)"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm resize-none"
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          type="checkbox"
          name="accepted_terms"
          id="hero_terms"
          checked={formData.accepted_terms}
          onChange={handleChange}
          required
          className="mt-0.5 flex-shrink-0 accent-oak"
        />
        <label htmlFor="hero_terms" className="text-xs text-gray-500 leading-relaxed">
          I agree to the{' '}
          <Link href="/terms" className="text-oak hover:underline">Terms</Link> &amp;{' '}
          <Link href="/privacy" className="text-oak hover:underline">Privacy Policy</Link>
        </label>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 rounded-lg px-3 py-2">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-oak hover:bg-oak-light disabled:opacity-60 text-navy font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
      >
        {submitting ? 'Sending...' : (
          <>
            <Send className="w-4 h-4" />
            Request Free Estimate
          </>
        )}
      </button>
    </form>
  );
}
