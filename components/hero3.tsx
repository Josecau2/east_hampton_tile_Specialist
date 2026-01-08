import { ArrowDownRight, Star } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";

interface Hero3Props {
  heading?: React.ReactNode;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
      className?: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  trustItems?: {
    icon: React.ReactNode;
    title: string;
    description?: string;
  }[];
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
    rating?: number;
  };
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
}

const Hero3 = ({
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Sign Up",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
  },
  reviews,
  trustItems,
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "placeholder hero",
  },
  className,
}: Hero3Props) => {
  return (
    <section className={cn("flex flex-col justify-center py-8 sm:py-12 lg:py-0", className)}>
      <div className="container grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-1 flex aspect-3/2 w-full shrink-0 overflow-hidden rounded-lg bg-muted ring-2 ring-foreground/10 shadow-2xl shadow-black/30 lg:order-2 lg:aspect-auto lg:min-h-[600px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={true}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover animate-hero"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-14 sm:p-6 sm:pt-16 md:p-10 md:pt-20">
            <p className="text-white font-bold text-2xl md:text-4xl tracking-wide leading-tight drop-shadow-md" aria-hidden="true">
              <span className="block text-white/90">East Hampton</span>
              <span className="block">Tile Specialists</span>
            </p>
          </div>
        </div>

        <div className="order-2 mx-auto flex flex-col items-center text-center md:ml-auto lg:order-1 lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-4 text-5xl font-black tracking-tighter text-pretty lg:my-6 lg:text-7xl xl:text-8xl text-foreground leading-[0.9]">
            {heading}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:mb-10 lg:text-xl leading-relaxed">
            {description}
          </p>
          {reviews && (
            <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
              <span className="inline-flex items-center -space-x-4">
                {reviews.avatars.map((avatar, index) => (
                  <Avatar key={index} className="size-12 border">
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                  </Avatar>
                ))}
              </span>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="size-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="mr-1 font-semibold">
                    {reviews.rating?.toFixed(1)}
                  </span>
                </div>
                <p className="text-left font-medium text-muted-foreground">
                  from {reviews.count}+ reviews
                </p>
              </div>
            </div>
          )}
          <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <QuoteDialog>
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 h-auto group relative overflow-hidden">
                  <span className="relative z-10">{buttons.primary.text}</span>
                  <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </QuoteDialog>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto border-2">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDownRight className="size-5" />
                </a>
              </Button>
            )}
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-2 sm:gap-0 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Usually respond same day
            </span>
            <span className="hidden sm:inline mx-2">•</span>
            <span>Free estimates</span>
          </div>

          {trustItems && (
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 text-left sm:mt-12 sm:gap-x-10 sm:gap-y-6">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="shrink-0 rounded bg-primary/10 p-2 text-primary">
                     {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black leading-tight text-foreground">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero3 };
