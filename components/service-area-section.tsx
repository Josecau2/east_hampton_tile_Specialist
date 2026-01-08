import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/quote-dialog";

interface ServiceAreaSectionProps {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  areas?: string[];
  note?: string;
  primaryCta?: { text: string; href: string };
}

const ServiceAreaSection = ({
  className,
  eyebrow = "Service Area",
  title = "Serving local homes and businesses",
  description =
    "Not sure if you’re in range? Send your ZIP code and a couple photos — we’ll confirm availability fast.",
  areas = [
    "Downtown",
    "North Side",
    "West End",
    "South Bay",
    "East Hills",
    "Surrounding areas",
  ],
  note = "Travel fees may apply outside the core area.",
  primaryCta = { text: "Check availability", href: "#contact" },
}: ServiceAreaSectionProps) => {
  return (
    <section className={cn("bg-muted/30 py-24 sm:py-32", className)}>
      <div className="container">
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{eyebrow}</Badge>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              On-site estimates
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Areas we cover</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-md border bg-background px-3 py-2"
                >
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">{note}</p>
              <QuoteDialog>
                <Button>{primaryCta.text}</Button>
              </QuoteDialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ServiceAreaSection };
