import { faqs } from "../data/global";

export function FAQSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-slate-900">سوالات متداول</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
