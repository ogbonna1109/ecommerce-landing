import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (

    

    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-mark">J</span>
          <span className="navbar__logo-text">jovial</span>
        </a>

        <nav className="navbar__links">
          <Link to="/home" className="navbar__link navbar__link--active">Home</Link>
          <Link to="/shop" className="navbar__link">Shop</Link>
          <Link to="/categories" className="navbar__link">Categories</Link>
          <Link to="/deals" className="navbar__link">Deals</Link>
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/contact" className="navbar__link">Contact</Link>
        </nav>
      

        <div className="navbar__actions">
          <div className="navbar__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search products…" aria-label="Search" />
          </div>

          <button className="navbar__icon-btn" aria-label="Shopping cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="navbar__badge">3</span>
          </button>

          <button className="navbar__icon-btn" aria-label="User profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button className="navbar__hamburger" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
