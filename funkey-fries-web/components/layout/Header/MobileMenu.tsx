'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import NavLinks from './NavLinks'
import CartIcon from './CartIcon'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div className="md:hidden flex items-center gap-2">
      <CartIcon />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-brand-deep hover:text-brand-primary transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-16 right-0 z-50 h-[calc(100dvh-4rem)] w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <NavLinks vertical onNavigate={() => setIsOpen(false)} />
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-2">
            <Link
              href="/auth/signin"
              onClick={() => setIsOpen(false)}
              className="text-center bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => setIsOpen(false)}
              className="text-center border-2 border-brand-primary text-brand-primary font-semibold px-5 py-2.5 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
