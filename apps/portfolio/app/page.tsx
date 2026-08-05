import { Button } from '@repo/ui/button';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-background text-foreground">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight">Saepul Malik</h1>
        <p className="text-muted-foreground text-center max-w-md text-lg">
          Crafting High-Performance Web Experiences & AI Integrations. The UI
          package and Shadcn components are fully operational.
        </p>
        <div className="flex gap-4">
          <Button variant="default" size="lg">
            Primary Button
          </Button>
          <Button variant="outline" size="lg">
            Outline Button
          </Button>
        </div>
      </main>
    </div>
  );
}
