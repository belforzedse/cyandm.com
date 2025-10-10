import { brands } from "../data/global";

export function BrandsMarquee() {
  return (
    <section className="bg-slate-900 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          برندهایی که به ما اعتماد کرده‌اند
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {brands.map((brand) => (
            <div key={brand.name} className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <img src={brand.logo} alt={brand.name} className="max-h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
