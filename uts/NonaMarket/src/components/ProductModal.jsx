import { X, Star, Heart, CheckCircle2, Package, Truck, ShoppingCart, ShieldCheck, RotateCcw } from 'lucide-react';

const ProductModal = ({ product, onClose, onToggleWishlist, onAddToCart }) => {
  if (!product) return null;

  let statusText = product.status;
  let statusColor = 'bg-blue-steel text-white';
  
  if (product.stock === 0) {
    statusText = 'Out of Stock';
    statusColor = 'bg-slate-800 text-white/70';
  } else if (product.stock > 0 && product.stock <= 5) {
    statusText = 'Limited Stock';
    statusColor = 'bg-orange-900/80 text-orange-200';
  } else if (product.status === 'Best Seller') {
    statusColor = 'bg-sand-warm text-slate-deep';
  } else if (product.stock > 5 && !statusText) {
    statusText = 'Ready Stock';
    statusColor = 'bg-blue-steel text-white';
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-deep/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-slate-deep w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto flex flex-col md:flex-row border border-white/20 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-slate-deep/50 hover:bg-white/10 rounded-full text-white/80 hover:text-sand-warm backdrop-blur-sm transition-all"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative bg-slate-800 h-48 sm:h-64 md:h-auto shrink-0 overflow-hidden flex items-center justify-center p-4 md:p-8">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full max-w-full max-h-full object-contain opacity-90"
          />
          {statusText && (
            <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm shadow-sm ${statusColor}`}>
              {statusText}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-10 flex flex-col">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-bold text-slate-deep bg-sand-warm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center text-sand-warm bg-white/5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              <span className="ml-1 sm:ml-1.5 text-[10px] sm:text-sm font-bold">{product.rating}</span>
            </div>
          </div>

          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight">
            {product.name}
          </h2>

          <div className="text-xl sm:text-3xl font-bold text-sand-warm mb-4 sm:mb-6">
            Rp {product.price.toLocaleString('id-ID')}
          </div>

          <p className="text-xs sm:text-base text-white/70 mb-4 sm:mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/50 mb-0.5 sm:mb-1">
                <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-sm">Availability</span>
              </div>
              <p className="font-bold text-xs sm:text-base text-white">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
            </div>
            <div className="bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/50 mb-0.5 sm:mb-1">
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-sm">Delivery</span>
              </div>
              <p className="font-bold text-xs sm:text-base text-white">Free shipping</p>
            </div>
          </div>

          <div className="mt-auto flex gap-2 sm:gap-4">
            <button 
              className="flex-1 bg-sand-warm hover:bg-white text-slate-deep py-2.5 sm:py-4 rounded-xl font-bold text-xs sm:text-lg transition-colors flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-sand-warm/20 disabled:opacity-50"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`p-2.5 sm:p-4 rounded-xl font-medium transition-colors flex items-center justify-center border shadow-lg ${
                product.favorite 
                  ? 'bg-blue-steel/40 border-sand-warm text-sand-warm shadow-sand-warm/10' 
                  : 'bg-transparent border-white/20 text-white/70 hover:bg-white/5 hover:text-sand-warm hover:border-sand-warm'
              }`}
            >
              <Heart className={`w-4 h-4 sm:w-6 sm:h-6 ${product.favorite ? 'fill-sand-warm text-sand-warm' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
