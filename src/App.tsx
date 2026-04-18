import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProductPage } from './pages/ProductPage';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gold" element={<ProductPage category="gold" />} />
            <Route path="silver" element={<ProductPage category="silver" />} />
            <Route path="diamond" element={<ProductPage category="diamond" />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}


