import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-black selection:bg-red-600 selection:text-white">
      <Header />
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
