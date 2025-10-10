"use client";

import Link from "next/link";
import { SwiperSlide } from "swiper/react";

import type { Project } from "../../data/types";

type ServicePortfolioSlideProps = {
  title: string;
  description?: string;
  projects: Project[];
};

export function ServicePortfolioSlide({ title, description, projects }: ServicePortfolioSlideProps) {
  const featuredProjects = projects.slice(0, 4);

  return (
    <SwiperSlide>
      <section className="flex min-h-[70vh] flex-col justify-center py-20">
        <div className="container space-y-12">
          <div className="max-w-2xl space-y-4">
            <span className="badge">نمونه کارها</span>
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
            {description ? (
              <p className="text-sm leading-7 text-[color:var(--text-muted)]">{description}</p>
            ) : null}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-6 transition hover:border-[color:var(--primary)]/40"
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] bg-black/20">
                    <img src={project.coverImage} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]/70">
                    {project.industries.join(" • ")}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-6 text-[color:var(--text-muted)]">{project.excerpt}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-xs text-[color:var(--primary)]">
                  {project.services.slice(0, 3).map((service) => (
                    <span key={service} className="rounded-full border border-[color:var(--primary)]/40 px-3 py-1">
                      {service}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)]">
                  مطالعه موردی
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SwiperSlide>
  );
}
