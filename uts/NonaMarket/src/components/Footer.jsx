import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-deep text-white/60 pt-8 sm:pt-16 pb-4 sm:pb-8 border-t border-blue-steel/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-12 mb-6 sm:mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="bg-sand-warm text-slate-deep p-1.5 sm:p-2 rounded-md sm:rounded-lg">
                <ShoppingBag className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span className="font-serif font-bold text-lg sm:text-2xl tracking-tight text-white">
                NOVA<span className="text-sand-warm italic">MARKET</span>
              </span>
            </div>
            <p className="text-[10px] sm:text-base text-white/60 max-w-sm leading-relaxed">
              Your premium destination for curated lifestyle products. 
              Find exactly what you need with our smart filtering and carefully selected collection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sand-warm font-bold mb-2 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-3">
              <li><a href="#dashboard" className="text-[10px] sm:text-base hover:text-sand-warm transition-colors">Dashboard</a></li>
              <li><a href="#products" className="text-[10px] sm:text-base hover:text-sand-warm transition-colors">Products</a></li>
              <li><a href="#wishlist" className="text-[10px] sm:text-base hover:text-sand-warm transition-colors">Wishlist</a></li>
              <li><a href="#about" className="text-[10px] sm:text-base hover:text-sand-warm transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sand-warm font-bold mb-2 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Categories</h4>
            <ul className="space-y-1.5 sm:space-y-3">
              <li className="text-[10px] sm:text-base hover:text-sand-warm transition-colors cursor-pointer">Electronics</li>
              <li className="text-[10px] sm:text-base hover:text-sand-warm transition-colors cursor-pointer">Fashion</li>
              <li className="text-[10px] sm:text-base hover:text-sand-warm transition-colors cursor-pointer">Gaming</li>
              <li className="text-[10px] sm:text-base hover:text-sand-warm transition-colors cursor-pointer">Lifestyle</li>
            </ul>
          </div>

        </div>

        <div className="pt-4 sm:pt-8 border-t border-blue-steel/30 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-[9px] sm:text-sm">
            &copy; {new Date().getFullYear()} Nova Market. All rights reserved.
          </p>
          <div className="flex gap-3 sm:gap-4 text-[9px] sm:text-sm">
            <span className="hover:text-sand-warm cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-sand-warm cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
