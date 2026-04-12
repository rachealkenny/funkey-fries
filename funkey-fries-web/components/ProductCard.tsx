import Image from 'next/image'
import Link from 'next/link'
import type { MenuProduct } from '@/types/menu'

interface ProductCardProps {
  product: MenuProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card-playful overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-brand-deep">{product.name}</h3>
          <p className="text-base font-bold text-brand-primary">${product.price.toFixed(2)}</p>
        </div>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{product.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="badge bg-brand-soft text-brand-primary">{product.category}</span>
          <Link
            href={`/menu/${product.slug}`}
            className="text-sm font-semibold text-brand-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
