import clsx from "clsx";
import type { LandingPageSection } from "../data/types";

export function LandingSections({ sections }: { sections: LandingPageSection[] }) {
  return (
    <div className="space-y-16 py-16">
      {sections.map((section, index) => {
        const isLight = section.theme === "light";
        return (
          <section
            key={section.id}
            className={clsx(
              "relative overflow-hidden",
              isLight
                ? "bg-[color:var(--surface)]/70 text-[color:var(--text)]"
                : "bg-[color:var(--surface-muted)]/80 text-[color:var(--text)]"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(21,237,237,0.08),transparent_70%)]" aria-hidden />
            <div className="relative container grid gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-5">
                <span className="badge">بخش {index + 1}</span>
                <h2 className="text-3xl font-semibold lg:text-4xl">{section.title}</h2>
                <p className="max-w-2xl text-sm leading-7 text-[color:var(--text-muted)]">
                  {section.description}
                </p>
                {section.bullets && (
                  <ul className="grid gap-3 text-sm text-[color:var(--text-muted)]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--border)] text-xs text-[color:var(--primary)]">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.cta && (
                  <a
                    href={section.cta.href}
                    className="inline-flex items-center gap-3 rounded-full border border-[color:var(--primary)] px-6 py-3 text-sm font-medium text-[color:var(--primary)] transition hover:bg-[color:var(--primary)] hover:text-black"
                  >
                    {section.cta.label}
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
              {section.media && (
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-black/20">
                  <img src={section.media.src} alt={section.media.alt ?? section.title} className="h-full w-full object-cover" />
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
