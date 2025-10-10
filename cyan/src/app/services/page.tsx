import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { Breadcrumb } from "../../components/Breadcrumb";
import { services } from "../../data/global";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "خدمات سایان" }]} />
      </div>
      <PageHero
        eyebrow="SERVICES"
        title="خدمات سایان"
        description="در نسخه وردپرس، این صفحه از بایگانی `service` با فیلدهای ACF برای آیکون و توضیحات تشکیل شده است."
      />
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="text-cyan-500">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600">
                  مشاهده جزئیات
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
