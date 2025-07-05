"use client";
import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    // Honeypot check
    if (data.website) {
      setStatus('success'); // Silently succeed
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      
      if (res.ok && result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        // Display the specific error message from the API
        setError(result.error || `Server error (${res.status}): ${res.statusText}`);
      }
    } catch (err) {
      setStatus('error');
      console.error('Contact form submission error:', err);
      setError('Network error: Unable to connect to the server. Please check your internet connection and try again.');
    }
  }

  return (
    <main className={styles.contactMain}>
      <section className={styles.contactSection}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.intro}>
          Let's work together. Reach out using the form below and I'll get back to you within 1–2 business days.
        </p>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off" noValidate>
          <input type="hidden" name="website" tabIndex={-1} autoComplete="off" className={styles.honeypot} />
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name *</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email" required autoComplete="email" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company / Organization</label>
            <input id="company" name="company" type="text" autoComplete="organization" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="reason">Reason for Contact</label>
            <select id="reason" name="reason" required defaultValue="">
              <option value="" disabled>Select a reason</option>
              <option>Consulting</option>
              <option>Fractional Role</option>
              <option>Speaking</option>
              <option>Podcast Collaboration</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required rows={6} minLength={20} maxLength={2000} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="referral">How did you hear about me?</label>
            <input id="referral" name="referral" type="text" />
          </div>
          <div className={styles.formGroupCheckbox}>
            <input id="consent" name="consent" type="checkbox" required />
            <label htmlFor="consent">I agree to be contacted by email</label>
          </div>
          <button className={styles.submitBtn} type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? <span className={styles.spinner} aria-label="Loading" /> : 'Send Message'}
          </button>
          {status === 'success' && <div className={styles.successMsg}>✅ Thanks! I'll be in touch shortly.</div>}
          {status === 'error' && <div className={styles.errorMsg}>{error}</div>}
        </form>
      </section>
    </main>
  );
} 