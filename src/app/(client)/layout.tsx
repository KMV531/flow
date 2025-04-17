import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Flow',
  description:
    'Flow is a modern green energy company providing affordable, clean, and renewable power for homes and businesses. Make the switch today—save money, reduce your carbon footprint, and power a better future.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' type='image/png' />
        {/* You can change the href to any path where your favicon is located */}
        <meta
          name='Flow'
          content='Flow is a modern green energy company providing affordable, clean, and renewable power for homes and businesses. Make the switch today—save money, reduce your carbon footprint, and power a better future.'
        />
        {/* Add more metadata if needed */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
