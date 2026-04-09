import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ampersand } from "lucide-react";
import DevCode from "@/components/asset/code";

export function HeroSection() {
  return (
    <section className="flex flex-row">
      <Card className="w-fit">
        <CardHeader className="flex flex-col gap-2">
          <CardTitle className="text-6xl text-accent-200 font-bold">
            <span className="text-primary-300 text-2xl">
              Hi, my name is
            </span>
            <h1>Saepul Malik</h1>
          </CardTitle>
          <CardDescription className="text-5xl flex flex-col gap-5 font-bold w-fit">
            <p className="text-accent-100 relative w-fit">
              Building Scalable{" "}
              <Ampersand className="absolute w-20 h-20 text-primary-300 left-full top-0" />
            </p>

            <p className="text-accent-100"> Engaging Web Experiences</p>
          </CardDescription>
        </CardHeader>

        <CardContent className="text-xl max-w-xl text-justify">
          I am <span className="text-accent-100">a Frontend Engineer</span>{" "}
          specializing in React, Next.js, and modern web technologies.
          Passionate about crafting high-performance and visually appealing
          web application
        </CardContent>
      </Card>
      <DevCode className="text-accent-100 flex-1 flex items-end" />
    </section>
  );
}
