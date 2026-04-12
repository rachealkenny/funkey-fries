'use client'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="block w-full">
      <span className="sr-only">Search menu products by name</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by product name..."
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-brand-deep placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        aria-label="Search products"
      />
    </label>
  )
}
