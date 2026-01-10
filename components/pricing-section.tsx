import { Check } from "lucide-react";
import { QuoteDialog } from "@/components/quote-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PricingSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
            Every bathroom is different. Here's what drives tile installation costs in East Hampton and the Hamptons.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Shower Tile */}
          <Card>
            <CardHeader>
              <CardTitle>Shower Tile Installation</CardTitle>
              <CardDescription>Complete shower waterproofing + tile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold">$8,000–$18,000</p>
                <p className="text-sm text-muted-foreground">Typical range (depends on size + materials)</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Schluter or Laticrete waterproofing system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Tile installation (walls, floor, niches)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Grout, sealing, and final cleanup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Custom features (bench, dual niches, etc.) add cost</span>
                </li>
              </ul>
              <QuoteDialog>
                <Button variant="outline" className="w-full mt-6">Get exact estimate</Button>
              </QuoteDialog>
            </CardContent>
          </Card>

          {/* Bathroom Floor Tile */}
          <Card>
            <CardHeader>
              <CardTitle>Bathroom Floor Tile</CardTitle>
              <CardDescription>Floor prep + tile + optional heated floor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold">$12–$25/sq ft</p>
                <p className="text-sm text-muted-foreground">Material + labor (varies by tile type)</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Floor leveling and waterproofing (if needed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Tile installation with proper slope to drain</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Grout and sealing (stain-resistant grout recommended)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Heated floor option: add $8–$15/sq ft</span>
                </li>
              </ul>
              <QuoteDialog>
                <Button variant="outline" className="w-full mt-6">Get exact estimate</Button>
              </QuoteDialog>
            </CardContent>
          </Card>

          {/* Kitchen Backsplash */}
          <Card>
            <CardHeader>
              <CardTitle>Kitchen Backsplash</CardTitle>
              <CardDescription>Wall prep + tile + finishing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold">$1,500–$4,500</p>
                <p className="text-sm text-muted-foreground">Typical backsplash (20–50 sq ft)</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Surface prep and layout planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Tile installation with precision cuts around outlets</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Grout and sealing (sanded or unsanded based on tile)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Complex patterns or mosaic add 20–40% to cost</span>
                </li>
              </ul>
              <QuoteDialog>
                <Button variant="outline" className="w-full mt-6">Get exact estimate</Button>
              </QuoteDialog>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Factors */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">What affects tile installation cost?</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Tile material</h4>
              <p className="text-sm text-muted-foreground">
                Porcelain subway tile costs less than marble slab or custom mosaic. Material choices can double (or triple) project cost.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Square footage</h4>
              <p className="text-sm text-muted-foreground">
                Larger areas reduce per-square-foot cost, but complex layouts (herringbone, diagonal, patterns) add labor time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Substrate condition</h4>
              <p className="text-sm text-muted-foreground">
                If the wall/floor needs repair, leveling, or waterproofing upgrades, that adds cost before any tile goes up.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Custom features</h4>
              <p className="text-sm text-muted-foreground">
                Built-in benches, recessed niches, curbless showers, and heated floors require additional planning, materials, and labor.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <QuoteDialog>
              <Button size="lg">Get your exact estimate</Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:9292170803">Call to discuss your project</a>
            </Button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">No surprises.</strong> You'll get a detailed estimate before we start — itemized scope, timeline, and costs. If the project changes, we discuss it first.
          </p>
        </div>

        {/* Fine Print */}
        <div className="mt-6 text-center max-w-3xl mx-auto border-t pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important:</strong> Prices shown are average ranges for labor only and do not include materials. Actual pricing varies based on site conditions, materials selected, project complexity, scope, and accessibility. Minimum project charge applies. All estimates are provided after an on-site evaluation and detailed consultation. Final pricing confirmed in writing before work begins.
          </p>
        </div>

        {/* Cross-links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>Related:</span>
          <a href="#services" className="text-primary hover:underline">Our services</a>
          <span>•</span>
          <a href="#process" className="text-primary hover:underline">How we work</a>
          <span>•</span>
          <a href="#faq" className="text-primary hover:underline">Common questions</a>
          <span>•</span>
          <a href="#service-area" className="text-primary hover:underline">Service area</a>
        </div>
      </div>
    </section>
  );
}
