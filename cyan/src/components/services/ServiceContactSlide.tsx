"use client";

import Link from "next/link";
import { SwiperSlide } from "swiper/react";

import type { ContactDetails } from "../../data/types";

type ServiceContactSlideProps = {
  title: string;
  slogan: string;
  contact: ContactDetails;
  primaryCta?: { label: string; href: string };
};

export function ServiceContactSlide({ title, slogan, contact, primaryCta }: ServiceContactSlideProps) {
  const defaultPrimary = primaryCta ?? {
    label: contact.phoneNumbers[0] ? `تماس با ${contact.phoneNumbers[0]}` : "تماس با سایان",
    href: contact.phoneNumbers[0] ? `tel:${contact.phoneNumbers[0]}` : "tel:021-28428248",
  };

  return (
    <SwiperSlide>
      <section className="flex min-h-[70vh] flex-col justify-center py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <span className="badge">ارتباط با ما</span>
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
            <p className="text-sm leading-7 text-[color:var(--text-muted)]">{slogan}</p>

            <div className="grid gap-4 text-sm text-[color:var(--text-muted)]">
              <div>
                <h3 className="text-base font-semibold text-white">آدرس</h3>
                <p>{contact.address}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">تلفن</h3>
                <div className="flex flex-wrap gap-3">
                  {contact.phoneNumbers.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="rounded-full border border-[color:var(--border)] px-4 py-2 transition hover:border-[color:var(--primary)]/60 hover:text-[color:var(--primary)]">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">ایمیل</h3>
                <a href={`mailto:${contact.email}`} className="underline decoration-dotted underline-offset-4">
                  {contact.email}
                </a>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">شبکه‌های اجتماعی</h3>
                <div className="flex flex-wrap gap-3">
                  {contact.socials.map((social) => (
                    <a key={social.label} href={social.url} className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs transition hover:border-[color:var(--primary)]/60 hover:text-[color:var(--primary)]">
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={defaultPrimary.href} className="primary-btn">
                {defaultPrimary.label}
              </a>
              <Link href="/contact" className="secondary-btn">
                فرم ارسال پروژه
              </Link>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/40 lg:block">
            <div
              className="h-full w-full"
              dangerouslySetInnerHTML={{ __html: contact.mapEmbed }}
            />
          </div>
        </div>
      </section>
    </SwiperSlide>
  );
}
