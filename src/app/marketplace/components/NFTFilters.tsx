// src/components/NFTFilter.tsx

import React from "react";

interface NFTFilterProps {
  onFilterChange: (filters: NFTFilters) => void;
}

export interface NFTFilters {
  collection?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  type?: string;
}

const NFTFilter: React.FC<NFTFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = React.useState<NFTFilters>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Filter NFTs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="select"
          name="collection"
          placeholder="Collection"
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Minimum Price"
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Maximum Price"
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      </div>
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default NFTFilter;
