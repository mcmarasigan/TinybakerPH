import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Scattered deco */}
      <span className="deco-float deco-f1">✨</span>
      <span className="deco-float deco-f2">♡</span>
      <span className="deco-float deco-f3">🌸</span>
      <span className="deco-float deco-f4">⭐</span>
      <span className="deco-float deco-f5">✨</span>
      <span className="deco-float deco-f6">♡</span>

      <div className="hero-inner section-wrapper">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="badge" style={{ animationDelay: '0s' }}>
            🍪 Handcrafted with Love
          </div>

          <h1 className="hero-heading">TinyBaker PH</h1>

          <p className="hero-tagline">
            Freshly baked cookies, pastries &amp; sweets — made with the finest ingredients and a whole lot of ♡
          </p>

          <div className="hero-actions">
            <a href="#gallery" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' }) }}>
              🛒 Shop Now
            </a>
            <a href="#about" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }) }}>
              Our Story ✨
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">30+</span>
              <span className="stat-label">Yummy Items</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Baked Fresh</span>
            </div>
          </div>
        </div>

        {/* Right: Kawaii Product Mascots */}
        <div className="hero-mascots">
          {/* Glow ring */}
          <div className="mascot-ring" />

          {/* Centre — Crookie */}
          <div className="mascot-main">
            <img
              src="/hero-crookie.png"
              alt="Crookie"
              className="mascot-img mascot-img-main"
            />
          </div>

          {/* Top right — Cookie */}
          <div className="mascot-secondary mascot-top-right">
            <img
              src="/hero-cookie.png"
              alt="Cookie"
              className="mascot-img mascot-img-sm"
            />
          </div>

          {/* Bottom left — Brownie */}
          <div className="mascot-secondary mascot-bottom-left">
            <img
              src="/hero-brownie.png"
              alt="Brownie"
              className="mascot-img mascot-img-md"
            />
          </div>

          {/* Bottom right — Matcha Crookie */}
          <div className="mascot-secondary mascot-bottom-right">
            <img
              src="/hero-matcha-crookie.png"
              alt="Matcha Crookie"
              className="mascot-img mascot-img-sm"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <span>Scroll down</span>
        <div className="scroll-dot" />
      </div>
    </section>
  )
}

export default Hero
