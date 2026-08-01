const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg shadow-white/10 hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 border border-gray-200 border-t-4 border-t-gray-200 hover:border-t-red-600 flex flex-col group hover:-translate-y-2">
      <div className="p-7 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
            {movie.title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-black text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5">
              {movie.genre}
            </span>
            <span className="bg-gray-100 text-black text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 border border-gray-200">
              {movie.year}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Rating</span>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-black text-2xl">{movie.rating}</span>
              <span className="text-gray-400 text-xs font-bold">/ 10</span>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          {movie.isShowing ? (
            <div className="w-full text-center bg-red-600 text-white px-4 py-3.5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-colors cursor-pointer">
              Sedang Tayang
            </div>
          ) : (
            <div className="w-full text-center bg-gray-100 text-gray-400 px-4 py-3.5 font-bold text-xs uppercase tracking-[0.2em] border border-gray-200">
              Tidak Tayang
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
