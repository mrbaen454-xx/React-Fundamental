const BookCard = ({ book, onSelect }) => {
  const { title, author, category, year, status, imageUrl } = book;
  const isAvailable = status === "Tersedia";

  return (
    <div 
      onClick={onSelect}
      className="group flex flex-col rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-100/60 hover:shadow-lg hover:-translate-y-1 overflow-hidden cursor-pointer"
    >
      {/* Bagian Gambar */}
      <div className="relative h-56 w-full overflow-hidden bg-emerald-200">
        <img 
          src={imageUrl} 
          alt={`Cover buku ${title}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Gradient Overlay biar teks/badge mudah dibaca jika gambar terlalu terang */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

        <div className="absolute top-3 right-3 z-10">
          {isAvailable ? (
            <span className="bg-emerald-600/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-emerald-500/20">Tersedia</span>
          ) : (
            <span className="bg-orange-500/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-orange-400/20">Dipinjam</span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-white/95 backdrop-blur-md text-emerald-800 shadow-sm border border-white/20">
            {category}
          </span>
        </div>
      </div>

      {/* Bagian Konten */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-4 flex-grow">
          <h3 className="text-xl font-bold text-emerald-950 leading-snug line-clamp-2" title={title}>
            {title}
          </h3>
          <p className="text-emerald-800 font-medium text-sm mt-2 flex items-center gap-2">
            <svg className="w-4 h-4 opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span className="truncate">{author}</span>
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-emerald-200/70 pt-4 mt-auto">
          <span className="text-sm text-emerald-700 font-bold flex items-center gap-1.5">
            <svg className="w-4 h-4 opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            {year}
          </span>
          <button className="text-sm font-bold text-emerald-700 transition-colors flex items-center gap-1 group-hover:underline">
            Detail <span className="text-lg leading-none">&rsaquo;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
