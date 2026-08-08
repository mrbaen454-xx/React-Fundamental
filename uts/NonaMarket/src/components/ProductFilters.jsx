import { FilterX } from 'lucide-react';

const ProductFilters = ({
  selectedCategory, setSelectedCategory,
  availabilityFilter, setAvailabilityFilter,
  wishlistFilter, setWishlistFilter,
  ratingFilter, setRatingFilter,
  sortOption, setSortOption,
  onReset
}) => {
  
  const categories = ['All Categories', 'Electronics', 'Fashion', 'Gaming', 'Accessories', 'Home', 'Lifestyle'];
  const availabilityOptions = ['All Products', 'Available', 'Out of Stock'];
  const wishlistOptions = ['All Products', 'Wishlist Only'];
  const ratingOptions = ['All Ratings', '4+', '4.5+', '4.8+'];
  const sortOptions = ['Default', 'Name: A → Z', 'Name: Z → A', 'Price: Low → High', 'Price: High → Low', 'Rating: Highest', 'Rating: Lowest'];

  const selectClass = "bg-slate-deep/90 border border-white/20 shadow-md shadow-white/10 text-sand-warm rounded-lg focus:ring-sand-warm focus:border-sand-warm block w-full h-9 sm:h-10 p-2 sm:p-2.5 text-[10px] sm:text-xs outline-none transition-colors hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 cursor-pointer appearance-none";

  return (
    <div className="mb-6 sm:mb-8 p-3 sm:p-5 bg-slate-deep/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl shadow-white/10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 items-center w-full">
        
        {/* Category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={selectClass}
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        {/* Availability */}
        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className={selectClass}
        >
          {availabilityOptions.map(a => <option key={a} value={a}>{a}</option>)}
        </select>

        {/* Wishlist */}
        <select
          value={wishlistFilter}
          onChange={(e) => setWishlistFilter(e.target.value)}
          className={selectClass}
        >
          {wishlistOptions.map(w => <option key={w} value={w}>{w}</option>)}
        </select>

        {/* Rating */}
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className={selectClass}
        >
          {ratingOptions.map(r => <option key={r} value={r}>{r}</option>)}
        </select>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className={selectClass}
        >
          {sortOptions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        
        {/* Reset Button */}
        <button
          onClick={onReset}
          className="w-full h-9 sm:h-10 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold text-slate-deep bg-sand-warm rounded-lg hover:bg-white transition-all shadow-md shadow-sand-warm/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sand-warm/30"
        >
          <FilterX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Reset Filters
        </button>

      </div>
    </div>
  );
};

export default ProductFilters;
