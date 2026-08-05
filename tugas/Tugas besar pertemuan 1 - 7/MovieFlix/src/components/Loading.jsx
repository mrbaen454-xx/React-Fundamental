import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#E9D3A1]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-[#033041] border-t-white rounded-full animate-spin mb-4"></div>
        <p className="font-medium text-[#033041] text-sm animate-pulse">Menyiapkan Katalog...</p>
      </div>
    </div>
  );
};

export default Loading;
