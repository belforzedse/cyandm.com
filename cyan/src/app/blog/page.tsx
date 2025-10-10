import Link from "next/link";
import { BlogSidebar } from "../../components/BlogSidebar";
import { Breadcrumb } from "../../components/Breadcrumb";
import { PageHero } from "../../components/PageHero";
import { blogPosts } from "../../data/global";

const breadcrumbItems = [
  { label: "خانه", href: "/" },
  { label: "بلاگ سایان" },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <PageHero
        eyebrow="BLOG"
        title="بلاگ سایان"
        description="در WordPress این صفحه از کوئری `post` و Taxonomy دسته‌بندی استفاده می‌کند."
      />

      <div className="bg-white py-16">
        <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row">
          <section className="flex-1 space-y-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="post-card">
                <div className="post-card__thumbnail">
                  <img src={post.coverImage} alt={post.title} />
                </div>
                <div className="post-card__content">
                  <div className="post-card__title-wrapper">
                    <h2 className="post-card__title">{post.title}</h2>
                    <p className="post-card__author">
                      دسته‌بندی: {post.categories.join(" • ")} · منتشر شده در {new Date(post.publishedAt).toLocaleDateString("fa-IR")}
                    </p>
                  </div>
                  <div className="post-card__excerpt">
                    <p>{post.excerpt}</p>
                  </div>
                  <div className="post-card__actions">
                    <Link href={`/blog/${post.slug}`} className="primary-btn">
                      ادامه مطلب
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="w-full max-w-xs lg:w-80">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
