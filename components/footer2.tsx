import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Logo, LogoImage, LogoText } from "@/components/logo";
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
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="#">
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10 invert"
                  />
                  <LogoText className="text-xl text-background">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-4 font-bold text-background/80">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-primary">{section.title}</h3>
                <ul className="space-y-4 text-background/80">
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
          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-background/30 pt-8 text-sm font-medium text-background/80 md:flex-row md:items-center">
            <p>{copyright}</p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="hover:text-primary transition-colors">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="border-background/50 text-background bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                <a href="https://web.elclubdelcontratista.com" target="_blank" rel="noopener noreferrer">
                  Powered By El Club Del Contratista
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
