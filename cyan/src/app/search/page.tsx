import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";
import { projects, blogPosts } from "../../data/global";

const breadcrumbItems = [
  { label: "خانه", href: "/" },
  { label: "جستجو" },
];

type SearchPageProps = {
  searchParams?: Record<string, string | string[]>;
};

function normalize(value?: string | string[]) {
  if (!value) {
    return "";
  }
  return Array.isArray(value) ? value[0] ?? "" : value;
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = normalize(searchParams?.s).trim();
  const normalizedQuery = query.toLowerCase();

  const projectResults = projects.filter((project) => {
    if (!normalizedQuery) {
      return true;
    }
    const haystack = [project.title, project.excerpt, ...project.industries].join(" ").toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  const postResults = blogPosts.filter((post) => {
    if (!normalizedQuery) {
      return true;
    }
    const haystack = [post.title, post.excerpt, ...post.categories].join(" ").toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  const total = projectResults.length + postResults.length;

  return (
    <main className="search-page">
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="flex justify-between items-center rounded-3xl border-b-[3px] border-gray-3 bg-black-2 container p-8 max-md:flex-col max-md:gap-4">
        <div className="p-4 pi-md-8 search-div max-md:w-full">
          <form action="/search" id="search-container" className="w-full">
            <div className="flex flex-row items-center gap-1">
              <i className="icon-search" aria-hidden />
              <input
                type="text"
                name="s"
                className="search"
                id="search"
                placeholder="اینجا تایپ کنید"
                defaultValue={query}
              />
            </div>
          </form>
        </div>
        <div className="flex gap-8 max-md:flex-col max-md:w-full max-md:items-center">
          <ul className="flex justify-center max-md:w-full [&>li]:m-[2px] [&_li]:px-[12px] [&_li]:py-[12px] [&>li]:bg-[#8f8f8f3d] [&>li]:rounded-[6px] [&>*:hover]:scale-110 [&>*:hover]:bg-cyn-1 delay-500">
            <li className="color">همه</li>
            <li>پروژه‌ها</li>
            <li>مقالات</li>
          </ul>
          <div className="flex items-center gap-4 px-4">
            <span id="foundPosts">{total} نتیجه</span>
          </div>
        </div>
      </div>

      <section className="result" id="allResult">
        {total === 0 && (
          <h4 className="container">هیچ موردی یافت نشد.</h4>
        )}

        {projectResults.length > 0 && (
          <div className="container mt-16 space-y-6">
            <h3 className="h3">پروژه‌ها</h3>
            <div className="grid gap-4">
              {projectResults.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="search-card">
                  <div className="thumb">
                    <img src={project.archiveImage} alt={project.title} />
                  </div>
                  <div className="content">
                    <h4>{project.title}</h4>
                    <p>{project.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {postResults.length > 0 && (
          <div className="container mt-16 space-y-6">
            <h3 className="h3">مقالات</h3>
            <div className="grid gap-4">
              {postResults.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="search-card">
                  <div className="thumb">
                    <img src={post.coverImage} alt={post.title} />
                  </div>
                  <div className="content">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
