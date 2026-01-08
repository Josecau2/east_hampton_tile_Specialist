import * as React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const DEFAULT_ITEMS: TimelineEntry[] = [
  {
    date: "Step 1",
    title: "Share details",
    content: "Send photos, measurements, and your ZIP code.",
  },
  {
    date: "Step 2",
    title: "Scope + estimate",
    content: "We confirm prep needs, materials, and schedule options.",
  },
  {
    date: "Step 3",
    title: "Prep",
    content: "Surface prep, waterproofing (if needed), and layout planning.",
  },
  {
    date: "Step 4",
    title: "Install + finish",
    content: "Set tile, grout, seal (as needed), and clean up the site.",
  },
];

interface Timeline9Props {
  className?: string;
  title?: string;
  items?: TimelineEntry[];
}

const Timeline9 = ({
  className,
  title = "How it works",
  items = DEFAULT_ITEMS,
}: Timeline9Props) => {
  return (
    <section className={cn("bg-background py-16 md:py-24", className)}>
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tighter text-foreground sm:text-6xl">
          {title}
        </h2>
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="absolute top-4 left-2 bg-muted"
          />
          {items.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-foreground" />
              <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                {entry.title}
              </h4>

              <h5 className="text-md top-3 -left-34 rounded-xl tracking-tight text-muted-foreground xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-5 border-none shadow-none">
                <CardContent className="px-0 xl:px-2">
                  <p className="text-foreground">{entry.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline9 };
