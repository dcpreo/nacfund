import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  subscribe: z.boolean(),
  agreeTerms: z.literal(true, { errorMap: () => ({ message: 'You must agree to the terms' }) }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = ContactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM ?? 'contact@ieha.fr';
    const toEmail = process.env.CONTACT_EMAIL ?? 'contact@ieha.fr';

    if (!apiKey) {
      console.error('[Contact API] RESEND_API_KEY not set');
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[Contact] ${data.subject}: ${data.name}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
        <p><strong>Subscribe to newsletter:</strong> ${data.subscribe ? 'Yes' : 'No'}</p>
      `,
    });

    if (error) {
      console.error('[Contact API] Resend error:', error);
      return NextResponse.json(
        { message: error.message ?? 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: err.errors[0]?.message ?? 'Validation failed' },
        { status: 400 }
      );
    }
    console.error('[Contact API]', err);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
