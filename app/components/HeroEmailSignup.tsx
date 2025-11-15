'use client';

import { useState } from 'react';
import { joinWaitlist } from '@/app/actions/waitlist';

export default function HeroEmailSignup() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    formData.append('name', 'Quick Signup');
    formData.append('source', 'hero');
    
    const result = await joinWaitlist(formData);
    setStatus(result.success ? 'success' : 'error');
  }

  return (
    <form action={handleSubmit} className="space-y-3 mb-8">
      <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-5 py-3.5 rounded-full border border-sand-300 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/50 shadow-soft"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap cursor-pointer disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      {status === 'success' && (
        <p className="text-sm text-green-700">✓ Success! We'll be in touch.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-700">Error. Please try the form below.</p>
      )}
    </form>
  );
}

