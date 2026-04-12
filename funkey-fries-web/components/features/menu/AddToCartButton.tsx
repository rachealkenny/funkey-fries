'use client'

interface AddToCartButtonProps {
  productSlug: string
}

export default function AddToCartButton({ productSlug }: AddToCartButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        console.log(`TODO(issue-5): add ${productSlug} to cart`)
      }}
      className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
    >
      Add to Cart
    </button>
  )
}
