import BookCard from "./BookCard";

const BookList = ({ books, onSelectBook }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 flex-grow max-w-7xl">
      <div className="mb-10 border-b border-emerald-200/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-900">Katalog Buku</h2>
          <p className="text-emerald-700/80 mt-2">Jelajahi koleksi bacaan yang tersedia di perpustakaan.</p>
        </div>
        <div className="text-sm text-emerald-800 bg-emerald-100 px-4 py-2 rounded-full font-semibold shadow-sm border border-emerald-200">
          Total Koleksi: {books.length} Buku
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onSelect={() => onSelectBook(book)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
