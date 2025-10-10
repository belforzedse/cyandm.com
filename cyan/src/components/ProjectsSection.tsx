import Link from "next/link";
import { projects } from "../data/global";

export function ProjectsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">PROJECTS</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">گوشه‌ای از پروژه‌های موفق سایان</h2>
          </div>
          <Link href="/projects" className="rounded-full border border-cyan-500 px-5 py-2 text-sm font-semibold text-cyan-600">
            مشاهده همه
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              style={{ boxShadow: `0 20px 60px ${project.accentColor}20` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={project.coverImage} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {project.industries.join(" • ")}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="text-sm text-slate-600">{project.excerpt}</p>
                <div className="flex flex-wrap gap-2 text-xs text-cyan-600">
                  {project.services.map((service) => (
                    <span key={service} className="rounded-full bg-cyan-50 px-3 py-1">
                      {service}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600">
                  مطالعه موردی
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
