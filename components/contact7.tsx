import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { QuoteDialog } from "@/components/quote-dialog";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
  className?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Contact the support team at Shadcnblocks.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "example@shadcnblocks.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
  className,
}: Contact7Props) => {
  return (
    <section className={cn("bg-muted/30 py-20 md:py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider">
            Get In Touch
          </Badge>
          <h2 className="text-3xl font-black tracking-tight text-balance md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-lg bg-background border-2 border-border p-8 shadow-xl hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="size-7" />
              </span>
              <div className="flex-1">
                <p className="text-xl font-black mb-1">{emailLabel}</p>
                <p className="text-muted-foreground mb-3">{emailDescription}</p>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex font-bold text-primary hover:underline break-all"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
          <div className="group rounded-lg bg-background border-2 border-border p-8 shadow-xl hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MapPin className="size-7" />
              </span>
              <div className="flex-1">
                <p className="text-xl font-black mb-1">{officeLabel}</p>
                <p className="text-muted-foreground mb-3">{officeDescription}</p>
                <p className="font-bold text-foreground">
                  {officeAddress}
                </p>
              </div>
            </div>
          </div>
          <div className="group rounded-lg bg-background border-2 border-border p-8 shadow-xl hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="size-7" />
              </span>
              <div className="flex-1">
                <p className="text-xl font-black mb-1">{phoneLabel}</p>
                <p className="text-muted-foreground mb-3">{phoneDescription}</p>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}` } className="inline-flex font-bold text-primary hover:underline text-lg">
                  {phone}
                </a>
              </div>
            </div>
          </div>
          <div className="group rounded-lg bg-primary p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-primary-foreground/20 text-primary-foreground">
                <MessageCircle className="size-7" />
              </span>
              <div className="flex-1">
                <p className="text-xl font-black mb-1 text-primary-foreground">{chatLabel}</p>
                <p className="text-primary-foreground/80 mb-4">{chatDescription}</p>
                <QuoteDialog>
                  <Button variant="secondary" className="font-bold">
                    {chatLink}
                  </Button>
                </QuoteDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
