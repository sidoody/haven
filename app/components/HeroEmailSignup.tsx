'use client';

import { FormEvent, useState } from 'react';
import { addToWaitlist } from '@/lib/supabase';

export default function HeroEmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      const element = document.getElementById('contact');
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await addToWaitlist({
        name: 'Quick Signup',
        email,
        source: 'hero_email_signup',
      });
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting hero form:', error);
      console.error('Error details:', { type: typeof error, keys: error ? Object.keys(error) : 'null' });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-5 py-3.5 rounded-full border border-sand-300 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/50 shadow-soft"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      
      {submitStatus === 'success' && (
        <p className="text-sm text-green-700 font-light">
          ✓ Success! Check your email for confirmation.
        </p>
      )}
      
      {submitStatus === 'error' && (
        <p className="text-sm text-red-700 font-light">
          Something went wrong. Please try again or use the form below.
        </p>
      )}
    </form>
  );
}

