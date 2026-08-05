import { BentoGrid, BentoCard } from '@repo/ui/bento-grid';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8 bg-background text-foreground">
      <main className="flex flex-col items-center gap-8 w-full max-w-6xl">
        <div className="w-full space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Saepul Malik
          </h1>
          <p className="text-muted-foreground text-lg">
            Senior Frontend Engineer & Creative Developer
          </p>
        </div>

        <BentoGrid className="w-full">
          {/* Hero / About Section - Spans 2 cols, 2 rows on Desktop */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            className="p-8 bg-gradient-to-br from-primary/10 to-accent/10"
          >
            <h2 className="text-2xl font-bold mb-4">Hello, World!</h2>
            <p className="text-muted-foreground leading-relaxed">
              This is the hero card. It will eventually contain a 3D model,
              interactive avatar, or a bold introduction.
            </p>
          </BentoCard>

          {/* Socials / Contact - Spans 1 col, 1 row */}
          <BentoCard className="p-6 flex items-center justify-center">
            <h3 className="font-semibold text-lg">Socials</h3>
          </BentoCard>

          {/* Location / Status - Spans 1 col, 1 row */}
          <BentoCard className="p-6 flex items-center justify-center">
            <h3 className="font-semibold text-lg">Location</h3>
          </BentoCard>

          {/* Projects Teaser - Spans 2 cols, 1 row */}
          <BentoCard colSpan={2} rowSpan={1} className="p-6 bg-secondary/30">
            <h3 className="font-semibold text-lg">Selected Projects</h3>
          </BentoCard>

          {/* Skills / Playground - Spans 4 cols on Desktop */}
          <BentoCard
            colSpan={4}
            rowSpan={1}
            className="p-6 border-dashed border-2"
          >
            <h3 className="font-semibold text-lg text-center w-full text-muted-foreground">
              Skills & Tech Stack Grid
            </h3>
          </BentoCard>
        </BentoGrid>
      </main>
    </div>
  );
}
