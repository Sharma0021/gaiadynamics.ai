import type { MetadataRoute } from 'next';
import { SITE } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.canonical,
      lastModified: new Date('2026-10-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
