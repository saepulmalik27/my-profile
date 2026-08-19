import { BentoGrid, BentoCard } from '@repo/ui/bento-grid';
import { Button } from '@repo/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Zap,
  Mail,
  Terminal,
} from 'lucide-react';
import { ChatBox } from '../components/chat-box';
import { RoomSceneLoader } from '../components/scene/room-scene-loader';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/*
        3D home scene (tickets 01/02/03) — foundation pass: room shell + the
        "Two Lights" lighting rig, no furniture/avatar yet. Per ticket 04,
        real semantic HTML (not the canvas) is what carries the name/role/
        description for a11y, SEO, and prefers-reduced-motion users; the
        canvas is layered underneath as a decorative/supplementary element.
      */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <RoomSceneLoader />
        </div>
        <div className="relative z-10 flex h-full flex-col items-start justify-end gap-3 px-6 pb-16 md:px-16 md:pb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Saepul Malik
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Frontend Engineer
          </p>
          <p className="max-w-xl text-base md:text-lg text-white/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Senior Frontend Engineer bridging the gap between analytical Physics
            and cutting-edge web development.
          </p>
        </div>
      </section>

      <main className="flex flex-col items-center gap-8 w-full max-w-6xl py-12 px-4 md:px-8">
        <header className="w-full space-y-3 mb-4">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Zap className="mr-1 h-3 w-3" /> 8 Years of Engineering Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Saepul Malik.
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Senior Frontend Engineer bridging the gap between analytical Physics
            and cutting-edge web development.
          </p>
        </header>

        <BentoGrid className="w-full">
          {/* Hero / About Section */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            className="p-8 bg-gradient-to-br from-primary/15 via-primary/5 to-background border-primary/20"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Building Enterprise-Grade Web Experiences.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I specialize in scaling robust applications from the ground
                  up. With a track record of leading UI modernizations and
                  integrating AI features (OpenAI, RAG) into enterprise
                  products, I craft interfaces that solve complex business
                  problems.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full">
                  Download CV
                </Button>
              </div>
            </div>
          </BentoCard>

          {/* Socials / Contact */}
          <BentoCard className="p-6 bg-card flex flex-col justify-between">
            <h3 className="font-semibold text-lg mb-4 text-muted-foreground">
              Let&apos;s Connect
            </h3>
            <div className="flex gap-4 mb-2">
              <a
                href="https://github.com/saepulmalik27"
                target="_blank"
                rel="noreferrer"
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors font-bold text-sm flex items-center justify-center w-12 h-12"
              >
                GH
              </a>
              <a
                href="#"
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors font-bold text-sm flex items-center justify-center w-12 h-12"
              >
                IN
              </a>
              <a
                href="#"
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center w-12 h-12"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </BentoCard>

          {/* Location */}
          <BentoCard className="p-6 relative overflow-hidden flex flex-col justify-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-30 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="relative z-10 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">Jakarta, Indonesia</h3>
                <p className="text-xs text-muted-foreground">GMT+7</p>
              </div>
            </div>
          </BentoCard>

          {/* Experience Highlights */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            className="p-6 bg-secondary/20 border-secondary"
          >
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-primary" /> Impact Driven
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">
                    Inspigo For Business
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Customizable Enterprise Platform
                  </p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md font-medium">
                  B2B
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">
                    Inspigo AI Integration
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    RAG Pipeline & Bedrock LLM
                  </p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md font-medium">
                  AI/ML
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Skills / Tech Stack */}
          <BentoCard colSpan={4} rowSpan={1} className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between h-full">
              <div className="flex-shrink-0">
                <h3 className="font-bold text-xl mb-1">
                  Architecture & Tech Stack
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Mastering the modern web ecosystem to deliver fast and
                  scalable applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-end w-full">
                {[
                  'React 19',
                  'Next.js (App Router)',
                  'TypeScript',
                  'Tailwind v4',
                  'Micro-frontend',
                  'SSR/SSG',
                  'State Management',
                  'Prompt Engineering',
                  'OpenAI API',
                  'Web Performance',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg font-medium border border-border/50 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* AI Chatbot */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            className="p-0 border-primary/20 shadow-primary/5"
          >
            <ChatBox />
          </BentoCard>

          {/* MDX Projects Teaser */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            className="p-8 bg-gradient-to-tr from-background to-secondary/30"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                  <Terminal className="h-6 w-6 text-primary" /> Technical
                  Writing
                </h3>
                <p className="text-muted-foreground mb-6">
                  I document my journey, architecture decisions, and deep dives
                  into the frontend ecosystem. Check out how I built this
                  AI-integrated portfolio using Next.js App Router and MDX.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/projects/test"
                  className="block p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      Building an AI Portfolio
                    </h4>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Integrating Vercel AI SDK into Bento Grid.
                  </p>
                </Link>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </main>
    </div>
  );
}
