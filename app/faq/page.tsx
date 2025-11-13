import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ketamine Therapy FAQ | Haven Ketamine Irvine',
  description: 'Common questions about ketamine therapy in Irvine, CA. Learn about safety, candidacy, treatment experience, insurance, and what to expect from physician-led ketamine infusions.',
};

const faqs = [
  {
    question: 'How is ketamine therapy different from regular antidepressants?',
    answer: 'Traditional antidepressants (like SSRIs and SNRIs) work on serotonin and norepinephrine systems and can take 6–8 weeks to show effects. Ketamine works through a completely different mechanism — primarily by modulating glutamate, a key neurotransmitter involved in mood regulation and neural plasticity. Many patients notice improvement within hours to days rather than weeks. Ketamine is often used when traditional treatments haven\'t been effective.',
  },
  {
    question: 'Is ketamine therapy safe?',
    answer: 'When administered by a qualified physician in a medical setting, ketamine is very safe. It has been used in emergency rooms and operating rooms for over 50 years with an excellent safety record. At Haven, you\'ll be continuously monitored during treatment with medical-grade equipment (blood pressure, heart rate, oxygen saturation), and a board-certified emergency physician is present throughout. We screen carefully to ensure ketamine is appropriate for you based on your medical history.',
  },
  {
    question: 'Will I be "tripping" or have a psychedelic experience?',
    answer: 'Some patients have mild perceptual changes during the infusion, such as feeling floaty, dreamlike, or experiencing slight visual distortions. These effects are temporary and only occur while the medication is being administered. The goal is therapeutic benefit, not a psychedelic experience. You\'ll be in a calm, safe, monitored environment the entire time. Most patients describe the experience as relaxing and peaceful.',
  },
  {
    question: 'Do I need a referral from my psychiatrist or therapist?',
    answer: 'No formal referral is required to schedule an evaluation at Haven Ketamine. However, we strongly encourage open communication with your existing mental health providers. Ketamine works best as part of a comprehensive treatment plan that includes therapy and other supports. With your permission, we\'ll coordinate with your psychiatrist, therapist, or primary care physician to ensure everyone is on the same page.',
  },
  {
    question: 'How quickly does ketamine therapy work?',
    answer: 'One of the unique benefits of ketamine is its rapid onset. Many patients notice some improvement within hours to days after their first infusion, though it typically takes several treatments (usually 4–6) to see full, sustained benefits. This is dramatically faster than traditional antidepressants, which often take 6–8 weeks to work. However, individual results vary — not everyone responds the same way or on the same timeline.',
  },
  {
    question: 'Who is a good candidate for ketamine therapy?',
    answer: 'Good candidates typically include adults with treatment-resistant depression (haven\'t responded to multiple medications), severe anxiety, PTSD, chronic stress, or suicidal ideation (non-emergent). You should be under the care of a therapist or psychiatrist, or willing to engage with one. Certain medical conditions (uncontrolled high blood pressure, active substance abuse, psychotic disorders) may make ketamine inappropriate. A thorough medical evaluation is required to determine candidacy.',
  },
  {
    question: 'What does a ketamine infusion feel like?',
    answer: 'Most patients feel relaxed, calm, and slightly drowsy during the infusion. Some experience mild dissociation (feeling separated from your body or surroundings), visual or auditory changes, or a dreamlike state. These effects are dose-dependent and temporary — they resolve within 15–30 minutes after the infusion ends. You\'ll be awake and breathing on your own the entire time. Many patients find the experience pleasant and meditative.',
  },
  {
    question: 'How many treatments will I need?',
    answer: 'Most patients begin with a series of 6 infusions over 2–3 weeks (the "induction phase"). This initial series helps build and stabilize the therapeutic effect. After that, some patients feel fully better and don\'t need further treatment. Others benefit from occasional "booster" infusions every few weeks or months. Your physician will work with you to create a personalized maintenance plan based on your response.',
  },
  {
    question: 'Can I drive after treatment?',
    answer: 'No. You should not drive or operate heavy machinery for at least 12–24 hours after a ketamine infusion. You\'ll need someone to drive you home after your treatment. Plan to rest for the remainder of the day. Most people can return to normal activities (including work) the next day.',
  },
  {
    question: 'Does insurance cover ketamine therapy?',
    answer: 'Most insurance plans do not cover ketamine therapy for mental health conditions, as it\'s still considered off-label use by the FDA. Haven Ketamine operates as a cash-based practice. However, many patients use HSA or FSA funds to pay for treatment, and we provide detailed superbills (with CPT codes) that you can submit to your insurance company for possible out-of-network reimbursement. Coverage varies by plan.',
  },
  {
    question: 'Are there any side effects?',
    answer: 'During treatment, some patients experience mild dissociation, dizziness, nausea, or increased blood pressure. These effects are temporary and resolve quickly after the infusion ends. Long-term side effects are rare when ketamine is used appropriately and under medical supervision. The most common issue is that the therapeutic effects may fade over time, requiring maintenance infusions. Your physician will monitor you closely and adjust your treatment plan as needed.',
  },
  {
    question: 'Can I continue taking my other medications?',
    answer: 'In most cases, yes. Ketamine can be safely combined with most antidepressants, anti-anxiety medications, and mood stabilizers. However, some medications (like benzodiazepines or lamotrigine) may reduce ketamine\'s effectiveness. During your initial evaluation, the physician will review all your current medications and make recommendations. Never stop or change your medications without consulting your prescribing doctor.',
  },
  {
    question: 'Is ketamine addictive?',
    answer: 'Ketamine does have potential for misuse and psychological dependence when used recreationally at high doses. However, when administered at therapeutic doses in a controlled medical setting, the risk of addiction is very low. At Haven, we don\'t prescribe take-home ketamine, and all treatments are given on-site under physician supervision. We screen patients for substance use history and monitor for any signs of problematic use.',
  },
  {
    question: 'What should I do to prepare for treatment?',
    answer: 'Before your first infusion: (1) Eat a light meal 2–3 hours beforehand (don\'t come on an empty stomach, but don\'t eat a heavy meal right before), (2) Arrange for someone to drive you home, (3) Wear comfortable clothing, (4) Avoid alcohol or recreational drugs for at least 24 hours before, (5) Bring a list of your current medications. Your physician will provide specific instructions during your evaluation.',
  },
  {
    question: 'How long do the effects last?',
    answer: 'The immediate effects of ketamine (dissociation, perceptual changes) last only as long as the infusion and wear off within 15–30 minutes after it ends. The therapeutic effects (mood improvement, reduced anxiety) can last days to weeks after a single infusion. With a series of treatments, many patients experience sustained improvement for months. Maintenance infusions help prolong the benefits.',
  },
  {
    question: 'What if ketamine doesn\'t work for me?',
    answer: 'Ketamine doesn\'t work for everyone. Response rates for treatment-resistant depression are around 60–70%, which means 30–40% of patients don\'t see significant improvement. If you don\'t respond after the initial series, your physician will discuss other options and can help coordinate with your mental health providers to adjust your treatment plan. You won\'t be charged for treatments beyond what you\'ve already committed to.',
  },
  {
    question: 'Can I do therapy on the same day as ketamine treatment?',
    answer: 'We don\'t recommend scheduling therapy appointments on the same day as your infusion, as you\'ll need to rest afterward. However, many patients find that ketamine creates a window of improved mood and reduced anxiety that makes therapy more effective in the days and weeks following treatment. Some therapists specialize in "ketamine-assisted psychotherapy" and can work with you around your infusion schedule.',
  },
  {
    question: 'Is Haven Ketamine an emergency service?',
    answer: 'No. Haven Ketamine is not an emergency or crisis service. If you\'re experiencing a psychiatric emergency, having thoughts of immediate self-harm, or in danger, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency department. We provide scheduled, planned ketamine therapy for patients who are stable enough for outpatient treatment.',
  },
];

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Ketamine Therapy FAQ
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Common questions about ketamine therapy at Haven Ketamine in Irvine, CA
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h2>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We&apos;re here to help. Join our waitlist to schedule a free 10-minute call with Dr. [Last Name], or send us a message through our contact form.
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
              className="inline-block bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Contact Us
            </Link>
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
            Explore our comprehensive guide to ketamine therapy or learn about our physician-led approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ketamine-therapy"
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              About Ketamine Therapy
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              About Haven Ketamine
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

