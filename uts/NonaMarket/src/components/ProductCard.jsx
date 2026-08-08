import { Star, Heart, Package } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product, onToggleWishlist, onViewDetails, onAddToCart }) => {
  const [imgError, setImgError] = useState(false);

  // Status mapping logic
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
  } else if (product.status === 'Discount') {
    statusColor = 'bg-red-900/80 text-red-200';
  } else if (product.status === 'New Arrival') {
    statusColor = 'bg-emerald-900/80 text-emerald-200';
  } else if (product.stock > 5 && !statusText) {
    statusText = 'Ready Stock';
    statusColor = 'bg-blue-steel text-white';
  }

  // Fallback image handled in render

  return (
    <div className="group bg-slate-deep/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 shadow-xl shadow-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 hover:border-sand-warm/60 flex flex-col h-full relative">
      
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-800">
        {imgError ? (
          <div className="flex w-full h-full items-center justify-center p-4 text-center text-white/50 text-xs sm:text-sm font-medium">
            <span>{product.name}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
          />
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {product.stock === 0 ? (
            <span className="bg-red-900/90 backdrop-blur-md text-red-200 text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg border border-red-500/30">
              Out of Stock
            </span>
          ) : product.stock < 10 ? (
            <span className="bg-orange-600/90 backdrop-blur-md text-white text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg border border-orange-400/30">
              Limited Stock
            </span>
          ) : null}
          
          {product.rating > 4.5 && product.stock > 0 && (
            <span className="bg-sand-warm/90 backdrop-blur-md text-slate-deep text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg flex items-center gap-0.5 sm:gap-1">
              <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-slate-deep" /> Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full bg-slate-deep/60 backdrop-blur-md text-white hover:bg-sand-warm hover:text-slate-deep transition-all duration-300 shadow-lg border border-white/20 hover:scale-110"
        >
          <Heart 
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${product.favorite ? 'fill-sand-warm text-sand-warm' : ''}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-5 flex flex-col flex-grow">
        {/* Category & Rating */}
        <div className="flex justify-between items-center mb-1.5 sm:mb-3">
          <span className="text-[9px] sm:text-xs font-medium text-white/60 bg-white/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-white/10 uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center text-sand-warm bg-sand-warm/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
            <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
            <span className="ml-1 sm:ml-1.5 text-[10px] sm:text-sm font-bold">{product.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xs sm:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2 group-hover:text-sand-warm transition-colors leading-tight">
          {product.name}
        </h3>

        {/* Price & Stock */}
        <div className="mt-auto pt-2 sm:pt-4 flex items-end justify-between border-t border-blue-steel/30">
          <div>
            <p className="text-[9px] sm:text-xs text-white/50 mb-0.5 sm:mb-1">Price</p>
            <p className="text-sm sm:text-xl font-bold text-sand-warm">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <div className="flex items-center text-[9px] sm:text-sm text-white/60 bg-slate-800/50 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-white/5">
            <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
            {product.stock} left
          </div>
        </div>
        
        <div className="flex gap-2 mt-2 sm:mt-4">
          <button 
            onClick={() => onViewDetails(product)}
            className="flex-1 py-1.5 sm:py-2.5 text-[10px] sm:text-sm font-bold bg-white/5 hover:bg-white/10 text-white rounded-lg sm:rounded-xl border border-white/10 transition-all duration-300 shadow-sm"
          >
            Details
          </button>
          <button 
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="flex-[1.5] py-1.5 sm:py-2.5 text-[10px] sm:text-sm font-bold bg-sand-warm hover:bg-white text-slate-deep hover:text-slate-deep rounded-lg sm:rounded-xl border border-transparent transition-all duration-300 shadow-sm disabled:opacity-50 disabled:bg-slate-700 disabled:text-white/50 disabled:cursor-not-allowed"
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
