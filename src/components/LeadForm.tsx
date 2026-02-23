'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FLOORING_TYPES } from '../constants/services';

interface LeadFormProps {
  sourcePage?: string;
  compact?: boolean;
}

export default function LeadForm({ sourcePage = 'unknown', compact = false }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
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
      setFormData({ name: '', phone: '', email: '', address: '', flooring_type: '', message: '', accepted_terms: false });
    } catch (err) {
      setError('Unable to submit. Please call us directly.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-9 h-9 text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-navy text-xl mb-2">Request Received!</h3>
        <p className="text-gray-600">We'll be in touch within 2 hours during business hours. For urgent inquiries, call us directly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(416) 555-0100"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm"
          />
        </div>
      </div>

      {!compact && (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Property Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St, Toronto"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-1">Flooring Type</label>
            <select
              name="flooring_type"
              value={formData.flooring_type}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm bg-white"
            >
              <option value="">Select flooring type...</option>
              {FLOORING_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-1">Additional Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Square footage, rooms, timeline, etc."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oak/40 focus:border-oak transition-colors text-sm resize-none"
            />
          </div>
        </>
      )}

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="accepted_terms"
          id="accepted_terms"
          checked={formData.accepted_terms}
          onChange={handleChange}
          required
          className="mt-1 flex-shrink-0 accent-oak"
        />
        <label htmlFor="accepted_terms" className="text-xs text-gray-500 leading-relaxed">
          I agree to the{' '}
          <Link href="/terms" className="text-oak hover:underline">Terms of Service</Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-oak hover:underline">Privacy Policy</Link>.
          I consent to being contacted about my flooring project.
        </label>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
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
