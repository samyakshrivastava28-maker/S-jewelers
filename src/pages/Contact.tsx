import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-primary mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary/70 font-light text-lg max-w-2xl mx-auto"
          >
            We are here to assist you with any inquiries regarding our collections, custom designs, or your recent orders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 shadow-sm border border-black/5"
          >
            <h3 className="text-2xl font-serif mb-8 text-primary">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone / WhatsApp</h4>
                  <p className="text-primary/60 font-light">+91 8305500767</p>
                  <p className="text-sm mt-1 text-primary/50">Mon-Fri from 9am to 6pm.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Email</h4>
                  <p className="text-primary/60 font-light">contact@sjewelers.com</p>
                  <p className="text-sm mt-1 text-primary/50">Our team will reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Boutique</h4>
                  <p className="text-primary/60 font-light">
                    123 Luxury Avenue, Crystal District<br/>
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full shrink-0">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Social</h4>
                  <a href="#" className="text-primary/60 font-light hover:text-gold transition-colors">@sjewelers_official</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-primary text-white p-10 shadow-xl"
          >
            <h3 className="text-2xl font-serif mb-8 text-white">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="h-[300px] flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <Mail size={32} className="text-primary" />
                </div>
                <h4 className="text-2xl font-serif mb-2">Message Sent</h4>
                <p className="text-white/70 font-light">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 border-b border-gold text-gold pb-1 hover:text-white hover:border-white transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-white/70 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-white/70 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-white/70 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 outline-none focus:border-gold transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gold text-primary py-4 font-semibold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
