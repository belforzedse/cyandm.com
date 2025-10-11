"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { homePage } from "../data/global";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const hero = homePage.hero;
  const metrics = homePage.metrics;

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
    <motion.section
      className="relative isolate overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={baseVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt="پس زمینه"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--primary)/18,transparent_55%)]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[rgba(8,5,25,0.92)] to-[var(--background)]" aria-hidden />
      </div>
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-16 px-6 pb-24 pt-32 text-[var(--text)] lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-3xl text-right lg:pl-10">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[var(--text-muted)]"
            variants={baseVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {hero.eyebrow}
          </motion.span>
          <motion.h1
            className="mt-6 text-4xl font-bold leading-[1.15] text-[var(--text)] sm:text-5xl lg:text-6xl"
            variants={baseVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-9 text-[var(--text-muted)] sm:text-xl"
            variants={baseVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
          >
            {hero.description}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap justify-end gap-3 text-sm font-semibold"
            variants={baseVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
          >
            <Link
              href={hero.cta.href}
              className="rounded-full bg-[var(--primary)] px-7 py-3 text-slate-900 transition-colors hover:bg-[var(--primary-strong)]"
            >
              {hero.cta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/20 px-7 py-3 text-[var(--text)] transition-colors hover:border-white/40"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="grid w-full max-w-xl grid-cols-3 gap-4 rounded-[var(--radius-lg)] border border-white/10 bg-[var(--surface)]/60 p-6 backdrop-blur"
          variants={baseVariants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-6 text-center"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.1 * index }}
            >
              <span className="text-3xl font-bold text-[var(--text)] sm:text-4xl">{metric.value}</span>
              <span className="text-sm text-[var(--text-muted)]">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
