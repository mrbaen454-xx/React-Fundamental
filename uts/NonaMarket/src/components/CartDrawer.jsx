import { X, ShoppingCart, Trash2, Plus, Minus, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemove, 
  formatPrice 
}) => {
  const [checkoutDemo, setCheckoutDemo] = useState(false);

  // Calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-slate-deep border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-sand-warm" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-sand-warm">Shopping Cart</h2>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-white/30" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-sand-warm mb-1">Your cart is empty</h3>
                <p className="text-sm text-white/50">Looks like you haven't added anything yet.</p>
              </div>
              <button 
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-blue-steel text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 group">
                  
                  {/* Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-slate-800">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-medium text-white/90 text-sm line-clamp-2">{item.product.name}</h4>
                      <button 
                        onClick={() => onRemove(item.product.id)}
                        aria-label="Remove item"
                        className="p-1.5 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <p className="text-sand-warm font-bold text-sm mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-1 border border-white/10">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-6 h-6 flex items-center justify-center rounded bg-white/5 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          aria-label="Increase quantity"
                          disabled={item.quantity >= item.product.stock}
                          className="w-6 h-6 flex items-center justify-center rounded bg-white/5 text-white/70 hover:bg-white/20 hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white/70"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Item Subtotal */}
                      <span className="text-xs font-medium text-white/60 text-right">
                        Subtotal: <br className="sm:hidden" />
                        <span className="text-white/90">{formatPrice(item.product.price * item.quantity)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-900/50 shrink-0">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/70 font-medium text-sm">Total Amount</span>
              <span className="font-serif text-xl font-bold text-sand-warm">
                {formatPrice(cartTotal)}
              </span>
            </div>
            
            {checkoutDemo && (
              <div className="mb-4 p-3 rounded-lg bg-blue-900/30 border border-blue-500/30 flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2">
                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-200">
                  <strong>Order Summary</strong><br/>
                  This is a demo checkout. Checkout feature is not connected to any payment gateway yet.
                </p>
              </div>
            )}
            
            <button 
              onClick={() => setCheckoutDemo(true)}
              className="w-full py-3.5 bg-sand-warm text-slate-deep font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-sand-warm/20 hover:shadow-sand-warm/30 hover:-translate-y-0.5"
            >
              Checkout
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default CartDrawer;
