import type { MenuCategory, MenuProduct } from '@/types/menu'

const menuProducts: MenuProduct[] = [
  {
    id: 'prod-001',
    slug: 'classic-golden-fries',
    name: 'Classic Golden Fries',
    category: 'Fries',
    price: 4.99,
    shortDescription: 'Hand-cut potatoes, double-fried and lightly salted.',
    description:
      'Our signature fries are hand-cut daily, blanched, and double-fried for the perfect crunch outside and fluffy center.',
    ingredients: ['Potatoes', 'Sea salt', 'Sunflower oil'],
    allergens: [],
    imageUrl:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Basket of classic golden fries',
  },
  {
    id: 'prod-002',
    slug: 'spicy-volcano-fries',
    name: 'Spicy Volcano Fries',
    category: 'Fries',
    price: 7.49,
    shortDescription: 'Crispy fries with chipotle glaze, jalapenos, and chili flakes.',
    description:
      'Built for heat lovers. Loaded with smoky chipotle glaze, fresh jalapenos, and crispy onions for a spicy bite.',
    ingredients: ['Potatoes', 'Chipotle sauce', 'Jalapenos', 'Crispy onions'],
    allergens: ['Egg'],
    imageUrl:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Loaded spicy fries with jalapenos',
  },
  {
    id: 'prod-003',
    slug: 'smash-burger-deluxe',
    name: 'Smash Burger Deluxe',
    category: 'Burgers',
    price: 9.99,
    shortDescription: 'Double patty burger with cheddar, onions, and house sauce.',
    description:
      'A juicy double-smash burger served on a toasted potato bun with cheddar, caramelized onions, lettuce, and house sauce.',
    ingredients: ['Beef patties', 'Cheddar cheese', 'Potato bun', 'Onions', 'House sauce'],
    allergens: ['Milk', 'Wheat', 'Egg'],
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Double smash burger with cheese',
  },
  {
    id: 'prod-004',
    slug: 'garden-crunch-burger',
    name: 'Garden Crunch Burger',
    category: 'Burgers',
    price: 8.99,
    shortDescription: 'Plant-based patty, pickles, lettuce, and tangy mustard slaw.',
    description:
      'A crispy plant-based burger stacked with pickles, fresh lettuce, tomato, and mustard slaw on a toasted bun.',
    ingredients: ['Plant-based patty', 'Lettuce', 'Tomato', 'Pickles', 'Bun'],
    allergens: ['Wheat', 'Soy'],
    imageUrl:
      'https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Plant-based burger with fresh toppings',
  },
  {
    id: 'prod-005',
    slug: 'strawberry-fizz-sparkler',
    name: 'Strawberry Fizz Sparkler',
    category: 'Drinks',
    price: 3.99,
    shortDescription: 'House strawberry soda with mint and lime.',
    description:
      'Refreshing sparkling drink with strawberry puree, fresh mint, and lime juice. Perfect pairing for salty fries.',
    ingredients: ['Sparkling water', 'Strawberry puree', 'Mint', 'Lime'],
    allergens: [],
    imageUrl:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Sparkling strawberry drink with mint',
  },
  {
    id: 'prod-006',
    slug: 'cold-brew-vanilla-float',
    name: 'Cold Brew Vanilla Float',
    category: 'Drinks',
    price: 4.49,
    shortDescription: 'Cold brew topped with vanilla cream foam.',
    description:
      'Rich slow-brewed coffee balanced with smooth vanilla cream foam. Served chilled over ice.',
    ingredients: ['Cold brew coffee', 'Vanilla cream', 'Ice'],
    allergens: ['Milk'],
    imageUrl:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Iced cold brew coffee with foam',
  },
  {
    id: 'prod-007',
    slug: 'choco-lava-bites',
    name: 'Choco Lava Bites',
    category: 'Desserts',
    price: 5.99,
    shortDescription: 'Warm chocolate cake bites with molten center.',
    description:
      'Soft mini cakes with rich molten chocolate centers, dusted with cocoa sugar and served warm.',
    ingredients: ['Dark chocolate', 'Flour', 'Eggs', 'Butter', 'Sugar'],
    allergens: ['Milk', 'Wheat', 'Egg'],
    imageUrl:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Chocolate lava cake bites on a plate',
  },
  {
    id: 'prod-008',
    slug: 'salted-caramel-sundae',
    name: 'Salted Caramel Sundae',
    category: 'Desserts',
    price: 5.49,
    shortDescription: 'Vanilla soft-serve, caramel drizzle, and cookie crumble.',
    description:
      'Creamy vanilla soft-serve topped with warm salted caramel and crunchy butter cookie crumble.',
    ingredients: ['Vanilla soft-serve', 'Salted caramel', 'Cookie crumble'],
    allergens: ['Milk', 'Wheat'],
    imageUrl:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&h=900&fit=crop&q=80',
    imageAlt: 'Salted caramel ice cream sundae',
  },
]

const menuCategories: MenuCategory[] = ['Fries', 'Burgers', 'Drinks', 'Desserts']

export async function getMenuProducts(): Promise<MenuProduct[]> {
  return menuProducts
}

export async function getMenuCategories(): Promise<MenuCategory[]> {
  return menuCategories
}

export async function getMenuProductBySlug(slug: string): Promise<MenuProduct | null> {
  const product = menuProducts.find((item) => item.slug === slug)
  return product ?? null
}

export async function getMenuProductSlugs(): Promise<string[]> {
  return menuProducts.map((item) => item.slug)
}
