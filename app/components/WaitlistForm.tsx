'use client';

import { useState } from 'react';
import { joinWaitlist } from '@/app/actions/waitlist';

export default function WaitlistForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    formData.append('source', 'website_form');
    
    const result = await joinWaitlist(formData);
    
    if (result.success) {
      setStatus('success');
      setMessage('Thank you! You\'ve been added to our waitlist.');
    } else {
      setStatus('error');
      setMessage(result.error || 'Something went wrong');
    }
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone number (optional)"
        className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
      />

      <textarea
        name="reason"
        rows={3}
        placeholder="What brings you to Haven? (optional)"
        className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40 resize-none"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-terracotta-400 hover:bg-brown-700 text-white font-medium py-4 px-6 rounded-full transition-all duration-200 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-green-700 text-center">✓ {message}</p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-700 text-center">{message}</p>
      )}

      <p className="text-xs text-brown-700/70 text-center font-light">
        We'll only contact you about opening dates and scheduling options.
      </p>
    </form>
  );
}

