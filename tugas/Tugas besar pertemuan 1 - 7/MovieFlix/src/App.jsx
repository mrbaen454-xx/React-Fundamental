import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import StatusFilter from './components/StatusFilter';
import SortMovies from './components/SortMovies';
import MovieStats from './components/MovieStats';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ScrollTop from './components/ScrollTop';
import { movies as initialMovies } from './data/movies';

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [isLoading, setIsLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Semua');
  const [selectedStatus, setSelectedStatus] = useState('Semua');
  const [sortOption, setSortOption] = useState('Rating Tertinggi');
  
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (id) => {
    setMovies(prevMovies => 
      prevMovies.map(movie => 
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  let processedMovies = [...movies];

  if (showFavoritesOnly) {
    processedMovies = processedMovies.filter(movie => movie.favorite);
  }

  if (searchQuery) {
    processedMovies = processedMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedGenre !== 'Semua') {
    processedMovies = processedMovies.filter(movie => movie.genre === selectedGenre);
  }

  if (selectedStatus !== 'Semua') {
    const isShowing = selectedStatus === 'Sedang Tayang';
    processedMovies = processedMovies.filter(movie => movie.showing === isShowing);
  }

  processedMovies.sort((a, b) => {
    switch (sortOption) {
      case 'Rating Tertinggi':
        return b.rating - a.rating;
      case 'Rating Terendah':
        return a.rating - b.rating;
      case 'Tahun Terbaru':
        return b.year - a.year;
      case 'Tahun Terlama':
        return a.year - b.year;
      case 'A-Z':
        return a.title.localeCompare(b.title);
      case 'Z-A':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const totalMoviesCount = movies.length;
  const favoriteMoviesCount = movies.filter(m => m.favorite).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#E9D3A1] font-sans text-[#033041]">
      {isLoading && <Loading />}
      
      <Header 
        totalMovies={totalMoviesCount}
        favoriteMovies={favoriteMoviesCount}
        setShowFavoritesOnly={setShowFavoritesOnly}
      />
      
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mb-4">
          <div className="bg-[#374151]/40 backdrop-blur-lg border border-[#4B5563]/60 rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
            
            <div id="home">
              <HeroSection setShowFavoritesOnly={setShowFavoritesOnly} />
            </div>
            
            {/* Search & Filter Wrapper */}
            <div className="py-8">
              <div className="bg-[#374151]/60 backdrop-blur-md p-4 lg:p-6 rounded-[20px] shadow-sm flex flex-col lg:flex-row gap-4 items-end border border-[#4B5563]">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <GenreFilter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
                <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                <SortMovies sortOption={sortOption} setSortOption={setSortOption} />
              </div>
            </div>

            {/* Statistics below Search */}
            <div id="statistics">
              <MovieStats movies={movies} />
            </div>
            
          </div>
        </section>
        
        <div id="movies">
          <MovieList 
            movies={processedMovies} 
            totalProcessed={processedMovies.length}
            totalMovies={totalMoviesCount}
            toggleFavorite={toggleFavorite} 
          />
        </div>
      </main>
      
      <div id="contact">
        <Footer />
      </div>
      
      <ScrollTop />
    </div>
  );
}

export default App;
