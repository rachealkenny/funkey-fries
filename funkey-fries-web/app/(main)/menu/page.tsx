import type { Metadata } from 'next'
import MenuCatalogClient from '@/components/features/menu/MenuCatalogClient'
import { getMenuCategories, getMenuProducts } from '@/lib/api/menu'

export const metadata: Metadata = {
  title: 'Menu | Funkey Fries',
  description: 'Browse the full Funkey Fries menu, filter by category, and search products.',
}

export default async function MenuPage() {
  const [products, categories] = await Promise.all([getMenuProducts(), getMenuCategories()])

  return (
    <div className="bg-brand-warm">
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mb-8">
          <p className="badge bg-brand-secondary/20 text-brand-primary">Fresh and crispy</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-deep sm:text-4xl" style={{ fontFamily: 'var(--font-fredoka)' }}>
            Explore Our Menu
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Discover loaded fries, burgers, drinks, and sweet treats. Filter by category and search by product name instantly.
          </p>
        </header>

        <MenuCatalogClient products={products} categories={categories} />
      </section>
    </div>
  )
}
