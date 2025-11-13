import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-3">Haven Ketamine</h3>
            <p className="text-sm text-slate-400">
              Physician-led ketamine therapy in North Irvine, CA
            </p>
          </div>

          {/* Main Pages */}
          <div>
            <h4 className="text-white font-semibold mb-3">Learn More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ketamine-therapy" className="hover:text-white transition-colors">
                  Ketamine Therapy
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-white font-semibold mb-3">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#waitlist" className="hover:text-white transition-colors">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-400 text-center">
          <p>
            &copy; {new Date().getFullYear()} Haven Ketamine. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Haven Ketamine is not an emergency or crisis service. If you&apos;re in immediate danger, call 988 or visit your nearest emergency department.
          </p>
        </div>
      </div>
    </footer>
  );
}

