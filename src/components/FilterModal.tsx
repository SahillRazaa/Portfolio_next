'use client';

import React from 'react';

interface Filters {
  sortBy: string;
  techType: string;
  difficulty: string;
}

interface FilterModalProps {
  onClose: () => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterModal = ({ onClose, filters, setFilters }: FilterModalProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFilters({
      sortBy: 'recent',
      techType: 'all',
      difficulty: 'all',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-5 z-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md">
        <h3 className="text-2xl mb-4 text-gray-800">Filter Projects</h3>

        {/* Sort By Section */}
        <div className="mb-5">
          <label className="block font-semibold mb-2 text-gray-700">Sort By</label>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg border border-gray-300"
          >
            <option value="recent">Recent</option>
            <option value="leastRecent">Least Recent</option>
            <option value="lengthy">Lengthy</option>
            <option value="quicky">Quicky</option>
          </select>
        </div>

        {/* Project Type Section */}
        <div className="mb-5">
          <label className="block font-semibold mb-2 text-gray-700">Project Type</label>
          <select
            name="techType"
            value={filters.techType}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg border border-gray-300"
          >
            <option value="all">All</option>
            <option value="React">React</option>
            <option value="Flutter">Flutter</option>
            <option value="Python">Python</option>
          </select>
        </div>

        {/* Difficulty Section */}
        <div className="mb-5">
          <label className="block font-semibold mb-2 text-gray-700">Difficulty</label>
          <select
            name="difficulty"
            value={filters.difficulty}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg border border-gray-300"
          >
            <option value="all">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Button Group */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleCancel}
            className="flex-1 py-2 px-4 border-none bg-gray-500 text-white rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 border-none bg-blue-600 text-white rounded-lg cursor-pointer"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;