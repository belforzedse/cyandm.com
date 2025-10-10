import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  illustration,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  illustration?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-slate-900 to-slate-950" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">{title}</h1>
          {description && <p className="mt-6 text-lg text-cyan-100">{description}</p>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {illustration && <div className="flex-1">{illustration}</div>}
      </div>
    </section>
  );
}
