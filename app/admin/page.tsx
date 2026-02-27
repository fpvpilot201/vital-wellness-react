import AdminClient from "./AdminClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | iVital Wellness",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminClient />;
}
