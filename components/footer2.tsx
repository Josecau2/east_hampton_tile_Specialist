import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { QuoteDialog } from "@/components/quote-dialog";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
    url: "https://www.shadcnblocks.com",
  },
  className,
  tagline = "Components made easy.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Pricing", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className={cn("py-16 md:py-24 bg-foreground text-background", className)}>
      <div className="container">
        <footer>
          {/* Main footer content */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
            {/* Logo section - spans 4 columns on desktop */}
            <div className="flex flex-col items-center text-center md:col-span-4 md:items-start md:text-left">
              <a href="#" className="flex flex-col items-center md:items-start gap-3">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-20 md:h-28 w-auto invert"
                />
                <div className="text-2xl md:text-3xl font-bold text-background leading-tight">
                  <span className="block">East Hampton</span>
                  <span className="block">Tile Specialists</span>
                </div>
              </a>
              <p className="mt-4 text-base font-medium text-background/80">{tagline}</p>
              
              {/* Google Maps Embed */}
              <div className="mt-6 w-full max-w-sm">
                <h3 className="text-sm font-bold text-primary mb-2">Service Area</h3>
                <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-background/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48443.91874284897!2d-72.21916084999999!3d40.9634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e86c7a99e84979%3A0x7b5d88a8c8d8d8d8!2sEast%20Hampton%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="East Hampton Tile Specialists service area map"
                  />
                </div>
                <p className="text-xs text-background/60 mt-2 text-center md:text-left">
                  Serving East Hampton & the Hamptons
                </p>
              </div>
            </div>

            {/* Menu columns - spans 8 columns, distributed evenly */}
            <div className="md:col-span-8 flex flex-wrap justify-center md:justify-end gap-12 lg:gap-16">
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx} className="min-w-[140px]">
                  <h3 className="mb-4 font-bold text-primary">{section.title}</h3>
                  <ul className="space-y-3 text-background/80 text-sm">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {link.url === '/signup' ? (
                          <QuoteDialog>
                             <button className="bg-transparent border-0 p-0 text-inherit font-inherit cursor-pointer hover:underline text-left">
                              {link.text}
                             </button>
                          </QuoteDialog>
                        ) : (
                          <a href={link.url}>{link.text}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/30 pt-8 text-sm font-medium text-background/80 md:flex-row">
            <p className="text-center md:text-left">{copyright}</p>
            <Button variant="outline" size="sm" className="border-background/50 text-background bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary uppercase tracking-wider" asChild>
              <a href="https://web.elclubdelcontratista.com" target="_blank" rel="noopener noreferrer">
                Powered By El Club Del Contratista
              </a>
            </Button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
