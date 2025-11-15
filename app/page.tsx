import Link from 'next/link';
import WaitlistForm from './components/WaitlistForm';
import HeroEmailSignup from './components/HeroEmailSignup';

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
              addressLocality: 'Newport Beach',
              addressRegion: 'CA',
              postalCode: '92660', // TODO: Add actual postal code
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 33.6189, // TODO: Add actual coordinates
              longitude: -117.9289,
            },
            areaServed: [
              {
                '@type': 'City',
                name: 'Newport Beach',
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
      <section className="relative bg-plaster text-stone-900 overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/images/herobeachimage.jpg)' }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-plaster/60 via-plaster/70 to-plaster"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-sand-300 text-sm mb-8 shadow-soft">
              <span className="w-2 h-2 bg-clay-300 rounded-full animate-pulse"></span>
              <span className="text-brown-700 font-light">Physician-Led Ketamine Therapy · Newport Beach</span>
            </div>

            {/* H1 - Serif font for elegance */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium mb-8 leading-tight text-stone-900">
              A Private Sanctuary for Advanced Mood Care
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-brown-700 mb-6 font-light leading-relaxed">
              Physician-led ketamine therapy for depression, anxiety, PTSD, and chronic stress — in a calm, private setting in Newport Beach.
            </p>

            {/* Body */}
            <p className="text-lg text-stone-900/80 mb-10 leading-relaxed font-light">
              Haven Ketamine is a boutique, physician-run clinic offering evidence-based ketamine infusions in a serene, spa-like environment. Designed for busy professionals and families in Newport Beach, we combine ER-level safety with a premium, peaceful experience.
            </p>

            {/* CTAs */}
            <HeroEmailSignup />

            {/* Trust Line */}
            <div className="flex items-start gap-3 text-sm text-brown-700">
              <svg className="w-5 h-5 text-clay-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-light">Led by a board-certified emergency physician.</span>
            </div>
          </div>
        </div>

        {/* Curved divider at bottom */}
        <div className="curved-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" className="text-white"></path>
          </svg>
        </div>
      </section>

      {/* Who We Help Section */}
      <section id="therapy" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-6">
              For People Who've Tried Everything Else
            </h2>
            <p className="text-lg text-brown-700 max-w-3xl mx-auto font-light leading-relaxed">
              Haven Ketamine is designed for adults who are still struggling despite "doing all the right things" — therapy, medications, lifestyle changes, and willpower. Ketamine therapy may be an option if you're dealing with:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
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
                className="flex items-start gap-3 p-6 rounded-2xl bg-sand-50 border border-sand-200 shadow-soft hover:shadow-soft-md transition-shadow duration-200"
              >
                <svg className="w-6 h-6 text-clay-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-stone-900 font-light">{condition}</span>
              </div>
            ))}
          </div>

          <div className="bg-sand-100 rounded-3xl p-8 lg:p-10 border border-sand-200 shadow-soft">
            <p className="text-stone-900 mb-4 font-light leading-relaxed">
              <strong className="font-medium">We don't replace your primary therapist or psychiatrist.</strong> We work alongside them to add a powerful, fast-acting tool to your treatment plan.
            </p>
            <p className="text-sm text-brown-700 italic font-light">
              Haven Ketamine is not an emergency or crisis service. If you're in immediate danger, call 988 or go to the nearest emergency department.
            </p>
          </div>
        </div>
      </section>

      {/* Why Haven Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sand-50 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-6">
              Why Haven Ketamine Is Different
            </h2>
            <p className="text-xl text-brown-700 font-light">
              Not a strip-mall IV bar. Not a revolving-door clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Physician-led care',
                description: 'Every patient is evaluated and overseen by a board-certified emergency physician with extensive experience using ketamine safely.',
              },
              {
                title: 'Newport Beach location',
                description: 'Convenient to Corona del Mar, Balboa Island, Lido Isle, Dover Shores, and surrounding Orange County areas.',
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
                description: "We don't sell miracles or psychedelic fantasy. We offer structured, medically grounded ketamine therapy.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 lg:p-10 border border-sand-200 shadow-soft hover:shadow-soft-md transition-all duration-200"
              >
                <h3 className="text-xl font-medium text-stone-900 mb-4">{item.title}</h3>
                <p className="text-brown-700 leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="intro-call" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-4">
              How Ketamine Therapy Works at Haven
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {[
              {
                step: '1',
                title: 'Free Intro Call (Optional)',
                description: 'A brief 10–15 minute phone or video call to answer your questions, review whether ketamine might be appropriate, and walk you through the process and pricing.',
              },
              {
                step: '2',
                title: 'Medical Evaluation',
                description: "You'll meet one-on-one with the physician for a comprehensive review of your medical and mental health history, current medications, and goals. Together, you'll decide if ketamine therapy is a good fit.",
              },
              {
                step: '3',
                title: 'Infusion Series',
                description: 'Most patients begin with a short series of IV ketamine infusions over several weeks. Each treatment lasts about 60–90 minutes in a private room with continuous monitoring and a registered nurse (RN) present.',
              },
              {
                step: '4',
                title: 'Integration & Follow-Up',
                description: "After each session, we review how you're feeling, track changes in your symptoms over time, and adjust your plan as needed. When possible, we coordinate with your therapist, psychiatrist, or primary care clinician.",
              },
              {
                step: '5',
                title: 'Ongoing Support',
                description: "If ketamine is helpful for you, we'll discuss options for occasional maintenance infusions and pair them with therapy, lifestyle changes, and other supports so treatment becomes part of a long-term wellness strategy—not a one-off event.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-clay-500 to-terracotta-400 text-white flex items-center justify-center font-semibold text-xl lg:text-2xl shadow-soft-md ring-4 ring-sand-100/50">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-sand-50 rounded-2xl p-6 lg:p-8 border border-sand-200 shadow-soft">
                  <h3 className="text-base lg:text-lg font-semibold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-sm lg:text-base text-stone-700 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center mt-10"
            >
              Get Started — Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sand-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-6">
              Safety Comes First
            </h2>
            <p className="text-lg text-brown-700 max-w-2xl mx-auto font-light">
              Ketamine is a powerful medication. At Haven, it's treated that way.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-sand-200 shadow-soft-md">
            <ul className="space-y-5">
              {[
                'All treatments are administered on-site under direct medical supervision.',
                'You\'ll be continuously monitored with medical-grade equipment (blood pressure, oxygen, heart rate).',
                'Emergency equipment and medications are on hand, similar to a hospital-based setting.',
                'Doses are individualized based on your medical history, response, and current evidence.',
                'We do not send patients home with IV ketamine, and we do not provide unsupervised take-home injectable ketamine.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-clay-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-stone-900 text-lg font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-4">
              Transparent, Cash-Based Pricing
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-sand-50 rounded-3xl p-8 lg:p-12 border border-sand-200 shadow-soft-md mb-8">
              <p className="text-brown-700 text-lg mb-10 leading-relaxed font-light">
                We operate as a cash-based practice so we can spend more time with you and less time fighting insurance. Many patients are able to use HSA or FSA funds, and we can provide documentation to submit to your insurer for possible out-of-network reimbursement.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { item: 'Initial medical evaluation', price: '$350' },
                  { item: 'Single ketamine infusion', price: '$750' },
                  { item: '6-infusion series (recommended)', price: '$3,900' },
                  { item: 'Maintenance infusions', price: '$595' },
                ].map((pricing) => (
                  <div key={pricing.item} className="flex justify-between items-center py-4 border-b border-sand-200 last:border-0">
                    <span className="text-stone-900 font-light">{pricing.item}</span>
                    <span className="font-medium text-stone-900">{pricing.price}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Physician Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sand-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-4">
              Meet the Physician Behind Haven
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-sand-200 shadow-soft-md">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Doctor's Photo Column */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative w-full max-w-sm aspect-square mb-6">
                  <img
                    src="/images/drsiddiqui.jpg"
                    alt="Dr. Saud Siddiqui"
                    className="w-full h-full object-cover rounded-2xl shadow-soft-md"
                  />
                </div>
                <div className="w-full">
                  <p className="font-medium text-stone-900 text-xl mb-6 text-center lg:text-left">Saud Siddiqui, M.D.</p>
                  
                  <ul className="space-y-3">
                    {[
                      'Board-certified in Emergency Medicine (ABEM)',
                      'Fully licensed physician in California',
                      'Background in acute care, procedural sedation, and medical education',
                    ].map((credential) => (
                      <li key={credential} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-clay-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-stone-900 font-light text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Text Content Column */}
              <div>
                <p className="text-brown-700 text-lg mb-6 leading-relaxed font-light">
                  Haven Ketamine is led by <strong className="font-medium">Dr. Saud Siddiqui</strong>, a board-certified emergency medicine physician with extensive experience caring for patients in high-acuity settings and safely using ketamine for procedural sedation. He completed his medical training at UC Irvine and The George Washington University Hospital, a busy Level I trauma center in Washington, D.C., before practicing emergency medicine in Los Angeles.
                </p>
                <p className="text-brown-700 text-lg leading-relaxed font-light">
                  After years in acute care and medical education, Dr. Siddiqui saw how many people continued to struggle despite traditional treatments. He created Haven as a calm, physician-led space where patients can access evidence-based ketamine therapy with hospital-level safety and a boutique, private experience. Education is central to his approach—every patient receives clear guidance, thoughtful conversation, and personalized care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-4">
              Questions People Ask Before Starting
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-5 mb-12">
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
              <div key={faq.question} className="bg-sand-50 rounded-2xl p-6 lg:p-8 border border-sand-200 shadow-soft hover:shadow-soft-md transition-shadow duration-200">
                <h3 className="text-lg font-medium text-stone-900 mb-4">{faq.question}</h3>
                <p className="text-brown-700 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final Waitlist CTA Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-clay-300 text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(/images/crystalcove.jpg)' }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-clay-300/70 via-clay-300/80 to-clay-300/90"></div>
        
        <div className="max-w-2xl mx-auto relative text-center">
          {/* Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6 drop-shadow-lg">
            Join the Waitlist
          </h2>
          <p className="text-lg text-white leading-relaxed font-light drop-shadow-md mb-10">
            Be the first to know when Haven opens in Newport Beach.
          </p>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-soft-lg">
            <WaitlistForm />
          </div>
        </div>

        {/* Curved divider at bottom */}
        <div className="curved-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" className="text-stone-900"></path>
          </svg>
        </div>
      </section>
    </>
  );
}
