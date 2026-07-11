# Lumière — E-Commerce Landing Page

A static, fully responsive React + CSS e-commerce landing page. No hooks,
no event handlers, no data fetching — pure JSX structure and hand-written CSS.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Structure

```
src/
├── components/       10 section components (Navbar, Hero, Categories, ...)
├── styles/           one CSS file per component + App.css for global tokens
├── App.jsx           assembles all sections
└── main.jsx          Vite/React entry point
```

## Notes

- All colors, spacing, and radii are defined as CSS variables in `src/styles/App.css`.
- Product/category images use `picsum.photos` placeholder URLs — swap the `src`
  in each component for your real product photography.
- Icons are inline SVG (no icon library dependency).
- Scroll-reveal, hover lifts, image zoom, animated nav underline, sticky nav,
  glassmorphism hero, and gradient buttons are all done in pure CSS
  (see `.reveal` keyframes and per-component hover rules).
- The mobile hamburger button is display-only, as specified — wire it up to
  a `useState` toggle if you later want it functional.
