import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogData, normalizeImagePath } from "../../api/blogs/route";
import Link from "next/link";
import Script from "next/script";

type Props = {
    params: Promise<{ slug: string }>;
};

// Next.js dynamic metadata generation (executed on the server)
export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const posts = await getBlogData();

    // Find the post by slug, or fallback to finding by ID
    const post = posts.find((p: { slug?: string; id: string }) => p.slug === slug || p.id === slug);

    if (!post) {
        return {
            title: "Article Not Found | iVital Wellness",
        };
    }

    const imageUrl = normalizeImagePath(post.image);
    const fullImageUrl = imageUrl.startsWith("http")
        ? imageUrl
        : `https://ivital-wellness-react.vercel.app${imageUrl}`;

    return {
        title: `${post.title} | iVital Wellness Blog`,
        description: post.excerpt || `Read ${post.title} from the clinical team at iVital Wellness in Santa Clarita, CA.`,
        alternates: {
            canonical: `https://ivital-wellness-react.vercel.app/blog/${post.slug || post.id}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt || "",
            url: `https://ivital-wellness-react.vercel.app/blog/${post.slug || post.id}`,
            siteName: "iVital Wellness",
            images: [
                {
                    url: fullImageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            type: "article",
            publishedTime: post.date,
            authors: [post.author || "iVital Wellness"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt || "",
            images: [fullImageUrl],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const posts = await getBlogData();

    // Find the post by slug, or fallback to ID
    const post = posts.find((p: { slug?: string; id: string }) => p.slug === slug || p.id === slug);

    if (!post) {
        notFound();
    }

    const fullImageUrl = normalizeImagePath(post.image).startsWith("http")
        ? normalizeImagePath(post.image)
        : `https://ivital-wellness-react.vercel.app${normalizeImagePath(post.image)}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: fullImageUrl,
        author: { "@type": "Organization", name: post.author || "iVital Wellness" },
        publisher: {
            "@type": "Organization",
            name: "iVital Wellness",
            logo: { "@type": "ImageObject", url: "https://ivital-wellness-react.vercel.app/photos/logo.png" }
        },
        datePublished: post.date || new Date().toISOString().split("T")[0],
        description: post.excerpt || "",
    };

    return (
        <>
            <Script
                id={`schema-${post.id}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 
        This is the premium reading aesthetic applied as a standalone page 
        rather than a popup modal. All CSS classes will match the global stylesheet.
      */}
            <div style={{ backgroundColor: "#fff", minHeight: "100vh", paddingTop: "120px" }}>
                <Link href="/blog" className="back-btn" style={{
                    position: "absolute",
                    top: "140px",
                    left: "max(20px, calc(50vw - 480px))",
                    backgroundColor: "#fff",
                    color: "#333",
                    padding: "12px 24px",
                    borderRadius: "100px",
                    textDecoration: "none",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    zIndex: 10,
                    border: "1px solid rgba(0,0,0,0.1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
                }}>
                    <i className="fas fa-arrow-left" /> Back to Blog
                </Link>

                <div className="article-container" style={{
                    width: "100%",
                    maxWidth: "840px",
                    margin: "0 auto",
                    padding: "0 20px 120px",
                    position: "relative",
                    background: "#fff"
                }}>
                    <div className="article-header" style={{ textAlign: "center", marginBottom: "50px", padding: "0 20px" }}>
                        <h1 className="article-title" style={{
                            fontSize: "48px",
                            color: "#1a2518",
                            marginBottom: "25px",
                            lineHeight: 1.2,
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 600,
                            letterSpacing: "-0.5px"
                        }}>
                            {post.title}
                        </h1>

                        {(post.date || post.author) && (
                            <div className="article-meta-line" style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "15px",
                                fontFamily: "'Lato', sans-serif",
                                fontSize: "15px",
                                color: "#666",
                                padding: "10px 25px",
                                background: "#f9f9f9",
                                borderRadius: "50px",
                                border: "1px solid #eee"
                            }}>
                                {post.date && <span><i className="far fa-calendar-alt" style={{ color: "#6a7c64" }} /> {post.date}</span>}
                                {post.date && post.author && <span style={{ color: "#ccc" }}> | </span>}
                                {post.author && <span><i className="far fa-user" style={{ color: "#6a7c64" }} /> {post.author}</span>}
                            </div>
                        )}
                    </div>

                    <img
                        src={normalizeImagePath(post.image)}
                        alt={post.title}
                        className="article-header-img"
                        style={{
                            width: "100%",
                            height: "60vh",
                            maxHeight: "550px",
                            objectFit: "cover",
                            borderRadius: "24px",
                            margin: "0 0 50px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                        }}
                    />

                    <div
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "19px",
                            lineHeight: 1.8,
                            color: "#333",
                            padding: "0 20px"
                        }}
                    />
                </div>
            </div>
        </>
    );
}
