import React from 'react';
import { Leaf } from 'lucide-react';

const IdentificationReadyPanel: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 h-full flex flex-col items-center justify-center text-center">
      <div className="bg-green-50 w-32 h-32 rounded-full flex items-center justify-center mb-6">
        <Leaf className="h-16 w-16 text-green-500" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Identify</h2>
      
      <p className="text-gray-600 mb-8 max-w-md">
        Upload an image on the left and click "Identify Plant" to analyze and identify the plant
        using Gemini AI
      </p>
      
      <div className="grid grid-cols-2 gap-12 w-full max-w-sm">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
          <div className="text-sm text-gray-500">Plants in Database</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
          <div className="text-sm text-gray-500">Accuracy Rate</div>
        </div>
      </div>
    </div>
  );
};

export default IdentificationReadyPanel;