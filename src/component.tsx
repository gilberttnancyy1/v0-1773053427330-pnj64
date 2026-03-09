// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuickSnap – Capture. Edit. Share. In Seconds.',
  description: 'The simplest screenshot tool for Chrome. No clutter, just results.',
  openGraph: {
    title: 'QuickSnap – Capture. Edit. Share. In Seconds.',
    description: 'The simplest screenshot tool for Chrome. No clutter, just results.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA] text-[#1F2937] antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}