import React from 'react';
import { Film, CirclePlay, Heart } from 'lucide-react';

const MovieStats = ({ movies }) => {
  const totalMovies = movies.length;
  const showingMovies = movies.filter(movie => movie.showing).length;
  const favoriteMovies = movies.filter(movie => movie.favorite).length;

  return (
    <section className="w-full pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Card Total */}
        <div className="group bg-[#374151] border border-[#4B5563] hover:border-[#E9D3A1] rounded-[20px] p-5 flex items-center gap-4 shadow-sm transition-colors cursor-default">
          <div className="bg-[#1F2937] w-12 h-12 flex items-center justify-center rounded-xl text-[#6B7280]">
            <Film size={22} color="#033041" className="fill-current text-[#E9D3A1] opacity-90" />
          </div>
          <div>
            <p className="text-3xl font-bold text-white leading-none">{totalMovies}</p>
            <p className="text-sm font-medium text-gray-300 mt-1">Total Film</p>
          </div>
        </div>

        {/* Card Tayang */}
        <div className="group bg-[#374151] border border-[#4B5563] hover:border-[#E9D3A1] rounded-[20px] p-5 flex items-center gap-4 shadow-sm transition-colors cursor-default">
          <div className="bg-[#1F2937] w-12 h-12 flex items-center justify-center rounded-xl text-green-500">
            <CirclePlay size={22} className="fill-current text-[#033041]" />
          </div>
          <div>
            <p className="text-3xl font-bold text-white leading-none">{showingMovies}</p>
            <p className="text-sm font-medium text-gray-300 mt-1">Sedang Tayang</p>
          </div>
        </div>

        {/* Card Favorite */}
        <div className="group bg-[#374151] border border-[#4B5563] hover:border-[#E9D3A1] rounded-[20px] p-5 flex items-center gap-4 shadow-sm transition-colors cursor-default">
          <div className="bg-[#1F2937] w-12 h-12 flex items-center justify-center rounded-xl text-[#E9D3A1]">
            <Heart size={22} className="fill-current text-[#E9D3A1]" color="#E9D3A1" />
          </div>
          <div>
            <p className="text-3xl font-bold text-white leading-none">{favoriteMovies}</p>
            <p className="text-sm font-medium text-gray-300 mt-1">Favorite</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MovieStats;
