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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "East Hampton Tile Specialists",
    template: "%s | East Hampton Tile Specialists",
  },
  description:
    "Tile installation, shower waterproofing, and repairs for bathrooms, kitchens, and floors in East Hampton and the Hamptons.",
  keywords: [
    "tile contractor",
    "tile installer",
    "bathroom tile",
    "shower tile",
    "shower waterproofing",
    "kitchen backsplash",
    "floor tile",
    "tile repair",
    "East Hampton tile contractor",
    "Hamptons tile installer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "East Hampton Tile Specialists",
    description:
      "Tile installation, shower waterproofing, and repairs for bathrooms, kitchens, and floors in East Hampton and the Hamptons.",
    siteName: "East Hampton Tile Specialists",
    images: [
      {
        url: "/hero/hero.avif",
        alt: "Bathroom tile installation by East Hampton Tile Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "East Hampton Tile Specialists",
    description:
      "Tile installation, shower waterproofing, and repairs for bathrooms, kitchens, and floors in East Hampton and the Hamptons.",
    images: ["/hero/hero.avif"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

import { StickyCTA } from "@/components/sticky-cta";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-svh overflow-x-hidden antialiased`}
      >
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
