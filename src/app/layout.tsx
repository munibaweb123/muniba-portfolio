import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/site";

const title = `${profile.name} — Agentic AI Developer & Full-Stack Engineer`;
const description = `${profile.name} builds agentic AI systems and full-stack products with Next.js, FastAPI and the OpenAI Agents SDK, and teaches Agent Factory cohorts at GIAIC. Based in ${profile.location}.`;

export const metadata: Metadata = {
  // Uses siteUrl from site.ts, or Vercel's production URL automatically
  metadataBase: new URL(
    profile.siteUrl ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    profile.name,
    "Agentic AI Developer",
    "Full-Stack Engineer",
    "OpenAI Agents SDK",
    "Next.js",
    "FastAPI",
    "GIAIC",
    "Agent Factory",
    "Karachi",
  ],
  openGraph: { title, description, type: "website", siteName: profile.name },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
