import { useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { getProductsByCategory } from '../lib/data';
import { useCart } from '../context/CartContext';

interface ProductPageProps {
  category: 'gold' | 'silver' | 'diamond';
}

const CATEGORY_DATA = {
  gold: {
    title: 'The Gold Collection',
    description: 'Radiant warmth and enduring value. Explore our masterpieces crafted in 18k and 24k gold.',
    headerImg: 'https://jdschoolofdesign.b-cdn.net/wp-content/uploads/2024/06/The-Timeless-Allure-of-Gold-Jewellery-Design-Trends-techniques-and-tradition-1.jpg'
  },
  silver: {
    title: 'The Silver Collection',
    description: 'Understated elegance meets contemporary design in our sterling and oxidized silver pieces.',
    headerImg: 'https://www.sasitrends.com/cdn/shop/files/2135E-pretty-pink-floral-ad-jewellery-set-rhodium-silver-plated-with-delicate-details-and-chic-ethnic-glow-Sasitrends.jpg?v=1747303520&width=1080'
  },
  diamond: {
    title: 'The Diamond Collection',
    description: 'Brilliance that lasts forever. Discover our certified, flawlessly cut diamond creations.',
    headerImg: 'https://www.kalashajewels.com/images/Diamond%20Thumbnails.jpg'
  }
};

export function ProductPage({ category }: ProductPageProps) {
  const products = useMemo(() => getProductsByCategory(category), [category]);
  const data = CATEGORY_DATA[category];
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Category Header */}
      <div className="relative h-[400px] bg-black mb-16">
        <img 
          src={data.headerImg} 
          alt={data.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            key={data.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-4"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            key={data.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-2xl font-light text-lg"
          >
            {data.description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay Add to Cart button */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-primary text-white py-3 px-4 font-medium uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-gold transition-colors"
                  >
                    <ShoppingBag size={16} /> Add to Selection
                  </button>
                </div>
              </div>
              
              <div className="text-center flex-grow">
                <h3 className="font-serif text-2xl text-primary mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-primary/70 font-medium">₹{product.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
