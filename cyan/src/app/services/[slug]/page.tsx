import { notFound } from "next/navigation";
import { PageHero } from "../../../components/PageHero";
import { LandingSections } from "../../../components/LandingSections";
import { services, landingSections } from "../../../data/global";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const sections = landingSections[service.slug] ?? [];

  return (
    <article>
      <PageHero
        eyebrow="SERVICE"
        title={service.title}
        description={service.description}
        illustration={
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img src={service.heroImage} alt={service.title} className="h-full w-full object-cover" />
          </div>
        }
      />
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-4xl space-y-10 px-4">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">فرآیند همکاری</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {service.processSteps.map((step) => (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">پرسش‌های متداول این خدمت</h2>
            <div className="mt-6 space-y-4">
              {service.faqs.length > 0 ? (
                service.faqs.map((faq) => (
                  <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <summary className="text-sm font-semibold text-slate-900">{faq.question}</summary>
                    <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                  </details>
                ))
              ) : (
                <p className="text-sm text-slate-500">
                  در نسخه وردپرس، آیتم‌های FAQ از تکرارکننده ACF مرتبط با هر خدمت بارگذاری می‌شود. در این دمو لیست نمونه‌ای
                  در فایل داده می‌تواند اضافه شود.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
      {sections.length > 0 && <LandingSections sections={sections} />}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">پروژه بعدی شما چیست؟</h2>
          <p className="mt-4 text-sm text-cyan-100">
            فرم «یه پروژه بساز» در نسخه وردپرس از طریق AJAX به کلاس اختصاصی در `inc/classes` ارسال می‌شود. در Next.js
            می‌توانیم همین جریان را از طریق API Route پیاده کنیم.
          </p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            درخواست جلسه معارفه
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
