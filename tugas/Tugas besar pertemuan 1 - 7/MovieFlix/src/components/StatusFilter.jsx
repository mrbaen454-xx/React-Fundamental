import React from 'react';

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
  const statuses = ['Semua', 'Sedang Tayang', 'Tidak Tayang'];

  return (
    <div className="flex flex-col flex-1 min-w-[120px]">
      <label className="text-xs font-medium text-gray-300 mb-1">Status</label>
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="bg-[#374151] border border-[#4B5563] text-white text-sm rounded-xl h-[42px] focus:border-[#E9D3A1] focus:ring-1 focus:ring-[#E9D3A1] block w-full px-3 outline-none transition-colors"
      >
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;
