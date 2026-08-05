import React from 'react';
import { SearchX } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="text-gray-400 mb-6">
        <SearchX size={48} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        Film Tidak Ditemukan
      </h3>
      <p className="text-sm text-gray-300 text-center max-w-sm">
        Coba gunakan kata kunci pencarian atau kombinasi filter lain untuk menemukan film yang Anda cari.
      </p>
    </div>
  );
};

export default EmptyState;
