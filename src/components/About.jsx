import './About.css'

const BakerIllustration = () => (
  <svg viewBox="0 0 280 320" className="baker-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="140" cy="170" r="130" fill="#FFD6EC" opacity="0.5" />

    {/* Body */}
    <ellipse cx="140" cy="240" rx="65" ry="75" fill="#FFFDD0" stroke="#D4A574" strokeWidth="2.5" />

    {/* Apron */}
    <path d="M 100 200 L 110 290 L 170 290 L 180 200 Q 160 215 140 215 Q 120 215 100 200 Z"
      fill="white" stroke="#FFB6D9" strokeWidth="2" />
    <rect x="128" y="195" width="24" height="14" rx="4" fill="white" stroke="#FFB6D9" strokeWidth="2" />

    {/* Apron bow */}
    <path d="M 108 240 Q 95 230 85 240 Q 95 250 108 240 Z" fill="#FFB6D9" />
    <path d="M 172 240 Q 185 230 195 240 Q 185 250 172 240 Z" fill="#FFB6D9" />
    <circle cx="140" cy="240" r="6" fill="#FFB6D9" />
    <path d="M 108 240 L 172 240" stroke="#FFB6D9" strokeWidth="2" />

    {/* Neck */}
    <rect x="128" y="158" width="24" height="28" rx="8" fill="#EDD5B3" />

    {/* Head */}
    <ellipse cx="140" cy="130" rx="52" ry="55" fill="#EDD5B3" stroke="#D4A574" strokeWidth="2" />

    {/* Hair */}
    <path d="M 90 120 Q 88 70 100 58 Q 120 40 140 38 Q 160 40 180 58 Q 192 70 190 120"
      fill="#D4A574" stroke="#B8864E" strokeWidth="2" />
    <ellipse cx="90" cy="120" rx="12" ry="18" fill="#D4A574" stroke="#B8864E" strokeWidth="2" />
    <ellipse cx="190" cy="120" rx="12" ry="18" fill="#D4A574" stroke="#B8864E" strokeWidth="2" />

    {/* Chef hat */}
    <ellipse cx="140" cy="60" rx="48" ry="10" fill="white" stroke="#FFB6D9" strokeWidth="2" />
    <rect x="108" y="15" width="64" height="46" rx="10" fill="white" stroke="#FFB6D9" strokeWidth="2" />
    <ellipse cx="140" cy="16" rx="32" ry="8" fill="white" stroke="#FFB6D9" strokeWidth="2" />

    {/* Eyes */}
    <ellipse cx="124" cy="130" rx="6" ry="7" fill="#3D2B1F" />
    <ellipse cx="156" cy="130" rx="6" ry="7" fill="#3D2B1F" />
    <circle cx="126" cy="128" r="2.5" fill="white" />
    <circle cx="158" cy="128" r="2.5" fill="white" />

    {/* Blush */}
    <ellipse cx="110" cy="145" rx="10" ry="6" fill="#FFB6D9" opacity="0.6" />
    <ellipse cx="170" cy="145" rx="10" ry="6" fill="#FFB6D9" opacity="0.6" />

    {/* Smile */}
    <path d="M 124 150 Q 140 164 156 150" stroke="#3D2B1F" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Arms */}
    <ellipse cx="82" cy="225" rx="18" ry="40" fill="#EDD5B3" stroke="#D4A574" strokeWidth="2" transform="rotate(-20 82 225)" />
    <ellipse cx="198" cy="225" rx="18" ry="40" fill="#EDD5B3" stroke="#D4A574" strokeWidth="2" transform="rotate(20 198 225)" />

    {/* Left hand holding cookie */}
    <circle cx="68" cy="262" r="18" fill="#D4A574" stroke="#B8864E" strokeWidth="2" />
    <circle cx="62" cy="256" r="4" fill="#B8864E" opacity="0.6" />
    <circle cx="76" cy="254" r="3.5" fill="#B8864E" opacity="0.6" />
    <circle cx="74" cy="268" r="3" fill="#B8864E" opacity="0.6" />
    <ellipse cx="63" cy="260" rx="3.5" ry="3.5" fill="#3D2B1F" />
    <ellipse cx="75" cy="260" rx="3.5" ry="3.5" fill="#3D2B1F" />
    <circle cx="64.5" cy="259" r="1.2" fill="white" />
    <circle cx="76.5" cy="259" r="1.2" fill="white" />
    <path d="M 63 265 Q 70 271 77 265" stroke="#3D2B1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />

    {/* Right hand — spatula */}
    <rect x="208" y="255" width="8" height="30" rx="4" fill="#B8864E" />
    <ellipse cx="212" cy="252" rx="14" ry="8" fill="#D4A574" stroke="#B8864E" strokeWidth="1.5" />

    {/* Sprinkle hearts */}
    <text x="30" y="200" fontSize="16" fill="#FFB6D9">♡</text>
    <text x="240" y="180" fontSize="14" fill="#FFB6D9">♡</text>
    <text x="60" y="100" fontSize="12" fill="#D4A574">✨</text>
    <text x="220" y="110" fontSize="12" fill="#D4A574">✨</text>
  </svg>
)

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
              <BakerIllustration />
              {/* Floating labels */}
              <div className="float-label label-1">Made with ♡</div>
              <div className="float-label label-2">Since 2020 ✨</div>
            </div>
          </div>

          {/* Story text */}
          <div className="about-content reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="about-paragraphs">
              <p>
                Hi there! We're <strong>TinyBaker PH</strong> — a small home-based bakery tucked in the heart of the Philippines, baking up joy and sweetness every single day. ♡ What started as a weekend hobby quickly turned into our greatest passion!
              </p>
              <p>
                Every cookie, every pastry, every little treat is handcrafted with the finest ingredients we can find. No preservatives. No shortcuts. Just real butter, real love, and real flavors that make your taste buds do a little happy dance. 🍪✨
              </p>
              <p>
                We believe that the best desserts come straight from the heart — and that's exactly what we pour into every single order. Whether it's a box of cookies for yourself or a gift for someone special, we bake each one like it's going to the most important person in the world.
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
