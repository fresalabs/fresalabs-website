import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Analytics } from '@/components/Analytics'
import { CustomCursor } from '@/components/CustomCursor'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'FresaLabs — Software for Everyone',
  description: 'We listen to real-world problems and build reliable, privacy-respectful apps that help people every day.',
  metadataBase: new URL('https://www.fresalabs.com'),
  keywords: ['FresaLabs', 'Sleek Form', 'CSS Spider', 'ClipboardX', 'Software', 'Apps', 'Developer Tools'],
  authors: [{ name: 'FresaLabs' }],
  creator: 'FresaLabs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fresalabs.com',
    siteName: 'FresaLabs',
    title: 'FresaLabs — Software for Everyone',
    description: 'Reliable, privacy-respectful apps for everyday life. We listen to real problems and build software for everyone.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FresaLabs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FresaLabs — Software for Everyone',
    description: 'Reliable, privacy-respectful apps for everyday life.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo192.png',
    shortcut: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://www.fresalabs.com/',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FresaLabs',
  url: 'https://www.fresalabs.com/',
  logo: 'https://www.fresalabs.com/logo.png',
  sameAs: ['https://github.com/fresalabs'],
  slogan: 'Software for everyone',
  email: 'admin@fresalabs.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Analytics />
      </head>
      <body className="min-h-screen font-sans">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
        <CustomCursor />
        <div className="noise" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
