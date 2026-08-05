import React from 'react';

const SortMovies = ({ sortOption, setSortOption }) => {
  const options = [
    'Rating Tertinggi',
    'Rating Terendah',
    'Tahun Terbaru',
    'Tahun Terlama',
    'A-Z',
    'Z-A'
  ];

  return (
    <div className="flex flex-col flex-1 min-w-[120px]">
      <label className="text-xs font-medium text-gray-300 mb-1">Urutkan</label>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="bg-[#374151] border border-[#4B5563] text-white text-sm rounded-xl h-[42px] focus:border-[#E9D3A1] focus:ring-1 focus:ring-[#E9D3A1] block w-full px-3 outline-none transition-colors"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SortMovies;
