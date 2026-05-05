import { useState } from 'react'
import './Gallery.css'

/*
  IMAGES NEEDED — save these to /public/:
    dark-choco-cookie.png   → Dark Chocolate with Walnuts cookie photo
    red-velvet-cookie.png   → Red Velvet cookie photo
    matcha-cookie.png       → Matcha cookie photo
    midnight-oreo-cookie.png → Midnight Oreo cookie photo
    brownies.png            → Triple Choco Brownies photo
    butter-croissant.png    → Butter Croissant photo
    almond-croissant.png    → Almond Croissant photo
    crookie.png             → Crookie photo
*/

const products = [
  /* ── GOURMET COOKIES ── */
  {
    id: 1,
    name: 'Dark Chocolate Cookie',
    subtitle: 'with Walnuts',
    badge: 'chocolate chip chaos 🍫',
    badgeColor: '#6B3A2A',
    image: '/dark-choco-cookie.png',
    emoji: '🍪',
    bgColor: '#F5E6D3',
    category: 'cookie',
    price: '₱130 / pc',
    priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Soft chewy dark chocolate cookie packed with walnut chunks. Rich, indulgent, and dangerously addictive. 🍫',
    isNew: false,
  },
  {
    id: 2,
    name: 'Red Velvet Cookie',
    subtitle: 'with Creamcheese Filling',
    badge: 'too fancy to share 💋',
    badgeColor: '#9B2335',
    image: '/red-velvet-cookie.png',
    emoji: '❤️',
    bgColor: '#F5C6C2',
    category: 'cookie',
    price: '₱130 / pc',
    priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Vibrant red velvet cookie with white chocolate chips and a dreamy cream cheese filling inside. 💕',
    isNew: false,
  },
  {
    id: 3,
    name: 'Matcha Cookie',
    subtitle: 'with White Chocolate',
    badge: 'green tea obsessed 🍵',
    badgeColor: '#4A6741',
    image: '/matcha-cookie.png',
    emoji: '🍵',
    bgColor: '#D4E8C2',
    category: 'cookie',
    price: '₱130 / pc',
    priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Earthy Japanese matcha dough loaded with white chocolate chunks. Chewy center, perfectly crisp edges. ✨',
    isNew: false,
  },
  {
    id: 4,
    name: 'Midnight Oreo Cookie',
    subtitle: 'with White Chocolate',
    badge: 'new drop! 🌙',
    badgeColor: '#1A1A2E',
    image: '/midnight-oreo-cookie.png',
    emoji: '🌙',
    bgColor: '#D8D0E8',
    category: 'cookie',
    price: '₱130 / pc',
    priceDetail: '40g: ₱300/6pcs · ₱580/12pcs\n100g: ₱130/pc · ₱1,020/8pcs',
    desc: 'Dark as midnight, packed with Oreo pieces and white chocolate. Our newest and most mysterious flavor yet! 🖤',
    isNew: true,
  },
  /* ── BROWNIES ── */
  {
    id: 5,
    name: 'Triple Choco Brownies',
    subtitle: 'Mini Bites',
    badge: 'dangerously fudgy 🔥',
    badgeColor: '#3D1C0A',
    image: '/brownies.png',
    emoji: '🟫',
    bgColor: '#C8A882',
    category: 'brownie',
    price: '₱120 / 6 pcs',
    priceDetail: '6\'s ₱120 · 12\'s ₱220 · 24\'s ₱420',
    desc: 'Dense, fudgy, crinkle-top triple chocolate brownies with a sprinkle of sea salt. Mini sized — maximum devastation. 🍫',
    isNew: false,
  },
  /* ── CROISSANTS ── */
  {
    id: 6,
    name: 'Butter Croissant',
    subtitle: 'Classic & Flaky',
    badge: 'flaky but fancy ✨',
    badgeColor: '#B8864E',
    image: '/butter-croissant.png',
    emoji: '🥐',
    bgColor: '#F5E6C8',
    category: 'croissant',
    price: '₱100 / pc',
    priceDetail: '₱100 / pc',
    desc: 'Buttery, golden, perfectly laminated croissant. Crispy on the outside, cloud-soft on the inside. A classic done right. 🥐',
    isNew: false,
  },
  {
    id: 7,
    name: 'Almond Croissant',
    subtitle: 'with Almond Filling',
    badge: 'nutty & dreamy 🌰',
    badgeColor: '#8B6914',
    image: '/almond-croissant.png',
    emoji: '🌰',
    bgColor: '#EDD9A3',
    category: 'croissant',
    price: '₱160 / pc',
    priceDetail: '₱160 / pc',
    desc: 'Flaky croissant filled with rich almond cream and topped with sliced almonds and a dusting of powdered sugar. 🌸',
    isNew: false,
  },
  /* ── CROOKIES ── */
  {
    id: 8,
    name: 'Crookie',
    subtitle: 'Croissant × Cookie',
    badge: 'the collab 🥐🍪',
    badgeColor: '#7B4F2E',
    image: '/crookie.png',
    emoji: '🥐🍪',
    bgColor: '#EDD5B3',
    category: 'crookie',
    price: '₱160 / pc',
    priceDetail: '₱160 / pc',
    desc: 'A flaky butter croissant stuffed and topped with cookie dough — baked until golden and gooey. The best of both worlds! 🍫',
    isNew: false,
  },
]

