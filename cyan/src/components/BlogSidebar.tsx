import Link from "next/link";
import { blogPosts } from "../data/global";

const categories = [
  { name: "طراحی", slug: "design", thumbnail: "/wp-assets/imgs/categories/design.jpg" },
  { name: "رشد", slug: "growth", thumbnail: "/wp-assets/imgs/categories/growth.jpg" },
  { name: "توسعه", slug: "development", thumbnail: "/wp-assets/imgs/categories/dev.jpg" },
  { name: "تحلیل", slug: "analytics", thumbnail: "/wp-assets/imgs/categories/analytics.jpg" },
];

export function BlogSidebar() {
  const recommendedPosts = blogPosts.slice(0, 3);

  return (
    <aside className="post-sidebar">
      <span className="h2">دسته بندی ها</span>

      <div className="post-sidebar-categories">
        {categories.map((cat) => (
          <div key={cat.slug} className="category-wrapper">
            <div className="category-image">
              <img src={cat.thumbnail} alt={cat.name} />
            </div>
            <div className="category-name">
              <Link href={`/blog?category=${cat.slug}`} rel="nofollow">
                {cat.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <span className="h2">شاید بپسندید</span>

      <div className="post-sidebar-recommended">
        {recommendedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card-mini" rel="nofollow">
            <img src={post.coverImage} alt={post.title} />
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </aside>
  );
}
