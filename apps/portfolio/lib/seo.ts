import { profile } from '../content/profile';

export const siteUrl = 'https://saepulmalik.my.id';

// Next.js doesn't deep-merge `openGraph`/`twitter` across route segments — a
// page that sets its own object loses the parent's image/siteName/locale/card
// entirely, so every page spreads these shared defaults back in.
export const defaultOpenGraph = {
  siteName: profile.name,
  locale: 'en_US',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
};

export const defaultTwitter = {
  card: 'summary_large_image' as const,
  images: ['/opengraph-image'],
};
