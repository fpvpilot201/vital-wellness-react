"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug?: string;
  excerpt?: string;
  image: string;
  content: string;
  author?: string;
  date?: string;
}

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

/* Article Overlay */
.article-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #fff; z-index: 10001; overflow-y: auto; padding: 0; opacity: 0; transition: opacity 0.4s ease; }
.article-overlay.active { display: block; opacity: 1; }
.article-overlay-inner { min-height: 100%; background-color: #fafaf9; padding-bottom: 80px; }

.article-container { width: 100%; max-width: 800px; margin: 0 auto; background: #fff; padding: 50px 80px; box-shadow: 0 0 40px rgba(0,0,0,0.03); border-radius: 0 0 24px 24px; }
.back-btn-container { max-width: 800px; margin: 0 auto; padding: 40px 0 20px; }
.back-btn { background: transparent; color: #718096; border: none; font-family: 'Lato', sans-serif; font-weight: 700; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: color 0.2s; text-transform: uppercase; letter-spacing: 1px; }
.back-btn:hover { color: #2d3748; }

.article-header-img { width: 100%; height: 450px; object-fit: cover; border-radius: 16px; margin-bottom: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
.article-title { font-size: 46px; color: #1a202c; margin-bottom: 20px; line-height: 1.2; font-family: 'Playfair Display', serif; }
.article-meta-line { font-family: 'Lato', sans-serif; font-size: 15px; color: #718096; margin-bottom: 40px; display: flex; align-items: center; gap: 15px; padding-bottom: 30px; border-bottom: 1px solid #e2e8f0; }

.article-body { font-family: 'Lato', sans-serif; font-size: 18px; line-height: 1.8; color: #4a5568; }
.article-body p { margin-bottom: 28px; }
.article-body h3 { font-family: 'Playfair Display', serif; font-size: 28px; margin-top: 50px; margin-bottom: 20px; color: #2d3748; }
.article-body ul, .article-body ol { margin-bottom: 30px; padding-left: 20px; }
.article-body li { margin-bottom: 12px; }

@media (max-width: 1024px) { 
  .blog-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; } 
  .article-container { padding: 40px; }
}
@media (max-width: 768px) { 
  .blog-grid { grid-template-columns: 1fr; } 
  .article-title { font-size: 36px; } 
  .article-header-img { height: 300px; margin-bottom: 30px; }
  .article-container { padding: 30px 20px; }
  .back-btn-container { padding: 30px 20px 10px; }
}
`;

function normalizeImagePath(imagePath: string): string {
  if (!imagePath) return "/photos/oak.webp";
  if (imagePath.startsWith("http")) return imagePath;
  if (imagePath.startsWith("/")) return imagePath;
  if (imagePath.includes("/photos/")) {
    const parts = imagePath.split("/photos/");
    return `/photos/${parts[parts.length - 1]}`;
  }
  if (imagePath.startsWith("photos/")) return `/${imagePath}`;
  return `/photos/${imagePath}`;
}

export default function BlogClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((cmsPosts: BlogPost[]) => {
        if (cmsPosts.length > 0) {
          setPosts(cmsPosts);
          setLoading(false);
        } else {
          return fetch("/blog.json")
            .then((res) => res.json())
            .then((data) => {
              setPosts(data.blogPosts || []);
              setLoading(false);
            });
        }
      })
      .catch(() => {
        fetch("/blog.json")
          .then((res) => res.json())
          .then((data) => {
            setPosts(data.blogPosts || []);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, []);

  const closeArticle = () => {
    setSelectedPost(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedPost) closeArticle();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
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
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ fontFamily: "Lato, sans-serif", color: "#999" }}>Loading blog posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ fontFamily: "Lato, sans-serif", color: "#999" }}>No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug || post.id}`}
                key={post.id}
                className="blog-card"
                style={{ textDecoration: 'none' }}
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
