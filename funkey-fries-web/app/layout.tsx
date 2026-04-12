import type { Metadata } from 'next'
import { Fredoka, Inter } from 'next/font/google'
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
        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-3xl" role="img" aria-label="fries">🍟</span>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-fredoka)' }}>
                <span className="text-brand-primary">Funkey</span>{' '}
                <span className="text-brand-deep">Fries</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-deep">
              <a href="/menu" className="hover:text-brand-primary transition-colors">Menu</a>
              <a href="/stores" className="hover:text-brand-primary transition-colors">Locations</a>
              <a href="/loyalty" className="hover:text-brand-primary transition-colors">Rewards</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Franchise</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/menu"
                className="hidden sm:inline-flex items-center gap-2 bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-orange-200 hover:bg-orange-600 transition-colors"
              >
                Order Now
              </a>
              <a
                href="#"
                className="hidden sm:inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
              >
                Sign In
              </a>
            </div>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* ── Footer ── */}
        <footer className="bg-brand-deep text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">🍟</span>
                  <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>Funkey Fries</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Crispy, playful, and irresistibly delicious. Funkey Fries brings franchise-quality fries to every neighborhood.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-brand-secondary">Explore</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/menu" className="hover:text-white transition-colors">Menu</a></li>
                  <li><a href="/stores" className="hover:text-white transition-colors">Locations</a></li>
                  <li><a href="/loyalty" className="hover:text-white transition-colors">Rewards & Loyalty</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Franchise Opportunities</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-brand-secondary">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-brand-secondary">Get the App</h4>
                <p className="text-sm text-gray-300 mb-3">Order ahead, earn rewards, skip the line.</p>
                <div className="flex flex-col gap-2">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors">
                    🍎 App Store
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors">
                    ▶️ Google Play
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
              <p>© {new Date().getFullYear()} Funkey Fries Inc. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
