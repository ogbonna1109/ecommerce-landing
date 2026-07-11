import '../styles/BestSellers.css';

const bestSellers = [
  { name: 'Everyday Canvas Sneakers', price: 68.0, rating: 5, seed: 'b1' },
  { name: 'Cropped Puffer Jacket', price: 95.0, rating: 4, seed: 'b2' },
  { name: 'Slim Fit Chinos', price: 52.0, rating: 5, seed: 'b3' },
  { name: 'Gold Layer Necklace', price: 38.0, rating: 4, seed: 'b4' },
];

function BestSellers() {
  return (
    <section className="bestsellers section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Trending</span>
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">The pieces our customers keep coming back for.</p>
        </div>

        <div className="bestseller-grid">
          {bestSellers.map((p, i) => (
            <article className={`bestseller-card reveal reveal-delay-${i + 1}`} key={p.name}>
              <div className="bestseller-card__image-wrap">
                <img src={`https://picsum.photos/seed/${p.seed}/380/420`} alt={p.name} />
              </div>
              <h3>{p.name}</h3>
              <div className="bestseller-card__meta">
                <span className="bestseller-card__price">${p.price.toFixed(2)}</span>
                <span className="bestseller-card__rating">
                  ★ {p.rating}.0
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
