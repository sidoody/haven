import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ketamine Therapy in Irvine, CA | Evidence-Based Infusion Treatment',
  description: 'Learn how ketamine therapy works for depression, anxiety, PTSD, and chronic stress. Physician-led IV ketamine infusions in North Irvine, CA with hospital-level safety standards.',
};

export default function KetamineTherapyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Ketamine Therapy in Irvine, CA
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Evidence-based IV ketamine infusion treatment for depression, anxiety, PTSD, and chronic stress — provided by a board-certified emergency physician in North Irvine.
          </p>
        </div>
      </section>

      {/* What is Ketamine Therapy Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            What Is Ketamine Therapy?
          </h2>
          
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm mb-8">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Ketamine is a medication that has been used safely in hospitals and emergency rooms for over 50 years. Originally developed as an anesthetic, researchers discovered that at lower, sub-anesthetic doses, ketamine can rapidly reduce symptoms of depression, anxiety, PTSD, and chronic stress.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Unlike traditional antidepressants (SSRIs, SNRIs) that work on serotonin or norepinephrine, ketamine works through a completely different mechanism — primarily by modulating glutamate, a key neurotransmitter involved in mood regulation and neural plasticity. This unique mechanism is why ketamine often works when other treatments have failed.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              At Haven Ketamine, we administer ketamine via slow IV infusion in a comfortable, monitored setting. The treatment typically takes 60–90 minutes, and many patients notice improvement within hours to days — significantly faster than conventional medications.
            </p>
          </div>
        </div>
      </section>

      {/* How IV Ketamine Infusions Work Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            How IV Ketamine Infusions Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-200">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Medical Screening</h3>
              <p className="text-slate-600 leading-relaxed">
                Before your first infusion, you&apos;ll meet with the physician for a comprehensive evaluation of your medical history, current medications, mental health history, and treatment goals. Not everyone is a candidate for ketamine therapy, and we&apos;ll make sure it&apos;s safe and appropriate for you.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-200">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">The Infusion Session</h3>
              <p className="text-slate-600 leading-relaxed">
                On treatment day, you&apos;ll relax in a private room with comfortable seating, soft lighting, and a calm atmosphere. A small IV will be placed, and ketamine will be administered slowly over 40–60 minutes. You&apos;ll be monitored continuously (blood pressure, heart rate, oxygen levels) throughout the session.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-200">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">During Treatment</h3>
              <p className="text-slate-600 leading-relaxed">
                Most patients feel relaxed and calm during the infusion. Some experience mild perceptual changes (feeling floaty, dreamlike, or disconnected from surroundings). These effects are temporary and resolve within minutes after the infusion ends. A physician is present throughout to ensure your safety and comfort.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-200">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Recovery & Discharge</h3>
              <p className="text-slate-600 leading-relaxed">
                After the infusion, you&apos;ll rest for 15–30 minutes while the effects wear off. You&apos;ll need someone to drive you home, as you should not drive for the rest of the day. Most people can return to normal activities the next day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Conditions Ketamine May Help
          </h2>
          
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Research and clinical experience suggest that ketamine therapy can be beneficial for several mental health and chronic pain conditions, especially when traditional treatments haven&apos;t worked.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {[
              {
                title: 'Treatment-Resistant Depression',
                description: 'Ketamine has been shown to rapidly reduce symptoms in patients who haven\'t responded to multiple antidepressants. Studies show response rates of 60-70% in treatment-resistant cases.',
              },
              {
                title: 'Severe Anxiety & Panic Disorder',
                description: 'Many patients with generalized anxiety, panic disorder, or social anxiety notice significant improvement in symptoms, often within hours of treatment.',
              },
              {
                title: 'PTSD & Trauma-Related Conditions',
                description: 'Ketamine may help reduce intrusive thoughts, flashbacks, hypervigilance, and other PTSD symptoms — particularly when combined with therapy.',
              },
              {
                title: 'Chronic Stress & Burnout',
                description: 'For patients experiencing severe, persistent stress that impacts daily functioning, ketamine can provide rapid relief and create space for other therapeutic work.',
              },
              {
                title: 'Suicidal Ideation (Non-Emergent)',
                description: 'Research shows ketamine can quickly reduce suicidal thoughts in controlled settings. Haven Ketamine is not an emergency service, but we can work with patients under the care of a psychiatrist or therapist.',
              },
              {
                title: 'Chronic Pain (Select Cases)',
                description: 'Ketamine has shown promise for certain chronic pain conditions, including fibromyalgia, complex regional pain syndrome (CRPS), and neuropathic pain.',
              },
            ].map((condition) => (
              <div
                key={condition.title}
                className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{condition.title}</h3>
                <p className="text-slate-600 leading-relaxed">{condition.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 lg:p-8">
            <p className="text-slate-700 text-lg leading-relaxed">
              <strong className="text-slate-900">Important:</strong> Individual results vary, and ketamine therapy is not appropriate for everyone. During your initial evaluation, we&apos;ll discuss whether you&apos;re a good candidate based on your medical history, current medications, and treatment goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Physician-Led Matters Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Why Physician-Led Ketamine Therapy Matters
          </h2>
          
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm mb-8">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Ketamine is a powerful medication with a strong safety record — when administered correctly. However, not all ketamine providers have the same level of training, experience, or oversight.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              At Haven Ketamine in Irvine, every patient is evaluated and treated directly by a board-certified emergency physician with years of experience using ketamine in high-acuity settings. This means:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Expert Dosing',
                description: 'Your physician understands how to tailor dosing based on your weight, medical history, response, and goals.',
              },
              {
                title: 'Immediate Response',
                description: 'If any complications arise (rare, but possible), a physician is present and trained to respond immediately.',
              },
              {
                title: 'Medical Screening',
                description: 'A thorough evaluation ensures ketamine is safe given your medical history, medications, and conditions.',
              },
              {
                title: 'Continuous Monitoring',
                description: 'Medical-grade monitoring equipment and protocols throughout your treatment, just like in a hospital.',
              },
              {
                title: 'Coordination of Care',
                description: 'Your physician can communicate directly with your psychiatrist, therapist, or primary care provider.',
              },
              {
                title: 'Evidence-Based Protocols',
                description: 'Treatment plans based on current research and clinical guidelines, not marketing hype.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Course Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Typical Treatment Course
          </h2>
          
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Induction Phase (Initial Series)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Most patients begin with a series of <strong>6 infusions over 2–3 weeks</strong>. This initial &quot;induction phase&quot; helps build and stabilize the therapeutic effect. Research suggests that consistent, closely spaced treatments during this phase produce the best outcomes.
              </p>
              <p className="text-slate-600 text-sm italic">
                Example schedule: Monday, Wednesday, Friday for two consecutive weeks.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Maintenance Phase (Optional)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                After the initial series, some patients feel fully better and don&apos;t need further treatment. Others benefit from occasional &quot;booster&quot; infusions every few weeks or months to maintain symptom relief. Your physician will work with you to find the right schedule based on how you respond.
              </p>
              <p className="text-slate-600 text-sm italic">
                Example: One infusion every 4–6 weeks as needed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Integration & Support</h3>
              <p className="text-slate-700 leading-relaxed">
                Ketamine works best when combined with therapy, lifestyle changes, and ongoing mental health support. We strongly encourage working with a therapist or psychiatrist alongside ketamine treatment, and we&apos;ll help coordinate care whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-100 border border-slate-300 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Important Disclaimers</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Ketamine therapy is not a &quot;cure&quot; and does not work for everyone. Individual results vary.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Not everyone is a candidate. Medical screening is required before starting treatment.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Haven Ketamine is not an emergency or crisis service. If you&apos;re in immediate danger, call 988 or visit your nearest emergency department.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Ketamine therapy is most effective when combined with psychotherapy and other mental health supports.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Learn If Ketamine Therapy Is Right for You?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our waitlist for early access to appointments and opening-week pricing, or explore our FAQ to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Join the Waitlist →
            </Link>
            <Link
              href="/faq"
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

