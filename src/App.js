import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import CustomCakes from './pages/CustomCakes';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="cakes" element={<CustomCakes />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-success" element={<OrderSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
export default App;