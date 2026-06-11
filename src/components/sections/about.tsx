import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useData } from "@/hooks/useData";

export function AboutSection() {
  const { skillStack } = useData();

  return (
    <section className="relative" id="about">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-primary-100/5 blur-[90px] -z-10 pointer-events-none" />

      <Card className="relative z-10 flex flex-col gap-8 p-6 md:p-10">
        <CardHeader className="p-0">
          <CardTitle className="text-4xl font-bold inline-flex items-center gap-5 w-full">
            <h1>
              About <span className="text-accent-100">Me</span>
            </h1>
            <div className="flex-1 h-px bg-background-300" />
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 flex flex-col gap-12">
          {/* Two-Column Profile Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Image Frame Column */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group cursor-pointer">
                {/* Decorative offset border card */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary-100 translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5 -z-10" />
                <div className="overflow-hidden rounded-2xl shadow-md bg-background-300 transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/assets/me/aset-2.png"
                    alt="Saepul Malik"
                    width={320}
                    height={410}
                    className="object-cover w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Profile Bio Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-secondary-100">
                Frontend Web Engineer based in Indonesia
              </h2>
              <p className="text-xl text-secondary-200 leading-relaxed text-justify">
                I’m a Frontend Web Engineer with 5+ years of experience in web
                development, currently working at PT Inspigo Inovasi Indonesia.
                I specialize in crafting maintainable Next.js applications, building and
                scaling app-wide design system components, and collaborating closely across Product, Design,
                and QA teams. I confidently leverage TypeScript/ES6 and unit testing (Jest/RTL)
                to deliver robust, secure, and cutting-edge web experiences.
              </p>
              <p className="text-xl text-secondary-200 leading-relaxed text-justify">
                I focus on writing semantic, clean HTML/CSS and configuring modular, accessible components 
                following standardized React & Next.js architectures. I am committed to continuous learning, 
                collaborative code reviews, and exploring modern frameworks to improve both development speed 
                and final client product quality.
              </p>
            </div>
          </div>

          {/* Skills Dashboard Grid */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-secondary-100">Skills & Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillStack.flatMap((col) => col).map(({ category, items }, key) => (
                <div 
                  key={key} 
                  className="p-5 rounded-xl border border-background-300 bg-background-100/30 hover:border-primary-100/50 hover:bg-background-100/60 transition-all duration-300"
                >
                  <h4 className="font-bold text-lg text-primary-100 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 rounded-lg text-sm bg-background-200 border border-background-300 hover:border-accent-100 hover:text-accent-100 transition-all duration-300 cursor-default select-none text-secondary-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
