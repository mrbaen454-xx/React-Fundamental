import MovieCard from "./MovieCard";
import { movies } from "../data/movies";

const MovieList = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="mb-10 flex flex-col items-center md:items-start">
        <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Daftar Film</h2>
        <div className="h-1.5 w-24 bg-red-600 mt-4"></div>
      </div>
      
      {/* Pembungkus (Wrapper) yang desainnya sama dengan Header */}
      <div className="bg-black p-8 md:p-12 shadow-2xl border-t-4 border-t-red-600 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_11px)]"></div>
        </div>
        
        {/* Konten Daftar Card diletakkan di atas pola background */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
