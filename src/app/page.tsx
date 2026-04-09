import { Fragment } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Aside } from "@/components/layout/aside";
import { Footer } from "@/components/layout/footer";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Aside />
      <main className="flex flex-col max-w-7xl m-auto p-10 gap-40 ">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </Fragment>
  );
}
