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
  accepted_terms?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const body: ContactPayload = await request.json();
    const { name, phone, email, address, flooring_type, message, source_page } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const lines = [
      `New Lead Submission — Flooring Installers Toronto`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      address ? `Address: ${address}` : null,
      flooring_type ? `Flooring Type: ${flooring_type}` : null,
      message ? `Message: ${message}` : null,
      source_page ? `Source: ${source_page}` : null,
      ``,
      `Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} EST`,
    ].filter(Boolean).join('\n');

    const { error } = await resend.emails.send({
      from: 'Flooring Installers Toronto <noreply@resend.dev>',
      to: 'abduljaafar10@gmail.com',
      subject: `New Flooring Lead: ${name} — ${phone}`,
      text: lines,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
