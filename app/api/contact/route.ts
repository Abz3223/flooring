import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Lead-notification handler. Accepts a flexible set of fields from any of
// the site's forms (HomeQuoteForm, LeadForm, ContactForm) and emails the
// owner via Resend. Requires name + at least one of phone/email.
export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Contact API: RESEND_API_KEY env var is not set')
    return NextResponse.json(
      { error: 'Email service is not configured. Please call us at (647) 905-0050.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      flooring_type,
      service, // legacy field name from older forms
      address,
      message,
      source_page,
    } = body

    const serviceLabel = flooring_type || service || 'Not specified'

    // Require name and at least one contact channel.
    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Name and either a phone number or email address are required.' },
        { status: 400 }
      )
    }

    const emailBody = `
New flooring enquiry from flooringinstallerstoronto.com

Name: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}
Property Address: ${address || 'Not provided'}
Flooring Type: ${serviceLabel}
Source Page: ${source_page || 'unknown'}

Message:
${message || 'No additional message provided.'}

---
This lead was submitted via the contact form at flooringinstallerstoronto.com
    `.trim()

    const { data, error } = await resend.emails.send({
      // TODO: After domain verification in Resend, switch to noreply@flooringinstallerstoronto.com
      from: 'onboarding@resend.dev',
      to: ['abduljaafar10@gmail.com'],
      subject: `New Lead from Toronto Flooring Website - ${name}`,
      text: emailBody,
      reply_to: email || undefined,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please call us at (647) 905-0050.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please call us at (647) 905-0050.' },
      { status: 500 }
    )
  }
}
