"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import type { Service } from "../data/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { translateY: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-white/8 bg-[var(--surface)]/70 p-8 backdrop-blur"
    >
      <span
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at center, ${service.ballFirstColor}33, transparent 70%)`,
        }}
        aria-hidden
      />
      <div className="relative flex flex-1 flex-col gap-6 text-right">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.32rem] text-[var(--text-muted)]">خدمت</span>
          <h3 className="text-2xl font-bold leading-tight text-[var(--text)]">{service.title}</h3>
          <p className="text-base leading-8 text-[var(--text-muted)]">{service.description}</p>
        </div>
        <ul className="flex flex-1 list-disc list-inside flex-col gap-2 text-[var(--text-muted)]">
          {service.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4 pt-6 text-sm text-[var(--text-muted)]">
          <span>فرآیند {service.processSteps.length} مرحله‌ای</span>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[var(--text)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            جزئیات بیشتر
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
