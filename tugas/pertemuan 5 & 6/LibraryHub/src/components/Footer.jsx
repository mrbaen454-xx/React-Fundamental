const Footer = () => {
  return (
    <footer className="bg-emerald-900 border-t border-emerald-800 py-8 mt-auto text-emerald-200">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} LibraryHub.
        </p>
        <p className="text-sm text-emerald-400">
          LibraryHub untk pembaca sejati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
