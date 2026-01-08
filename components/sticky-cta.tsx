"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      const show = window.scrollY > 300;
      setIsVisible(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t-2 border-primary bg-background p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="hidden sm:block text-sm">
          <p className="font-bold text-foreground">Ready to start your tile project?</p>
          <p className="text-muted-foreground">Free estimates • Usually respond same day</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a 
            href="tel:9292170803" 
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            (929) 217-0803
          </a>
          <QuoteDialog>
            <Button size="lg" className="w-full sm:w-auto shadow-lg animate-pulse hover:animate-none">
              Get Your Free Quote
            </Button>
          </QuoteDialog>
        </div>
      </div>
    </div>
  );
}
