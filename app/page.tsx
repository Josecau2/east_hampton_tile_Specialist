import TeamSection from "@/components/team-sections-01";
import { BackgroundPattern1 } from "@/components/background-pattern1";
import { Contact7 } from "@/components/contact7";
import { Cta10 } from "@/components/cta10";
import { Faq1 } from "@/components/faq1";
import { Footer2 } from "@/components/footer2";
import dynamic from 'next/dynamic';
import { Hero3 } from "@/components/hero3";
import { Logos8 } from "@/components/logos8";
import { Navbar1 } from "@/components/navbar1";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ShieldCheck, MapPin, HardHat, Clock } from "lucide-react";
import { ServiceAreaSection } from "@/components/service-area-section";
import { ServicesSection } from "@/components/services-section";

// Lazy load heavy gallery (46 images) to reduce initial bundle + main-thread blocking
const ImageGallery = dynamic(() => import('@/components/image-gallery').then(m => ({ default: m.ImageGallery })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><p className="text-muted-foreground">Loading gallery...</p></div>
});

// Lazy load testimonials marquee to reduce initial JS
const Testimonials03 = dynamic(() => import('@/components/testimonials-03'), {
  loading: () => <div className="py-20 lg:py-32" />
});

// FAQ data for both display and structured data
const faqItems = [
  {
    id: "faq-1",
    question: "Are you a tile contractor or a full bathroom remodeler in East Hampton?",
    answer: "We're tile-first bathroom specialists—meaning our core work is bathroom tile installation, shower tile, waterproofing, and bathroom floors in East Hampton and the surrounding Hamptons. If your project needs a full bathroom remodel, we can handle the tile scope and coordinate the rest of the bathroom work as needed so the project stays tight and on schedule."
  },
  {
    id: "faq-2",
    question: "What areas do you serve around East Hampton, NY?",
    answer: "We serve East Hampton and nearby Hamptons communities including East Hampton Village, Amagansett, Springs, Wainscott, Montauk, Napeague, Sag Harbor, Bridgehampton, Water Mill, Southampton, and Sagaponack—primarily across the South Fork in Suffolk County, NY."
  },
  {
    id: "faq-3",
    question: "Do you install shower tile and waterproofing systems?",
    answer: "Yes. A great-looking shower is useless if it leaks—so we focus on proper shower waterproofing (pan, walls, transitions, and drains) before any tile goes up. If you're comparing tile installers in East Hampton, ask this question first—it's where showers either last… or become a science experiment."
  },
  {
    id: "faq-4",
    question: "How long does a shower tile installation take?",
    answer: "Most shower projects depend on demo scope, substrate condition, waterproofing steps, tile layout complexity (niches, benches, mosaics), and cure times. After an on-site look, we'll give you a realistic schedule and what milestones to expect (demo, prep, waterproofing, tile set, grout, final detailing)."
  },
  {
    id: "faq-5",
    question: "Can you fix cracked tiles or a leaking shower without a full bathroom remodel?",
    answer: "Sometimes. If it's isolated damage (a few cracked tiles, grout failure, loose tiles), tile repair can be a smart option. If water is getting behind the tile, we'll be straight with you—many 'repairs' are temporary unless the waterproofing system is corrected."
  },
  {
    id: "faq-6",
    question: "Do you install bathroom floor tile and heated floors?",
    answer: "Yes—bathroom floor tile installation is a big part of what we do, and we also install heated tile floors (radiant heat) when the layout and electrical plan make sense. Heated floors are especially popular in Hamptons bathrooms because once you have it… you become spoiled forever."
  },
  {
    id: "faq-7",
    question: "What tile types do you install?",
    answer: "We install porcelain, ceramic, mosaic, and natural stone tile (including marble), depending on the application. We'll guide you on what performs best for showers, bathroom floors, and wet areas, including slip-resistance, grout joints, and maintenance expectations."
  },
  {
    id: "faq-8",
    question: "Do you work with large-format tile and specialty layouts?",
    answer: "Yes. We install large-format tile and clean, modern layouts (stack bond, offset, herringbone, feature walls). Large-format tile can look incredible, but it demands proper prep to keep walls/floors flat and reduce lippage—so we plan layout and prep carefully."
  },
  {
    id: "faq-9",
    question: "Can I supply my own tile and materials?",
    answer: "Absolutely. Many homeowners in East Hampton already have tile selected. We'll confirm quantities, trim/edge details, and what's needed for cuts and waste (especially for patterns, niches, and large-format tile) before the job starts."
  },
  {
    id: "faq-10",
    question: "What grout do you use for showers and bathrooms?",
    answer: "We'll recommend grout based on the tile type and the use case (showers vs floors, narrow vs wide joints, maintenance preferences). We also detail changes of plane correctly (corners/transitions) so the install holds up over time."
  },
  {
    id: "faq-11",
    question: "How do you protect the home during demo and tile work?",
    answer: "We use practical containment and jobsite habits to keep things controlled—floor protection, dust management, daily cleanup, and a clear path in/out. In finished homes (common out here), clean work matters as much as clean lines."
  },
  {
    id: "faq-12",
    question: "How do I get an estimate for bathroom tile installation in East Hampton?",
    answer: "Send a couple photos (current bathroom + inspiration), and we'll schedule an on-site walkthrough. You'll get a clear scope, timeline expectations, and options for tile, waterproofing, and finishes."
  }
];

