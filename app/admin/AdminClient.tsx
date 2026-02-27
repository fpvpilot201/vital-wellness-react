"use client";

import { useState, useEffect, useCallback, FormEvent, ChangeEvent } from "react";
import "./admin.css";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  published: boolean;
}

const emptyPost: Omit<BlogPost, "id" | "slug"> = {
  title: "",
  excerpt: "",
  content: "",
  image: "",
  author: "iVital Wellness",
  date: new Date().toISOString().split("T")[0],
  published: true,
};

export default function AdminClient() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState(emptyPost);

  useEffect(() => {
    fetch("/api/auth")
      .then((r) => r.json())
      .then((d) => setAuthenticated(d.authenticated))
      .catch(() => setAuthenticated(false));
  }, []);

  const loadPosts = useCallback(async () => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get-all" }),
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
  }, []);

  useEffect(() => {
    if (authenticated) loadPosts();
  }, [authenticated, loadPosts]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
    } else {
      setLoginError("Wrong password. Try again.");
    }
    setLoggingIn(false);
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    setAuthenticated(false);
    setPassword("");
  };

  const openNewPost = () => {
    setEditing(null);
    setForm({ ...emptyPost, date: new Date().toISOString().split("T")[0] });
    setShowEditor(true);
  };

  const openEditPost = (post: BlogPost) => {
    setEditing(post);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author: post.author,
      date: post.date,
      published: post.published,
    });
    setShowEditor(true);
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) setForm((f) => ({ ...f, image: data.url }));
    } catch {
      alert("Failed to upload image.");
    }
    setUploading(false);
  };

  const handleSave = async () => {
    if (!form.title.trim()) return alert("Title is required.");
    setSaving(true);
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: editing?.id }),
    });
    setShowEditor(false);
    await loadPosts();
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id }),
    });
    await loadPosts();
  };

  const handleToggle = async (id: string) => {
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "toggle", id }),
    });
    await loadPosts();
  };

  const liveCount = posts.filter((p) => p.published).length;
  const draftCount = posts.filter((p) => !p.published).length;

  if (authenticated === null) {
    return (
      <div className="admin-wrapper">
        <div className="login-container">
          <div className="login-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200 }}>
            <p style={{ color: "#999", fontSize: 15 }}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="admin-wrapper">
        <div className="login-container">
          <form className="login-box" onSubmit={handleLogin}>
            <div className="login-logo">
              <img src="/photos/logo.png" alt="iVital Wellness" />
            </div>
            <h1>Blog Admin</h1>
            <p>Enter your password to manage posts</p>
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button type="submit" className="login-btn" disabled={loggingIn}>
              {loggingIn ? "Signing in..." : "Sign In"}
            </button>
            {loginError && <p className="login-error">{loginError}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-wrapper">
      <div className="admin-topbar">
        <h1>
          <span className="topbar-icon">✍</span>
          Blog Manager
        </h1>
        <div className="admin-topbar-actions">
          <button className="btn-new-post" onClick={openNewPost}>
            + <span className="btn-text">New Post</span>
          </button>
          <button className="btn-logout" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>

      <div className="admin-stats">
        <div className="admin-stats-inner">
          <div className="stat-item">
            <div className="stat-icon total"><i className="fas fa-file-alt" /></div>
            <div>
              <div className="stat-label">Total</div>
              <div className="stat-value">{posts.length}</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon live"><i className="fas fa-check-circle" /></div>
            <div>
              <div className="stat-label">Published</div>
              <div className="stat-value">{liveCount}</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon drafts"><i className="fas fa-pencil-alt" /></div>
            <div>
              <div className="stat-label">Drafts</div>
              <div className="stat-value">{draftCount}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-content">
        {posts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <i className="fas fa-feather-alt" />
            </div>
            <h2>No posts yet</h2>
            <p>Start writing your first blog post to share with the world.</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button className="btn-new-post-lg" onClick={openNewPost}>
                <i className="fas fa-plus" /> Create Your First Post
              </button>
              <button
                className="btn-new-post-lg"
                style={{ backgroundColor: "#4a5568" }}
                onClick={async () => {
                  try {
                    const res = await fetch("/blog.json");
                    const data = await res.json();
                    if (data.blogPosts && data.blogPosts.length > 0) {
                      interface OldBlogPost { id: string | number; title: string; excerpt?: string; content: string; image: string; author?: string; date?: string; }
                      const posts = data.blogPosts.map((p: OldBlogPost) => ({
                        id: p.id.toString(),
                        title: p.title,
                        slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
                        excerpt: p.excerpt || "",
                        content: p.content,
                        image: p.image,
                        author: p.author || "iVital Wellness",
                        date: p.date || new Date().toISOString().split("T")[0],
                        published: true,
                      }));
                      await fetch("/api/blogs", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ action: "bulk-save", posts }),
                      });
                      loadPosts();
                      alert("Blogs imported successfully!");
                    } else {
                      alert("No blogs found in blog.json");
                    }
                  } catch {
                    alert("Failed to import blogs.");
                  }
                }}
              >
                <i className="fas fa-file-import" /> Import Old Blogs
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="section-header">
              <h2>All Posts</h2>
              <span className="post-count">{posts.length} post{posts.length !== 1 ? "s" : ""}</span>
            </div>
            <div className="posts-grid">
              {posts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-card-image-wrap">
                    {post.image ? (
                      <img src={post.image} alt={post.title} />
                    ) : (
                      <div className="no-image-placeholder">
                        <i className="fas fa-image" />
                      </div>
                    )}
                    <span className={`post-card-badge ${post.published ? "live" : "draft"}`}>
                      {post.published ? "Live" : "Draft"}
                    </span>
                  </div>
                  <div className="post-card-body">
                    <div className="post-card-title">{post.title}</div>
                    {post.excerpt && (
                      <div className="post-card-excerpt">{post.excerpt}</div>
                    )}
                    <div className="post-card-meta">
                      <i className="far fa-calendar-alt" />
                      {post.date} &middot; {post.author}
                    </div>
                  </div>
                  <div className="post-card-footer">
                    <button className="btn-edit" onClick={() => openEditPost(post)}>
                      <i className="fas fa-pen" style={{ marginRight: 5, fontSize: 10 }} /> Edit
                    </button>
                    <button
                      className={`btn-toggle ${post.published ? "published" : ""}`}
                      onClick={() => handleToggle(post.id)}
                    >
                      {post.published ? "Unpublish" : "Publish"}
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(post.id)}>
                      <i className="fas fa-trash-alt" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {showEditor && (
        <div className="editor-overlay" onClick={(e) => e.target === e.currentTarget && setShowEditor(false)}>
          <div className="editor-panel">
            <div className="editor-header">
              <h2>{editing ? "Edit Post" : "New Post"}</h2>
              <button className="editor-close" onClick={() => setShowEditor(false)}>
                <i className="fas fa-times" />
              </button>
            </div>

            <div className="editor-body">
              <div className="field-group">
                <label>Title</label>
                <input
                  type="text"
                  className="field-input"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="Enter a compelling title..."
                  autoFocus
                />
              </div>

              <div className="field-group">
                <label>Excerpt</label>
                <input
                  type="text"
                  className="field-input"
                  value={form.excerpt}
                  onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                  placeholder="Brief summary shown on blog cards..."
                />
              </div>

              <div className="field-group">
                <label>Content</label>
                <textarea
                  className="field-input"
                  value={form.content}
                  onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                  placeholder="Write your post content here. HTML tags are supported: <h2>, <p>, <ul>, <strong>..."
                />
              </div>

              <div className="field-group">
                <label>Cover Image</label>
                <div className="image-upload-area">
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                  <div className="upload-icon-circle"><i className="fas fa-cloud-upload-alt" /></div>
                  <p className="upload-text">Click to upload</p>
                  <p className="upload-hint">PNG, JPG, or WebP</p>
                </div>
                {uploading && (
                  <p className="uploading-text">
                    <i className="fas fa-spinner fa-spin" /> Uploading image...
                  </p>
                )}
                {form.image && (
                  <div className="image-preview-wrap">
                    <img src={form.image} alt="Preview" className="image-preview" />
                  </div>
                )}
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label>Author</label>
                  <input
                    type="text"
                    className="field-input"
                    value={form.author}
                    onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                  />
                </div>
                <div className="field-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="field-input"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  />
                </div>
              </div>

              <div className="field-group">
                <label>Visibility</label>
                <div
                  className={`publish-toggle ${form.published ? "active" : ""}`}
                  onClick={() => setForm((f) => ({ ...f, published: !f.published }))}
                >
                  <div className={`toggle-switch ${form.published ? "on" : ""}`} />
                  <div>
                    <div className="toggle-label-text">
                      {form.published ? "Published" : "Draft"}
                    </div>
                    <div className="toggle-label-hint">
                      {form.published ? "Visible on your blog" : "Hidden from visitors"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="editor-footer">
              <button className="btn-save" onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : editing ? "Update Post" : "Create Post"}
              </button>
              <button className="btn-cancel" onClick={() => setShowEditor(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
