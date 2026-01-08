import TeamSection from "@/components/team-sections-01";
import { BackgroundPattern1 } from "@/components/background-pattern1";
import { Contact7 } from "@/components/contact7";
import { Cta10 } from "@/components/cta10";
import { Faq1 } from "@/components/faq1";
import { Footer2 } from "@/components/footer2";
import { Gallery6 } from "@/components/gallery6";
import { Hero3 } from "@/components/hero3";
import { Logos8 } from "@/components/logos8";
import { Navbar1 } from "@/components/navbar1";
import { ProcessSection } from "@/components/process-section";
import Testimonials03 from "@/components/testimonials-03";
import { ShieldCheck, MapPin, HardHat, Clock } from "lucide-react";

import { ServiceAreaSection } from "@/components/service-area-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
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
          description="Tile installation, waterproofing, and repairs for bathrooms, kitchens, and floors. Get a fast quote with photos and your ZIP code."
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

      <section id="gallery">
        <Gallery6 />
      </section>

      <section id="reviews">
        <Testimonials03 />
      </section>

      <section id="service-area">
        <ServiceAreaSection />
      </section>

      <TeamSection />

      <BackgroundPattern1 position="center" intensity={60}>
        <Cta10
          heading="Ready to start your tile project?"
          description="Send photos, measurements, and your ZIP code — we'll confirm scope and availability."
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
          title="Contact"
          description="Use the form to request a quote, or call during business hours."
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
  );
}
