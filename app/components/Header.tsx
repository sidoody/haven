'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-semibold text-xl text-slate-900">
            Haven Ketamine
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-slate-700 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="/ketamine-therapy" className="text-slate-700 hover:text-slate-900 transition-colors">
              Ketamine Therapy
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-slate-700 hover:text-slate-900 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <Link 
              href="/#waitlist" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-slate-200">
            <Link href="/about" className="block text-slate-700 hover:text-slate-900 py-2">
              About
            </Link>
            <Link href="/ketamine-therapy" className="block text-slate-700 hover:text-slate-900 py-2">
              Ketamine Therapy
            </Link>
            <Link href="/pricing" className="block text-slate-700 hover:text-slate-900 py-2">
              Pricing
            </Link>
            <Link href="/faq" className="block text-slate-700 hover:text-slate-900 py-2">
              FAQ
            </Link>
            <Link href="/contact" className="block text-slate-700 hover:text-slate-900 py-2">
              Contact
            </Link>
            <Link 
              href="/#waitlist" 
              className="block bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold text-center transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

