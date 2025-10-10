"use client";

import { SwiperSlide } from "swiper/react";

import type { FAQ } from "../../data/types";

type ServiceFAQSlideProps = {
  title: string;
  faqs: FAQ[];
  accentImage?: string;
};

export function ServiceFAQSlide({ title, faqs, accentImage }: ServiceFAQSlideProps) {
  return (
    <SwiperSlide>
      <section className="flex min-h-[70vh] flex-col justify-center py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <span className="badge">سوالات متداول</span>
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-6 text-right">
                  <summary className="cursor-pointer text-base font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="relative hidden overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/40 lg:block">
            {accentImage ? (
              <img src={accentImage} alt="پرسش و پاسخ" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full min-h-[360px] items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(71,85,255,0.35),_transparent_70%)]">
                <span className="text-6xl" aria-hidden>❔</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </SwiperSlide>
  );
}
