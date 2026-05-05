import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home',    label: 'Home' },
    { href: '#about',   label: 'About' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#why-us',  label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}>
          <img src="/logo.png" alt="TinyBaker PH" className="navbar-logo-icon" />
          <span className="logo-text">TinyBaker <span className="logo-ph">PH</span></span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar-cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
        >
          Order Now 🛒
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
        >
          Order Now 🛒
        </a>
      </div>
    </nav>
  )
}

export default Navbar
