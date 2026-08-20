import type { MetadataRoute } from 'next';
import { CASE_STUDY_SLUGS } from '../lib/get-case-studies';

const siteUrl = 'https://saepulmalik.my.id';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/career`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/skills`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/showcase`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/about`, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = CASE_STUDY_SLUGS.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
