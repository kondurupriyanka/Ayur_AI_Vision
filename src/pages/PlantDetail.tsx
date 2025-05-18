import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IdentifyTabs from '../components/IdentifyTabs';
import PlantChart from '../components/PlantChart';
import { plants } from '../data/plants';

const PlantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const plant = plants.find(p => p.id === id);

  if (!plant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Plant Not Found</h2>
            <Link to="/library" className="text-green-600 hover:text-green-700">
              Return to Library
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <IdentifyTabs />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/library" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Library
          </Link>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{plant.name}</h1>
                
                <div className="mb-6">
                  <div className="mb-2">
                    <span className="font-medium text-gray-700">Scientific Name:</span>{' '}
                    <span className="italic">{plant.scientificName}</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="font-medium text-gray-700">Family:</span>{' '}
                    <span>{plant.family}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Common Names:</span>{' '}
                    <span>{plant.commonNames.join(', ')}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Medicinal Properties:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
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
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Traditional Uses:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {plant.traditionalUses.map(use => (
                      <li key={use} className="text-gray-600">{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-64 object-cover rounded-lg shadow-sm mb-8"
                />
                
                <PlantChart />
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlantDetail;