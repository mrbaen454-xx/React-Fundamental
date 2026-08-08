import { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, ShoppingCart } from 'lucide-react';

const Header = ({ wishlistCount, cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const navLinks = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Products', href: '#products' },
    { name: 'Wishlist', href: '#wishlist' },
    { name: 'About', href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset

      for (const link of navLinks) {
        const id = link.href.substring(1);
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(id);
          }
        }
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-deep/95 backdrop-blur-md border-b border-blue-steel/50 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2">
            <div className="bg-sand-warm text-slate-deep p-1.5 sm:p-2 rounded-md sm:rounded-lg shadow-sm shadow-sand-warm/20">
              <ShoppingBag className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="font-serif font-bold text-base sm:text-2xl tracking-tight text-white">
              NOVA<span className="text-sand-warm italic">MARKET</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 bg-slate-800/50 p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(id)}
                  className={`relative px-5 py-2 font-medium text-sm transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-slate-deep bg-sand-warm shadow-md shadow-sand-warm/20'
                      : 'text-white/70 hover:text-sand-warm hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Wishlist & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 lg:w-48 justify-end">
            <a 
              href="#wishlist" 
              onClick={() => handleNavClick('wishlist')}
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === 'wishlist' 
                  ? 'bg-sand-warm text-slate-deep shadow-md shadow-sand-warm/20' 
                  : 'text-white/80 hover:text-sand-warm hover:bg-white/5'
              }`}
            >
              <div className="relative">
                <Heart size={20} className={activeSection === 'wishlist' ? 'fill-slate-deep' : 'group-hover:fill-sand-warm/20 transition-all'} />
                {wishlistCount > 0 && (
                  <span className={`absolute -top-2 -right-2 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-slate-deep ${
                    activeSection === 'wishlist' ? 'bg-slate-deep text-sand-warm' : 'bg-sand-warm text-slate-deep'
                  }`}>
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="font-medium text-sm">Wishlist</span>
            </a>

            {/* Cart Button (Always visible) */}
            <button 
              onClick={onOpenCart}
              className="flex items-center p-2 rounded-full transition-all duration-300 text-white/80 hover:text-sand-warm hover:bg-white/5"
            >
              <div className="relative">
                <ShoppingCart size={20} className="group-hover:fill-sand-warm/20 transition-all" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full border border-slate-deep bg-sand-warm text-slate-deep">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-1.5 sm:p-2 rounded-md text-white/80 hover:text-sand-warm hover:bg-blue-steel/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-blue-steel bg-slate-deep absolute w-full shadow-lg">
          <div className="px-3 py-3 space-y-1">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(id)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-sand-warm text-slate-deep shadow-sm' 
                      : 'text-white/80 hover:text-sand-warm hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
