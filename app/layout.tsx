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
  title: 'Ads BlackJack | iGaming & Crypto Performance Agency',
  description: 'Ads BlackJack scales iGaming, Casino, and Crypto brands into new markets with targeted paid ad campaigns across Meta, Google, TikTok, and Snapchat.',
  keywords: [
    'iGaming performance marketing',
    'crypto advertising agency',
    'online casino media buying',
    'sportsbook user acquisition',
    'iGaming Google Ads certification',
    'crypto PPC agency',
    'casino paid social agency',
    'FTD optimization agency',
  ],
  alternates: {
    canonical: 'https://adsblackjack.com/',
  },
  icons: {
    icon: '/images/ads-logo-gold.png',
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