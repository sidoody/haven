'use client';

import { FormEvent } from 'react';

export default function WaitlistForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Integrate with backend service (Formspree, API route, etc.)
    console.log('Form submitted - TODO: implement backend integration');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-900 mb-2">
          Name <span className="text-terracotta-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-900 mb-2">
          Email <span className="text-terracotta-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-900 mb-2">
          Phone <span className="text-brown-700/60 text-xs font-light">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition font-light text-stone-900 placeholder:text-brown-700/40"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-900 mb-2">
          What are you hoping ketamine might help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-clay-300 focus:border-clay-300 outline-none transition resize-none font-light text-stone-900 placeholder:text-brown-700/40"
          placeholder="Feel free to share as much or as little as you're comfortable with..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-terracotta-400 hover:bg-brown-700 text-white font-medium py-4 px-6 rounded-full transition-all duration-200 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5"
      >
        Join the Waitlist
      </button>

      <p className="text-xs text-brown-700/70 text-center font-light">
        No spam. No commitment. We'll only contact you about opening dates and scheduling options.
      </p>
    </form>
  );
}

