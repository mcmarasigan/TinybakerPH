import { useState, useRef, useEffect } from 'react'
import './Gallery.css'

const products = [
  /* ── COOKIES ── */
  {
    id: 1, name: 'Dark Chocolate Cookie', subtitle: 'with Walnuts',
    category: 'cookie', bestSeller: true, isNew: false,
    image: '/dark-choco-cookie.png', emoji: '🍪',
    price: '₱130', priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Soft chewy dark chocolate cookie packed with walnut chunks.',
  },
  {
    id: 2, name: 'Red Velvet Cookie', subtitle: 'with Creamcheese Filling',
    category: 'cookie', bestSeller: false, isNew: false,
    image: '/red-velvet-cookie.png', emoji: '❤️',
    price: '₱130', priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Vibrant red velvet dough with cream cheese filling inside.',
  },
  {
    id: 3, name: 'Matcha Cookie', subtitle: 'with White Chocolate',
    category: 'cookie', bestSeller: false, isNew: false,
    image: '/matcha-cookie.png', emoji: '🍵',
    price: '₱130', priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Earthy matcha dough loaded with white chocolate chunks.',
  },
  {
    id: 4, name: 'Midnight Oreo Cookie', subtitle: 'with White Chocolate',
    category: 'cookie', bestSeller: false, isNew: true,
    image: '/midnight-oreo-cookie.png', emoji: '🌙',
    price: '₱130', priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Dark, Oreo-packed cookie with white choco chunks. Our newest!',
  },
  /* ── BROWNIES ── */
  {
    id: 5, name: 'Triple Choco Brownies', subtitle: 'Mini Bites',
    category: 'brownie', bestSeller: true, isNew: false,
    image: '/brownies.png', emoji: '🟫',
    price: '₱120', priceDetail: "6's ₱120  ·  12's ₱220  ·  24's ₱420",
    desc: 'Dense, fudgy, triple chocolate brownie bites with sea salt.',
  },
  /* ── CROISSANTS ── */
  {
    id: 6, name: 'Butter Croissant', subtitle: 'Classic & Flaky',
    category: 'croissant', bestSeller: false, isNew: false,
    image: '/butter-croissant.png', emoji: '🥐',
    price: '₱100', priceDetail: '₱100 / pc',
    desc: 'Buttery, golden, perfectly laminated croissant.',
  },
  {
    id: 7, name: 'Almond Croissant', subtitle: 'with Almond Filling',
    category: 'croissant', bestSeller: false, isNew: false,
    image: '/almond-croissant.png', emoji: '🌰',
    price: '₱160', priceDetail: '₱160 / pc',
    desc: 'Flaky croissant filled with almond cream and sliced almonds.',
  },
  /* ── CROOKIES ── */
  {
    id: 8, name: 'Crookie', subtitle: 'Croissant × Cookie',
    category: 'crookie', bestSeller: true, isNew: false,
    image: '/crookie.png', emoji: '🥐',
    price: '₱160', priceDetail: '₱160 / pc',
    desc: 'Flaky croissant baked with gooey cookie dough on top.',
  },
]

const filters = [
  { key: 'best',      label: '⭐ Best Sellers' },
  { key: 'all',       label: '🍽️ All Items' },
  { key: 'cookie',    label: '🍪 Cookies' },
  { key: 'brownie',   label: '🟫 Brownies' },
  { key: 'croissant', label: '🥐 Croissants' },
  { key: 'crookie',   label: '🥐🍪 Crookies' },
]

const categoryMeta = [
  { key: 'cookie',    label: '🍪 Gourmet Cookies',        color: '#7B4F2E' },
  { key: 'brownie',   label: '🟫 Triple Choco Brownies',  color: '#3D1C0A' },
  { key: 'croissant', label: '🥐 Croissants',              color: '#B8864E' },
  { key: 'crookie',   label: '🥐🍪 Crookies',             color: '#6B3A2A' },
]

/* ── Extracted card component ── */
const ProductCard = ({ product, i, hovered, setHovered }) => (
  <div
    className="price-card"
    style={{ animationDelay: `${i * 0.07}s` }}
    onMouseEnter={() => setHovered(product.id)}
    onMouseLeave={() => setHovered(null)}
  >
    {product.bestSeller && <div className="bs-ribbon">⭐ Best Seller</div>}
    {product.isNew && !product.bestSeller && <div className="new-chip">✨ NEW</div>}

    <div className="price-card-img-wrap">
      {product.image ? (
        <img src={product.image} alt={product.name} className="price-card-img" loading="lazy" />
      ) : (
        <span className="price-card-emoji">{product.emoji}</span>
      )}
      <div className={`price-overlay ${hovered === product.id ? 'visible' : ''}`}>
        <p className="overlay-desc">{product.desc}</p>
        <span className="overlay-price-detail">{product.priceDetail}</span>
      </div>
    </div>

    <div className="price-card-info">
      <div>
        <h3 className="price-card-name">{product.name}</h3>
        {product.subtitle && <p className="price-card-sub">{product.subtitle}</p>}
      </div>
      <div className="price-tag">{product.price}</div>
    </div>
    <div className="price-card-detail">{product.priceDetail}</div>
  </div>
)

/* ── Main component ── */
const Pricing = () => {
  const [active, setActive] = useState('best')
  const [hovered, setHovered] = useState(null)
  const filterBarRef = useRef(null)

  const filtered = active === 'best'
    ? products.filter(p => p.bestSeller)
    : products.filter(p => p.category === active)

  useEffect(() => {
    const bar = filterBarRef.current
    if (!bar) return
    const activeEl = bar.querySelector('.filter-pill.active')
    if (activeEl) activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <section id="pricing" className="pricing">
      <div className="section-wrapper">
        <div className="pricing-header reveal">
          <div className="badge">🎀 Menu & Pricing</div>
          <h2 className="section-title">Our Sweet Menu</h2>
          <p className="section-subtitle">Everything baked to order — strictly pre-order only 📦</p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="filter-bar-wrap">
        <div className="filter-bar" ref={filterBarRef} role="tablist" aria-label="Filter products">
          {filters.map(f => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              className={`filter-pill ${active === f.key ? 'active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="section-wrapper">

        {/* ALL ITEMS — grouped by category with section headers */}
        {active === 'all' ? (
          categoryMeta.map(cat => {
            const items = products.filter(p => p.category === cat.key)
            return (
              <div key={cat.key} className="category-group">
                <div className="category-group-header">
                  <span className="category-group-title" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                  <div className="category-group-line" style={{ background: cat.color + '40' }} />
                </div>
                <div className="pricing-grid">
                  {items.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      i={i}
                      hovered={hovered}
                      setHovered={setHovered}
                    />
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          /* ALL OTHER FILTERS — flat grid */
          <div className="pricing-grid">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                i={i}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </div>
        )}

        {/* Notes */}
        <div className="pricing-note reveal">
          <p>📍 Based in <strong>Project 8, Quezon City</strong> — Pre-order only</p>
          <p>🍪 Cookies: available in <strong>40g</strong> (mini) & <strong>100g</strong> (large)</p>
          <p>🟫 Brownies: Mini Bites — <strong>6's ₱120 · 12's ₱220 · 24's ₱420</strong></p>
        </div>

        {/* CTA */}
        <div className="pricing-cta reveal">
          <p>Ready to order? We'd love to bake for you! ♡</p>
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
          >
            Place an Order 🛒
          </a>
        </div>
      </div>
    </section>
  )
}

export default Pricing
