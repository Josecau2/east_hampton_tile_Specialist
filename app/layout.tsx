import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import Script from 'next/script';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

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
  : new URL("https://www.easthamptontilespecialists.com");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "East Hampton Tile Specialists | Tile Installation & Shower Waterproofing in the Hamptons",
    template: "%s | East Hampton Tile Specialists",
  },
  description:
    "East Hampton's trusted tile specialists. Professional tile installation, shower waterproofing, and bathroom remodels in East Hampton, Sag Harbor, Montauk & the Hamptons. Free estimates.",
  keywords: [
    "East Hampton tile specialists",
    "tile contractor East Hampton",
    "tile installer Hamptons",
    "bathroom tile installation",
    "shower tile installation",
    "shower waterproofing",
    "kitchen backsplash",
    "floor tile installation",
    "tile repair East Hampton",
    "Hamptons tile contractor",
    "Sag Harbor tile installer",
    "Montauk tile contractor",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "East Hampton Tile Specialists | Professional Tile Installation",
    description:
      "East Hampton's trusted tile specialists. Professional tile installation, shower waterproofing, and bathroom remodels in the Hamptons. Free estimates.",
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
    title: "East Hampton Tile Specialists | Tile Installation & Waterproofing",
    description:
      "East Hampton's trusted tile specialists. Professional tile installation, shower waterproofing, and bathroom remodels in the Hamptons.",
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

// Defer sticky CTA scroll detection to reduce initial main-thread work
const StickyCTA = dynamic(() => import('@/components/sticky-cta').then(m => ({ default: m.StickyCTA })));

// Structured Data for Local Business SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://easthamptontilespecialists.com/#business",
  name: "East Hampton Tile Specialists",
  description: "Tile installation, shower waterproofing, and repairs for bathrooms, kitchens, and floors in East Hampton and the Hamptons.",
  url: "https://easthamptontilespecialists.com",
  telephone: "+1-929-217-0803",
  email: "info@easthamptontilespecialists.com",
  image: "https://easthamptontilespecialists.com/hero/hero.avif",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "East Hampton", "@id": "https://www.wikidata.org/wiki/Q975295" },
    { "@type": "City", name: "Sag Harbor" },
    { "@type": "City", name: "Montauk" },
    { "@type": "City", name: "Amagansett" },
    { "@type": "City", name: "Bridgehampton" },
    { "@type": "City", name: "Southampton" },
    { "@type": "City", name: "Water Mill" },
    { "@type": "City", name: "Sagaponack" },
    { "@type": "City", name: "Wainscott" },
    { "@type": "City", name: "Springs" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9634,
    longitude: -72.1848,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "East Hampton",
    addressRegion: "NY",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Nestor Fajardo",
    jobTitle: "Founder & Master Tile Specialist",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tile Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tile Installation",
          description: "Professional tile installation for floors, walls, showers, and backsplashes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shower Waterproofing",
          description: "Complete shower waterproofing including pan prep, membrane, sealing, and drainage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tile Repair & Regrout",
          description: "Repair cracked tiles, regrout, recaulk, and apply sealers.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-svh overflow-x-hidden antialiased`}
      >
        <Script
          defer
          src="https://umami.swolfai.com/script.js"
          data-website-id="f0d382df-e08c-48cd-845c-0050c4489798"
          strategy="afterInteractive"
        />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
