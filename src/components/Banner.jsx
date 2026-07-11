import '../styles/Banner.css';

function Banner() {
  return (
    <section id="deals" className="promo-banner">
      <div className="promo-banner__pattern"></div>
      <div className="container promo-banner__inner reveal">
        <span className="promo-banner__eyebrow">Limited Time</span>
        <h2 className="promo-banner__title">Summer Sale Up To 50% Off</h2>
        <p className="promo-banner__text">
          Refresh your wardrobe with our biggest sale of the season.
          New markdowns added daily — while stocks last.
        </p>
        <a href="#shop" className="btn btn-accent">Shop Sale</a>
      </div>
    </section>
  );
}

export default Banner;
