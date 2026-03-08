import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
const isValidWeb3Key = WEB3FORMS_KEY && WEB3FORMS_KEY.length > 20 && !WEB3FORMS_KEY.includes('YOUR_');
const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@sanmarina.edu.np';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, position, message, resume } = body;

    if (!email || !name || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, position' },
        { status: 400 }
      );
    }

    const resumeNote = resume?.filename ? ` [Resume: ${resume.filename}]` : '';

    // 1. Try Web3Forms
    if (isValidWeb3Key) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Job Application – ${name} for ${position}`,
          from_name: 'San Marina Job Form',
          name,
          email,
          phone,
          position,
          message: (message || 'No message') + resumeNote,
        }),
      });
      const result = await res.json();
      if (result.success) return NextResponse.json({ success: true });
      return NextResponse.json({ error: result.message || 'Failed to send' }, { status: 500 });
    }

    // 2. Fallback: Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const attachments = resume?.content && resume?.filename
          ? [{ filename: resume.filename, content: Buffer.from(resume.content, 'base64') }]
          : undefined;
        const { error } = await resend.emails.send({
          from: 'San Marina <onboarding@resend.dev>',
          to: [TO_EMAIL],
          replyTo: email,
          subject: `Job Application – ${name} for ${position}`,
          html: `<h2>Job Application</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Position:</strong> ${position}</p><p><strong>Message:</strong><br>${message || 'No message'}</p>${resume ? `<p><strong>Resume:</strong> ${resume.filename}</p>` : ''}`,
          attachments,
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
    console.error('Apply API error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to send' },
      { status: 500 }
    );
  }
}
