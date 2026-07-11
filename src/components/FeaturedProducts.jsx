import '../styles/FeaturedProducts.css';

const products = [
  { name: 'Oversized Wool Coat', category: "Women's Fashion", price: 89.0, old: 130.0, rating: 5, seed: 'p1' },
  { name: 'Classic Denim Jacket', category: "Men's Fashion", price: 64.0, old: 90.0, rating: 4, seed: 'p2' },
  { name: 'Leather Chelsea Boots', category: 'Shoes', price: 112.0, old: 150.0, rating: 5, seed: 'p3' },
  { name: 'Wireless Noise-Cancel Headphones', category: 'Electronics', price: 79.0, old: 99.0, rating: 4, seed: 'p4' },
  { name: 'Minimalist Steel Watch', category: 'Accessories', price: 58.0, old: 75.0, rating: 5, seed: 'p5' },
  { name: 'Hydrating Serum Set', category: 'Beauty', price: 34.0, old: 48.0, rating: 4, seed: 'p6' },
  { name: 'Linen Blend Shirt', category: "Men's Fashion", price: 42.0, old: 60.0, rating: 4, seed: 'p7' },
  { name: 'Pleated Midi Skirt', category: "Women's Fashion", price: 55.0, old: 78.0, rating: 5, seed: 'p8' },
];

function Stars({ rating }) {
  return (
    <div className="product-card__rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'star star--filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function FeaturedProducts() {
  return (
    <section id="shop" className="featured section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Just In</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Hand-picked pieces our editors are wearing this month.
          </p>
        </div>

        <div className="product-grid">
          {products.map((p, i) => (
            <article className={`product-card reveal reveal-delay-${(i % 4) + 1}`} key={p.name}>
              <div className="product-card__image-wrap">
                <img src={`https://picsum.photos/seed/${p.seed}/400/460`} alt={p.name} />
                <button className="product-card__heart" aria-label="Add to favorites">
                  <HeartIcon />
                </button>
                <span className="product-card__discount">
                  -{Math.round(((p.old - p.price) / p.old) * 100)}%
                </span>
              </div>
              <div className="product-card__body">
                <span className="product-card__category">{p.category}</span>
                <h3 className="product-card__title">{p.name}</h3>
                <Stars rating={p.rating} />
                <div className="product-card__prices">
                  <span className="product-card__price">${p.price.toFixed(2)}</span>
                  <span className="product-card__old-price">${p.old.toFixed(2)}</span>
                </div>
                <button className="product-card__cta">
                  <CartIcon />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
