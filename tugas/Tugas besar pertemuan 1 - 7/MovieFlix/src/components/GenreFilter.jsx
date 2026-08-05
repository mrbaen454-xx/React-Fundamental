import React from 'react';

const GenreFilter = ({ selectedGenre, setSelectedGenre }) => {
  const genres = ['Semua', 'Action', 'Drama', 'Sci-Fi', 'Animation', 'Adventure', 'Comedy'];

  return (
    <div className="flex flex-col flex-1 min-w-[120px]">
      <label className="text-xs font-medium text-gray-300 mb-1">Genre</label>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="bg-[#374151] border border-[#4B5563] text-white text-sm rounded-xl h-[42px] focus:border-[#E9D3A1] focus:ring-1 focus:ring-[#E9D3A1] block w-full px-3 outline-none transition-colors"
      >
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
