const BookDetail = ({ book, onBack }) => {
  const isAvailable = book.status === "Tersedia";

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 flex-grow max-w-5xl">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-emerald-700 hover:text-emerald-950 transition-colors font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Kembali ke Katalog
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 overflow-hidden flex flex-col md:flex-row">
        {/* Gambar di sebelah kiri untuk layar besar */}
        <div className="md:w-2/5 h-72 md:h-auto relative bg-emerald-50">
          <img 
            src={book.imageUrl} 
            alt={book.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden pointer-events-none"></div>
        </div>

        {/* Info detail di sebelah kanan */}
        <div className="p-8 md:p-12 md:w-3/5 flex flex-col">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
              {book.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-bold">
              {isAvailable ? (
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-md shadow-sm">Tersedia</span>
              ) : (
                <span className="bg-orange-500 text-white px-3 py-1 rounded-md shadow-sm">Dipinjam</span>
              )}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-2 leading-tight">
            {book.title}
          </h1>
          
          <h2 className="text-xl text-emerald-800 font-medium mb-8 flex items-center gap-2">
            Oleh <span className="font-bold underline decoration-emerald-300 underline-offset-4">{book.author}</span>
          </h2>

          <div className="mb-8 flex-grow">
            <h3 className="text-lg font-bold text-emerald-900 mb-3 border-b border-emerald-100 pb-2">Sinopsis</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {book.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-b border-emerald-100 mb-8 bg-emerald-50/50 rounded-xl px-6">
            <div>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Tahun Terbit</p>
              <p className="font-bold text-emerald-950 text-lg">{book.year}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">ID Buku</p>
              <p className="font-bold text-emerald-950 text-lg">#{book.id}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              disabled={!isAvailable}
              className={`flex-grow py-3 px-6 rounded-xl font-bold text-lg shadow-sm transition-all ${
                isAvailable 
                ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5" 
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isAvailable ? "Pinjam Buku Ini" : "Buku Sedang Dipinjam"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
