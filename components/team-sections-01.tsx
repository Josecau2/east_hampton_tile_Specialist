import Image from "next/image";

const founder = {
  name: "Nestor Fajardo",
  title: "Founder & Master Tile Specialist",
  image: "/Founder/Nestor.webp"
};

export default function TeamSection() {
  return (
    <section className="py-12 lg:py-20" id="team">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image */}
          <div className="space-y-2 max-w-md mx-auto lg:mx-0">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted">
              <Image
                src={founder.image}
                alt={`${founder.name}, master tile specialist working on a bathroom installation`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center italic">Family-owned and operated in the Hamptons</p>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <header className="space-y-2">
              <h2 className="text-4xl font-bold md:text-5xl">Meet the Founder</h2>
              <p className="text-lg text-primary font-medium">{founder.name}</p>
              <p className="text-muted-foreground">{founder.title}</p>
            </header>

            <div className="space-y-4 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              <p>
                Nestor Fajardo has been crafting beautiful tile installations in the NY area for over 11 years. Running the business alongside his wife, they bring a personal, dedicated touch to every project.
              </p>
              <p>
                Nestor is deeply passionate about tile work—especially bathrooms. He creates stunning bathroom transformations with an enthusiasm you have to see to believe. He simply can't get enough of doing bathrooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
