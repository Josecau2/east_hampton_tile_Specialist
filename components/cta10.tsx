import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";

interface Cta10Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Cta10 = ({
  heading = "Call to Action",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  buttons = {
    primary: {
      text: "Buy Now",
      url: "https://www.shadcnblocks.com",
    },
  },
  className,
}: Cta10Props) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="flex w-full flex-col gap-12 overflow-hidden rounded-lg bg-foreground p-8 md:rounded-lg lg:flex-row lg:items-center lg:p-16 shadow-2xl shadow-black/20">
          <div className="flex-1">
            <h2 className="mb-3 text-2xl font-black tracking-tight text-background md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl">
              {heading}
            </h2>
            <p className="max-w-xl text-background/70 lg:text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-start">
            {buttons.secondary && (
              <Button variant="outline" size="lg" className="border-background/60 text-background bg-transparent hover:bg-background hover:text-foreground" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <div className="flex flex-col items-center gap-2">
                <QuoteDialog>
                  <Button variant="default" size="lg" className="w-full sm:w-auto">{buttons.primary.text}</Button>
                </QuoteDialog>
                <div className="flex items-center justify-center gap-1.5 text-xs text-background/60">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                  </span>
                  <span>Usually respond same day</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta10 };
