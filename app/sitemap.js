export const dynamic = 'force-static'

export default function sitemap() {
  const lastModified = new Date()

  return [
    {
      url: 'https://seron.is-an.ai',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://seron.is-an.ai/create',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
