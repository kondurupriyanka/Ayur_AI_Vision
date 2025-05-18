import React from 'react';

const PlantChart: React.FC = () => {
  // This is a simplified version of the chart shown in the screenshots
  // In a real implementation, you'd use a library like Chart.js or Recharts
  return (
    <div>
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="20"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#4f74e3"
            strokeWidth="20"
            strokeDasharray="188.5 62.8"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-500">Ashwagandha</div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-gray-600">Ashwagandha</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <span className="text-sm text-gray-600">Shatavari</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
          <span className="text-sm text-gray-600">Brahmi</span>
        </div>
      </div>
    </div>
  );
};

export default PlantChart;