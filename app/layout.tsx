import Script from 'next/script'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans" 
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono" 
});

export const metadata: Metadata = {
  title: 'Marote Agency | Digital Campaigns Engineered for Sales',
  description: 'Marote Agency delivers data-driven digital marketing campaigns — Google Ads, Social Media Advertising, and Web Design that converts. Offices in Argentina and Spain.',
  alternates: {
    canonical: 'https://maroteagency.com/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <head>
        <meta name="facebook-domain-verification" content="83yvukhvdmsf46cicdw4n8ag9n93dv" />
        <GoogleTagManager gtmId="GTM-WQBRXFB7" />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}