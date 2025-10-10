"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Bubbles } from "../../components/Bubbles";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ScrollDown } from "../../components/ScrollDown";
import { projects } from "../../data/global";

const projectCategories = [
  { id: "all", name: "همه" },
  { id: "web", name: "وب" },
  { id: "app", name: "اپلیکیشن" },
  { id: "branding", name: "برندینگ" },
];

const breadcrumbItems = [
  { label: "خانه", href: "/" },
  { label: "پروژه‌ها" },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "all" || project.categories.includes(selectedCategory);
      if (!matchesCategory) {
        return false;
      }

      if (!normalizedTerm) {
        return true;
      }

      const haystack = [project.title, project.excerpt, ...project.industries].join(" ").toLowerCase();
      return haystack.includes(normalizedTerm);
    });
  }, [selectedCategory, searchTerm]);

  return (
    <main className="archive-project">
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="flex flex-col justify-center items-center">
        <Bubbles variant="projects" />
        <img src="/wp-assets/imgs/project.png" alt="Projects" />
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="h1">پروژه سایان</h1>
          <p className="h5">بزن بریم</p>
          <ScrollDown />
        </div>

        <div className="flex justify-between items-center rounded-3xl border-b-[3px] border-gray-3 py-4 bg-black-2 w-full px-8 max-lg:flex-col gap-2">
          <div className="p-4 pi-md-8 search-div max-lg:w-full">
            <form className="w-full" role="search" action="/projects">
              <div className="flex flex-row items-center gap-1">
                <i className="icon-search" aria-hidden />
                <input
                  type="text"
                  name="s"
                  className="search"
                  id="search"
                  placeholder="اینجا تایپ کنید"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </form>
          </div>

          <ul className="cat flex justify-center [&>li]:m-[2px] [&_li]:px-[12px] [&_li]:py-[12px] [&>li]:bg-[#8f8f8f3d] [&>li]:rounded-[6px] [&>*:hover]:scale-110 [&>*:hover]:bg-cyn-1 delay-500 overflow-auto max-lg:text-caption">
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <li
                  key={category.id}
                  data-category={category.id}
                  className={`category_item faqtab pi-16 pb-4 cursor-pointer ${isActive ? "color" : ""}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <h4>{category.name}</h4>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="w-full">
        <div className="projects">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="flex items-center p-28 gap-12 project-card bg-[var(--primary-color)] max-lg:p-8 max-lg:gap-8 max-md:flex-col"
              style={{ "--primary-color": project.accentColor } as CSSProperties}
              data-post-id={project.slug}
              data-categories={project.categories.join(",")}
            >
              <div className="w-2/4 max-md:w-full">
                <img src={project.archiveImage} alt={project.title} />
              </div>
              <div className="w-2/4 flex flex-col gap-8 max-md:w-full">
                <h2 className="text-h1">{project.title}</h2>
                <span>درباره پروژه</span>
                <p>{project.excerpt}</p>
                <Link href={`/projects/${project.slug}`} className="link-btn">
                  مشاهده پروژه
                </Link>
                <div className="flex max-md:flex-col gap-4">
                  {project.industries.map((industry) => (
                    <span key={industry} className="mx-1 p-4 rounded-md">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center text-sm text-gray-400">هیچ پروژه‌ای با این جستجو پیدا نشد.</div>
          )}
        </div>
      </div>
    </main>
  );
}
