import React from 'react';
import MovieCard from './MovieCard';
import EmptyState from './EmptyState';

const MovieList = ({ movies, totalProcessed, totalMovies, toggleFavorite }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 mb-10">
      <div className="bg-[#374151]/40 backdrop-blur-lg border border-[#4B5563]/60 rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-[#374151] mb-2">Movie Collection</h2>
            <p className="text-sm text-[#374151]/80 max-w-xl">
              Explore a curated list of movies from various genres. Use the search and filter options to quickly find your favorite titles.
            </p>
          </div>
          <div className="bg-[#374151]/60 backdrop-blur-md border border-[#4B5563] px-4 py-2 rounded-xl shadow-sm whitespace-nowrap">
            <span className="text-sm font-medium text-gray-200">
              Showing <span className="font-bold text-white">{totalProcessed}</span> of {totalMovies} Movies
            </span>
          </div>
        </div>
        
        {movies && movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {movies.map(movie => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                toggleFavorite={toggleFavorite} 
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}

      </div>
    </section>
  );
};

export default MovieList;
