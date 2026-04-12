import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import AddToCartButton from '@/components/features/menu/AddToCartButton'
import { getMenuProductBySlug, getMenuProductSlugs } from '@/lib/api/menu'

interface MenuProductDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getMenuProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: MenuProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getMenuProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found | Funkey Fries',
    }
  }

  return {
    title: `${product.name} | Funkey Fries`,
    description: product.shortDescription,
  }
}

export default async function MenuProductDetailPage({ params }: MenuProductDetailPageProps) {
  const { slug } = await params
  const product = await getMenuProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-brand-warm">
      <section className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Link href="/menu" className="text-sm font-semibold text-brand-primary hover:underline">
          ← Back to menu
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-sm">
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <span className="badge bg-brand-soft text-brand-primary">{product.category}</span>
            <h1 className="mt-3 text-3xl font-bold text-brand-deep sm:text-4xl" style={{ fontFamily: 'var(--font-fredoka)' }}>
              {product.name}
            </h1>
            <p className="mt-3 text-xl font-bold text-brand-primary">${product.price.toFixed(2)}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

            <div className="mt-6 space-y-5">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Ingredients</h2>
                <p className="mt-2 text-sm text-gray-700">{product.ingredients.join(', ')}</p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Allergens</h2>
                <p className="mt-2 text-sm text-gray-700">
                  {product.allergens.length > 0 ? product.allergens.join(', ') : 'No known allergens'}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <AddToCartButton productSlug={product.slug} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
