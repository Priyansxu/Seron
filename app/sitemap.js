export default function sitemap() {
  return [
    {
      url: 'https://seron.is-an.ai/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://seron.is-an.ai/create/',
      lastModified: new Date(),
      changeFrequency: 'weakly',
      priority: 0.8,
    },
  ]
}