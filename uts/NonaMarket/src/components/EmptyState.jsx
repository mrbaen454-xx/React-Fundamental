import { PackageOpen, RotateCcw } from 'lucide-react';

const EmptyState = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-20 px-3 sm:px-4 text-center bg-slate-deep/40 rounded-xl sm:rounded-2xl border border-dashed border-blue-steel/50">
      <div className="bg-slate-deep p-2.5 sm:p-4 rounded-full shadow-inner mb-2.5 sm:mb-4">
        <PackageOpen className="w-8 h-8 sm:w-12 sm:h-12 text-sand-warm/60" />
      </div>
      <h3 className="font-serif text-base sm:text-2xl font-bold text-sand-warm mb-1 sm:mb-2">No Products Found</h3>
      <p className="text-[10px] sm:text-base text-white/60 max-w-sm mb-4 sm:mb-6 leading-relaxed">
        Try changing your search or filters.
      </p>
      <button
        onClick={onReset}
        className="flex items-center gap-1.5 sm:gap-2 bg-sand-warm hover:bg-white text-slate-deep px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-base transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        <RotateCcw className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        Reset Filters
      </button>
    </div>
  );
};

export default EmptyState;
