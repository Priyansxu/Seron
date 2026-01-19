import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  metadataBase: new URL('https://seronai.vercel.app/'),
  
  title: {
    default: 'Seron AI',
    template: '%s | Seron AI',
  },

  description: 'Seron AI — Fast, creative, and free AI image generation platform.',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: 'pZ1d-eYCjWFhS07_e1SoS8myfd9oLiHbidf1AdR3t38',
  },

  openGraph: {
    title: 'Seron AI',
    description: 'Generate stunning visuals instantly with Seron AI. No cost. No watermark.',
    url: 'https://seronai.vercel.app/',
    siteName: 'Seron AI',
    images: ['/og.png'],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Seron AI',
    description: 'Create high-quality AI-generated images instantly with Seron AI.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head />
      <body className="bg-black text-white font-outfit">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
