export type MenuCategory = 'Fries' | 'Burgers' | 'Drinks' | 'Desserts'

export interface MenuProduct {
  id: string
  slug: string
  name: string
  category: MenuCategory
  price: number
  shortDescription: string
  description: string
  ingredients: string[]
  allergens: string[]
  imageUrl: string
  imageAlt: string
}
