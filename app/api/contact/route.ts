import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
const isValidWeb3Key = WEB3FORMS_KEY && WEB3FORMS_KEY.length > 20 && !WEB3FORMS_KEY.includes('YOUR_');
const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@sanmarina.edu.np';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, destination, intake, message } = body;

    if (!email || !firstName || !lastName || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email, phone' },
        { status: 400 }
      );
    }

    // 1. Try Web3Forms (recommended - just works)
    if (isValidWeb3Key) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Consultation – ${firstName} ${lastName} (${destination || 'General'})`,
          from_name: 'San Marina Contact Form',
          name: `${firstName} ${lastName}`,
          email,
          phone,
          destination: destination || 'Not specified',
          intake: intake || 'Not specified',
          message: message || 'No message',
        }),
      });
      const result = await res.json();
      if (result.success) return NextResponse.json({ success: true });
      return NextResponse.json({ error: result.message || 'Failed to send' }, { status: 500 });
    }

    // 2. Fallback: Resend (only works if you signed up with the same recipient email)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
          from: 'San Marina <onboarding@resend.dev>',
          to: [TO_EMAIL],
          replyTo: email,
          subject: `Consultation – ${firstName} ${lastName} (${destination || 'General'})`,
          html: `<h2>Consultation Request</h2><p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Destination:</strong> ${destination || 'Not specified'}</p><p><strong>Intake:</strong> ${intake || 'Not specified'}</p><p><strong>Message:</strong><br>${message || 'No message'}</p>`,
        });
        if (!error) return NextResponse.json({ success: true });
      } catch {
        // fall through
      }
    }

    return NextResponse.json({
      error: 'Form not configured. Get a free Web3Forms key at https://web3forms.com – add WEB3FORMS_ACCESS_KEY to .env.local and restart.',
    }, { status: 500 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to send' },
      { status: 500 }
    );
  }
}
