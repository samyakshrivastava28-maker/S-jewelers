import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../lib/data';
import { useCart } from '../context/CartContext';

export function Home() {
  const { addToCart } = useCart();
  const trendingProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full bg-[#FAF9F6]">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center relative z-20 mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <p className="text-gray-400 tracking-[0.3em] uppercase text-xs font-semibold mb-6 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-gray-300"></span>
                  S Jewelers 2026
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-[#1c1c1c] leading-[1.05] tracking-tight">
                  Poetry <br />
                  <span className="italic text-gray-500 font-light">&</span> Light.
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#555] text-lg font-light leading-relaxed max-w-md mb-10"
              >
                Discover our latest handcrafted artisanal jewelry. Minimalist designs made from premium, ethically sourced materials to illuminate your everyday style.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  to="/gold" 
                  className="group inline-flex items-center gap-4 text-[#1c1c1c] uppercase tracking-[0.2em] text-xs font-bold hover:text-gold transition-colors"
                >
                  Explore Collection
                  <span className="w-12 h-[1px] bg-[#1c1c1c] group-hover:bg-gold group-hover:w-16 transition-all duration-300 relative">
                    <ArrowRight size={14} className="absolute -top-[6px] -right-1" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Staggered Pinterest Moodboard Style */}
            <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full isolate">
               
               {/* Decorative Circle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] border border-gold/20 rounded-full -z-10" />

               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.1 }}
                 className="absolute top-[10%] left-[5%] w-[45%] h-[65%] shadow-2xl z-10"
               >
                 <img 
                   src="https://img.freepik.com/premium-photo/ladies-jewellery-necklace-picture-realistic_1270398-3621.jpg" 
                   alt="Elegant model" 
                   className="w-full h-full object-cover rounded-t-full"
                   referrerPolicy="no-referrer"
                 />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: -40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="absolute bottom-[5%] right-[5%] w-[40%] h-[55%] shadow-xl z-20"
               >
                 <img 
                   src="https://www.violetandpurple.com/cdn/shop/files/WhatsApp_Image_2026-03-12_at_12.37.13_PM_2.jpg?v=1773299376&width=3840" 
                   alt="Jewelry piece close up" 
                   className="w-full h-full object-cover rounded-b-full"
                   referrerPolicy="no-referrer"
                 />
               </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. MINIMALIST CATEGORY SHOWCASE */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1c1c1c] italic font-light">Curated Edits</h2>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gray-400">Shop by category</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <CategoryPill 
              title="Solid Gold" 
              image="https://www.sasitrends.com/cdn/shop/files/2267D-Elegant-White-Stone-Matte-Gold-Temple-Leaf-Jewellery-Set-With-AD-Accents-And-Minimalistic-Traditional-Aura-Sasitrends.jpg" 
              link="/gold" 
              offset="md:translate-y-0"
            />
            <CategoryPill 
              title="Sterling Silver" 
              image="https://m.media-amazon.com/images/I/91JY9Ey5k8L._AC_UY1100_.jpg" 
              link="/silver" 
              offset="md:translate-y-16"
            />
            <CategoryPill 
              title="Fine Diamonds" 
              image="https://www.gemzlane.in/cdn/shop/files/IMG-20231013-WA0571.jpg" 
              link="/diamond" 
              offset="md:translate-y-8"
            />
          </div>
        </div>
      </section>

      {/* 3. TRENDING / ASYMMETRIC GRID */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#1c1c1c] mb-4">Trending Now</h2>
              <p className="text-gray-500 font-light max-w-md">Our most coveted pieces, loved by clients around the world. Secure yours today.</p>
            </div>
            <Link to="/gold" className="group flex items-center gap-3 text-sm uppercase tracking-widest font-semibold hover:text-gold transition-colors">
              View All <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {trendingProducts.map((product, i) => (
              <div key={product.id} className={`group ${i % 2 === 1 ? 'lg:mt-12' : ''}`}>
                <Link to="/gold" className="block relative aspect-[3/4] overflow-hidden bg-[#EFECE6] mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
                <div className="flex flex-col justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-serif text-[#1c1c1c] mb-1 group-hover:text-gold transition-colors">{product.name}</h3>
                    <p className="text-gray-500 font-light text-sm">₹{product.price.toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="text-xs uppercase tracking-widest font-bold border-b border-[#1c1c1c] pb-1 hover:text-gold hover:border-gold transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATEMENT / BRAND BANNER */}
      <section className="relative py-40 bg-[#1c1c1c]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/jewelryatelier/2000/1000" 
            alt="Studio Workspace" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-8">Handcrafted Perfection</p>
          <h2 className="text-5xl lg:text-7xl font-serif text-white mb-8 italic font-light">Heritage & Craft.</h2>
          <p className="text-gray-400 font-light text-lg mb-12 max-w-xl mx-auto">
            Experience our atelier. Our artisans bring decades of experience to create bespoke, luxury pieces that stand the test of time.
          </p>
          <Link 
            to="/about" 
            className="inline-flex bg-white text-[#1c1c1c] px-10 py-4 uppercase tracking-[0.15em] text-xs font-bold hover:bg-gold hover:text-white transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </section>

    </div>
  );
}

function CategoryPill({ title, image, link, offset }: { title: string; image: string; link: string, offset: string }) {
  return (
    <Link to={link} className={`group block ${offset}`}>
      <div className="relative w-full aspect-[2/3] overflow-hidden mb-6 bg-[#EFECE6] rounded-[2rem] sm:rounded-[4rem]">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 mix-blend-darken"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
        <h3 className="text-2xl font-serif text-[#1c1c1c] italic">{title}</h3>
      </div>
    </Link>
  );
}
