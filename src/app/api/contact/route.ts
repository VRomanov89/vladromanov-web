import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Check if API key is configured
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL = 'vlad@joltek.com';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Honeypot check
    if (data.website) {
      return NextResponse.json({ success: true });
    }
    
    // Validate required fields with specific messages
    if (!data.name?.trim()) {
      return NextResponse.json({ 
        error: 'Name is required. Please enter your full name.' 
      }, { status: 400 });
    }
    
    if (!data.email?.trim()) {
      return NextResponse.json({ 
        error: 'Email address is required. Please enter a valid email address.' 
      }, { status: 400 });
    }
    
    if (!data.message?.trim()) {
      return NextResponse.json({ 
        error: 'Message is required. Please enter your message.' 
      }, { status: 400 });
    }
    
    if (!data.consent) {
      return NextResponse.json({ 
        error: 'You must agree to be contacted by email to submit this form.' 
      }, { status: 400 });
    }
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ 
        error: 'Please enter a valid email address (e.g., yourname@example.com).' 
      }, { status: 400 });
    }
    
    // Validate message length
    if (data.message.length < 20) {
      return NextResponse.json({ 
        error: 'Message is too short. Please enter at least 20 characters.' 
      }, { status: 400 });
    }
    
    if (data.message.length > 2000) {
      return NextResponse.json({ 
        error: 'Message is too long. Please keep your message under 2000 characters.' 
      }, { status: 400 });
    }
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ 
        error: 'Email service is not configured. Please contact the site administrator.' 
      }, { status: 500 });
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

---
Sent from vladromanov.com contact form
`;
    
    // Send email
    try {
      await resend.emails.send({
        from: EMAIL,
        to: EMAIL,
        subject,
        text: body,
      });
      
      return NextResponse.json({ success: true });
    } catch (emailError: any) {
      console.error('Resend email error:', emailError);
      
      // Handle specific Resend errors
      if (emailError?.message?.includes('API key')) {
        return NextResponse.json({ 
          error: 'Email service configuration error. Please contact the site administrator.' 
        }, { status: 500 });
      }
      
      if (emailError?.message?.includes('rate limit')) {
        return NextResponse.json({ 
          error: 'Too many requests. Please wait a moment and try again.' 
        }, { status: 429 });
      }
      
      return NextResponse.json({ 
        error: 'Failed to send email. Please try again later or contact us directly.' 
      }, { status: 500 });
    }
    
  } catch (err) {
    console.error('Contact form error:', err);
    
    // Handle JSON parsing errors
    if (err instanceof SyntaxError) {
      return NextResponse.json({ 
        error: 'Invalid request format. Please refresh the page and try again.' 
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      error: 'Server error. Please try again later or contact us directly.' 
    }, { status: 500 });
  }
} 