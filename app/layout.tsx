import React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
        <GoogleTagManager gtmId="GTM-KSBJKQ3S" />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background`}>
        {children}
      </body>
    </html>
  )
}
