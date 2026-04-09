import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">Get In Touch</h1>
      <p className="text-xl text-secondary-200 max-w-2xl text-center">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll try my best to get back to you!
      </p>
      <Button asChild size="lg">
        <Link href="mailto:saepulalmalik@gmail.com">Say Hello</Link>
      </Button>
    </section>
  );
}
