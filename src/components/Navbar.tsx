import { Link, useLocation } from 'react-router-dom';
import { Diamond, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import clsx from 'clsx';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, items } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gold', path: '/gold' },
    { name: 'Silver', path: '/silver' },
    { name: 'Diamond', path: '/diamond' },
    { name: 'Contact', path: '/contact' },
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-40 w-full bg-bg/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <Diamond className="text-gold" size={28} />
            <span className="font-serif text-2xl font-medium tracking-wide">S Jewelers</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-medium tracking-wider uppercase transition-colors hover:text-gold",
                  location.pathname === link.path ? "text-gold" : "text-primary/70"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <div className="flex items-center">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-primary hover:text-gold transition-colors"
            >
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-gold rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={clsx("md:hidden absolute w-full bg-white border-b shadow-lg transition-all overflow-hidden", isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0 border-transparent")}>
        <div className="flex flex-col px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "block text-lg font-serif transition-colors",
                location.pathname === link.path ? "text-gold" : "text-primary hover:text-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
