'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/menu', label: 'Menu' },
  { href: '/stores', label: 'Locations' },
  { href: '/loyalty', label: 'Rewards' },
  { href: '/franchise', label: 'Franchise' },
]

interface NavLinksProps {
  className?: string
  vertical?: boolean
  onNavigate?: () => void
}

export default function NavLinks({ className = '', vertical = false, onNavigate }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <nav className={`${vertical ? 'flex flex-col gap-1' : 'flex items-center gap-6'} ${className}`}>
      {NAV_ITEMS.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={`text-sm font-medium transition-colors ${
              vertical ? 'px-3 py-2.5 rounded-lg' : ''
            } ${
              isActive
                ? 'text-brand-primary font-semibold' + (vertical ? ' bg-brand-soft' : '')
                : 'text-brand-deep hover:text-brand-primary'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
