'use client'

import { useState, FormEvent } from 'react'
import type { Metadata } from 'next'

// Note: metadata must be in a separate server component when using 'use client'
// but for simplicity, we export it here anyway — Next.js will handle this
// The actual metadata export is handled server-side; for client components,
// define it in a parent layout or a separate metadata file.

const services = [
  'Hardwood Flooring',
  'Laminate Flooring',
  'Vinyl / LVP Flooring',
  'Tile Flooring',
  'Carpet Installation',
  'Not sure yet',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        const data = await res.json()
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please call us at (647) 905-0050.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get a Free Flooring Estimate</h1>
          <p className="text-xl text-gray-300">
            Fill out the form below and we&apos;ll get back to you within a few hours. Or call us directly at{' '}
            <a href="tel:6479050050" className="text-brand-400 font-semibold hover:text-brand-300">
              (647) 905-0050
            </a>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">&#10003;</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h2>
                <p className="text-green-700">
                  Thank you for reaching out. We typically respond within 2&ndash;4 hours during business hours. We look forward to speaking with you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(647) 555-1234"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Approximate square footage, type of rooms, subfloor info, timeline..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold px-6 py-4 rounded-lg transition-colors text-lg"
                >
                  {status === 'loading' ? 'Sending...' : 'Send My Request'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to be contacted by Toronto Flooring Installers. We respect your privacy.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:6479050050" className="text-brand-600 hover:text-brand-700 text-lg font-semibold">
                  (647) 905-0050
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</p>
                <address className="not-italic text-gray-700">
                  2061 McCowan Rd<br />
                  Scarborough, ON M1S 3Y6
                </address>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Business Hours</p>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>Monday &ndash; Friday: 8:00 AM &ndash; 7:00 PM</p>
                  <p>Saturday: 9:00 AM &ndash; 5:00 PM</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Service Areas</p>
                <p className="text-gray-700 text-sm">
                  Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, Pickering
                </p>
              </div>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Prefer to call?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Most clients find it easiest to describe their project over the phone. We&apos;re happy to answer questions and schedule an estimate in the same call.
              </p>
              <a
                href="tel:6479050050"
                className="block w-full bg-brand-600 text-white font-semibold text-center px-4 py-3 rounded-lg hover:bg-brand-700 transition-colors"
              >
                Call (647) 905-0050
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
