import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useData } from "@/hooks/useData";

export function AboutSection() {
  const { skillStack } = useData();

  return (
    <section className="relative" id="about">
      <Card className="relative z-10 flex flex-col gap-5">
        <CardHeader>
          <CardTitle className="text-4xl font-bold inline-flex items-center gap-5">
            {" "}
            <h1>
              About <span className="text-accent-100 ">Me</span>
            </h1>{" "}
            <hr className="w-80 h-px border-background-300" />{" "}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <p className="text-xl">
            I’m a Frontend Engineer with 5+ years of experience in web
            development, currently working at PT Inspigo Inovasi Indonesia.
            My journey started in full-stack development, but I quickly
            found my passion in frontend technologies. I specialize in
            React, Next.js, and modern UI frameworks like Tailwind CSS and
            ShadCN/UI, focusing on building dynamic, scalable, and
            accessible user interfaces.
          </p>
          <div className="flex flex-row gap-10">
            <div className="w-fit shrink-0 overflow-hidden rounded-lg shadow">
              <Image
                src={"/assets/me/aset-2.png"}
                alt="image"
                width={320}
                height={411}
              />
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-bold">Skills & Tech Stack</h1>
                <div className="grid grid-cols-2 gap-5">
                  {skillStack.map((data, key) => (
                    <ul key={key} className="flex flex-col gap-2 list-disc">
                      {data.map(({ category, items }, key) => (
                        <li key={key} className="flex flex-col">
                          <p className="font-bold text-xl">{category}:</p>
                          <p>{items.join(",")}</p>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
