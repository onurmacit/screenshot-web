import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Screenshot API - Professional Web Screenshot & PDF Generation",
  description:
    "Production-grade screenshot and PDF rendering API. Fast, reliable, and scalable. Perfect for developers, marketers, and businesses.",
  keywords: [
    "screenshot API",
    "PDF generation",
    "web scraping",
    "screenshot service",
    "URL to image",
    "HTML to PDF",
  ],
  openGraph: {
    title: "Screenshot API - Professional Web Screenshot & PDF Generation",
    description:
      "Production-grade screenshot and PDF rendering API. Fast, reliable, and scalable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
