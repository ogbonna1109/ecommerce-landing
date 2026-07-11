import '../styles/Features.css';

const features = [
  {
    title: 'Free Shipping',
    desc: 'On all orders over $50, delivered right to your door.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="7" width="15" height="10" rx="1" />
        <path d="M16 10h4l3 3v4h-7z" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: 'Secure Payment',
    desc: '256-bit encryption keeps every transaction protected.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="10" width="18" height="11" rx="2" />
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
      </svg>
    ),
  },
  {
    title: 'Easy Returns',
    desc: '30-day hassle-free returns on unworn items.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    desc: 'Real humans ready to help, any time you need.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a7 7 0 0 0-7 7v4a3 3 0 0 0 3 3h1v-7H5v-0a7 7 0 0 1 14 0v0h-4v7h1a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
];

function Features() {
  return (
    <section id="about" className="features section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Why Us</span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Everything we do is built around a smoother shopping experience.</p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div className={`feature-card reveal reveal-delay-${i + 1}`} key={f.title}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