const categoryLabels = {
  cookie:    { label: '🍪 Gourmet Cookies',         color: '#7B4F2E' },
  brownie:   { label: '🟫 Triple Choco Brownies',    color: '#3D1C0A' },
  croissant: { label: '🥐 Croissants',               color: '#B8864E' },
  crookie:   { label: '🥐🍪 Crookies',              color: '#6B3A2A' },
}

const Gallery = () => {
  const [hovered, setHovered] = useState(null)

  // Group products by category
  const grouped = Object.keys(categoryLabels).map((cat) => ({
    cat,
    ...categoryLabels[cat],
    items: products.filter((p) => p.category === cat),
  }))

  return (
    <section id="gallery" className="gallery">
      <div className="section-wrapper">
        {/* Header */}
        <div className="gallery-header reveal">
          <div className="badge">🎀 Fresh from the Oven</div>
          <h2 className="section-title">Our Sweet Menu</h2>
          <p className="section-subtitle">Everything is baked to order — fresh, warm, and made just for you ✨</p>
        </div>

        {/* Category quick-nav */}
        <div className="gallery-categories reveal">
          {grouped.map((g) => (
            <div key={g.cat} className="category-pill" style={{ borderColor: g.color + '55', color: g.color }}>
              {g.label}
            </div>
          ))}
        </div>

        {/* Grouped sections */}
        {grouped.map((g) => (
          <div key={g.cat} className="gallery-section reveal">
            <div className="gallery-section-header">
              <span className="gallery-section-title" style={{ color: g.color }}>{g.label}</span>
              <div className="gallery-section-line" style={{ background: g.color + '40' }} />
            </div>

            <div className={`gallery-grid grid-${g.items.length}`}>
              {g.items.map((product, i) => (
                <div
                  key={product.id}
                  className="product-card"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={() => setHovered(product.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* NEW badge */}
                  {product.isNew && <div className="new-badge">✨ NEW</div>}

                  {/* Sticker image area */}
                  <div className="product-image-wrap" style={{ background: product.bgColor + '50' }}>
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-img sticker-img"
                      />
                    ) : (
                      <span className="product-emoji">{product.emoji}</span>
                    )}

                    {/* Hover overlay */}
                    <div className={`product-overlay ${hovered === product.id ? 'visible' : ''}`}>
                      <p className="overlay-name">{product.name}</p>
                      <p className="overlay-desc">{product.desc}</p>
                      <span className="overlay-price">{product.priceDetail}</span>
                    </div>

                    {/* Badge sticker */}
                    <div className="product-badge" style={{ background: product.badgeColor }}>
                      {product.badge}
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="product-info">
                    <div className="product-name-wrap">
                      <h3 className="product-name">{product.name}</h3>
                      {product.subtitle && <p className="product-subtitle">{product.subtitle}</p>}
                    </div>
                    <span className="product-price">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Notes */}
        <div className="gallery-note reveal">
          <p>📦 Gourmet Cookies: available in <strong>40g</strong> (mini) or <strong>100g</strong> (large) sizes</p>
          <p>🟫 Brownies: Mini Bites — <strong>6's ₱120 · 12's ₱220 · 24's ₱420</strong></p>
          <p>📍 Located in <strong>Project 8, Quezon City</strong> — strictly <strong>pre-order only!</strong></p>
        </div>

        {/* CTA */}
        <div className="gallery-cta reveal">
          <p>Ready to order? Send us a message! ♡</p>
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
          >
            Order Now 🛒
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
