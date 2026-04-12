import type { Metadata } from 'next'
import { Fredoka, Inter } from 'next/font/google'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Funkey Fries — Crispy. Funky. Delicious.',
  description:
    'Order the crispiest, most playful fries online. Multi-store franchise, loyalty rewards, and blockchain-enabled goodness.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fredoka.variable} ${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
