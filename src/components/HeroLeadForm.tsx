'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { FLOORING_TYPES } from '../constants/services';
import Link from 'next/link';

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            flooring_type: formData.flooring_type,
            message: formData.message,
            source_page: sourcePage,
            status: 'new',
            consent_to_share: true,
            accepted_terms: formData.accepted_terms,
            accepted_privacy: formData.accepted_terms,
            consent_timestamp: new Date().toISOString(),
            terms_version: '1.0',
          },
        ]);

      if (insertError) throw insertError;

      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-lead-notification`;
        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            flooring_type: formData.flooring_type,
            message: formData.message,
            source_page: sourcePage,
          }),
        });
      } catch (emailError) {
        console.error('Email notification error:', emailError);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        flooring_type: '',
        message: '',
        accepted_terms: false,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError('Failed to submit form. Please try again or call us directly.');
      console.error('Form submission error:', errorMessage, err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <Send className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-heading font-bold text-navy mb-2">Thank You!</h3>
        <p className="text-gray-700 text-sm mb-3">
          We'll call you back soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-oak hover:text-oak-dark font-semibold text-sm"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-oak focus:outline-none transition-colors text-navy text-base"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-oak focus:outline-none transition-colors text-navy text-base"
          placeholder="1 (647) 905-0050"
        />
      </div>

      <div>
        <label htmlFor="flooring_type" className="block text-sm font-semibold text-navy mb-1.5">
          Flooring Type
        </label>
        <select
          id="flooring_type"
          name="flooring_type"
          value={formData.flooring_type}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-oak focus:outline-none transition-colors bg-white text-navy text-base"
        >
          <option value="">Select Flooring Type</option>
          {FLOORING_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Project Description (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-oak focus:outline-none transition-colors resize-none text-navy text-base"
          placeholder="Tell us about your flooring project..."
        />
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="accepted_terms"
          name="accepted_terms"
          checked={formData.accepted_terms}
          onChange={handleChange}
          required
          className="mt-0.5 w-5 h-5 text-oak border-2 border-gray-300 rounded focus:ring-oak focus:ring-2 flex-shrink-0"
        />
        <label htmlFor="accepted_terms" className="text-xs text-gray-700 leading-snug">
          I agree to the{' '}
          <Link href="/terms" target="_blank" className="text-oak hover:underline font-semibold">Terms</Link>
          {' '}and{' '}
          <Link href="/privacy" target="_blank" className="text-oak hover:underline font-semibold">Privacy Policy</Link>. *
        </label>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-red-700 text-xs">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || !formData.accepted_terms}
        className="w-full bg-oak hover:bg-oak-light disabled:bg-gray-400 disabled:cursor-not-allowed text-navy font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] min-h-[48px]"
      >
        {submitting ? (
          <span>Submitting...</span>
        ) : (
          <>
            <span>Request Callback</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        By submitting, you consent to being contacted and allow us to share your information with a local contractor.
      </p>
    </form>
  );
}
