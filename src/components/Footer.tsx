import { Diamond, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Diamond className="text-gold" size={28} />
              <span className="font-serif text-2xl tracking-wide">S Jewelers</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Crafting timeless elegance. An exquisite collection of gold, silver, and diamond jewelry for your precious moments.
            </p>
            <div className="flex items-center gap-4 text-white/60">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Collections</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/gold" className="hover:text-gold transition-colors">Gold Jewelry</Link></li>
              <li><Link to="/silver" className="hover:text-gold transition-colors">Silver Jewelry</Link></li>
              <li><Link to="/diamond" className="hover:text-gold transition-colors">Diamond Jewelry</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-gold" />
                <span>123 Luxury Avenue, Crystal District<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>+91 8305500767</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span>contact@sjewelers.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Newsletter</h3>
            <p className="text-sm text-white/60 mb-4">Subscribe to receive updates on new arrivals and special offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 text-white px-4 py-2 text-sm w-full outline-none focus:border-gold rounded-none"
              />
              <button className="bg-gold text-primary px-4 py-2 text-sm font-medium hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} S Jewelers. All rights reserved.</p>
          <a href="https://28webhub.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold mt-2 md:mt-0 transition-colors">
            Designed by S-Web Hub
          </a>
        </div>
      </div>
    </footer>
  );
}
