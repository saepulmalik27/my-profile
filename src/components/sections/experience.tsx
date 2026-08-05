"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, ChevronDown } from "lucide-react";
import { useData } from "@/hooks/useData";

export function ExperienceSection() {
  const { experience } = useData();
  // Default first experience item to be open, others collapsed
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <div className="relative border-l border-background-300 ml-4 md:ml-8 pl-8 md:pl-10 space-y-8">
            {experience.map(({ responsibilities, title, stacks }, key) => {
              const parts = title.split(" | ");
              const role = parts[0];
              const company = parts[1] || "";
              const isOpen = openIndex === key;

              return (
                <div key={key} className="relative group">
                  {/* Glowing Timeline Marker */}
                  <div className={`absolute w-5 h-5 rounded-full bg-background-100 border-2 transition-all duration-300 -left-[49px] md:-left-[51px] top-6 flex items-center justify-center ${
                    isOpen 
                      ? "scale-110 bg-accent-100 border-accent-100 shadow-[0_0_0_6px_rgba(40,85,67,0.15)]" 
                      : "border-primary-100 group-hover:scale-110 group-hover:border-accent-100"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isOpen ? "bg-accent-200" : "bg-primary-100"
                    }`} />
                  </div>

                  {/* Accordion Panel */}
                  <div className={`flex flex-col rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-primary-100 bg-background-100/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]" 
                      : "border-background-300 bg-background-100/10 hover:bg-background-100/20"
                  }`}>
                    {/* Clickable Header Button */}
                    <button
                      onClick={() => toggleAccordion(key)}
                      className="w-full flex justify-between items-center text-left p-5 cursor-pointer focus:outline-none"
                    >
                      <div className="flex flex-col gap-1 pr-4">
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                          isOpen ? "text-accent-100" : "text-secondary-100 group-hover:text-accent-100"
                        }`}>
                          {role}
                        </h3>
                        {company && (
                          <span className="text-md md:text-lg text-primary-100 font-semibold">
                            {company}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-6 h-6 text-secondary-200 transition-transform duration-500 shrink-0 ${
                        isOpen ? "rotate-180 text-accent-100" : "group-hover:text-accent-100"
                      }`} />
                    </button>

                    {/* Expandable Accordion Body (CSS Grid Slide Transition) */}
                    <div className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}>
                      <div className="overflow-hidden">
                        <div className="p-5 pt-0 flex flex-col gap-5 border-t border-background-300/40">
                          <ul className="space-y-3 mt-4">
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
