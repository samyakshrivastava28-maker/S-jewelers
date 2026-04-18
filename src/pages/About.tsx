import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-bg pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/10 transform rotate-3 -z-10" />
            <img 
              src="https://antdisplay.com/media/magefan_blog/jewelry_shop_2__22.png" 
              alt="Jewelry crafting" 
              className="w-full h-auto aspect-[4/5] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-gold uppercase tracking-[0.2em] font-medium text-sm mb-4">Our Heritage</h4>
            <h1 className="text-5xl font-serif mb-8 text-primary leading-tight">
              A Legacy of <br/> Brilliance & Tradition
            </h1>
            
            <div className="space-y-6 text-primary/70 leading-relaxed font-light text-lg">
              <p>
                Founded on the principles of unparalleled craftsmanship and absolute integrity, S Jewelers has been the destination of choice for clients seeking pieces of extraordinary beauty.
              </p>
              <p>
                From the drawing board to the final polish, our artisans handle precious metals and gemstones with reverence. Each piece in our Gold, Silver, and Diamond collections is curated to offer you nothing short of perfection. 
              </p>
              <p>
                We believe that fine jewelry celebrates life's most precious moments. Let us be part of your story, offering you an elevated experience that seamlessly blends heritage with modern elegance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-black/10 pt-8">
              <div>
                <h5 className="text-3xl font-serif text-primary mb-2">10+</h5>
                <p className="text-xs uppercase tracking-wider text-primary/60 font-medium">Years of Trust</p>
              </div>
              <div>
                <h5 className="text-3xl font-serif text-primary mb-2">100%</h5>
                <p className="text-xs uppercase tracking-wider text-primary/60 font-medium">Certified Gems</p>
              </div>
              <div>
                <h5 className="text-3xl font-serif text-primary mb-2">5k+</h5>
                <p className="text-xs uppercase tracking-wider text-primary/60 font-medium">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
