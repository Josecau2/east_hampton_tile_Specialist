import { 
  Camera, 
  MessageSquareText, 
  Calculator, 
  MapPin, 
  FileSignature, 
  Hammer 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: <Camera className="size-6" />,
    number: "01",
    title: "Request a Quote",
    description: "Submit photos of your project and a brief subject via our online form or email. This gives us the context we need to start."
  },
  {
    icon: <MessageSquareText className="size-6" />,
    number: "02",
    title: "Initial Contact",
    description: "We’ll text you to confirm a good time for a brief call. We respect your time and want to ensure we’re available to listen."
  },
  {
    icon: <Calculator className="size-6" />,
    number: "03",
    title: "Consultation & Ballpark",
    description: "On the call, we discuss your needs in detail, offer recommendations, and provide a ballpark cost estimate to ensure we're a good fit."
  },
  {
    icon: <MapPin className="size-6" />,
    number: "04",
    title: "Site Visit",
    description: "If the estimate works for you, we schedule an in-person visit to inspect the site, take specific measurements, and answer technical questions."
  },
  {
    icon: <FileSignature className="size-6" />,
    number: "05",
    title: "Digital Agreement",
    description: "We send a detailed digital contract outlining the scope, materials, and timeline. You can review and sign it securely online."
  },
  {
    icon: <Hammer className="size-6" />,
    number: "06",
    title: "Work Begins",
    description: "We schedule your start date, protect your home, and begin the transformation. You’ll be updated on progress every step of the way."
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-foreground" id="process">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider">
            How It Works
          </Badge>
          <h2 className="text-3xl font-black tracking-tight text-background sm:text-4xl md:text-5xl lg:text-6xl">
            From Photo to Finish
          </h2>
          <p className="mt-4 max-w-[700px] text-background/70 md:text-lg">
            A simple, transparent process designed to respect your time and deliver exceptional results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
          {/* Connector Line (Desktop only) -> Hard to do perfectly responsive without complex CSS, keeping simple grid for robustness */}
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-start p-6 bg-background rounded-lg border-2 border-transparent hover:border-primary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="p-3 rounded-md bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-foreground select-none" aria-hidden="true">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
