import type { Metadata } from "next";
import Link from "next/link";
import { getBlogData, normalizeImagePath, type BlogPost } from "../lib/blog";

export const metadata: Metadata = {
  title: "Blog iVital Wellness Addiction Treatment in Santa Clarita",
  description:
    "Blog iVital Wellness for expert articles on addiction treatment, recovery options, and dual diagnosis guides in Santa Clarita, CA: Reclaim Your Future Today.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog iVital Wellness Addiction Treatment in Santa Clarita",
    description: "Blog iVital Wellness for expert articles on addiction treatment, recovery options, and dual diagnosis guides in Santa Clarita, CA.",
    url: "/blog",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

const blogCSS = `
.page-hero { background-color: #F9F7F2; padding: 100px 0 80px; text-align: center; position: relative; overflow: hidden; }
.hero-watermark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); opacity: 0.4; pointer-events: none; z-index: 0; }
.page-hero .hero-content { position: relative; z-index: 2; }
.page-title { font-family: 'Playfair Display', serif; font-size: 48px; color: #6a7c64; margin-bottom: 15px; font-weight: 400; }
.hero-divider { margin-bottom: 20px; }
.page-subtitle { font-family: 'Lato', sans-serif; font-size: 16px; color: #666; letter-spacing: 1px; }

.blog-container { width: 88%; max-width: 1300px; margin: 80px auto; }
.blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }

.blog-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; display: flex; flex-direction: column; }
.blog-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }

.blog-img-box { position: relative; width: 100%; padding-top: 60%; overflow: hidden; background-color: #f4f4f4; }
.blog-img-box img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 0.5s; }
.blog-card:hover .blog-img-box img { transform: scale(1.05); }

.blog-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
.blog-title { font-size: 20px; color: #2c3e29; line-height: 1.4; margin-bottom: 8px; font-weight: 500; font-family: 'Playfair Display', serif; transition: color 0.2s; }
.blog-card:hover .blog-title { color: #6a7c64; }
.blog-excerpt { font-family: 'Lato', sans-serif; font-size: 14px; color: #777; line-height: 1.6; margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

.blog-meta-footer { margin-top: auto; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #edf2f7; padding-top: 20px; }
.blog-meta { font-family: 'Lato', sans-serif; font-size: 12px; color: #aaa; display: flex; align-items: center; gap: 6px; }
.read-more { font-family: 'Lato', sans-serif; font-size: 12px; font-weight: 700; color: #bd5656; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 5px; transition: transform 0.2s; }
.blog-card:hover .read-more { transform: translateX(5px); }

@media (max-width: 1024px) { 
  .blog-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; } 
}
@media (max-width: 768px) { 
  .blog-grid { grid-template-columns: 1fr; } 
}
`;

export default async function BlogPage() {
  const posts = (await getBlogData())
    .filter((post: BlogPost) => post.published !== false)
    .sort((a: BlogPost, b: BlogPost) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0;
      const bTime = b.date ? new Date(b.date).getTime() : 0;
      return bTime - aTime;
    });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: blogCSS }} />
      <section className="page-hero">
        <div className="hero-watermark" />
        <div className="hero-content">
          <h1 className="page-title">Blog</h1>
          <div className="hero-divider">
            <img src="/photos/leaves-1.svg" alt="" style={{ height: "40px", width: "auto" }} />
          </div>
          <p className="page-subtitle">Recovery Resources & Wellness Insights</p>
        </div>
      </section>

      <div className="blog-container">
        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ fontFamily: "Lato, sans-serif", color: "#999" }}>No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post: BlogPost) => (
              <Link
                href={`/blog/${post.slug || post.id}`}
                key={post.id}
                className="blog-card"
                style={{ textDecoration: "none" }}
              >
                <div className="blog-img-box">
                  <img src={normalizeImagePath(post.image)} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div>
                    <h2 className="blog-title">{post.title}</h2>
                    {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
                  </div>
                  <div className="blog-meta-wrapper">
                    {(post.date || post.author) && (
                      <div className="blog-meta">
                        {post.date && <span><i className="far fa-calendar-alt" /> {post.date}</span>}
                        {post.date && post.author && <span> &middot; </span>}
                        {post.author && <span><i className="far fa-user" /> {post.author}</span>}
                      </div>
                    )}
                    <span className="read-more">Read More <i className="fas fa-arrow-right" style={{ fontSize: 10, marginLeft: 2 }} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
