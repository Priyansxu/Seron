import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seron.is-an.ai/',
      lastModified: new Date(),
    },
    {
      url: 'https://seron.is-an.ai/create/',
      lastModified: new Date(),
    },
  ]
}