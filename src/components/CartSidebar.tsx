import { ShoppingBag, X, Plus, Minus, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '8305500767';

export function CartSidebar() {
  const { isCartOpen, toggleCart, items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "Hello S Jewelers, I would like to book the following items:\n\n";
    items.forEach(item => {
      message += `• ${item.name} (${item.quantity}x) - ₹${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\nTotal Estimated Checkout: ₹${totalPrice.toLocaleString()}\n\nPlease let me know the final availability and total to proceed. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // In a real app we might clearCart() after successful payment, 
    // but here we just redirect to whatsapp.
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-serif text-2xl flex items-center gap-2">
            <ShoppingBag className="text-gold" />
            Your Selection
          </h2>
          <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <p>Your jewelry selection is empty.</p>
              <button 
                onClick={toggleCart}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" referrerPolicy="no-referrer" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-medium">₹{item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 bg-gray-50 border rounded-full px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-gold transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-gold transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="bg-gray-50 p-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-serif text-2xl font-medium">₹{totalPrice.toLocaleString()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#25D366] text-white py-4 rounded-full font-medium hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Ask Jewelers on WhatsApp <Send size={18} />
            </button>
            <p className="text-xs text-center text-gray-500 mt-4 px-4 text-balance">
              By proceeding, you will be redirected to WhatsApp to finalize your booking directly with our staff.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
