import { CheckCircle2, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/quote-dialog";

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

interface ServicesSectionProps {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  services?: Service[];
  primaryCta?: { text: string; href: string };
}

const ServicesSection = ({
  className,
  eyebrow = "Services",
  title = "Hamptons Tile Specialists",
  description =
    "Expert tile installation, shower waterproofing, and repairs for East Hampton homes. We focus on proper prep, clean lines, and a finish that lasts.",
  services = [
    {
      title: "Tile Installation",
      description: "Floors, walls, showers, and backsplashes.",
      bullets: [
        "Layout + pattern planning",
        "Cutting + edge finishing",
        "Clean grout lines",
      ],
    },
    {
      title: "Shower Waterproofing",
      description: "Build it once—build it to code.",
      bullets: ["Pan + curb prep", "Membrane + sealing", "Slope + drainage"],
    },
    {
      title: "Repair & Regrout",
      description: "Fix cracked tiles, loose areas, and failing grout.",
      bullets: ["Tile replacement", "Regrout / recaulk", "Sealer application"],
    },
  ],
  primaryCta = { text: "Request a quote", href: "#contact" },
}: ServicesSectionProps) => {
  return (
    <section className={cn("bg-background py-24 sm:py-32", className)} id="services">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wider">{eyebrow}</Badge>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Prep-first approach
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div>
            <QuoteDialog>
              <Button>{primaryCta.text}</Button>
            </QuoteDialog>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-muted-foreground" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#pricing" 
                  className="inline-block text-sm text-primary hover:underline font-medium"
                >
                  View pricing →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cross-links to other sections */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>Learn more:</span>
          <a href="#process" className="text-primary hover:underline">Our process</a>
          <span>•</span>
          <a href="#gallery" className="text-primary hover:underline">View our work</a>
          <span>•</span>
          <a href="#reviews" className="text-primary hover:underline">Customer reviews</a>
          <span>•</span>
          <a href="#faq" className="text-primary hover:underline">FAQ</a>
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
