import React from 'react';
import { FileText, Info, Droplets, Sun, Thermometer, Calendar } from 'lucide-react';
import type { PredictionResult } from '../lib/gemini';
import PlantChart from './PlantChart';

interface IdentificationResultsProps {
  result: PredictionResult | null;
}

const IdentificationResults: React.FC<IdentificationResultsProps> = ({ result }) => {
  if (!result?.plant) {
    return (
      <div className="bg-white rounded-lg p-6">
        <p className="text-gray-500">No identification results available</p>
      </div>
    );
  }

  const { plant } = result;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl text-gray-800 mb-1">Identification Results</h2>
          <p className="text-gray-500">
            Plant identified with {plant.confidence}% confidence
            {plant.confidence > 85 && (
              <span className="inline-flex items-center ml-4 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                ✓ High Confidence
              </span>
            )}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{plant.name}</h1>
          
          <div className="mb-6">
            <div className="mb-2">
              <span className="font-medium text-gray-700">Scientific Name:</span>{' '}
              <span className="italic">{plant.scientificName}</span>
            </div>
            
            <p className="text-gray-600">{plant.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Medicinal Properties:</h3>
            <div className="flex flex-wrap gap-2">
              {plant.medicinalProperties.map((property, index) => {
                const colors = [
                  'bg-blue-50 text-blue-700',
                  'bg-purple-50 text-purple-700',
                  'bg-amber-50 text-amber-700',
                  'bg-rose-50 text-rose-700',
                ];
                const colorIndex = index % colors.length;
                
                return (
                  <span 
                    key={property} 
                    className={`px-3 py-1 rounded-full text-sm ${colors[colorIndex]}`}
                  >
                    {property}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-4">Growing Characteristics</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Sun className="w-5 h-5 text-amber-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-700">Light</p>
                  <p className="text-sm text-gray-600">{plant.characteristics.lightRequirement}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Droplets className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-700">Watering</p>
                  <p className="text-sm text-gray-600">{plant.characteristics.wateringSchedule}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Thermometer className="w-5 h-5 text-red-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-700">Environment</p>
                  <p className="text-sm text-gray-600">{plant.characteristics.idealEnvironment}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-green-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-700">Harvesting</p>
                  <p className="text-sm text-gray-600">{plant.characteristics.harvestingSeason}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Traditional Uses:</h3>
          <ul className="list-disc pl-5 space-y-2">
            {plant.traditionalUses.map(use => (
              <li key={use} className="text-gray-600">{use}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Common Diseases:</h3>
          <ul className="list-disc pl-5 space-y-2">
            {plant.characteristics.commonDiseases.map(disease => (
              <li key={disease} className="text-gray-600">{disease}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition duration-200">
          <FileText className="h-5 w-5" />
          <span>Export Report</span>
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition duration-200">
          <Info className="h-5 w-5" />
          <span>Detailed Information</span>
        </button>
      </div>
    </div>
  );
};

export default IdentificationResults;