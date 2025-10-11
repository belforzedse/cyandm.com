"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { homePage } from "../data/global";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();
  const services = homePage.services;

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    show: { opacity: 1, y: 0 },
  };

  const cardsVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <motion.section
      className="relative mx-auto w-full max-w-[1440px] px-6 py-24 text-[var(--text)]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex flex-col items-end gap-6 text-right sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.32rem] text-[var(--text-muted)]">خدمات سایان</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.2] sm:text-4xl">راهکارهای تخصصی برای رشد برند شما</h2>
          <p className="mt-5 text-lg leading-9 text-[var(--text-muted)]">
            خدمات زیر در وردپرس از پست تایپ «service» بارگذاری می‌شوند. در نسخه دمو، داده‌های ثابت ساختار کارت‌ها را نشان
            می‌دهد.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-white/40"
          >
            مشاهده همه خدمات
            <span aria-hidden>↗</span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={cardsVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </motion.div>
    </motion.section>
  );
}
