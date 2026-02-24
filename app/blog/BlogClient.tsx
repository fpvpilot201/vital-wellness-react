"use client";

import { useEffect, useState } from "react";

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
.blog-img-box { height: 240px; width: 100%; overflow: hidden; }
.blog-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.blog-card:hover .blog-img-box img { transform: scale(1.05); }
.blog-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
.blog-title { font-size: 20px; color: #2c3e29; line-height: 1.4; margin-bottom: 8px; font-weight: 500; font-family: 'Playfair Display', serif; }
.blog-excerpt { font-family: 'Lato', sans-serif; font-size: 14px; color: #777; line-height: 1.6; margin-bottom: 16px; }
.blog-meta { font-family: 'Lato', sans-serif; font-size: 12px; color: #aaa; margin-bottom: 12px; }
.read-more { font-family: 'Lato', sans-serif; font-size: 12px; font-weight: 700; color: #bd5656; text-transform: uppercase; letter-spacing: 1px; margin-top: auto; }
.article-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #fff; z-index: 10001; overflow-y: auto; padding: 40px 0; opacity: 0; transition: opacity 0.5s ease; }
.article-overlay.active { display: block; opacity: 1; }
.article-container { width: 90%; max-width: 900px; margin: 0 auto; position: relative; }
.back-btn { position: fixed; top: 120px; left: 5%; background-color: #f4f4f4; color: #555; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-family: 'Lato', sans-serif; font-weight: 700; font-size: 14px; display: flex; align-items: center; gap: 8px; cursor: pointer; transition: all 0.3s; z-index: 10002; border: 1px solid #ddd; }
.back-btn:hover { background-color: #6a7c64; color: white; border-color: #6a7c64; }
.article-header-img { width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 40px; }
.article-title { font-size: 42px; color: #2c3e29; margin-bottom: 15px; line-height: 1.2; text-align: center; font-family: 'Playfair Display', serif; }
.article-meta-line { text-align: center; font-family: 'Lato', sans-serif; font-size: 14px; color: #999; margin-bottom: 30px; }
.article-body { font-family: 'Lato', sans-serif; font-size: 18px; line-height: 1.8; color: #444; }
.article-body p { margin-bottom: 25px; }
.article-body h3 { font-family: 'Playfair Display', serif; font-size: 28px; margin-top: 40px; margin-bottom: 20px; color: #2c3e29; }
.article-body ul, .article-body ol { margin-bottom: 25px; padding-left: 20px; }
.article-body li { margin-bottom: 10px; }
@media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } .back-btn { position: absolute; top: 0; left: 0; margin-bottom: 20px; } }
@media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } .article-title { font-size: 32px; } .article-header-img { height: 250px; } }
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

  const openArticle = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };

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
            <img src="/photos/leaves-1.svg" alt="Divider" style={{ height: "40px", width: "auto" }} />
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
              <article key={post.id} className="blog-card" onClick={() => openArticle(post)}>
                <div className="blog-img-box">
                  <img src={normalizeImagePath(post.image)} alt={post.title} />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">{post.title}</h2>
                  {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
                  {(post.date || post.author) && (
                    <p className="blog-meta">
                      {post.date && <span>{post.date}</span>}
                      {post.date && post.author && <span> &middot; </span>}
                      {post.author && <span>{post.author}</span>}
                    </p>
                  )}
                  <span className="read-more">Read More &rarr;</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {selectedPost && (
        <div className={`article-overlay ${selectedPost ? "active" : ""}`}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: selectedPost.title,
              image: normalizeImagePath(selectedPost.image),
              author: { "@type": "Organization", name: selectedPost.author || "iVital Wellness" },
              publisher: { "@type": "Organization", name: "iVital Wellness", logo: { "@type": "ImageObject", url: "https://ivital-wellness-react.vercel.app/photos/logo.png" } },
              datePublished: selectedPost.date || new Date().toISOString().split("T")[0],
              description: selectedPost.excerpt || "",
            }) }}
          />
          <button className="back-btn" onClick={closeArticle}>
            &larr; Back to Blog
          </button>
          <div className="article-container">
            <img
              src={normalizeImagePath(selectedPost.image)}
              alt={selectedPost.title}
              className="article-header-img"
            />
            <h1 className="article-title">{selectedPost.title}</h1>
            {(selectedPost.date || selectedPost.author) && (
              <p className="article-meta-line">
                {selectedPost.date && <span>{selectedPost.date}</span>}
                {selectedPost.date && selectedPost.author && <span> &middot; </span>}
                {selectedPost.author && <span>{selectedPost.author}</span>}
              </p>
            )}
            <div className="article-body" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </div>
        </div>
      )}
    </>
  );
}
