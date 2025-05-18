import React from 'react';
import { Leaf, Flower, Trees as Tree, Tablet as Vegetable, Apple, Flame, Snowflake } from 'lucide-react';
import { PlantCategory } from '../types';

interface PlantCategoriesProps {
  selectedCategory: PlantCategory;
  onCategorySelect: (category: PlantCategory) => void;
}

const PlantCategories: React.FC<PlantCategoriesProps> = ({ 
  selectedCategory, 
  onCategorySelect 
}) => {
  const categories = [
    {
      id: PlantCategory.ALL,
      name: 'All Plants',
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      count: 248,
    },
    {
      id: PlantCategory.HERBS,
      name: 'Herbs',
      icon: <Flower className="h-5 w-5 text-amber-600" />,
      count: 124,
    },
    {
      id: PlantCategory.TREES,
      name: 'Trees',
      icon: <Tree className="h-5 w-5 text-blue-600" />,
      count: 86,
    },
    {
      id: PlantCategory.ROOTS,
      name: 'Roots',
      icon: <Vegetable className="h-5 w-5 text-purple-600" />,
      count: 72,
    },
    {
      id: PlantCategory.FRUITS,
      name: 'Fruits',
      icon: <Apple className="h-5 w-5 text-red-600" />,
      count: 52,
    },
    {
      id: PlantCategory.WARMING,
      name: 'Warming',
      icon: <Flame className="h-5 w-5 text-orange-600" />,
      count: 98,
    },
    {
      id: PlantCategory.COOLING,
      name: 'Cooling',
      icon: <Snowflake className="h-5 w-5 text-cyan-600" />,
      count: 104,
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Plant Categories</h3>
      <p className="text-gray-600 mb-6">Browse plants by category or properties</p>
      
      <div className="space-y-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-colors ${
              selectedCategory === category.id
                ? 'bg-green-50 text-green-700'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              {category.icon}
              <span className="ml-3 font-medium">{category.name}</span>
            </div>
            <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
              selectedCategory === category.id
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlantCategories;