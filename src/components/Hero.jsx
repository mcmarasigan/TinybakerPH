import './Hero.css'

/* Inline SVG cookie characters */
const CookieFace = ({ className = '', style = {} }) => (
  <svg viewBox="0 0 120 120" className={`mascot ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="52" fill="#D4A574" stroke="#B8864E" strokeWidth="2.5" />
    <circle cx="35" cy="40" r="6" fill="#B8864E" opacity="0.6" />
    <circle cx="80" cy="35" r="4.5" fill="#B8864E" opacity="0.6" />
    <circle cx="70" cy="75" r="5.5" fill="#B8864E" opacity="0.6" />
    <circle cx="40" cy="72" r="4" fill="#B8864E" opacity="0.6" />
    <circle cx="88" cy="60" r="5" fill="#B8864E" opacity="0.6" />
    <circle cx="55" cy="88" r="3.5" fill="#B8864E" opacity="0.6" />
    <ellipse cx="45" cy="55" rx="5.5" ry="6" fill="#3D2B1F" />
    <ellipse cx="75" cy="55" rx="5.5" ry="6" fill="#3D2B1F" />
    <circle cx="47" cy="53" r="2" fill="white" />
    <circle cx="77" cy="53" r="2" fill="white" />
    <ellipse cx="35" cy="68" rx="8" ry="5" fill="#FFB6D9" opacity="0.55" />
    <ellipse cx="85" cy="68" rx="8" ry="5" fill="#FFB6D9" opacity="0.55" />
    <path d="M 45 70 Q 60 84 75 70" stroke="#3D2B1F" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
)

const MacaronFace = ({ className = '', style = {} }) => (
  <svg viewBox="0 0 120 140" className={`mascot ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="40" rx="46" ry="32" fill="#FFB6D9" stroke="#FF8FC2" strokeWidth="2" />
    <rect x="14" y="60" width="92" height="20" fill="#FFFDD0" />
    <ellipse cx="60" cy="100" rx="46" ry="32" fill="#FFD6EC" stroke="#FF8FC2" strokeWidth="2" />
    <ellipse cx="60" cy="62" rx="50" ry="9" fill="#FF8FC2" opacity="0.35" />
    <ellipse cx="60" cy="78" rx="50" ry="9" fill="#FF8FC2" opacity="0.35" />
    <ellipse cx="48" cy="38" rx="4.5" ry="5" fill="#3D2B1F" />
    <ellipse cx="72" cy="38" rx="4.5" ry="5" fill="#3D2B1F" />
    <circle cx="50" cy="36" r="1.8" fill="white" />
    <circle cx="74" cy="36" r="1.8" fill="white" />
    <ellipse cx="37" cy="46" rx="6" ry="4" fill="#FF8FC2" opacity="0.5" />
    <ellipse cx="83" cy="46" rx="6" ry="4" fill="#FF8FC2" opacity="0.5" />
    <path d="M 47 50 Q 60 62 73 50" stroke="#3D2B1F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
)

const CroissantFace = ({ className = '', style = {} }) => (
  <svg viewBox="0 0 140 110" className={`mascot ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 55 Q 10 20 45 15 Q 70 10 95 15 Q 130 20 120 55 Q 115 80 100 90 Q 70 105 40 90 Q 25 80 20 55 Z"
      fill="#D4A574" stroke="#B8864E" strokeWidth="2" />
    <path d="M 30 50 Q 70 30 110 50" stroke="#B8864E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M 25 62 Q 70 42 115 62" stroke="#B8864E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M 20 55 Q 5 35 15 20 Q 25 30 30 45 Z" fill="#C8935A" stroke="#B8864E" strokeWidth="1.5" />
    <path d="M 120 55 Q 135 35 125 20 Q 115 30 110 45 Z" fill="#C8935A" stroke="#B8864E" strokeWidth="1.5" />
    <ellipse cx="55" cy="52" rx="5" ry="5.5" fill="#3D2B1F" />
    <ellipse cx="85" cy="52" rx="5" ry="5.5" fill="#3D2B1F" />
    <circle cx="57" cy="50" r="2" fill="white" />
    <circle cx="87" cy="50" r="2" fill="white" />
    <ellipse cx="42" cy="64" rx="7" ry="4.5" fill="#FFB6D9" opacity="0.55" />
    <ellipse cx="98" cy="64" rx="7" ry="4.5" fill="#FFB6D9" opacity="0.55" />
    <path d="M 55 66 Q 70 78 85 66" stroke="#3D2B1F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
)

const DonutFace = ({ className = '', style = {} }) => (
  <svg viewBox="0 0 120 120" className={`mascot ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
    {/* Donut ring */}
    <circle cx="60" cy="60" r="50" fill="#FFB6D9" stroke="#FF8FC2" strokeWidth="2.5" />
    {/* Icing drip */}
    <path d="M 20 50 Q 40 38 60 42 Q 80 38 100 50 Q 95 70 60 72 Q 25 70 20 50 Z" fill="#FFFDD0" />
    <circle cx="60" cy="60" r="20" fill="white" stroke="#FFD6EC" strokeWidth="2" />
    {/* Sprinkles */}
    <rect x="35" y="38" width="8" height="3" rx="1.5" fill="#D4A574" transform="rotate(-30 35 38)" />
    <rect x="72" y="35" width="8" height="3" rx="1.5" fill="#FF8FC2" transform="rotate(20 72 35)" />
    <rect x="50" y="32" width="6" height="2.5" rx="1.2" fill="#B8864E" transform="rotate(10 50 32)" />
    <rect x="82" y="52" width="7" height="2.5" rx="1.2" fill="#FFB6D9" transform="rotate(-15 82 52)" />
    <rect x="30" y="55" width="6" height="2.5" rx="1.2" fill="#D4A574" transform="rotate(25 30 55)" />
    {/* Eyes */}
    <ellipse cx="50" cy="56" rx="4.5" ry="5" fill="#3D2B1F" />
    <ellipse cx="70" cy="56" rx="4.5" ry="5" fill="#3D2B1F" />
    <circle cx="51.5" cy="54" r="1.8" fill="white" />
    <circle cx="71.5" cy="54" r="1.8" fill="white" />
    {/* Blush */}
    <ellipse cx="40" cy="66" rx="7" ry="4.5" fill="#FF8FC2" opacity="0.55" />
    <ellipse cx="80" cy="66" rx="7" ry="4.5" fill="#FF8FC2" opacity="0.55" />
    {/* Smile */}
    <path d="M 49 68 Q 60 78 71 68" stroke="#3D2B1F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
)

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

          <h1 className="hero-heading">
            <span className="heading-tiny">tiny</span>
            <span className="heading-baker">Baker</span>
            <span className="heading-ph"> PH</span>
          </h1>

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

        {/* Right: Animated Mascots */}
        <div className="hero-mascots">
          {/* Glow ring */}
          <div className="mascot-ring" />

          {/* Main big cookie */}
          <div className="mascot-main">
            <CookieFace className="mascot-cookie-main" />
          </div>

          {/* Top right — macaron */}
          <div className="mascot-secondary mascot-top-right">
            <MacaronFace />
          </div>

          {/* Bottom left — croissant */}
          <div className="mascot-secondary mascot-bottom-left">
            <CroissantFace />
          </div>

          {/* Bottom right — donut (bonus!) */}
          <div className="mascot-secondary mascot-bottom-right">
            <DonutFace />
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
