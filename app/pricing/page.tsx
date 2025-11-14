import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ketamine Treatment Pricing | Haven Ketamine Newport Beach, CA',
  description: 'Transparent, cash-based pricing for physician-led ketamine therapy in Newport Beach. HSA/FSA accepted. Out-of-network insurance documentation available.',
};

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Clear, straightforward pricing with no hidden fees. We operate as a cash-based practice so we can focus on your care, not insurance paperwork.
          </p>
        </div>
      </section>

      {/* Why Cash-Based Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Why We're Cash-Based
          </h2>
          
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm mb-8">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Haven Ketamine operates as a cash-based practice, meaning we do not bill insurance directly. This allows us to:
            </p>
            
            <ul className="space-y-4 mb-6">
              {[
                'Spend more time with each patient without pressure to rush',
                'Offer personalized treatment plans based on your needs, not insurance restrictions',
                'Avoid the delays and denials that come with insurance authorization processes',
                'Keep pricing transparent and predictable',
                'Focus on quality care rather than billing codes and paperwork',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-700 text-lg leading-relaxed">
              That said, we understand cost is a real concern. Many patients use HSA or FSA funds to cover treatment, and we provide documentation you can submit to your insurance company for possible out-of-network reimbursement.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Treatment Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Initial Evaluation */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Initial Medical Evaluation</h3>
                <div className="text-4xl font-bold text-sky-600 mb-4">$___</div>
              </div>
              <p className="text-slate-600 mb-6">
                Comprehensive assessment with the physician including medical history review, mental health evaluation, medication review, and treatment planning.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>45–60 minute appointment</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Board-certified physician evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized treatment plan</span>
                </li>
              </ul>
            </div>

            {/* Single Infusion */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Single Ketamine Infusion</h3>
                <div className="text-4xl font-bold text-sky-600 mb-4">$___</div>
              </div>
              <p className="text-slate-600 mb-6">
                Individual IV ketamine infusion session with continuous monitoring and physician oversight.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>60–90 minute session</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Private treatment room</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Continuous vital sign monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Physician present throughout</span>
                </li>
              </ul>
            </div>

            {/* 6-Infusion Series */}
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-2xl p-8 border-2 border-sky-400 shadow-lg md:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-bold mb-2">6-Infusion Series Package</h3>
                  <div className="text-4xl font-bold mb-4">$___</div>
                </div>
              </div>
              <p className="text-sky-50 mb-6 text-lg">
                Complete initial treatment series with discounted package pricing. Most patients begin with this option for the best clinical outcomes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>6 ketamine infusions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Scheduled over 2–3 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Discounted package rate</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Progress tracking & follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Physician oversight throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Care coordination support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Add-Ons */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Optional Add-Ons</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border-b sm:border-b-0 sm:border-r border-slate-200 pb-6 sm:pb-0 sm:pr-6">
                <h4 className="font-semibold text-slate-900 mb-2">IV Vitamin Infusions</h4>
                <div className="text-2xl font-bold text-sky-600 mb-3">from $___</div>
                <p className="text-sm text-slate-600">
                  Customized vitamin and mineral infusions to support overall wellness, energy, and recovery.
                </p>
              </div>
              <div className="sm:pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">NAD+ Infusions</h4>
                <div className="text-2xl font-bold text-sky-600 mb-3">from $___</div>
                <p className="text-sm text-slate-600">
                  NAD+ therapy for cellular health, mental clarity, and energy enhancement. Can be combined with ketamine treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Payment Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Credit/Debit Card</h3>
              <p className="text-sm text-slate-600">
                We accept all major credit and debit cards for payment at the time of service.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">HSA / FSA</h3>
              <p className="text-sm text-slate-600">
                Ketamine therapy often qualifies for HSA or FSA reimbursement. Check with your plan administrator.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Insurance Documentation</h3>
              <p className="text-sm text-slate-600">
                We provide detailed superbills you can submit to your insurance for possible out-of-network reimbursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Pricing Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Will my insurance cover ketamine therapy?',
                answer: 'Most insurance plans do not cover ketamine therapy for mental health conditions, as it\'s still considered off-label use. However, some plans may offer partial out-of-network reimbursement. We provide detailed superbills with CPT codes that you can submit to your insurer.',
              },
              {
                question: 'Can I use my HSA or FSA?',
                answer: 'Yes! Many patients successfully use HSA (Health Savings Account) or FSA (Flexible Spending Account) funds to pay for ketamine therapy. Check with your plan administrator to confirm coverage.',
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'At this time, payment is due at the time of service. However, we\'re exploring options for payment plans and will update this information as those become available.',
              },
              {
                question: 'Are there any hidden fees?',
                answer: 'No. The pricing listed above is all-inclusive. There are no facility fees, monitoring fees, or surprise charges. The only additional costs would be optional add-ons (like IV vitamins) that you choose to include.',
              },
              {
                question: 'What if I need more or fewer than 6 infusions?',
                answer: 'Treatment is personalized. Some patients feel better after 4 infusions, while others may need 8–10. The 6-infusion series is the most common starting point based on research, but your physician will adjust based on your response.',
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our waitlist to receive early access to appointments and opening-week pricing information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Join the Waitlist →
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

