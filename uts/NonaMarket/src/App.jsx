import { useState, useMemo, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Hero from './components/Hero';
import DashboardStats from './components/DashboardStats';
import ProductFilters from './components/ProductFilters';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import WishlistSection from './components/WishlistSection';
import EmptyState from './components/EmptyState';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { productsData } from './data/products';

function App() {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [availabilityFilter, setAvailabilityFilter] = useState('All Products');
  const [wishlistFilter, setWishlistFilter] = useState('All Products');
  const [ratingFilter, setRatingFilter] = useState('All Ratings');
  const [sortOption, setSortOption] = useState('Default');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Cart state
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
      direction: 'vertical', 
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleToggleWishlist = (id) => {
    setProducts(prev => 
      prev.map(p => p.id === id ? { ...p, favorite: !p.favorite } : p)
    );
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          setToastMessage({ text: 'Maximum stock reached', type: 'error' });
          return prev;
        }
        setToastMessage({ text: 'Quantity increased', type: 'success' });
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      setToastMessage({ text: 'Added to cart', type: 'success' });
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, delta) => {
    setCart(prev => {
      const item = prev.find(item => item.product.id === id);
      if (!item) return prev;
      
      const newQuantity = item.quantity + delta;
      
      if (newQuantity <= 0) {
        return prev.filter(item => item.product.id !== id);
      }
      
      if (newQuantity > item.product.stock) {
        setToastMessage({ text: 'Maximum stock reached', type: 'error' });
        return prev;
      }
      
      return prev.map(item => 
        item.product.id === id 
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setAvailabilityFilter('All Products');
    setWishlistFilter('All Products');
    setRatingFilter('All Ratings');
    setSortOption('Default');
  };

  // Derived state calculations
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(lowerSearch));
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Availability filter
    if (availabilityFilter === 'Available') {
      result = result.filter(p => p.stock > 0);
    } else if (availabilityFilter === 'Out of Stock') {
      result = result.filter(p => p.stock === 0);
    }

    // Wishlist filter
    if (wishlistFilter === 'Wishlist Only') {
      result = result.filter(p => p.favorite === true);
    }

    // Rating filter
    if (ratingFilter === '4+') {
      result = result.filter(p => p.rating >= 4);
    } else if (ratingFilter === '4.5+') {
      result = result.filter(p => p.rating >= 4.5);
    } else if (ratingFilter === '4.8+') {
      result = result.filter(p => p.rating >= 4.8);
    }

    // Sorting
    switch (sortOption) {
      case 'Name: A → Z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Name: Z → A':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Price: Low → High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High → Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Rating: Highest':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'Rating: Lowest':
        result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        // Default sort by id
        result.sort((a, b) => a.id - b.id);
        break;
    }

    return result;
  }, [products, searchTerm, selectedCategory, availabilityFilter, wishlistFilter, ratingFilter, sortOption]);
  
  const wishlistCount = products.filter(p => p.favorite).length;
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header Wrapper */}
      <Header 
        wishlistCount={wishlistCount} 
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow pb-24">
        {/* Hero Wrapper */}
        <Hero />

        {/* Dashboard Wrapper */}
        <div id="dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
          <DashboardStats products={products} />
        </div>

        {/* Products Wrapper */}
        <div id="products" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 lg:mt-16 scroll-mt-24">
          <div className="relative rounded-xl sm:rounded-2xl shadow-xl shadow-slate-deep/30 border border-white/20 overflow-hidden bg-slate-deep">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-slate-deep/80 backdrop-blur-sm"></div>
            
            <div className="relative z-10 p-4 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 sm:mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sand-warm">Explore Collection</h2>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <ProductFilters 
              selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
              availabilityFilter={availabilityFilter} setAvailabilityFilter={setAvailabilityFilter}
              wishlistFilter={wishlistFilter} setWishlistFilter={setWishlistFilter}
              ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}
              sortOption={sortOption} setSortOption={setSortOption}
              onReset={handleResetFilters}
            />
            
            <div className="relative z-10 mt-3 sm:mt-4 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-sm font-medium text-white/70">
                Showing {filteredProducts.length} of {products.length} products
              </span>
            </div>
            
            <div className="mt-3 sm:mt-4">
              {filteredProducts.length === 0 ? (
                <EmptyState onReset={handleResetFilters} />
              ) : (
                <ProductGrid 
                  products={filteredProducts} 
                  onToggleWishlist={handleToggleWishlist}
                  onViewDetails={handleViewDetails}
                  onAddToCart={handleAddToCart}
                />
              )}
            </div>
          </div>
        </div>
      </div>

        {/* Wishlist Wrapper */}
        <div id="wishlist" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 lg:mt-16 scroll-mt-24">
          <WishlistSection 
            products={products.filter(p => p.favorite)} 
            onToggleWishlist={handleToggleWishlist}
            onViewDetails={handleViewDetails}
            onAddToCart={handleAddToCart}
          />
        </div>

        {/* About Wrapper */}
        <div id="about" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 lg:mt-16 scroll-mt-24">
          <div className="relative rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-deep/30 overflow-hidden text-white text-center max-w-4xl mx-auto group border border-white/20 bg-slate-deep">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-slate-deep/80 backdrop-blur-sm"></div>
            
            <div className="relative z-10 p-6 sm:p-12">
              <h2 className="font-serif text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-sand-warm">About NOVA MARKET</h2>
              <p className="text-white/80 text-xs sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Nova Market is your premium destination for curated lifestyle products. 
                We carefully select items that blend form, function, and cutting-edge design to elevate your everyday experience.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Wrapper */}
      <Footer />

      {/* Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        formatPrice={formatPrice}
      />
      
      <Toast 
        message={toastMessage?.text} 
        type={toastMessage?.type} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}

export default App;
