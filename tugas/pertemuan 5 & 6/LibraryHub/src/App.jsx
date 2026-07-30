import { useState } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Footer from './components/Footer';
import { books } from './data/books';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedBook(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <main className="flex-grow">
        {selectedBook ? (
          <BookDetail book={selectedBook} onBack={handleBackToList} />
        ) : (
          <BookList books={books} onSelectBook={handleSelectBook} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
