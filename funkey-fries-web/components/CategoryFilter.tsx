'use client'

import type { MenuCategory } from '@/types/menu'

interface CategoryFilterProps {
  categories: MenuCategory[]
  activeCategory: MenuCategory | 'All'
  onChange: (category: MenuCategory | 'All') => void
}

export default function CategoryFilter({ categories, activeCategory, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter menu by category">
      <button
        type="button"
        onClick={() => onChange('All')}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
          activeCategory === 'All'
            ? 'bg-brand-primary text-white border-brand-primary'
            : 'bg-white text-brand-deep border-gray-300 hover:border-brand-primary'
        }`}
        aria-pressed={activeCategory === 'All'}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
            activeCategory === category
              ? 'bg-brand-primary text-white border-brand-primary'
              : 'bg-white text-brand-deep border-gray-300 hover:border-brand-primary'
          }`}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
