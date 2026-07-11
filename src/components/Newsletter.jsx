import '../styles/Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter__inner reveal">
        <div className="newsletter__text">
          <h2>Stay in the loop</h2>
          <p>Subscribe for early access to sales, new drops, and styling tips — no spam, ever.</p>
        </div>
        <form className="newsletter__form">
          <input type="email" placeholder="Enter your email address" aria-label="Email address" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
