import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full md:w-64 lg:w-80">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-sand-warm/60" />
      </div>
      <input
        type="text"
        className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 h-9 sm:h-auto text-xs sm:text-sm border border-white/20 shadow-lg shadow-white/10 rounded-lg sm:rounded-xl leading-5 bg-slate-deep/90 text-sand-warm placeholder-sand-warm/50 focus:outline-none focus:bg-slate-deep focus:ring-2 focus:ring-sand-warm focus:border-sand-warm hover:shadow-xl hover:shadow-white/10 transition-all"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
