import Link from "next/link";
import { blogPosts } from "../data/global";

export function BlogPreview() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">BLOG</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">تازه‌ترین یادداشت‌ها</h2>
          </div>
          <Link href="/blog" className="rounded-full border border-cyan-500 px-5 py-2 text-sm font-semibold text-cyan-600">
            مشاهده همه مقالات
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] bg-slate-100">
                <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {post.categories.join(" • ")}
                  </p>
                  <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
                  <p className="text-sm text-slate-600">{post.excerpt}</p>
                </div>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600">
                  ادامه مطلب
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