// FAQPage structured data for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// ImageGallery structured data for portfolio visibility
const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Bathroom Tile Installation Portfolio — East Hampton & The Hamptons",
  description: "Real tile work: shower installations, waterproofing, heated floors, and custom bathroom remodels across East Hampton, Sag Harbor, Montauk, and the Hamptons.",
  creator: {
    "@type": "Organization",
    name: "East Hampton Tile Specialists"
  },
  image: [
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/white-marble-plank-tile-shower-hexagon-floor-black-accents.avif",
      caption: "White marble plank tile shower with hexagon floor and black accents — luxury bathroom remodel in the Hamptons",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/black-marble-slab-tile-installation-white-veining-shower.avif",
      caption: "Black marble slab shower tile with white veining — luxury bathroom installation in East Hampton",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/white-subway-tile-shower-corner-installation-recessed-niche-bench.avif",
      caption: "White subway tile shower with corner bench and recessed niche — bathroom tile work in East Hampton",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/gray-marble-shower-black-hexagon-accent-dual-heads.avif",
      caption: "Gray marble shower with black hexagon floor and dual shower heads — luxury tile installation in the Hamptons",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/white-marble-black-veining-hexagon-mosaic-luxury-shower.avif",
      caption: "White marble hexagon mosaic with black veining — luxury shower tile in East Hampton",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/radiant-floor-heating-installation-bathroom-tile-prep.avif",
      caption: "Radiant floor heating installation before tile — heated bathroom floors in East Hampton",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/white-subway-tile-herringbone-pattern-dark-grout-installation.avif",
      caption: "White subway tile in herringbone pattern with dark grout — shower tile installation in the Hamptons",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/classic-hexagon-tile-floor-installation-black-border-pattern.avif",
      caption: "Classic hexagon bathroom floor tile with black border — tile installation in East Hampton",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/white-marble-book-matched-slabs-dark-floor-black-fixtures.avif",
      caption: "Book-matched white marble slab shower walls — high-end bathroom tile work in the Hamptons",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://easthamptontilespecialists.com/tiles/luxury-bathroom-white-marble-tile-black-hexagon-floor-black-ceiling.avif",
      caption: "Luxury bathroom with white marble tile and black hexagon floor — complete remodel in East Hampton",
      creator: { "@type": "Organization", name: "East Hampton Tile Specialists" }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <div className="min-h-screen bg-background text-foreground">
      <Navbar1
        logo={{
          url: "#",
          src: "/logo.png",
          alt: "East Hampton Tile Specialists logo",
          title: "East Hampton Tile Specialists",
          className: "invert-0 dark:invert-0",
        }}
        menu={[
          { title: "Home", url: "#" },
          { title: "Services", url: "#services" },
          { title: "Pricing", url: "#pricing" },
          { title: "Service Area", url: "#service-area" },
          { title: "Reviews", url: "#reviews" },
          { title: "FAQ", url: "#faq" },
          { title: "Contact", url: "#contact" },
        ]}
        auth={{
          login: { title: "Call", url: "tel:9292170803" },
          signup: { title: "Request a quote", url: "#contact" },
        }}
      />

      <BackgroundPattern1 position="top" intensity={80}>
        <Hero3
          heading={
            <>
              Beautiful tile. Clean lines.{" "}
              <span className="text-primary">Built to last.</span>
            </>
          }
          description="Professional tile installation, shower waterproofing, and repairs in East Hampton and the Hamptons. Get a fast quote — just send photos and your ZIP code."
          buttons={{
            primary: { text: "Request a quote", url: "#contact" },
            secondary: { text: "View work", url: "#gallery" },
          }}
          image={{
            src: "/hero/hero.avif",
            alt: "Beautiful bathroom tile installation by East Hampton Tile Specialists",
          }}
          trustItems={[
          {
            icon: <ShieldCheck className="size-5" />,
            title: "Fully Insured",
            description: "Liability & Workers Comp",
          },
          {
            icon: <MapPin className="size-5" />,
            title: "Licensed",
            description: "NY, NJ, CT, and PA",
          },
          {
            icon: <HardHat className="size-5" />,
            title: "OSHA Certified",
            description: "Safety compliant",
          },
          {
            icon: <Clock className="size-5" />,
            title: "20+ Years Exp",
            description: "Master craftsmanship",
          },
        ]}
        />
      </BackgroundPattern1>

      <Logos8 
        className="py-12 md:py-16"
        title="Trusted Materials"
        subtitle="We build with the industry's best systems."
        logos={[
          { name: "Schluter Systems", logo: "/brands_logos/schluter.svg", className: "h-12 md:h-16 w-auto", url: "https://www.schluter.com" },
          { name: "Laticrete", logo: "/brands_logos/laticrete.svg", className: "h-10 md:h-14 w-auto", url: "https://laticrete.com" },
          { name: "Mapei", logo: "/brands_logos/mapei.png", className: "h-10 md:h-14 w-auto", url: "https://www.mapei.com" },
          { name: "Rubi", logo: "/brands_logos/rubi.svg", className: "h-10 md:h-14 w-auto", url: "https://www.rubi.com" },
          { name: "MSI Surfaces", logo: "/brands_logos/msi.svg", className: "h-12 md:h-16 w-auto", url: "https://www.msisurfaces.com" },
        ]}
      />

      <ProcessSection />

      <section id="services">
        <ServicesSection />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="gallery" className="py-20 md:py-32">
        <div className="container">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
              Real Work. Clean Lines.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
              Bathroom tile, waterproofing, heated floors, and high-end installs across East Hampton and the Hamptons.
            </p>
          </div>
          <ImageGallery />
        </div>
      </section>

      <section id="reviews">
        <Testimonials03 />
      </section>

      <section id="service-area">
        <ServiceAreaSection 
          eyebrow="Service Area"
          title="Serving the Hamptons & South Fork"
          description="We cover East Hampton and surrounding communities on the South Fork. Not sure if you're in range? Send your ZIP code and we'll confirm."
          areas={[
            "East Hampton",
            "East Hampton Village",
            "Amagansett",
            "Montauk",
            "Sag Harbor",
            "Bridgehampton",
            "Southampton",
            "Water Mill",
            "Sagaponack",
            "Wainscott",
            "Springs",
            "Napeague",
          ]}
          note="Travel fees may apply for locations outside the core Hamptons area."
          primaryCta={{ text: "Check availability", href: "#contact" }}
        />
      </section>

      <TeamSection />

      <BackgroundPattern1 position="center" intensity={60}>
        <Cta10
          heading="Ready to transform your bathroom?"
          description="East Hampton homeowners: send photos, measurements, and your ZIP code — we'll confirm scope and availability same day."
          buttons={{
            primary: { text: "Request a quote", url: "#contact" },
            secondary: { text: "Contact", url: "#contact" },
          }}
        />
      </BackgroundPattern1>

      <section id="faq">
        <Faq1 
          heading="Frequently Asked Questions"
          items={[
            {
              id: "faq-1",
              question: "Are you a tile contractor or a full bathroom remodeler in East Hampton?",
              answer: "We’re tile-first bathroom specialists—meaning our core work is bathroom tile installation, shower tile, waterproofing, and bathroom floors in East Hampton and the surrounding Hamptons. If your project needs a full bathroom remodel, we can handle the tile scope and coordinate the rest of the bathroom work as needed so the project stays tight and on schedule."
            },
            {
              id: "faq-2",
              question: "What areas do you serve around East Hampton, NY?",
              answer: "We serve East Hampton and nearby Hamptons communities including East Hampton Village, Amagansett, Springs, Wainscott, Montauk, Napeague, Sag Harbor, Bridgehampton, Water Mill, Southampton, and Sagaponack—primarily across the South Fork in Suffolk County, NY."
            },
            {
              id: "faq-3",
              question: "Do you install shower tile and waterproofing systems?",
              answer: "Yes. A great-looking shower is useless if it leaks—so we focus on proper shower waterproofing (pan, walls, transitions, and drains) before any tile goes up. If you’re comparing tile installers in East Hampton, ask this question first—it’s where showers either last… or become a science experiment."
            },
            {
              id: "faq-4",
              question: "How long does a shower tile installation take?",
              answer: "Most shower projects depend on demo scope, substrate condition, waterproofing steps, tile layout complexity (niches, benches, mosaics), and cure times. After an on-site look, we’ll give you a realistic schedule and what milestones to expect (demo, prep, waterproofing, tile set, grout, final detailing)."
            },
            {
              id: "faq-5",
              question: "Can you fix cracked tiles or a leaking shower without a full bathroom remodel?",
              answer: "Sometimes. If it’s isolated damage (a few cracked tiles, grout failure, loose tiles), tile repair can be a smart option. If water is getting behind the tile, we’ll be straight with you—many “repairs” are temporary unless the waterproofing system is corrected."
            },
            {
              id: "faq-6",
              question: "Do you install bathroom floor tile and heated floors?",
              answer: "Yes—bathroom floor tile installation is a big part of what we do, and we also install heated tile floors (radiant heat) when the layout and electrical plan make sense. Heated floors are especially popular in Hamptons bathrooms because once you have it… you become spoiled forever."
            },
            {
              id: "faq-7",
              question: "What tile types do you install?",
              answer: "We install porcelain, ceramic, mosaic, and natural stone tile (including marble), depending on the application. We’ll guide you on what performs best for showers, bathroom floors, and wet areas, including slip-resistance, grout joints, and maintenance expectations."
            },
            {
              id: "faq-8",
              question: "Do you work with large-format tile and specialty layouts?",
              answer: "Yes. We install large-format tile and clean, modern layouts (stack bond, offset, herringbone, feature walls). Large-format tile can look incredible, but it demands proper prep to keep walls/floors flat and reduce lippage—so we plan layout and prep carefully."
            },
            {
              id: "faq-9",
              question: "Can I supply my own tile and materials?",
              answer: "Absolutely. Many homeowners in East Hampton already have tile selected. We’ll confirm quantities, trim/edge details, and what’s needed for cuts and waste (especially for patterns, niches, and large-format tile) before the job starts."
            },
            {
              id: "faq-10",
              question: "What grout do you use for showers and bathrooms?",
              answer: "We’ll recommend grout based on the tile type and the use case (showers vs floors, narrow vs wide joints, maintenance preferences). We also detail changes of plane correctly (corners/transitions) so the install holds up over time."
            },
            {
              id: "faq-11",
              question: "How do you protect the home during demo and tile work?",
              answer: "We use practical containment and jobsite habits to keep things controlled—floor protection, dust management, daily cleanup, and a clear path in/out. In finished homes (common out here), clean work matters as much as clean lines."
            },
            {
              id: "faq-12",
              question: "How do I get an estimate for bathroom tile installation in East Hampton?",
              answer: "Send a couple photos (current bathroom + inspiration), and we’ll schedule an on-site walkthrough. You’ll get a clear scope, timeline expectations, and options for tile, waterproofing, and finishes."
            }
          ]} 
        />
      </section>

      <section id="contact">
        <Contact7
          title="Get Your Free Estimate"
          description="Serving East Hampton, Sag Harbor, Montauk, and the South Fork. Use the form or call during business hours."
          emailLabel="Email"
          emailDescription="Send project photos and measurements."
          email="info@easthamptontilespecialists.com"
          officeLabel="Service area"
          officeDescription="New York area. Send your ZIP code to confirm availability."
          officeAddress="NY"
          phoneLabel="Phone"
          phoneDescription="Call to discuss your project."
          phone="(929) 217-0803"
          chatLabel="Quote"
          chatDescription="Start with a quick request form."
          chatLink="Request a quote"
        />
      </section>

      <Footer2
        logo={{
          url: "#",
          src: "/logo.png",
          alt: "East Hampton Tile Specialists logo",
          title: "East Hampton Tile Specialists",
        }}
        tagline="Tile installation • Waterproofing • Repair"
        menuItems={[
          {
            title: "Sections",
            links: [
              { text: "Services", url: "#services" },
              { text: "Pricing", url: "#pricing" },
              { text: "Service Area", url: "#service-area" },
              { text: "Reviews", url: "#reviews" },
              { text: "FAQ", url: "#faq" },
              { text: "Contact", url: "#contact" },
            ],
          },
          {
            title: "Get started",
            links: [
              { text: "Request a quote", url: "#contact" },
              { text: "Call", url: "tel:9292170803" },
            ],
          },
        ]}
        copyright="© 2026 East Hampton Tile Specialists. All rights reserved."
        bottomLinks={[]}
      />
    </div>
    </>
  );
}
