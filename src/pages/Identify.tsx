import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IdentifyTabs from '../components/IdentifyTabs';
import ImageUploader from '../components/ImageUploader';
import IdentificationReadyPanel from '../components/IdentificationReadyPanel';
import IdentificationResults from '../components/IdentificationResults';
import type { PredictionResult } from '../lib/gemini';

const Identify: React.FC = () => {
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [identificationResult, setIdentificationResult] = useState<PredictionResult | null>(null);

  const handleIdentificationResult = (result: PredictionResult) => {
    setIdentificationResult(result);
    setIsIdentifying(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <IdentifyTabs />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <ImageUploader onImageUpload={handleIdentificationResult} />
            </div>
            
            <div>
              {isIdentifying ? (
                <div className="h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">Analyzing plant image...</p>
                  </div>
                </div>
              ) : (
                identificationResult ? (
                  <IdentificationResults result={identificationResult} />
                ) : (
                  <IdentificationReadyPanel />
                )
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Identify;