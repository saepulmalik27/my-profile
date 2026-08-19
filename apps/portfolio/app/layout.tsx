import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import '../styles/globals.css';
import { ChatWidget } from '../components/chat-widget';
import { SiteShell } from '../components/site-shell';
import { profile } from '../content/profile';

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
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
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
