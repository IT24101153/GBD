import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genius Build Developers | Business Software Development Company",
  description:
    "Genius Build Developers is a business software development company delivering custom web platforms, mobile apps, SaaS products, and cloud modernization solutions.",
  keywords: [
    "Genius Build Developers",
    "Business Software Development",
    "Custom Software Development",
    "SaaS Development",
    "Web Application Development",
    "Mobile App Development",
    "Cloud Modernization",
    "Enterprise Software Solutions",
  ],
  authors: [{ name: "Genius Build Developers" }],
  creator: "Genius Build Developers",
  publisher: "Genius Build Developers",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geniusbuilddevelopers.com",
    title: "Genius Build Developers | Business Software Development Company",
    description:
      "Custom business software solutions that streamline operations and accelerate growth.",
    siteName: "Genius Build Developers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genius Build Developers | Business Software Development Company",
    description:
      "Custom business software solutions that streamline operations and accelerate growth.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://geniusbuilddevelopers.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
