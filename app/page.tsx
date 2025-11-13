import Link from 'next/link';
import WaitlistForm from './components/WaitlistForm';

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalClinic',
            name: 'Haven Ketamine',
            description: 'Physician-led ketamine therapy clinic providing safe, evidence-based ketamine infusions for depression, anxiety, PTSD, and chronic stress.',
            url: 'https://havenketamine.com',
            telephone: '+1-XXX-XXX-XXXX', // TODO: Add actual phone number
            email: 'contact@havenketamine.com', // TODO: Add actual email
            medicalSpecialty: 'MentalHealth',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'TBD', // TODO: Add actual address
              addressLocality: 'Irvine',
              addressRegion: 'CA',
              postalCode: '92618', // TODO: Add actual postal code
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 33.7175, // TODO: Add actual coordinates
              longitude: -117.8311,
            },
            areaServed: [
              {
                '@type': 'City',
                name: 'Irvine',
              },
              {
                '@type': 'AdministrativeArea',
                name: 'Orange County',
              },
            ],
            priceRange: '$$',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
              <span>Physician-Led Ketamine Therapy · North Irvine</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Haven for Your Mind in Irvine
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-slate-200 mb-6">
              Physician-led ketamine therapy for depression, anxiety, PTSD, and chronic stress — in a calm, private setting in North Irvine.
            </p>

            {/* Body */}
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Haven Ketamine is a boutique, physician-run clinic offering evidence-based ketamine infusions in a serene, spa-like environment. Designed for busy professionals and families in Irvine, we combine ER-level safety with a premium, peaceful experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#waitlist"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-center"
              >
                Join the Waitlist →
              </a>
              <a
                href="#intro-call"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors text-center"
              >
                Schedule a Free 10-Minute Call
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Led by a board-certified emergency physician with active California and DEA licenses.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              For People Who&apos;ve Tried Everything Else
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Haven Ketamine is designed for adults who are still struggling despite &quot;doing all the right things&quot; — therapy, medications, lifestyle changes, and willpower. Ketamine therapy may be an option if you&apos;re dealing with:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              'Treatment-resistant depression',
              'Severe anxiety or panic',
              'PTSD and trauma-related symptoms',
              'Chronic stress and burnout',
              'Suicidal thoughts (non-emergent)',
              'Chronic pain conditions, in select cases',
            ].map((condition) => (
              <div
                key={condition}
                className="flex items-start gap-3 p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <svg className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{condition}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <p className="text-slate-700 mb-4">
              <strong>We don&apos;t replace your primary therapist or psychiatrist.</strong> We work alongside them to add a powerful, fast-acting tool to your treatment plan.
            </p>
            <p className="text-sm text-slate-500 italic">
              Haven Ketamine is not an emergency or crisis service. If you&apos;re in immediate danger, call 988 or go to the nearest emergency department.
            </p>
          </div>
        </div>
      </section>

      {/* Why Haven Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Haven Ketamine Is Different
            </h2>
            <p className="text-xl text-slate-600">
              Not a strip-mall IV bar. Not a revolving-door clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Physician-led care',
                description: 'Every patient is evaluated and overseen by a board-certified emergency physician with extensive experience using ketamine safely.',
              },
              {
                title: 'North Irvine location',
                description: 'Convenient to Orchard Hills, Northpark, Stonegate, Woodbury, Cypress Village, Eastwood, Portola Springs, and surrounding areas.',
              },
              {
                title: 'Calm, private environment',
                description: 'Two-chair boutique clinic with spa-like design, natural light, and quiet rooms — no crowded waiting areas.',
              },
              {
                title: 'Safety-first protocols',
                description: 'Continuous monitoring, medical-grade equipment, and clear dosing protocols based on current research.',
              },
              {
                title: 'Collaborative approach',
                description: 'We communicate with your existing therapist, psychiatrist, or primary care provider whenever possible.',
              },
              {
                title: 'Evidence-based, not hype',
                description: 'We don&apos;t sell miracles or psychedelic fantasy. We offer structured, medically grounded ketamine therapy.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 p-8 border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="intro-call" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Ketamine Therapy Works at Haven
            </h2>
          </div>

          <div className="space-y-8 mb-10">
            {[
              {
                step: '1',
                title: 'Free Intro Call (Optional)',
                description: 'A brief 10–15 minute phone or video call to answer questions, discuss whether ketamine might be appropriate, and explain the process and pricing.',
              },
              {
                step: '2',
                title: 'Medical Evaluation',
                description: 'You\'ll meet with the physician for a comprehensive assessment of your medical and mental health history, current medications, and treatment goals. Together, you\'ll decide if ketamine therapy is a good fit.',
              },
              {
                step: '3',
                title: 'Infusion Series',
                description: 'Most patients start with a short series of IV ketamine infusions over several weeks. Treatments take about 60–90 minutes in a private room with continuous monitoring and a trained clinician present.',
              },
              {
                step: '4',
                title: 'Integration & Follow-Up',
                description: 'After each session, we review how you\'re feeling, track symptoms over time, and coordinate with your other providers. Some patients benefit from occasional "maintenance" infusions after the initial series.',
              },
              {
                step: '5',
                title: 'Ongoing Support',
                description: 'We\'ll help you build a plan that includes therapy, lifestyle changes, and other supports so ketamine isn\'t a one-off event but part of a comprehensive wellness strategy.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#waitlist"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Get Started – Join the Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Safety Comes First
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ketamine is a powerful medication. At Haven, it&apos;s treated that way.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200">
            <ul className="space-y-4">
              {[
                'All treatments are administered on-site under direct medical supervision.',
                'You\'ll be continuously monitored with medical-grade equipment (blood pressure, oxygen, heart rate).',
                'Emergency equipment and medications are on hand, similar to a hospital-based setting.',
                'Doses are individualized based on your medical history, response, and current evidence.',
                'We do not send patients home with IV ketamine, and we do not provide unsupervised take-home injectable ketamine.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Transparent, Cash-Based Pricing
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm mb-8">
              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                We operate as a cash-based practice so we can spend more time with you and less time fighting insurance. Many patients are able to use HSA or FSA funds, and we can provide documentation to submit to your insurer for possible out-of-network reimbursement.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { item: 'Initial medical evaluation', price: '$___' },
                  { item: 'Single ketamine infusion', price: '$___' },
                  { item: '6-infusion series (discounted package)', price: '$___' },
                  { item: 'Optional IV vitamin or NAD+ add-ons', price: 'from $___' },
                ].map((pricing) => (
                  <div key={pricing.item} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                    <span className="text-slate-700">{pricing.item}</span>
                    <span className="font-semibold text-slate-900">{pricing.price}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/pricing"
                  className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  Request Full Pricing & Availability →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Physician Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Meet the Physician Behind Haven
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200">
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                Haven Ketamine is led by <strong>Dr. [Your Name]</strong>, a board-certified emergency medicine physician with years of experience caring for critically ill patients and managing medications like ketamine in high-acuity settings.
              </p>
              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                After seeing how limited traditional options can be for depression, anxiety, and chronic stress, Dr. [Last Name] created Haven as a calm, physician-led space where patients can access evidence-based ketamine therapy with hospital-level safety and a boutique-level experience.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Board-certified in Emergency Medicine (ABEM)',
                  'Fully licensed in California',
                  'Active DEA registration (Schedule III)',
                  'Background in acute care and procedural sedation',
                ].map((credential) => (
                  <li key={credential} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">{credential}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-block text-sky-600 hover:text-sky-700 font-semibold"
                >
                  Learn more about our approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Questions People Ask Before Starting
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 mb-10">
            {[
              {
                question: 'How is ketamine therapy different from regular antidepressants?',
                answer: 'Traditional antidepressants (like SSRIs) can take 6–8 weeks to work and don\'t work for everyone. Ketamine works through a different mechanism in the brain and many patients notice improvement within hours to days. It\'s often used when traditional treatments haven\'t been effective.',
              },
              {
                question: 'Is ketamine therapy safe?',
                answer: 'When administered by a qualified physician in a medical setting, ketamine is very safe. It has been used in emergency rooms and operating rooms for over 50 years. At Haven, you\'ll be continuously monitored during treatment, and we screen carefully to ensure ketamine is appropriate for you.',
              },
              {
                question: 'Will I be "tripping" or have a psychedelic experience?',
                answer: 'Some patients have mild perceptual changes during the infusion (like feeling floaty or dreamlike), but this is temporary and happens only while the medication is being administered. The goal is therapeutic benefit, not a psychedelic experience. You\'ll be in a calm, safe environment the entire time.',
              },
              {
                question: 'Do I need a referral from my psychiatrist or therapist?',
                answer: 'No formal referral is required, but we strongly encourage open communication with your existing providers. Ketamine works best as part of a comprehensive treatment plan that includes therapy and other supports.',
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-block text-sky-600 hover:text-sky-700 font-semibold text-lg"
            >
              View full FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Final Waitlist CTA Section */}
      <section id="waitlist" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy Side */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Be the First to Know When Haven Opens
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We&apos;re finalizing our space in North Irvine and will be opening our doors soon. If you&apos;d like early access to appointments, opening-week pricing, or a quick call with the physician to see if ketamine therapy makes sense for you, join the waitlist below.
              </p>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
