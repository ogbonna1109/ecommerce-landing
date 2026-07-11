import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--1"></div>
      <div className="hero__glow hero__glow--2"></div>

      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="hero__tag">New Season · 2026 Edit</span>
          <h1 className="hero__title">
            Discover the <em>Latest</em><br />Fashion Collection
          </h1>
          <p className="hero__text">
            Curated pieces for every wardrobe — from everyday staples to
            statement looks. Quality fabrics, honest prices, delivered fast.
          </p>
          <div className="hero__cta">
            <a href="#shop" className="btn btn-primary">Shop Now</a>
            <a href="#categories" className="btn btn-secondary">Explore Collection</a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>120k+</strong>
              <span>Happy customers</span>
            </div>
            <div className="hero__stat">
              <strong>4.9/5</strong>
              <span>Average rating</span>
            </div>
            <div className="hero__stat">
              <strong>48h</strong>
              <span>Fast delivery</span>
            </div>
          </div>
        </div>

        <div className="hero__visual reveal reveal-delay-2">
          <div className="hero__glass-card">
            <img
              src="https://picsum.photos/seed/lumiere-hero/640/760"
              alt="Model wearing the latest fashion collection"
              className="hero__image"
            />
            <div className="hero__float-card hero__float-card--price">
              <span className="hero__float-label">Starting at</span>
              <strong>$39.00</strong>
            </div>
            <div className="hero__float-card hero__float-card--rating">
              <span>★★★★★</span>
              <p>Loved by 4,200+ shoppers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
