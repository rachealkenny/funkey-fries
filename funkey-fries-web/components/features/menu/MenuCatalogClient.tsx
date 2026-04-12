'use client'

import { useMemo, useState } from 'react'
import CategoryFilter from '@/components/CategoryFilter'
import ProductCard from '@/components/ProductCard'
import SearchInput from '@/components/SearchInput'
import type { MenuCategory, MenuProduct } from '@/types/menu'

interface MenuCatalogClientProps {
  products: MenuProduct[]
  categories: MenuCategory[]
}

export default function MenuCatalogClient({ products, categories }: MenuCatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()

    return products.filter((product) => {
      const categoryMatches = selectedCategory === 'All' || product.category === selectedCategory
      const nameMatches = normalizedSearch.length === 0 || product.name.toLowerCase().includes(normalizedSearch)
      return categoryMatches && nameMatches
    })
  }, [products, searchQuery, selectedCategory])

  return (
    <section className="space-y-6" aria-label="Menu catalog with filters">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <CategoryFilter
          categories={categories}
          activeCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <p className="text-sm text-gray-600" aria-live="polite">
        Showing {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
      </p>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
          <h2 className="text-lg font-semibold text-brand-deep">No products found</h2>
          <p className="mt-2 text-sm text-gray-600">
            Try a different category or search term.
          </p>
        </div>
      )}
    </section>
  )
}
