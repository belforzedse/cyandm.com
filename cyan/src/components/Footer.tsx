"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { contact, footerContent } from "../data/global";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const { servicesMenu, blogMenu } = footerContent;
  const { address, mapEmbed, phoneNumbers, email, socials, footerImage } = contact;

  const baseVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 32,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.footer
      className="relative isolate mt-12 border-t border-white/10 bg-[var(--background-muted)] text-[var(--text)]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={baseVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,237,237,0.18),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-16 px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
            <motion.div
              className="rounded-[var(--radius-md)] border border-white/10 bg-[var(--surface)]/70 p-8 backdrop-blur"
              variants={baseVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.32rem] text-[var(--text-muted)]">ارتباط با ما</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight">با تیم سایان همراه شوید</h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{address}</p>
              <a
                href={`mailto:${email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-[var(--primary-strong)]"
              >
                {email}
                <span aria-hidden>↗</span>
              </a>
            </motion.div>
            <motion.div
              className="rounded-[var(--radius-md)] border border-white/10 bg-[var(--surface)]/60 p-8 backdrop-blur md:col-span-1 xl:col-span-1"
              variants={baseVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
            >
              <h3 className="text-lg font-semibold text-[var(--text)]">خدمات</h3>
              <ul className="mt-5 space-y-3 text-[var(--text-muted)]">
                {servicesMenu.map((item) => (
                  <li key={item.href}>
                    <Link className="transition-colors hover:text-[var(--primary)]" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-[var(--radius-md)] border border-white/10 bg-[var(--surface)]/60 p-8 backdrop-blur md:col-span-1 xl:col-span-1"
              variants={baseVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            >
              <h3 className="text-lg font-semibold text-[var(--text)]">مقالات منتخب</h3>
              <ul className="mt-5 space-y-3 text-[var(--text-muted)]">
                {blogMenu.map((item) => (
                  <li key={item.href}>
                    <Link className="transition-colors hover:text-[var(--primary)]" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col gap-6 rounded-[var(--radius-md)] border border-white/10 bg-[var(--surface)]/60 p-8 backdrop-blur"
            variants={baseVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
          >
            <h3 className="text-lg font-semibold text-[var(--text)]">نقشه و اطلاعات تماس</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              <div
                className="overflow-hidden rounded-2xl border border-white/10"
                dangerouslySetInnerHTML={{ __html: mapEmbed }}
              />
              <div className="flex flex-col gap-4 text-[var(--text-muted)]">
                <div>
                  <p className="text-sm font-medium text-[var(--text)]">شماره تماس</p>
                  <ul className="mt-3 space-y-2">
                    {phoneNumbers.map((phone) => (
                      <li key={phone}>
                    <a className="transition-colors hover:text-[var(--primary)]" href={`tel:${phone}`}>
                      {phone}
                    </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text)]">شبکه‌های اجتماعی</p>
                  <div className="mt-3 flex flex-wrap justify-end gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--primary)]"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image src={social.logo} alt="" width={20} height={20} className="opacity-80" />
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-[var(--text-muted)] md:flex-row md:text-right">
          <p>© {new Date().getFullYear()} سایان دیجیتال. تمام حقوق محفوظ است.</p>
          <div className="relative h-20 w-40">
            <Image src={footerImage} alt="تصویر تزیینی" fill className="object-contain" sizes="160px" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
