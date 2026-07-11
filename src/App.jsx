import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Banner from './components/Banner';
import BestSellers from './components/BestSellers';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <BestSellers />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
