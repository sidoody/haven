import type { Metadata } from 'next';
import WaitlistForm from '../components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Contact Haven Ketamine | Join the Waitlist in Irvine, CA',
  description: 'Contact Haven Ketamine in North Irvine, CA. Join our waitlist for early access to physician-led ketamine therapy for depression, anxiety, PTSD, and chronic stress.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact Haven Ketamine
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get in touch to learn more about our physician-led ketamine therapy in North Irvine, CA
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-10">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600">
                      North Irvine, CA<br />
                      <span className="text-sm text-slate-500">(Exact address coming soon)</span>
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Convenient to Orchard Hills, Northpark, Stonegate, Woodbury, Cypress Village, Eastwood, Portola Springs, and surrounding areas
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">
                      <span className="text-sm text-slate-500">(Coming soon)</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">
                      <span className="text-sm text-slate-500">(Coming soon)</span>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Hours</h3>
                    <p className="text-slate-600 text-sm">
                      Monday – Friday: 9:00 AM – 5:00 PM<br />
                      Saturday & Sunday: Closed<br />
                      <span className="text-slate-500">(By appointment only)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center border border-slate-200">
                <div className="text-center text-slate-500">
                  <svg className="w-16 h-16 mx-auto mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="font-medium">Map coming soon</p>
                  <p className="text-sm">North Irvine location</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Join the Waitlist
              </h2>
              
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">
                  We&apos;re finalizing our space in North Irvine and will be opening soon. Join the waitlist to get early access to appointments, opening-week pricing, or schedule a free 10-minute call with the physician.
                </p>
                <WaitlistForm />
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-sm text-slate-700">
                  <strong className="text-slate-900">Crisis Resources:</strong> Haven Ketamine is not an emergency or crisis service. If you&apos;re in immediate danger or having thoughts of self-harm, please call 988 (Suicide & Crisis Lifeline) or visit your nearest emergency department.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive FAQ or learn more about how ketamine therapy works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faq"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              View FAQ →
            </a>
            <a
              href="/ketamine-therapy"
              className="inline-block bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              About Ketamine Therapy
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

