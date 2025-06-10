import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Personal Blog | Tech Insights & Development",
    template: "%s | Personal Blog",
  },
  description:
    "A modern blog platform built with Next.js and Sanity CMS, featuring insights on web development, React, and technology trends.",
  keywords: [
    "blog",
    "web development",
    "React",
    "Next.js",
    "Sanity CMS",
    "technology",
  ],
  authors: [{ name: "Afolabi Oluwasegun" }],
  creator: "Afolabi Oluwasegun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://personally-cms.netlify.app",
    title: "Personal Blog | Tech Insights & Development",
    description:
      "A modern blog platform built with Next.js and Sanity CMS, featuring insights on web development, React, and technology trends.",
    siteName: "Personal Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Blog | Tech Insights & Development",
    description:
      "A modern blog platform built with Next.js and Sanity CMS, featuring insights on web development, React, and technology trends.",
    creator: "@lekksz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
