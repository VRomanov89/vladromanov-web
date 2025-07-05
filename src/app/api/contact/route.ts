import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL = 'vlad@joltek.com';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Honeypot
    if (data.website) return NextResponse.json({ success: true });
    // Validate required fields
    if (!data.name || !data.email || !data.message || !data.consent) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }
    // Validate message length
    if (data.message.length < 20 || data.message.length > 2000) {
      return NextResponse.json({ error: 'Message length invalid.' }, { status: 400 });
    }
    // Compose email
    const subject = 'New Contact Form Submission – VladRomanov.com';
    const body = `
New contact form submission from vladromanov.com:

Full Name: ${data.name}
Email: ${data.email}
Company/Org: ${data.company || '-'}
Reason: ${data.reason || '-'}
Message: ${data.message}
Referral: ${data.referral || '-'}
Consent: ${data.consent ? 'Yes' : 'No'}
`;
    // Send email
    await resend.emails.send({
      from: EMAIL,
      to: EMAIL,
      subject,
      text: body,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
} 