import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import { useData } from "@/hooks/useData";

export function ExperienceSection() {
  const { experience } = useData();

  return (
    <section id="experience">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl">Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {experience.map(({ responsibilities, title, stacks }, key) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardContent className="p-0 space-y-5">
                  <ul className="list-none space-y-2">
                    {responsibilities.map((value, key) => (
                      <li key={key} className="inline-flex gap-3">
                        <Terminal className="text-accent-100" />
                        {value}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {stacks.map((stack, key) => (
                      <div
                        key={key}
                        className="rounded-full bg-background-300 py-2 px-4"
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
