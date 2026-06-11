import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-10 relative">
      {/* Centered glowing background bulb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-100/10 blur-[100px] -z-10 pointer-events-none" />

      <Card className="max-w-4xl mx-auto overflow-hidden relative p-8 md:p-16 text-center flex flex-col items-center gap-6">
        {/* Subtle grid pattern background inside the card */}
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none -z-10" />

        <span className="text-primary-100 font-semibold tracking-wider uppercase text-sm">
          What's Next?
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-secondary-100">
          Get In Touch
        </h1>

        <p className="text-xl text-secondary-200 max-w-xl leading-relaxed mt-2">
          I'm currently open to new opportunities! Whether you have a project idea, 
          a question about my experience, or just want to connect, feel free to drop a line.
          I'll do my best to get back to you!
        </p>

        <Button asChild size="lg" className="mt-4 px-10">
          <Link href="mailto:saepulalmalik@gmail.com" className="cursor-pointer">
            Say Hello
          </Link>
        </Button>
      </Card>
    </section>
  );
}
