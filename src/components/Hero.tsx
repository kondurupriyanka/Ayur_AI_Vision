import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Library } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-[calc(100vh-72px)]">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-1 mb-6 bg-green-100 text-green-800 rounded-full font-medium">
              AI-Powered Identification
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Identify Medicinal Plants Instantly
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Our advanced AI system accurately identifies Ayurvedic plants and raw 
              materials, helping ensure authenticity and quality across the supply 
              chain.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/identify"
                className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-200"
              >
                <Camera className="h-5 w-5" />
                <span>Start Identification</span>
              </Link>
              
              <Link
                to="/library"
                className="flex items-center justify-center space-x-2 bg-white text-gray-800 px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition duration-200"
              >
                <Library className="h-5 w-5" />
                <span>Browse Library</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img
              src="https://img.freepik.com/free-photo/top-view-various-spices-herbs-dry-black-tea-leaves-peppermint-rose-buds-clove-spice-black-peppercorns-glass-jars-black-wood_141793-7519.jpg?t=st=1746722941~exp=1746726541~hmac=340013df0af5b1ba8ede5a7a971d95ad1f733229ebda6e484ed160cc7832f86a&w=740"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;