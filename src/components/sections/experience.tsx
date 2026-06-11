import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import { useData } from "@/hooks/useData";

export function ExperienceSection() {
  const { experience } = useData();

  return (
    <section id="experience" className="relative">
      {/* Decorative ambient light */}
      <div className="absolute bottom-1/2 left-1/4 w-80 h-80 rounded-full bg-accent-100/5 blur-[100px] -z-10 pointer-events-none" />

      <Card className="p-6 md:p-10">
        <CardHeader className="p-0 mb-10">
          <CardTitle className="text-4xl font-bold inline-flex items-center gap-5 w-full">
            <h1>Experience</h1>
            <div className="flex-1 h-px bg-background-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Vertical Timeline Wrapper */}
          <div className="relative border-l border-background-300 ml-4 md:ml-8 pl-8 md:pl-10 space-y-12">
            {experience.map(({ responsibilities, title, stacks }, key) => {
              // Parse role and company from title if separated by " | "
              const parts = title.split(" | ");
              const role = parts[0];
              const company = parts[1] || "";

              return (
                <div key={key} className="relative group">
                  {/* Glowing Timeline Marker */}
                  <div className="absolute w-5 h-5 rounded-full bg-background-100 border-2 border-primary-100 -left-[49px] md:-left-[51px] top-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-accent-100 group-hover:border-accent-100 shadow-[0_0_0_4px_rgba(40,85,67,0)] group-hover:shadow-[0_0_0_6px_rgba(var(--accent-100-rgb),0.2)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-100 group-hover:bg-accent-200 transition-colors" />
                  </div>

                  {/* Experience Entry Card Content */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl font-bold text-secondary-100 group-hover:text-accent-100 transition-colors duration-300">
                        {role}
                      </h3>
                      {company && (
                        <span className="text-lg text-primary-100 font-semibold">
                          {company}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 mt-1">
                      {responsibilities.map((value, idx) => (
                        <li key={idx} className="flex gap-3 text-secondary-200 text-lg leading-relaxed text-justify items-start">
                          <Terminal className="text-accent-100 w-5 h-5 shrink-0 mt-1" />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stacks Badges */}
                    <div className="flex gap-2 flex-wrap mt-2">
                      {stacks.map((stack, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-background-200/60 border border-background-300 py-1 px-3 text-sm text-secondary-200 hover:border-primary-100 hover:text-primary-100 transition-all duration-200 cursor-default select-none"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
