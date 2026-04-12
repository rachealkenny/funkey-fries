import Image from 'next/image'
import Link from 'next/link'

/* ── Real Unsplash image URLs (free to use) ── */
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=1400&h=800&fit=crop&q=80',
  fries1: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=600&fit=crop&q=80',
  fries2: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&h=600&fit=crop&q=80',
  fries3: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=600&fit=crop&q=80',
  store: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80',
  loyalty: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80',
  app: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=500&fit=crop&q=80',
  about: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&h=600&fit=crop&q=80',
}

export default function Home() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative overflow-hidden bg-brand-warm">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="max-w-xl">
              <span className="badge bg-brand-secondary/20 text-brand-primary mb-4">
                🔥 New — Spicy Jalapeño Crunch is here!
              </span>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-fredoka)' }}
              >
                Crispy. Funky.{' '}
                <span className="text-gradient">Delicious.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                Golden, crunchy, and loaded with flavor — Funkey Fries is the franchise that makes every bite an experience. Order online or find a store near you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-orange-200 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
                >
                  🍟 Order Now
                </Link>
                <Link
                  href="/stores"
                  className="inline-flex items-center gap-2 bg-white text-brand-deep font-semibold px-8 py-4 rounded-full text-lg border-2 border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-all"
                >
                  📍 Find a Store
                </Link>
              </div>
              {/* Social proof */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-brand-secondary/60 border-2 border-white flex items-center justify-center text-xs font-bold text-brand-deep">
                      {['😋', '🤤', '😍', '🔥'][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-deep">50,000+ happy customers</p>
                  <p className="text-xs text-gray-500">Rated 4.9/5 across all platforms</p>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="hero-overlay rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.hero}
                  alt="Delicious loaded french fries served in a red basket"
                  width={1400}
                  height={800}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-4 sm:left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-3xl">🍟</span>
                <div>
                  <p className="text-sm font-bold text-brand-deep">Signature Fries</p>
                  <p className="text-xs text-gray-500">From $4.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ WAVY DIVIDER ════════════════════ */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* ════════════════════ FEATURED MENU ════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge bg-brand-soft text-brand-primary mb-3">🔥 Fan Favorites</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-brand-deep"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              Our Irresistible Menu
            </h2>
            <p className="mt-3 text-gray-500 max-w-md mx-auto">Hand-cut, twice-fried, and loaded with toppings you won&apos;t find anywhere else.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: IMAGES.fries1, name: 'Classic Golden Fries', desc: 'Perfectly salted, impossibly crispy. The OG.', price: '$4.99', tag: 'Best Seller' },
              { img: IMAGES.fries2, name: 'Loaded Cheese Fries', desc: 'Smothered in melted cheese, bacon bits & green onion.', price: '$7.99', tag: 'Popular' },
              { img: IMAGES.fries3, name: 'Spicy Jalapeño Crunch', desc: 'Fiery jalapeños, chipotle aioli & crispy onion strings.', price: '$8.49', tag: 'New' },
            ].map((item) => (
              <article key={item.name} className="card-playful overflow-hidden group">
                <div className="img-card aspect-square relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 badge bg-brand-primary text-white">{item.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-deep">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-primary">{item.price}</span>
                    <Link
                      href="/menu"
                      className="inline-flex items-center gap-1 bg-brand-soft text-brand-primary text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      Add to Cart +
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline text-lg"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ HOW IT WORKS ════════════════════ */}
      <section className="bg-brand-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-brand-deep"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              How It Works
            </h2>
            <p className="mt-3 text-gray-500">Three simple steps to crispy happiness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '📱', title: 'Browse & Choose', desc: 'Explore our menu of signature fries, loaded bowls, and sides.' },
              { step: '02', icon: '💳', title: 'Pay Your Way', desc: 'Card, cash, Apple Pay, or even FRIES loyalty tokens on Stellar.' },
              { step: '03', icon: '🚀', title: 'Pickup or Delivery', desc: 'Fresh fries at your door or hot and ready at your local Funkey spot.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-20 h-20 mx-auto mb-5 bg-white rounded-full flex items-center justify-center text-4xl shadow-md">
                  {s.icon}
                </div>
                <p className="text-xs font-bold text-brand-primary mb-1">STEP {s.step}</p>
                <h3 className="text-xl font-bold text-brand-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FEATURES ROW ════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="img-card rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.store}
                alt="A cozy Funkey Fries restaurant interior"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="badge bg-brand-accent/20 text-brand-accent mb-3">📍 200+ Locations</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-brand-deep"
                style={{ fontFamily: 'var(--font-fredoka)' }}
              >
                Find a Funkey Fries Near You
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                With over 200 franchise locations and growing, there&apos;s always a Funkey spot around the corner. Each store serves the same crispy perfection with local flavor twists.
              </p>
              <Link
                href="/stores"
                className="mt-6 inline-flex items-center gap-2 bg-brand-deep text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Explore Locations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ LOYALTY ════════════════════ */}
      <section className="bg-brand-deep py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge bg-brand-secondary/20 text-brand-secondary mb-3">🪙 FRIES Token</span>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: 'var(--font-fredoka)' }}
              >
                Earn Rewards with Every Bite
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Our blockchain-powered loyalty program on the Stellar network lets you earn FRIES tokens with every order. Redeem them for free food, merch, or trade them — it&apos;s your choice.
              </p>
              <ul className="mt-6 space-y-3">
                {['1 FRIES token per $1 spent', 'Redeem tokens for free menu items', 'Transfer or gift tokens to friends', 'Exclusive drops for top earners'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/loyalty"
                className="mt-8 inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
              >
                Join Rewards Program →
              </Link>
            </div>
            <div className="img-card rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGES.loyalty}
                alt="Beautifully plated food representing loyalty rewards"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ DOWNLOAD APP ════════════════════ */}
      <section className="bg-brand-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="img-card rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.app}
                alt="Person using a food ordering app on their phone"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="badge bg-brand-primary/10 text-brand-primary mb-3">📲 Mobile App</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-brand-deep"
                style={{ fontFamily: 'var(--font-fredoka)' }}
              >
                Order Ahead. Skip the Line.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Download the Funkey Fries app for the fastest ordering experience. Track your order in real-time, save your favorites, and earn double loyalty tokens on app orders.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  🍎 App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  ▶️ Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA BANNER ════════════════════ */}
      <section className="relative overflow-hidden">
        <Image
          src={IMAGES.about}
          alt="Food spread on a table"
          fill
          className="object-cover"
        />
        <div className="relative bg-brand-deep/70 py-24">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              Ready to Get Funkey?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Join thousands of fry lovers. Order your first box today and taste the crunch that&apos;s taking the world by storm.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-orange-600 transition-all"
              >
                🍟 Start Your Order
              </Link>
              <Link
                href="/stores"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-bold px-10 py-4 rounded-full text-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
