'use client';

import { FormEvent, useState } from 'react';
import { addToWaitlist } from '@/lib/supabase';

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      reason: formData.get('reason') as string || undefined,
      source: 'website_waitlist_form',
    };

    try {
      await addToWaitlist(data);
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error type:', typeof error);
      console.error('Error keys:', error ? Object.keys(error) : 'null');
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else if (error && typeof error === 'object' && 'message' in error) {
        setErrorMessage(String(error.message));
      } else {
        setErrorMessage('Failed to join waitlist. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
          placeholder="Your name"
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
          placeholder="Your email"
        />
      </div>

      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
          placeholder="Phone number (optional)"
        />
      </div>

      <div>
        <textarea
          id="reason"
          name="reason"
          rows={3}
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40 resize-none"
          placeholder="What brings you to Haven? (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-terracotta-400 hover:bg-brown-700 text-white font-medium py-4 px-6 rounded-full transition-all duration-200 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-2xl bg-green-50 border border-green-200">
          <p className="text-sm text-green-800 text-center font-light">
            🎉 Thank you! You've been added to our waitlist. We'll be in touch soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
          <p className="text-sm text-red-800 text-center font-light">
            {errorMessage}
          </p>
        </div>
      )}

      <p className="text-xs text-brown-700/70 text-center font-light">
        We'll only contact you about opening dates and scheduling options.
      </p>
    </form>
  );
}

