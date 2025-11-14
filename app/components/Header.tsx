'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-sand-50/80 backdrop-blur-md border-b border-sand-200 shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-serif font-medium text-xl text-stone-900 tracking-wide">
            Haven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-brown-700 hover:text-stone-900 transition-colors font-light">
              Home
            </Link>
            <Link href="/about" className="text-brown-700 hover:text-stone-900 transition-colors font-light">
              About
            </Link>
            <Link href="/ketamine-therapy" className="text-brown-700 hover:text-stone-900 transition-colors font-light">
              Therapy
            </Link>
            <Link href="/pricing" className="text-brown-700 hover:text-stone-900 transition-colors font-light">
              Pricing
            </Link>
            <Link href="/faq" className="text-brown-700 hover:text-stone-900 transition-colors font-light">
              FAQ
            </Link>
            <Link href="/contact" className="text-brown-700 hover:text-stone-900 transition-colors font-light">
              Contact
            </Link>
            <Link 
              href="/#waitlist" 
              className="bg-clay-300 hover:bg-terracotta-400 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-stone-900"
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
          <div className="md:hidden py-4 space-y-3 border-t border-sand-200 bg-sand-50/95 backdrop-blur-md rounded-b-2xl">
            <Link href="/" className="block text-brown-700 hover:text-stone-900 py-2 font-light">
              Home
            </Link>
            <Link href="/about" className="block text-brown-700 hover:text-stone-900 py-2 font-light">
              About
            </Link>
            <Link href="/ketamine-therapy" className="block text-brown-700 hover:text-stone-900 py-2 font-light">
              Therapy
            </Link>
            <Link href="/pricing" className="block text-brown-700 hover:text-stone-900 py-2 font-light">
              Pricing
            </Link>
            <Link href="/faq" className="block text-brown-700 hover:text-stone-900 py-2 font-light">
              FAQ
            </Link>
            <Link href="/contact" className="block text-brown-700 hover:text-stone-900 py-2 font-light">
              Contact
            </Link>
            <Link 
              href="/#waitlist" 
              className="block bg-clay-300 hover:bg-terracotta-400 text-white px-6 py-2.5 rounded-full font-medium text-center transition-all duration-200"
            >
              Join Waitlist
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

