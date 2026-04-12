import Link from 'next/link'
import NavLinks from './NavLinks'
import CartIcon from './CartIcon'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl" role="img" aria-label="fries">🍟</span>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-fredoka)' }}>
            <span className="text-brand-primary">Funkey</span>{' '}
            <span className="text-brand-deep">Fries</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <NavLinks className="hidden md:flex" />

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <CartIcon />
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-orange-200 hover:bg-orange-600 transition-colors"
          >
            Order Now
          </Link>
          <Link
            href="/auth/signin"
            className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile menu (hamburger + drawer) */}
        <MobileMenu />
      </div>
    </header>
  )
}
