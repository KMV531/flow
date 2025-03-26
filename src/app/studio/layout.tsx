import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voltis',
  description:
    'Voltis is an innovative energy solutions platform built with Next.js, ShadCN, and Sanity. Discover cutting-edge, sustainable energy options with fast performance and dynamic content tailored to power businesses and homes.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
