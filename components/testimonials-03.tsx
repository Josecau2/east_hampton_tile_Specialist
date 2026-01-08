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
  className?: string;
  [key: string]: any;
}

const testimonials = [
  {
    name: "Sarah C.",
    role: "East Hampton, NY",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    description:
      "Nestor transformed our master bath. The herringbone tile work is flawless, and they kept the site incredibly clean."
  },
  {
    name: "James L.",
    role: "Sag Harbor, NY",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    description:
      "We had a leaking shower pan from a previous contractor. Nestor fixed it correctly, and the new tile looks stunning."
  },
  {
    name: "Emily R.",
    role: "Montauk, NY",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    description:
      "Reliable, honest, and skilled. The heated floors in our bathroom are a game changer. Highly recommend."
  },
  {
    name: "Michael B.",
    role: "Bridgehampton, NY",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    description:
      "The detail in the niche and curb is perfect. You can tell they care about their craft."
  },
  {
    name: "Jessica T.",
    role: "Amagansett, NY",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    description:
      "They helped us select the right grout and trim for our modern design. The result is better than we imagined."
  },
  {
    name: "David K.",
    role: "Southampton, NY",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    description:
      "Professional from quote to cleanup. No surprises, just great tile work."
  }
];

export function TestimonialCard({ item }: { item: TestimonialCardProps }) {
  return (
    <div className="bg-card border-2 border-transparent hover:border-primary/30 mb-4 flex w-[320px] cursor-pointer flex-col items-center justify-between gap-4 rounded-lg p-6 shadow-lg transition-all lg:w-[420px]">
      <div className="text-foreground space-y-4">
        <p className="italic text-balance">"{item.description}"</p>
        <div className="flex flex-row gap-1">
          <Star className="size-5 fill-primary text-primary" />
          <Star className="size-5 fill-primary text-primary" />
          <Star className="size-5 fill-primary text-primary" />
          <Star className="size-5 fill-primary text-primary" />
          <Star className="size-5 fill-primary text-primary" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-3 border-t pt-4">
        <Avatar className="ring-2 ring-primary/20">
          <AvatarImage src={item.img} alt={item.name} />
        </Avatar>

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
