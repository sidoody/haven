import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Haven Ketamine',
  description: 'Privacy policy for Haven Ketamine, a physician-led ketamine therapy clinic in Irvine, CA.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200 text-center">
            <svg className="w-16 h-16 mx-auto mb-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our comprehensive privacy policy is being finalized and will be available before we open. This page will describe how Haven Ketamine collects, uses, stores, and protects your personal and health information in compliance with HIPAA and California privacy laws.
            </p>
            <p className="text-slate-600 mb-8">
              As a medical practice, we take your privacy and the security of your health information extremely seriously. Our privacy practices will comply with all applicable federal and state laws, including:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-slate-700 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>HIPAA (Health Insurance Portability and Accountability Act)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>CCPA (California Consumer Privacy Act)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>CMIA (California Confidentiality of Medical Information Act)</span>
              </li>
            </ul>
            <p className="text-sm text-slate-500">
              If you have questions about our privacy practices before this page is published, please contact us through our{' '}
              <Link href="/contact" className="text-sky-600 hover:text-sky-700 font-semibold">
                contact page
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block text-sky-600 hover:text-sky-700 font-semibold"
            >
              ← Return to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

