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
import Login from './Pages/Login/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout.jsx';
import AuthLayout from './Layouts/AuthLayout.jsx';
import Profile from './Pages/profile/Profile.jsx'

function App() {
  return (
    <div className="app">
      
      

      <Routes>
          {/* pages with Navbar and Footer */}
        <Route element={<MainLayout />} >
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<FeaturedProducts />} />
        <Route path="/deals" element={<Banner />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/about" element={<Features />} />
        <Route path="/contact" element={<Newsletter />} />
        </Route>

        {/* pages without Navbar and Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      


      
      
    </div>
  );
}

export default App;
