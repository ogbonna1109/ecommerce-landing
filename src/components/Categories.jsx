import '../styles/Categories.css';

const categories = [
  { name: "Men's Fashion", seed: 'cat-men', count: '320 items' },
  { name: "Women's Fashion", seed: 'cat-women', count: '410 items' },
  { name: 'Shoes', seed: 'cat-shoes', count: '180 items' },
  { name: 'Electronics', seed: 'cat-electronics', count: '96 items' },
  { name: 'Accessories', seed: 'cat-accessories', count: '212 items' },
  { name: 'Beauty', seed: 'cat-beauty', count: '150 items' },
];

function Categories() {
  return (
    <section id="categories" className="categories section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Browse</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Six curated departments, each stocked with new arrivals every week.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <a
              href="#shop"
              className={`category-card reveal reveal-delay-${(i % 4) + 1}`}
              key={cat.name}
            >
              <div className="category-card__image-wrap">
                <img src={`https://picsum.photos/seed/${cat.seed}/400/420`} alt={cat.name} />
              </div>
              <div className="category-card__info">
                <h3>{cat.name}</h3>
                <span>{cat.count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
