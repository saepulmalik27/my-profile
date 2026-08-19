import type { Metadata } from 'next';
import { HomeExperience } from '../components/scene/home-experience';
import { profile } from '../content/profile';
import { defaultOpenGraph, defaultTwitter } from '../lib/seo';

const homeDescription = `${profile.tagline} Explore an interactive 3D room built with Next.js, React Three Fiber, and an AI chat grounded in this site's own content.`;

export const metadata: Metadata = {
  description: homeDescription,
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: `${profile.name} — ${profile.role}`,
    description: homeDescription,
    ...defaultOpenGraph,
  },
  twitter: {
    title: `${profile.name} — ${profile.role}`,
    description: homeDescription,
    ...defaultTwitter,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/*
        3D home scene (tickets 01/02/03/05) — room shell, "Two Lights"
        lighting, furniture, avatar + click-to-walk, and the 5 interactions
        (window/light/bed/chair/discovery hint) all live in HomeExperience
        and the components/scene tree it composes. Per ticket 04, the real
        semantic hero text (name/role/description) lives there too, always
        present in the DOM for a11y/SEO/reduced-motion — not just the canvas.
      */}
      <HomeExperience />
    </div>
  );
}
