const Header = () => {
  return (
    <header className="bg-black text-white py-12 shadow-2xl border-b-4 border-red-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_11px)]"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-white flex items-center justify-center gap-1">
          CINE<span className="text-red-600">LIST</span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base font-bold tracking-[0.25em] uppercase">
          Temukan Film Favoritmu
        </p>
      </div>
    </header>
  );
};

export default Header;
