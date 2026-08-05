import React from 'react';
import { Clapperboard, ChevronRight } from 'lucide-react';

const HeroSection = ({ setShowFavoritesOnly }) => {
  const handleExplore = () => {
    setShowFavoritesOnly(false);
    const el = document.getElementById('movies');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleViewFavorites = () => {
    setShowFavoritesOnly(true);
    const el = document.getElementById('movies');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full">
      <div className="bg-[#0A4155] min-h-[280px] py-10 rounded-[24px] flex items-center relative overflow-hidden shadow-md border border-[#033041]/10">
        
        <div className="relative z-20 px-6 sm:px-8 md:px-12 w-full flex justify-between items-center h-full">
          <div className="max-w-lg text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight flex items-center gap-3">
              <Clapperboard size={36} className="text-[#E9D3A1] hidden sm:block" />
              Discover Your Next Favorite Movie
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
              Explore thousands of movies, check their ratings, and save your favorites. Your personal cinematic journey starts here.
            </p>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleExplore}
                className="bg-[#E9D3A1] text-[#033041] hover:bg-[#DFC78F] font-semibold py-2.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                Explore Movies
                <ChevronRight size={18} />
              </button>
              <button 
                onClick={handleViewFavorites}
                className="bg-[#033041]/80 hover:bg-[#033041] border border-white/20 hover:border-[#E9D3A1]/50 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm backdrop-blur-sm"
              >
                View Favorites
              </button>
            </div>
          </div>
          
          {/* Decorative elements instead of emoji gallery */}
          <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <Clapperboard size={120} className="text-[#E9D3A1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
