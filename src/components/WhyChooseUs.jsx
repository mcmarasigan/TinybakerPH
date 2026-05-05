import './WhyChooseUs.css'

const reasons = [
  {
    icon: '🧁',
    title: 'Freshly Baked ♡',
    desc: 'Every order is baked fresh on the day of delivery. No day-old treats here — just warm, just-out-of-the-oven goodness every single time.',
    color: '#FFB6D9',
    delay: '0s',
  },
  {
    icon: '✨',
    title: 'Quality Ingredients',
    desc: 'We use only premium butter, real cocoa, and the finest local ingredients. Because you deserve the very best in every bite.',
    color: '#D4A574',
    delay: '0.1s',
  },
  {
    icon: '💕',
    title: 'Cookie Crew Love',
    desc: 'Each treat is handcrafted with care by our tiny but mighty team. We put our whole heart into every cookie, pastry, and roll.',
    color: '#FF8FC2',
    delay: '0.2s',
  },
  {
    icon: '🎁',
    title: 'Adorable Packaging',
    desc: 'Every order comes dressed to impress. Our cute packaging makes TinyBaker treats the perfect gift for any occasion — or just for yourself!',
    color: '#B8864E',
    delay: '0.3s',
  },
]

/* Decorative cookie doodles */
const DoodleCookie = ({ style }) => (
  <svg viewBox="0 0 80 80" style={style} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="40" r="34" fill="none" stroke="#FFB6D9" strokeWidth="2.5" strokeDasharray="6 4" />
    <circle cx="40" cy="40" r="22" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4 5" />
    <circle cx="27" cy="30" r="4" fill="#FFB6D9" opacity="0.5" />
    <circle cx="52" cy="28" r="3" fill="#D4A574" opacity="0.5" />
    <circle cx="50" cy="52" r="4.5" fill="#FFB6D9" opacity="0.5" />
    <circle cx="30" cy="52" r="3" fill="#D4A574" opacity="0.5" />
  </svg>
)

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us">
      {/* Decorative doodles */}
      <DoodleCookie style={{ position: 'absolute', top: '10%', left: '3%', width: 80, opacity: 0.5 }} />
      <DoodleCookie style={{ position: 'absolute', bottom: '15%', right: '4%', width: 60, opacity: 0.4 }} />
      <DoodleCookie style={{ position: 'absolute', top: '50%', left: '48%', width: 50, opacity: 0.25, transform: 'translateX(-50%)' }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="why-header reveal">
          <div className="badge">💖 Why TinyBaker?</div>
          <h2 className="section-title">Baked Different ✨</h2>
          <p className="section-subtitle">{`Here's what makes us your favourite neighbourhood bakery`}</p>
        </div>

        {/* Cards */}
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="why-card reveal"
              style={{ transitionDelay: r.delay }}
            >
              <div className="why-icon-wrap" style={{ background: r.color + '25', border: `2px solid ${r.color}60` }}>
                <span className="why-icon">{r.icon}</span>
              </div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>

              {/* Decorative bottom line */}
              <div className="why-line" style={{ background: r.color }} />
            </div>
          ))}
        </div>

        {/* Testimonial strip
        <div className="testimonials reveal">
          <h3 className="testi-heading">What our Cookie Crew says ♡</h3>
          <div className="testi-grid">
            {[
              { quote: `"Best cookies I've ever had! So chewy and just the right amount of sweet. Will definitely order again! 🍪"`, name: 'Bea M.', stars: '⭐⭐⭐⭐⭐' },
              { quote: `"The packaging is SO cute, I almost didn't want to open it — but the croissants were too good to resist. ♡"`, name: 'Carla T.', stars: '⭐⭐⭐⭐⭐' },
              { quote: `"Ordered for my sister's birthday and everyone was obsessed. TinyBaker never misses! ✨"`, name: 'Miguel R.', stars: '⭐⭐⭐⭐⭐' },
            ].map((t) => (
              <div key={t.name} className="testi-card">
                <p className="testi-stars">{t.stars}</p>
                <p className="testi-quote">{t.quote}</p>
                <p className="testi-name">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>*/}

      </div>
    </section>
  )
}

export default WhyChooseUs
