import { useState } from 'react'
import './Contact.css'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      {/* Wave top */}
      <div className="contact-wave-top">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Decorative floats */}
      <span className="contact-deco d1">♡</span>
      <span className="contact-deco d2">✨</span>
      <span className="contact-deco d3">🍪</span>
      <span className="contact-deco d4">♡</span>

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="contact-header reveal">
          <div className="badge">📬 Get in Touch</div>
          <h2 className="section-title">Let's Bake Something Together ♡</h2>
          <p className="section-subtitle">Have a custom order? Questions? Or just want to say hi? We'd love to hear from you!</p>
        </div>

        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info reveal">
            {/* Phone */}
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h3>Call / Text / Viber</h3>
                <a href="tel:+639XXXXXXXXX" className="info-link">+63 9XX XXX XXXX</a>
              </div>
            </div>

            {/* Email */}
            <div className="info-card">
              <div className="info-icon">💌</div>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:hello@tinybakerph.com" className="info-link">hello@tinybakerph.com</a>
              </div>
            </div>

            {/* Location */}
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h3>Based in</h3>
                <p className="info-text">Metro Manila, Philippines 🇵🇭<br />Delivering nationwide via Lalamove / JRS</p>
              </div>
            </div>

            {/* Hours 
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div>
                <h3>Baking Hours</h3>
                <p className="info-text">Mon–Sat: 7AM – 7PM<br />Sun: 8AM – 2PM (limited slots)</p>
              </div>
            </div>*/}

            {/* Socials */}
            <div className="social-section">
              <h3 className="social-heading">Find us online ♡</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/Tinybakerph" target="_blank" rel="noreferrer" className="social-btn fb" aria-label="Facebook">
                  <FacebookIcon />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/tinybaker_ph" target="_blank" rel="noreferrer" className="social-btn ig" aria-label="Instagram">
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@tinybaker_ph" target="_blank" rel="noreferrer" className="social-btn tt" aria-label="TikTok">
                  <TiktokIcon />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="form-card">
              <h3 className="form-title">Send us a Sweet Message 🍰</h3>

              {submitted ? (
                <div className="success-message">
                  <span className="success-icon">🎉</span>
                  <h4>Message Sent!</h4>
                  <p>Thank you! We'll get back to you within 24 hours. ♡</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name ✨</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Maria Santos"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address 💌</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message ♡</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your order, custom requests, or just say hi!"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message 🍪
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
