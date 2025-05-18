import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-green-600 font-bold text-xl mb-4 md:mb-0">
            <Leaf className="h-6 w-6 fill-green-500 stroke-green-700" />
            <span>AyurAI</span>
          </div>
          
          <div className="text-sm text-gray-500">
            Designed by AyurAI © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;