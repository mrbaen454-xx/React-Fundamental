import React from 'react';
import { Code2, Mail, Globe, Info, Clapperboard } from 'lucide-react';

const Footer = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top - 72; // minus header
      window.scrollTo({ top: window.scrollY + top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#033041] pt-12 pb-8 mt-auto text-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-white/10 pb-8">
        
        {/* Column 1: About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clapperboard size={24} className="text-[#E9D3A1]" />
            <h3 className="text-2xl font-bold text-white tracking-tight">MovieFlix</h3>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Temukan koleksi film terbaik dan terbaru. Platform katalog film terlengkap untuk para pecinta layar lebar.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <button onClick={() => handleScroll('home')} className="text-sm text-[#E9D3A1] hover:text-white transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('movies')} className="text-sm text-[#E9D3A1] hover:text-white transition-colors">
                Movies
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('statistics')} className="text-sm text-[#E9D3A1] hover:text-white transition-colors">
                Statistics
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('movies')} className="text-sm text-[#E9D3A1] hover:text-white transition-colors">
                Favorites
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-gray-400 hover:text-[#E9D3A1] transition-colors">
              <Code2 size={16} />
              <a href="#" className="text-sm font-medium">Github</a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-[#E9D3A1] transition-colors">
              <Mail size={16} />
              <a href="#" className="text-sm font-medium">Email</a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-[#E9D3A1] transition-colors">
              <Globe size={16} />
              <a href="#" className="text-sm font-medium">Website</a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-[#E9D3A1] transition-colors">
              <Info size={16} />
              <a href="#" className="text-sm font-medium">About</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} MovieFlix. All rights reserved.</p>
        <p>Built with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
