import React, { useState } from 'react';
import { Clapperboard, Tag, Calendar, Clock3, Star, CircleCheck, CircleOff, Heart } from 'lucide-react';

const MovieCard = ({ movie, toggleFavorite }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="group bg-[#374151] rounded-xl p-5 border border-[#4B5563] hover:border-[#E9D3A1] shadow-sm hover:shadow-lg hover:shadow-black/20 transition-all duration-300 hover:-translate-y-[3px] cursor-pointer flex flex-col h-full"
    >
      {/* Poster Area */}
      <div className="relative rounded-lg overflow-hidden aspect-[2/3] bg-gray-900 mb-4 flex-shrink-0">
        {!imageError && movie.poster ? (
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            onError={(e) => {
              e.target.style.display = 'none';
              setImageError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 group-hover:scale-[1.03] transition-transform duration-500">
            <Clapperboard size={32} className="text-gray-500" />
          </div>
        )}
        
        {/* Favorite Badge */}
        {movie.favorite && (
          <div className="absolute top-3 right-3 bg-[#E9D3A1] backdrop-blur-md text-[#033041] p-2 rounded-full shadow-md z-10">
            <Heart size={14} className="fill-current" />
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="flex-grow flex flex-col">
        {/* Title */}
        <h3 className="font-semibold text-lg text-white line-clamp-2 transition-colors duration-300 group-hover:text-[#E9D3A1] leading-snug">
          {movie.title}
        </h3>
        
        {/* Genre & Year */}
        <div className="flex items-center gap-3 text-sm text-gray-300 mt-2">
          <span className="flex items-center gap-1.5"><Tag size={16} className="text-[#6B7280]" /> {movie.genre}</span>
          <span className="flex items-center gap-1.5"><Calendar size={16} className="text-[#6B7280]" /> {movie.year}</span>
        </div>

        {/* Rating & Duration */}
        <div className="flex items-center gap-3 text-sm mt-1 mb-3">
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <Star size={16} className="text-[#E9D3A1] fill-current" /> {movie.rating}
          </span>
          <span className="flex items-center gap-1.5 text-gray-300">
            <Clock3 size={16} className="text-[#6B7280]" /> {movie.duration} min
          </span>
        </div>

        {/* Badges */}
        <div className="mt-auto pt-2 flex flex-wrap gap-2 items-center justify-between">
          <div className="flex gap-2">
            {movie.showing ? (
              <span className="bg-green-500/10 text-green-500 border border-green-500/20 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1.5">
                <CircleCheck size={14} /> Showing
              </span>
            ) : (
              <span className="bg-gray-500/10 text-gray-400 border border-gray-500/20 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1.5">
                <CircleOff size={14} /> Ended
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-[#4B5563]">
        <button 
          onClick={() => toggleFavorite(movie.id)}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
            movie.favorite 
              ? 'bg-[#E9D3A1] text-[#033041] hover:bg-[#DFC78F]' 
              : 'bg-[#033041] text-white hover:bg-[#033041]/90'
          }`}
        >
          {movie.favorite ? (
            <>
              <Heart size={18} className="fill-current text-red-500" /> Added to Favorite
            </>
          ) : (
            <>
              <Heart size={18} /> Add to Favorite
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
