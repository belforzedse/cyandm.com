"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";

import { BottomFire } from "../BottomFire";
import { Bubbles } from "../Bubbles";
import { ScrollDown } from "../ScrollDown";

type Action = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type ServiceHeroSlideProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  bubbleVariant?: React.ComponentProps<typeof Bubbles>["variant"];
  gradient?: string;
  primaryAction: Action;
  secondaryAction?: Action;
  scrollLabel?: string;
  onScrollClick?: () => void;
  bottomFireVariant?: React.ComponentProps<typeof BottomFire>["variant"] |
    React.ComponentProps<typeof BottomFire>["variant"][];
};

const isInternal = (href: string) => href.startsWith("/");

export function ServiceHeroSlide({
  eyebrow,
  title,
  description,
  bubbleVariant = "violet",
  gradient,
  primaryAction,
  secondaryAction,
  scrollLabel,
  onScrollClick,
  bottomFireVariant = "cyan",
}: ServiceHeroSlideProps) {
  const renderPrimaryAction = () => {
    if (primaryAction.onClick && !primaryAction.href) {
      return (
        <button type="button" className="primary-btn" onClick={primaryAction.onClick}>
          {primaryAction.label}
        </button>
      );
    }

    if (primaryAction.href) {
      if (isInternal(primaryAction.href)) {
        return (
          <Link href={primaryAction.href} className="primary-btn">
            {primaryAction.label}
          </Link>
        );
      }

      return (
        <a href={primaryAction.href} className="primary-btn">
          {primaryAction.label}
        </a>
      );
    }

    return null;
  };

  const renderSecondaryAction = () => {
    if (!secondaryAction) return null;
    if (secondaryAction.onClick && !secondaryAction.href) {
      return (
        <button type="button" className="secondary-btn" onClick={secondaryAction.onClick}>
          {secondaryAction.label}
        </button>
      );
    }

    if (!secondaryAction.href) return null;

    if (isInternal(secondaryAction.href)) {
      return (
        <Link href={secondaryAction.href} className="secondary-btn">
          {secondaryAction.label}
        </Link>
      );
    }

    return (
      <a href={secondaryAction.href} className="secondary-btn">
        {secondaryAction.label}
      </a>
    );
  };

  return (
    <SwiperSlide>
      <section
        className="relative isolate flex min-h-[75vh] flex-col items-center justify-center overflow-hidden py-24 text-center"
        style={
          gradient
            ? { backgroundImage: gradient }
            : undefined
        }
      >
        <Bubbles variant={bubbleVariant} />
        <div className="relative z-10 flex flex-col items-center gap-6 px-6">
          <span className="badge">{eyebrow}</span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
          <p className="max-w-2xl text-sm leading-8 text-[color:var(--text-muted)]">{description}</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            {renderPrimaryAction()}
            {scrollLabel ? (
              <ScrollDown label={scrollLabel} onClick={onScrollClick} />
            ) : (
              renderSecondaryAction()
            )}
          </div>
          {scrollLabel && renderSecondaryAction()}
        </div>
        <BottomFire variant={bottomFireVariant} className="pointer-events-none" />
      </section>
    </SwiperSlide>
  );
}
