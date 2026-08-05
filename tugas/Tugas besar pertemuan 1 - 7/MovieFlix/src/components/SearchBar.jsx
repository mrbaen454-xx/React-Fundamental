import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full flex-grow lg:max-w-md relative">
      <label className="block text-xs font-medium text-gray-300 mb-1">Pencarian</label>
      <div className="relative flex items-center w-full h-[42px] bg-[#374151] border border-[#4B5563] rounded-xl focus-within:border-[#E9D3A1] focus-within:ring-1 focus-within:ring-[#E9D3A1] transition-colors overflow-hidden">
        
        {/* Search Icon */}
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <Search size={18} />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari judul film..."
          className="w-full h-full text-sm text-white placeholder-gray-400 bg-transparent outline-none pr-4"
        />
        
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
