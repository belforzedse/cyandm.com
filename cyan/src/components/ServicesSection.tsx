import Link from "next/link";
import { services } from "../data/global";

export function ServicesSection() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">SERVICES</p>
            <h2 className="mt-2 text-3xl font-bold text-white">خدمات سایان</h2>
          </div>
          <Link href="/services" className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-300">
            مشاهده خدمات
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-cyan-100">{service.description}</p>
                <ul className="space-y-2 text-sm text-cyan-100">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span aria-hidden className="text-cyan-300">
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                جزئیات خدمات
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
