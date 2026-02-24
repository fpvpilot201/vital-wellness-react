import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Addiction Recovery Blog | iVital Wellness",
  description:
    "Expert articles on addiction recovery, mental health, and wellness from the clinical team at iVital Wellness in Santa Clarita, CA.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Addiction Recovery Blog | iVital Wellness",
    description: "Expert articles on addiction recovery, mental health, and wellness from the clinical team at iVital Wellness in Santa Clarita, CA.",
    url: "/blog",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
