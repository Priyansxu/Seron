import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  metadataBase: new URL('https://seronai.vercel.app/'),

  title: {
    default: 'Seron AI',
    template: '%s | Seron AI',
  },

  description: 'A multi-model AI platform for fast, high-quality image generation.',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: '',
  },

  openGraph: {
    title: 'Seron AI',
    description: 'A multi-model AI platform for fast, high-quality image generation.',
    url: 'https://seronai.vercel.app/',
    siteName: 'Seron AI',
    images: ['/og.png'],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Seron AI',
    description: 'A multi-model AI platform for fast, high-quality image generation.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          // Card/Container
          card: 'bg-neutral-900 border border-neutral-800 shadow-xl',
          
          // Headers
          headerTitle: 'text-white font-bold',
          headerSubtitle: 'text-neutral-400',
          
          // Form Elements
          formButtonPrimary: 'bg-white text-black font-medium hover:bg-neutral-200 transition',
          formFieldLabel: 'text-neutral-300 text-sm',
          formFieldInput: 'bg-black border border-neutral-800 text-white focus:ring-2 focus:ring-neutral-700',
          
          // Social Buttons
          socialButtonsBlockButton: 'border border-neutral-800 text-white hover:bg-neutral-800 transition',
          socialButtonsBlockButtonText: 'text-white font-medium',
          
          // Footer/Links
          footerActionLink: 'text-white hover:text-neutral-300 transition',
          
          // Identity Preview
          identityPreviewText: 'text-white',
          identityPreviewEditButton: 'text-white hover:text-neutral-300',
          
          // User Button Popover
          userButtonPopoverCard: 'bg-neutral-900 border border-neutral-800',
          userButtonPopoverActionButton: 'text-white hover:bg-neutral-800',
          userButtonPopoverActionButtonText: 'text-white',
          
          // Dividers
          dividerLine: 'bg-neutral-800',
          dividerText: 'text-neutral-500',
        },
      }}
    >
      <html lang="en">
        <head />
        <body className="bg-black text-white font-outfit">
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  )
}