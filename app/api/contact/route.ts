import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Name, email, and service are required fields.' },
        { status: 400 }
      )
    }

    const emailBody = `
New flooring enquiry from flooringinstallerstoronto.com

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Requested: ${service}

Message:
${message || 'No additional message provided.'}

---
This lead was submitted via the contact form at flooringinstallerstoronto.com
    `.trim()

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['abduljaafar10@gmail.com'],
      subject: `New Lead from Toronto Flooring Website - ${name}`,
      text: emailBody,
      reply_to: email,
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
