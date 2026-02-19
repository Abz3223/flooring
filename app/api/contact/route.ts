import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  flooring_type?: string;
  message?: string;
  source_page?: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body: ContactPayload = await request.json();

    const {
      name,
      phone,
      email,
      address,
      flooring_type,
      message,
      source_page,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const emailBody = `
New Lead Submission

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
${address ? `Address: ${address}` : ''}
${flooring_type ? `Flooring Type: ${flooring_type}` : ''}
${message ? `Message: ${message}` : ''}
${source_page ? `Source: ${source_page}` : ''}
Submitted: ${new Date().toISOString()}
    `.trim();

    const response = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'abduljaafar10@gmail.com',
      subject: `New Flooring Lead: ${name}`,
      text: emailBody,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: response.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
