import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      {/* Wave top */}
      <div className="about-wave-top">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="section-wrapper">
        {/* Header */}
        <div className="about-header reveal">
          <div className="badge">✨ Our Sweet Story</div>
          <h2 className="section-title">About TinyBaker PH</h2>
          <p className="section-subtitle">Born from a love of baking and a dream to share happiness, one treat at a time.</p>
        </div>

        {/* Content grid */}
        <div className="about-grid">
          {/* Illustration */}
          <div className="about-illustration reveal">
            <div className="illustration-card">
              {/* Real TinyBaker PH logo — floating with glow */}
              <img
                src="/logo.png"
                alt="TinyBaker PH"
                className="about-logo-img"
              />
              {/* Floating labels */}
              <div className="float-label label-1">Made with ♡</div>
              <div className="float-label label-2">Since 2019 ✨</div>
            </div>
          </div>

          {/* Story text */}
          <div className="about-content reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="about-paragraphs">
              <p>
                Hi there! We're <strong>TinyBaker PH</strong> — a small home-based bakery born right in the middle of the 2019 pandemic. When the world slowed down and everyone was stuck at home, we picked up a whisk and never put it down. ♡ What started as a way to cope and create quickly turned into our greatest passion!
              </p>
              <p>
                Every cookie, brownie, croissant, and crookie is handcrafted with the finest ingredients we can find. No preservatives. No shortcuts. Just real butter, real love, and real flavors that make your taste buds do a little happy dance. 🍪✨
              </p>
              <p>
                From our tiny kitchen in <strong>Project 8, Quezon City</strong>, we bake everything to order — strictly pre-order, so every treat arrives at its freshest. Whether it's a box of cookies for yourself or a gift for someone special, we bake each one like it's going to the most important person in the world.
              </p>
            </div>

            {/* Mission */}
            <div className="mission-card">
              <div className="mission-icon">🎀</div>
              <div className="mission-text">
                <h3>Our Mission</h3>
                <p>To spread sweetness and joy through thoughtfully crafted baked goods — treating every customer like family and every order like a love letter wrapped in parchment paper.</p>
              </div>
            </div>

            {/* Values */}
            <div className="about-values">
              {[
                { icon: '🧈', label: 'Real Butter Only' },
                { icon: '💕', label: 'Made with Love' },
                { icon: '🌿', label: 'Fresh Ingredients' },
                { icon: '📦', label: 'Cute Packaging' },
              ].map((v) => (
                <div key={v.label} className="value-chip">
                  <span>{v.icon}</span>
                  <span>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="about-wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default About
