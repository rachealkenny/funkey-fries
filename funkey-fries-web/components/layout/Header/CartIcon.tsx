'use client'

import Link from 'next/link'

interface CartIconProps {
  itemCount?: number
}

export default function CartIcon({ itemCount = 0 }: CartIconProps) {
  return (
    <Link href="/menu" className="relative p-2 text-brand-deep hover:text-brand-primary transition-colors" aria-label="Cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-brand-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </Link>
  )
}
