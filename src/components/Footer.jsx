import './Footer.css'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* Wave top */}
      {/* Drip top */}
      <div className="footer-wave">
        <svg width="100%" height="70px" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="drips" x="0" y="0" width="140" height="70" patternUnits="userSpaceOnUse">
              <path transform="scale(1.4, 0.7)" fill="var(--pink-light)" d="M0,0 L100,0 L100,10 Q95,10 90,40 Q85,85 75,85 Q65,85 60,40 Q55,10 45,10 Q35,10 30,30 Q25,70 20,70 Q15,70 10,30 Q5,10 0,10 Z" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#drips)" />
        </svg>
      </div>

      <div className="footer-inner section-wrapper">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="TinyBaker PH" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">
            Handcrafted cookies, pastries &amp; sweets — baked with love in the Philippines. ♡
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/Tinybakerph" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/tinybaker_ph" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@tinybaker_ph" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="TikTok">
              <TiktokIcon />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href) }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h4 className="footer-col-title">Our Treats</h4>
          <ul className="footer-links">
            {['Dark Chocolate Cookie', 'Red Velvet Cookie', 'Matcha Cookie', 'Midnight Oreo Cookie', 'Triple Choco Brownies', 'Butter Croissant', 'Almond Croissant', 'Crookie'].map((item) => (
              <li key={item}><a href="#gallery" onClick={(e) => { e.preventDefault(); handleClick('#gallery') }}>{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li><span>📞</span><a href="tel:+639XXXXXXXXX">+63 9XX XXX XXXX</a></li>
            <li><span>💌</span><a href="mailto:hello@tinybakerph.com">hello@tinybakerph.com</a></li>
            <li><span>📍</span><span>Project 8, Quezon City, Metro Manila, Philippines</span></li>
            <li><span>⏰</span><span>Mon–Sat 7AM–7PM</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="section-wrapper footer-bottom-inner">
          <p>© {new Date().getFullYear()} TinyBaker PH. Made with ♡ in the Philippines.</p>
          <p className="footer-tagline-bottom">Baked fresh. Delivered with love. ✨</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
