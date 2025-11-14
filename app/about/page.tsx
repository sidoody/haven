import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Haven Ketamine | Physician-Led Ketamine Therapy in Newport Beach, CA',
  description: 'Learn about Haven Ketamine\'s physician-led approach to ketamine therapy in Newport Beach. Board-certified emergency physician providing evidence-based treatment for depression, anxiety, and PTSD.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Haven Ketamine
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A physician-led ketamine therapy clinic bringing hospital-level safety and evidence-based care to a calm, boutique environment in Newport Beach.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm mb-8">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Haven Ketamine was created out of a simple realization: the people who need mental health support the most are often the ones who've already tried everything. They've been to therapy. They've taken multiple medications. They've changed their diet, started exercising, practiced mindfulness — and they're still suffering.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                As an emergency physician, I've seen firsthand how ketamine can rapidly stabilize patients in crisis. I've also seen how limited our traditional treatment options can be for depression, anxiety, PTSD, and chronic stress. When conventional approaches fail, patients are left feeling hopeless and out of options.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                But ketamine therapy offered a different path — one backed by decades of research and real-world evidence. The challenge was that most ketamine clinics operated like quick-service IV bars or impersonal medical mills. I wanted to create something different: a place that combined the rigorous safety standards of emergency medicine with the calm, supportive environment patients deserve.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                That's how Haven was born. A small, physician-led clinic designed for people in Newport Beach and Orange County who are ready to try something evidence-based, powerful, and different — without compromising on safety or personal care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Physician Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Meet Dr. [Your Name]
          </h2>
          
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200 mb-8">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Dr. [Your Name] is a board-certified emergency medicine physician with extensive experience in acute care, procedural sedation, and managing complex medical situations. He completed [medical school] and [residency program], and has practiced emergency medicine for [X] years.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Throughout his career in emergency medicine, Dr. [Last Name] has safely administered ketamine hundreds of times for everything from pain management to procedural sedation. This deep familiarity with the medication's effects, dosing, and safety profile made him uniquely qualified to offer ketamine therapy for mental health conditions.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              After witnessing too many patients struggle despite &quot;doing everything right,&quot; Dr. [Last Name] founded Haven Ketamine to provide a different kind of treatment option — one that combines cutting-edge research with compassionate, individualized care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Credentials
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Board-certified in Emergency Medicine (ABEM)</li>
                <li>• California medical license</li>
                <li>• [Medical School Name]</li>
                <li>• [Residency Program Name]</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Expertise
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Acute care & emergency medicine</li>
                <li>• Procedural sedation</li>
                <li>• Ketamine administration & safety</li>
                <li>• Crisis intervention</li>
                <li>• Evidence-based medicine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Safety First, Always',
                description: 'Every decision we make starts with safety. From screening to monitoring to follow-up care, we maintain the same rigorous standards you\'d expect in a hospital setting — because ketamine is a powerful medication that demands respect.',
              },
              {
                title: 'Compassionate, Judgment-Free Care',
                description: 'Mental health struggles are hard enough without stigma or judgment. At Haven, you\'ll be treated with empathy, dignity, and respect — no matter where you are in your journey.',
              },
              {
                title: 'Transparency in Everything',
                description: 'From pricing to treatment plans to potential risks and benefits, we believe in honest, clear communication. You\'ll never be pressured, upsold, or kept in the dark about your care.',
              },
              {
                title: 'Evidence-Based Medicine',
                description: 'We follow the science, not the hype. Our protocols are based on current research, clinical guidelines, and years of real-world experience using ketamine safely and effectively.',
              },
              {
                title: 'Collaboration with Your Team',
                description: 'We don\'t believe in isolated treatment. Whenever possible, we work alongside your existing therapist, psychiatrist, or primary care provider to create a comprehensive care plan.',
              },
              {
                title: 'Quality Over Volume',
                description: 'Haven is intentionally small. We\'d rather see fewer patients and give each person the time, attention, and care they deserve than operate as a high-volume clinic.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Physician-Led Matters Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Why Physician-Led Care Matters
          </h2>
          
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Not all ketamine clinics are created equal. Some are run by nurses or physician assistants with minimal physician oversight. Others are staffed by physicians who lack experience with acute care or procedural medications.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              At Haven, every patient is evaluated and treated directly by a board-certified emergency physician — someone who has managed thousands of critically ill patients, performed hundreds of ketamine administrations, and knows how to respond immediately if anything unexpected happens.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              This isn't about ego or credentials for their own sake. It's about making sure you receive the safest, most effective care possible. Ketamine is a powerful tool when used correctly, and at Haven, it always is.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our waitlist to get early access to appointments, opening-week pricing, or schedule a free 10-minute call with Dr. [Last Name] to see if ketamine therapy might be right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Join the Waitlist →
            </Link>
            <Link
              href="/ketamine-therapy"
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Learn About Ketamine Therapy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

