import { HeartCrack } from 'lucide-react';
import ProductGrid from './ProductGrid';

const WishlistSection = ({ products, onToggleWishlist, onViewDetails, onAddToCart }) => {
  return (
    <div className="relative rounded-xl sm:rounded-2xl shadow-xl shadow-slate-deep/30 border border-white/20 overflow-hidden bg-slate-deep">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-slate-deep/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-4 sm:p-8">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sand-warm">Your Wishlist</h2>
        <span className="bg-sand-warm text-slate-deep px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-bold shadow-inner">
          {products.length} items
        </span>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 sm:py-16 px-4 text-center bg-slate-deep/40 rounded-xl sm:rounded-2xl border border-dashed border-blue-steel/50">
          <HeartCrack className="w-8 h-8 sm:w-12 sm:h-12 text-sand-warm/40 mb-3 sm:mb-4" />
          <h3 className="font-serif text-lg sm:text-2xl font-bold text-sand-warm mb-1.5 sm:mb-2">Your Wishlist Is Empty</h3>
          <p className="text-[10px] sm:text-sm text-white/60 max-w-sm">
            You haven't added any products to your wishlist yet. 
            Explore our collection and find something you love!
          </p>
          <a href="#products" className="mt-4 sm:mt-6 text-[10px] sm:text-sm text-sand-warm font-bold hover:text-white transition-colors">
            Browse Products &rarr;
          </a>
        </div>
      ) : (
        <ProductGrid 
          products={products} 
          onToggleWishlist={onToggleWishlist}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
      )}
      </div>
    </div>
  );
};

export default WishlistSection;
