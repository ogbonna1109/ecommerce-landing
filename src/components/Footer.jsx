import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-mark">L</span>
            <span>Lumière</span>
          </a>
          <p>Premium everyday fashion, curated for the way you actually live and dress.</p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook" className="footer__social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer__social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="footer__social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 4.9c-.8.4-1.7.6-2.6.8a4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1 4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.6 3.7a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.6 4.6 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 19.4a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.1z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer__social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 3v5.6H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.2zM5.3 7.4A2 2 0 1 1 5.3 3.3a2 2 0 0 1 0 4.1zM7 20.4H3.6V9H7v11.4z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="footer__col">
          <h4>Help</h4>
          <a href="#faq">FAQ</a>
          <a href="#shipping">Shipping</a>
          <a href="#returns">Returns</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="mailto:hello@lumiere.com">hello@lumiere.com</a>
          <a href="tel:+18005551234">+1 (800) 555-1234</a>
          <span>128 Market Street, Lagos, NG</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; 2026 Lumière. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
