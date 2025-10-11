import Link from "next/link";
import { homePage } from "../data/global";

export function Hero() {
  const hero = homePage.hero;
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-40">
        <img src={hero.backgroundImage} alt="Hero" className="h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">{hero.title}</h1>
          <p className="mt-6 text-lg text-cyan-100">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={hero.cta.href} className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white">
              {hero.cta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="grid gap-4 text-center sm:grid-cols-3 lg:w-80 lg:flex lg:flex-col">
          {homePage.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="mt-2 text-sm text-cyan-100">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
