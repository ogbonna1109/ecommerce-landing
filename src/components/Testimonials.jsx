import '../styles/Testimonials.css';

const testimonials = [
  {
    name: 'Amara Okafor',
    role: 'Verified Buyer',
    rating: 5,
    review: 'The quality completely exceeded my expectations. Fast shipping and the fit was perfect. This is now my go-to store for everyday wear.',
    seed: 'user1',
  },
  {
    name: 'Daniel Reyes',
    role: 'Verified Buyer',
    rating: 5,
    review: 'Customer support helped me swap a size within minutes. Genuinely the easiest return process I have dealt with online.',
    seed: 'user2',
  },
  {
    name: 'Sophie Laurent',
    role: 'Verified Buyer',
    rating: 4,
    review: 'Love the packaging and the little thank-you note. The jacket I ordered looks even better in person than in photos.',
    seed: 'user3',
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">Real words from real customers who shop with us every season.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <figure className={`testimonial-card reveal reveal-delay-${i + 1}`} key={t.name}>
              <div className="testimonial-card__stars">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <blockquote>&ldquo;{t.review}&rdquo;</blockquote>
              <figcaption>
                <img src={`https://picsum.photos/seed/${t.seed}/80/80`} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
