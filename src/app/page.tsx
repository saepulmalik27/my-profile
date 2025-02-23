import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fragment } from "react";
import { Ampersand, Terminal } from "lucide-react";
import DevCode from "@/components/asset/code";
import Image from "next/image";
import { useData } from "@/hooks/useData";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { skillStack, experience, navigation, social } = useData();
  return (
    <Fragment>
      <header className="px-20 py-5 sticky z-10 inset-0  bg-background-100 shadow flex justify-between">
        <div>
          <Image
            src={"/assets/logo/logo.png"}
            width={40}
            height={40}
            alt="logo"
            className="cursor-pointer"
          />
        </div>

        <nav className="flex gap-5 items-center">
          <ul className="flex flex-row gap-5">
            {navigation.map((data, key) => (
              <li key={key} className="cursor-pointer select-none hover:scale-y-110 hover:translate-y-2">
                <Link href={data.link}>
                  <span className="text-accent-100 italic">#{key + 1}</span>{" "}
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button>Resume</Button>
        </nav>
      </header>
      <aside className="fixed z-10 bottom-0 left-0 w-fit" id="left" >
        <div className="relative z-10">
          <div className="flex flex-col w-[150px] items-center">
            {social.map(({ link, logo: Icon }, key) => (
              <Link key={key} href={link} target="_blank">
                <div className="w-10 h-10 flex justify-center items-center">
                  <Icon className="w-5 h-5 hover:text-accent-100 hover:scale-125 hover:translate-y-1 transition-all duration-200" />
                </div>
              </Link>
            ))}
            <div className="w-[1px] h-24 bg-white"></div>
          </div>
        </div>
      </aside>
      <aside className="fixed z-10 bottom-0 right-0 w-fit" id="rigt">
        <div className="flex w-[150px] flex-col items-center gap-5 justify-center">
          <Link
            href={"mailto:saepulalmalik@gmail.com"}
            className="[writing-mode:vertical-lr] hover:text-accent-100  hover:translate-y-1"
          >
            saepulalmalik@gmail.com
          </Link>
          <div className="w-[1px] h-24 bg-white"></div>
        </div>
      </aside>
      <main className="flex flex-col max-w-7xl m-auto p-10 gap-40 ">
        <section className="flex flex-row" >
          <Card className="w-fit">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-6xl text-accent-200 font-bold">
                <span className="text-primary-300 text-2xl">
                  Hi, my name is
                </span>
                <h1>Saepul Malik</h1>
              </CardTitle>
              <CardDescription className="text-5xl flex flex-col gap-5 font-bold w-fit">
                <p className=" text-accent-100 relative w-fit">
                  Building Scalable{" "}
                  <Ampersand className="absolute w-20 h-20 text-primary-300 left-full top-0" />
                </p>

                <p className="text-accent-100"> Engaging Web Experiences</p>
              </CardDescription>
            </CardHeader>

            <CardContent className="text-xl max-w-xl text-justify">
              I am{" "}
              <span className="  text-accent-100">a Frontend Engineer</span>
              specializing in React, Next.js, and modern web technologies.
              Passionate about crafting high-performance and visually appealing
              web application
            </CardContent>
          </Card>
          <DevCode className="text-accent-100 flex-1 flex items-end" />
        </section>
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
                <div className="w-fit flex-shrink-0 overflow-hidden rounded-lg shadow">
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
                    <CardContent className="p-0 space-y-5" >
                      <ul className="list-none space-y-2">
                        {responsibilities.map((value, key) => (
                          <li key={key} className="inline-flex gap-3"><Terminal className="text-accent-100" />{value}</li>
                        ))}
                      </ul>
                      <div className="flex gap-2 flex-wrap">
                        {
                          stacks.map((stack, key) => (
                            <div key={key} className="rounded-full bg-background-300 py-2 px-4">{stack}</div>
                          ))
                        }
                      </div>
                    </CardContent>
                  </CardHeader>
                </Card>
              ))}
            </CardContent>
          </Card>
        </section>

      </main>
      <footer className="flex justify-center items-center">
        Build by Saepul Malik 2025
      </footer>
    </Fragment>
  );
}
