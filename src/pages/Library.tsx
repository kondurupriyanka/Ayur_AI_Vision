import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IdentifyTabs from '../components/IdentifyTabs';
import PlantCategories from '../components/PlantCategories';
import PlantList from '../components/PlantList';
import AiAssistant from '../components/AiAssistant';
import { PlantCategory } from '../types';
import { plants } from '../data/plants';

const Library: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory>(PlantCategory.ALL);
  const location = useLocation();
  const isAiAssistantTab = location.hash === '#ai-assistant';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <IdentifyTabs />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {isAiAssistantTab ? (
            <div className="max-w-4xl mx-auto">
              <AiAssistant />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <PlantCategories 
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <PlantList 
                    plants={plants} 
                    category={selectedCategory} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Library;