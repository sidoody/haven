'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-stone-900 text-sand-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-serif font-medium text-xl mb-3 tracking-wide">Haven</h3>
            <p className="text-sm text-sand-300 font-light leading-relaxed">
              Physician-led ketamine therapy in Newport Beach, CA
            </p>
          </div>

          {/* Main Pages */}
          <div>
            <h4 className="text-sand-100 font-medium mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('therapy')}
                  className="text-sand-300 hover:text-sand-100 transition-colors font-light text-left"
                >
                  Ketamine Therapy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-sand-300 hover:text-sand-100 transition-colors font-light text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sand-300 hover:text-sand-100 transition-colors font-light text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-sand-300 hover:text-sand-100 transition-colors font-light text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sand-300 hover:text-sand-100 transition-colors font-light text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sand-100 font-medium mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-sand-300 hover:text-sand-100 transition-colors font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sand-300 hover:text-sand-100 transition-colors font-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brown-700/30 text-sm text-sand-300 text-center">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Haven Ketamine. All rights reserved.
          </p>
          <p className="mt-3 text-xs text-sand-300/80 max-w-2xl mx-auto font-light">
            Haven Ketamine is not an emergency or crisis service. If you're in immediate danger, call 988 or visit your nearest emergency department.
          </p>
        </div>
      </div>
    </footer>
  );
}

