import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
    const body: ContactPayload = await request.json();
    const { name, phone, email, address, flooring_type, message, source_page, accepted_terms } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const { error: dbError } = await supabase.from('leads').insert({
      name,
      phone,
      email: email || null,
      address: address || null,
      flooring_type: flooring_type || null,
      message: message || null,
      source_page: source_page || null,
      accepted_terms: accepted_terms ?? false,
      consent_timestamp: new Date().toISOString(),
    });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
    }

    if (resend) {
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

      const { error: emailError } = await resend.emails.send({
        from: 'Flooring Installers Toronto <onboarding@resend.dev>',
        to: 'abduljaafar10@gmail.com',
        subject: `New Flooring Lead: ${name} — ${phone}`,
        text: lines,
      });

      if (emailError) {
        console.error('Resend error:', emailError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
