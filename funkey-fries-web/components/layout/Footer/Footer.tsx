import Link from 'next/link'
import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍟</span>
              <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>Funkey Fries</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Crispy, playful, and irresistibly delicious. Funkey Fries brings franchise-quality fries to every neighborhood.
            </p>
            {/* Social icons */}
            <div className="mt-4">
              <FooterLinks />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-3 text-brand-secondary">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/stores" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/loyalty" className="hover:text-white transition-colors">Rewards &amp; Loyalty</Link></li>
              <li><Link href="/franchise" className="hover:text-white transition-colors">Franchise Opportunities</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-brand-secondary">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Get the app */}
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

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Funkey Fries Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
