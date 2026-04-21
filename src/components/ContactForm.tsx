'use client'

import { useState, FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const flooringServices = [
  'Hardwood Flooring',
  'Laminate Flooring',
  'Vinyl / LVP Flooring',
  'Tile Flooring',
  'Carpet Installation',
  'Not sure yet',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
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
        setFormData({ name: '', email: '', phone: '', address: '', service: '', message: '' })
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

  const inputClass =
    'w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-charcoal text-[0.9375rem] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors'

  const labelClass = 'block font-sans font-medium text-charcoal text-[0.8125rem] mb-1.5'

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-white border border-stone-200 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-gold-muted rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Request Sent</h2>
                <p className="text-stone-500 text-[0.9375rem] leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. We typically respond within 2&ndash;4 hours during business hours and will confirm your estimate appointment by phone.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(647) 555-1234"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="address" className={labelClass}>
                    Property Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Toronto, ON"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Flooring Type <span className="text-gold">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    {flooringServices.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Approximate square footage, rooms involved, current subfloor, timeline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-[0.875rem]">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold hover:bg-gold-hover disabled:opacity-60 text-white font-semibold text-[0.9375rem] px-6 py-4 rounded-lg transition-colors"
                >
                  {status === 'loading' ? 'Sending...' : 'Request a Free Estimate'}
                </button>

                <p className="text-stone-400 text-[0.75rem] text-center">
                  By submitting, you agree to be contacted by Toronto Flooring Installers. We respect your privacy and will not share your information.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-5">
              <h2 className="font-serif text-[1.25rem] text-charcoal">Contact Information</h2>

              <a href="tel:+16479050050" className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 bg-gold-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-sans font-medium text-charcoal text-[0.9375rem] group-hover:text-gold transition-colors">
                    (647) 905-0050
                  </p>
                  <p className="text-stone-400 text-[0.8125rem] mt-0.5">Call or text anytime</p>
                </div>
              </a>

              <a href="mailto:info@flooringinstallerstoronto.com" className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 bg-gold-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-sans font-medium text-charcoal text-[0.9375rem] group-hover:text-gold transition-colors break-all">
                    info@flooringinstallerstoronto.com
                  </p>
                  <p className="text-stone-400 text-[0.8125rem] mt-0.5">We respond same day</p>
                </div>
              </a>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-gold-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-sans font-medium text-charcoal text-[0.9375rem]">
                    2061 McCowan Rd
                  </p>
                  <p className="text-stone-500 text-[0.875rem] mt-0.5">Scarborough, ON M1S 3Y6</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-gold-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-sans font-medium text-charcoal text-[0.9375rem]">Business Hours</p>
                  <div className="text-stone-500 text-[0.8125rem] mt-1.5 space-y-1">
                    <p>Monday &ndash; Friday: 8:00 AM &ndash; 7:00 PM</p>
                    <p>Saturday: 9:00 AM &ndash; 5:00 PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal rounded-2xl p-6">
              <h3 className="font-serif text-[1.125rem] text-stone-50 mb-2">Prefer to call?</h3>
              <p className="text-stone-400 text-[0.875rem] leading-relaxed mb-4">
                Most homeowners find it easier to describe their project over the phone. We can answer questions and schedule an estimate in the same call.
              </p>
              <a
                href="tel:+16479050050"
                className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-hover text-white font-semibold text-[0.9375rem] px-5 py-3.5 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                Call (647) 905-0050
              </a>
            </div>

            <div className="bg-stone-100 rounded-2xl p-5">
              <p className="font-sans font-medium text-charcoal text-[0.875rem] mb-2">Service Areas</p>
              <p className="text-stone-500 text-[0.8125rem] leading-relaxed">
                Toronto, Scarborough, North York, Vaughan, Markham, Mississauga &amp; Pickering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
