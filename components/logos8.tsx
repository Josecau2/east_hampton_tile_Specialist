import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  logo: string;
  className: string;
  url?: string;
}

interface Logos8Props {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
  className?: string;
}

const Logos8 = ({
  title = "Trusted by these companies",
  subtitle = "Used by the world's leading companies",
  logos = [
    {
      name: "Vercel",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      name: "Astro",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-5 w-auto",
    },
    {
      name: "Supabase",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-6 w-auto",
    },
    {
      name: "Figma",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-5 w-auto",
    },
    {
      name: "Astro",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-6 w-auto",
    },
  ],
  className,
}: Logos8Props) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-2 text-muted-foreground md:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => {
              const imageContent = (
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={109}
                  height={48}
                  loading="lazy"
                  className={cn(logo.className, "transition-all duration-300 hover:scale-110 hover:brightness-110")}
                />
              );

              return logo.url ? (
                <a
                  key={index}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  title={`Visit ${logo.name}`}
                >
                  {imageContent}
                </a>
              ) : (
                <div key={index} className="inline-block">
                   {imageContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos8 };
