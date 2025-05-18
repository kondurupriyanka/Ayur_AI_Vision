import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Plant, PlantCategory } from '../types';
import PlantCard from './PlantCard';

interface PlantListProps {
  plants: Plant[];
  category: PlantCategory;
}

const PlantList: React.FC<PlantListProps> = ({ plants, category }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter plants by selected category and search query
  const filteredPlants = plants.filter(plant => {
    const matchesCategory = category === PlantCategory.ALL || plant.category.includes(category);
    const matchesSearch = searchQuery === '' || 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
        <div className="relative flex-grow max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search plants by name..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {filteredPlants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No plants found matching your criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantList;