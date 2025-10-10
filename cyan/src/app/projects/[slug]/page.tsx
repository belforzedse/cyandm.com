"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { projects } from "../../../data/global";
import { contact } from "../../../data/global";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const phoneNumber = contact.phoneNumbers[0];
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "پروژه‌ها", href: "/projects" },
    { label: project.title },
  ];

  return (
    <article className="single-project">
      <button className="main-button" aria-hidden />

      <div className="single-project-button flex flex-col-reverse gap-12">
        <button className="open-button flex justify-center items-center before:animate-pulse after:animate-pulse" id="OpenButton">
          <i className="icon-close" />
        </button>
        <div className="project-button flex flex-col-reverse gap-4">
          <Link href="/projects">
            <i className="icon-arrowright" />
          </Link>
          <a href={`tel:${phoneNumber}`}>
            <i className="icon-call" />
          </a>
        </div>
      </div>

      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <picture>
        <source media="(min-width:768px)" srcSet={project.backgroundImageDesktop} />
        <source media="(max-width:767px)" srcSet={project.backgroundImageMobile} />
        <img src={project.backgroundImageDesktop} alt={project.title} />
      </picture>

      <section className="project-overview container py-16 space-y-10">
        <header className="space-y-4">
          <h1 className="h1">{project.title}</h1>
          <p className="text-sm text-slate-300">{project.excerpt}</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-black-2 p-6">
            <h2 className="h3 mb-4">آمار کلیدی</h2>
            <ul className="space-y-3 text-sm">
              {project.stats.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-black-2 p-6">
            <h2 className="h3 mb-4">حوزه‌ها</h2>
            <div className="flex flex-wrap gap-2">
              {project.industries.map((industry) => (
                <span key={industry} className="rounded-full border border-cyan-200 px-3 py-1 text-xs">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-200">
          {project.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </article>
  );
}