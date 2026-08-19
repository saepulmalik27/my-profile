import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import '../styles/globals.css';
import { ChatWidget } from '../components/chat-widget';
import { SiteShell } from '../components/site-shell';
import { profile } from '../content/profile';
import { defaultOpenGraph, defaultTwitter, siteUrl } from '../lib/seo';

// "Two Lights" type system (ticket 06): Fraunces for anything that should
// feel considered, Plex Sans for reading, Plex Mono for labels/data.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['400', '500', '600'],
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    'Saepul Malik',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'AI Integration',
    'RAG',
    'Portfolio',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: '/',
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    ...defaultOpenGraph,
  },
  twitter: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    ...defaultTwitter,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
      >
        <SiteShell>{children}</SiteShell>
        <ChatWidget />
      </body>
    </html>
  );
}
