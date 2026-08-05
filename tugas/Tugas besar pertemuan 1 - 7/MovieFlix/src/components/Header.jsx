import React, { useState, useEffect } from 'react';
import { Clapperboard, House, Film, ChartColumn, Heart, Mail, Search, Menu, X } from 'lucide-react';

const Header = ({ totalMovies, favoriteMovies, setShowFavoritesOnly }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['home', 'statistics', 'movies', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, isFavorite = false) => {
    if (isFavorite) {
      setShowFavoritesOnly(true);
      setActiveSection('favorites'); 
    } else {
      setShowFavoritesOnly(false);
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
    
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72; 
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const focusSearch = () => {
    const searchInput = document.querySelector('input[type="text"][placeholder="Cari judul film..."]');
    if (searchInput) {
      searchInput.focus();
      const searchContainer = searchInput.closest('section');
      if (searchContainer) {
        const top = searchContainer.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 h-[72px] w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#033041]/95 backdrop-blur-md shadow-sm border-b border-[#0A4155]/50' 
            : 'bg-[#033041] border-b border-[#0A4155]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <Clapperboard size={24} className="text-[#E9D3A1]" />
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight leading-none">MovieFlix</h1>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Movie Collection App</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 h-full">
            <button 
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-2 h-full text-sm font-medium transition-colors border-b-2 ${
                activeSection === 'home' 
                  ? 'text-[#E9D3A1] border-[#E9D3A1]' 
                  : 'text-white border-transparent hover:text-[#E9D3A1]'
              }`}
            >
              <House size={18} />
              Home
            </button>
            <button 
              onClick={() => handleNavClick('movies')}
              className={`flex items-center gap-2 h-full text-sm font-medium transition-colors border-b-2 ${
                activeSection === 'movies' 
                  ? 'text-[#E9D3A1] border-[#E9D3A1]' 
                  : 'text-white border-transparent hover:text-[#E9D3A1]'
              }`}
            >
              <Film size={18} />
              Movies
            </button>
            <button 
              onClick={() => handleNavClick('statistics')}
              className={`flex items-center gap-2 h-full text-sm font-medium transition-colors border-b-2 ${
                activeSection === 'statistics' 
                  ? 'text-[#E9D3A1] border-[#E9D3A1]' 
                  : 'text-white border-transparent hover:text-[#E9D3A1]'
              }`}
            >
              <ChartColumn size={18} />
              Statistics
            </button>
            <button 
              onClick={() => handleNavClick('movies', true)}
              className={`flex items-center gap-2 h-full text-sm font-medium transition-colors border-b-2 ${
                activeSection === 'favorites' 
                  ? 'text-[#E9D3A1] border-[#E9D3A1]' 
                  : 'text-white border-transparent hover:text-[#E9D3A1]'
              }`}
            >
              <Heart size={18} />
              Favorites
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-2 h-full text-sm font-medium transition-colors border-b-2 ${
                activeSection === 'contact' 
                  ? 'text-[#E9D3A1] border-[#E9D3A1]' 
                  : 'text-white border-transparent hover:text-[#E9D3A1]'
              }`}
            >
              <Mail size={18} />
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={focusSearch}
              className="text-white hover:text-[#E9D3A1] transition-colors p-1"
              title="Search"
            >
              <Search size={18} />
            </button>
            
            <div className="hidden sm:flex gap-2">
              <div className="flex items-center gap-1.5 bg-[#E9D3A1] px-2.5 py-1 rounded-full text-xs font-bold text-[#033041]">
                <Heart size={14} className="fill-current" /> {favoriteMovies}
              </div>
              <div className="flex items-center gap-1.5 bg-[#0A4155] border border-[#0A4155] px-2.5 py-1 rounded-full text-xs font-medium text-white">
                <Film size={14} /> {totalMovies} Movies
              </div>
            </div>

            <button 
              className="md:hidden text-white hover:text-[#E9D3A1] p-1"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute top-0 right-0 h-full w-64 bg-[#033041] shadow-2xl p-6 flex flex-col gap-6 transform transition-transform"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-[#0A4155] pb-4">
              <span className="font-bold text-white text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#E9D3A1] hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNavClick('home')} className="text-left text-white hover:text-[#E9D3A1] font-medium">Home</button>
              <button onClick={() => handleNavClick('movies')} className="text-left text-white hover:text-[#E9D3A1] font-medium">Movies</button>
              <button onClick={() => handleNavClick('statistics')} className="text-left text-white hover:text-[#E9D3A1] font-medium">Statistics</button>
              <button onClick={() => handleNavClick('movies', true)} className="text-left text-white hover:text-[#E9D3A1] font-medium">Favorites</button>
              <button onClick={() => handleNavClick('contact')} className="text-left text-white hover:text-[#E9D3A1] font-medium">Contact</button>
            </div>

            <div className="mt-auto pt-6 border-t border-[#0A4155] flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm text-white">
                <span>Favorites</span>
                <span className="bg-[#E9D3A1] text-[#033041] px-2 py-0.5 rounded-full font-bold">{favoriteMovies}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white">
                <span>Total Movies</span>
                <span className="bg-[#0A4155] text-white px-2 py-0.5 rounded-full">{totalMovies}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
