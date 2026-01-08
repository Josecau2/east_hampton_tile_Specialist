"use client";

import { Star } from "lucide-react";
import { MarqueeEffect } from "@/components/marquee-effect";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  rating?: number;
  className?: string;
  [key: string]: any;
}

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Springs, NY",
    rating: 5,
    description:
      "Honestly, our master bathroom looks amazing. The herringbone tile they did is so clean and the shower waterproofing hasn't given us any issues. Really happy we went with Nestor for this."
  },
  {
    name: "James Richardson",
    role: "Sag Harbor, NY",
    rating: 5,
    description:
      "We had a nightmare with our old shower—constant leaks, water damage behind the tile. Nestor ripped it all out, did the shower pan right, and put in marble tile that actually looks good. Two years later, zero problems. Best tile contractor we've worked with in the Hamptons."
  },
  {
    name: "Emily Thompson",
    role: "Montauk, NY",
    rating: 5,
    description:
      "The heated floors are incredible. Game changer for cold mornings. And the tile work in the shower niche? Perfect."
  },
  {
    name: "Michael Bradford",
    role: "Wainscott, NY",
    rating: 4,
    description:
      "Really solid bathroom tile work. The mosaic accent in our shower looks great, though the project took a bit longer than expected due to some material delays. Overall happy with the quality—you can tell they take pride in what they do."
  },
  {
    name: "Jessica Anderson",
    role: "Amagansett, NY",
    rating: 5,
    description:
      "We weren't sure about large-format tile at first but Nestor walked us through everything—grout options, layout, waterproofing, the whole deal. Our bathroom remodel turned out better than the Pinterest photos we showed them. Super happy with how it came out."
  },
  {
    name: "David Patterson",
    role: "Sagaponack, NY",
    rating: 5,
    description:
      "No surprises, no drama. They quoted the shower tile installation, showed up when they said they would, and finished on time. The custom bench and niche work is top notch."
  },
  {
    name: "Catherine Williams",
    role: "Napeague, NY",
    rating: 5,
    description:
      "Our guest bath went from dated to stunning. The porcelain tile installation is so clean—grout lines are perfect, no lippage, just really solid work. Finally found a tile contractor in the Hamptons who actually knows what they're doing."
  },
  {
    name: "Robert Chen",
    role: "East Hampton, NY",
    rating: 5,
    description:
      "We got quotes from 3 different tile contractors. Nestor wasn't the cheapest but their bathroom remodel work speaks for itself. The heated floor, the shower waterproofing, everything done right. Worth it."
  }
];

export function TestimonialCard({ item }: { item: TestimonialCardProps }) {
  const rating = item.rating || 5;
  return (
    <div className="bg-card border-2 border-transparent hover:border-primary/30 mb-4 flex w-[320px] cursor-pointer flex-col items-center justify-between gap-4 rounded-lg p-6 shadow-lg transition-all lg:w-[420px]">
      <div className="text-foreground space-y-4">
        <p className="italic text-balance">"{item.description}"</p>
        <div className="flex flex-row gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-5 ${
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full items-start justify-start border-t pt-4">
        <div>
          <p className="text-foreground font-bold">{item.name}</p>
          <p className="text-muted-foreground text-sm">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials03() {
  return (
    <section className="py-20 lg:py-32" id="reviews">
      <div className="container mx-auto px-4">
        <header className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wider mb-4">
            Testimonials
          </Badge>
          <h2 className="font-heading mb-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Loved by Locals
          </h2>
          <p className="text-muted-foreground text-balance lg:text-lg">
            See what your neighbors are saying about our tile work.
          </p>
        </header>

        <div className="mask-r-from-95% mask-l-from-95% overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10"></div>
            
          {testimonials.length > 0 && (
            <>
              <MarqueeEffect gap={24} speed={30} speedOnHover={0}>
                {testimonials.map((item) => (
                  <TestimonialCard key={item.name} item={item} />
                ))}
              </MarqueeEffect>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
