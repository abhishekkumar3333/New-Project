// App.js

import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import BannerSlider from './Components/banner/BannerSlider';
import About from './Components/about/About';
import Service from './Components/service/Service';
import Studies from './Components/study/Studies';
import FeedBack from './Components/feedback/FeedBack';
import Blog from './Components/blog/Blog';
import Login from './pages/auth/Login';
import Varify from './pages/auth/Varify';
import AllProducts from './pages/product/AllProducts';
import { ProductProvider } from './pages/context/ProductContext';
import ProductDetails from './pages/product/ShowProductsDetails';
import PortFolio from './Components/portfolio/PortFolio';
import Cart from './pages/product/cart/Cart';

function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
     {!isLogin && (
        <>
          <Navbar />
        </>
      )}
      <ProductProvider>

  
      <Routes>
               <Route path="/" element={<Varify><Home /></Varify>} />
               <Route path="/banner" element={<Varify><BannerSlider /></Varify>} />
               <Route path="/about" element={<Varify><About /></Varify>} />
               <Route path="/service" element={<Varify><Service /></Varify>} />
               <Route path="/study" element={<Varify><Studies /></Varify>} />
               <Route path="/feedback" element={<Varify><FeedBack /></Varify>} />
               <Route path="/blog" element={<Varify><Blog /></Varify>} />
               <Route path="/allproducts" element={<Varify><AllProducts /></Varify>} />
               <Route path="/portfolio" element={<Varify><PortFolio /></Varify>} />
               <Route path="/cart" element={<Varify><Cart /></Varify>} />
               
               <Route path="/login" element={<Login />} />
               <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
          </ProductProvider>

      {!isLogin && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
