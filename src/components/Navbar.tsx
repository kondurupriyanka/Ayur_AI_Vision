import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Search, Globe } from 'lucide-react';
import UserAvatar from './UserAvatar';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b border-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-green-600 font-bold text-xl">
          <Leaf className="h-6 w-6 fill-green-500 stroke-green-700" />
          <span>AyurAI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`font-medium ${
              location.pathname === '/' ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/library" 
            className={`font-medium ${
              location.pathname === '/library' ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Library
          </Link>
          <Link 
            to="/learn" 
            className={`font-medium ${
              location.pathname === '/learn' ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Learn
          </Link>
          <Link 
            to="/history" 
            className={`font-medium ${
              location.pathname === '/history' ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            History
          </Link>
          <Link 
            to="/about" 
            className={`font-medium ${
              location.pathname === '/about' ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search plants..."
              className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-50">
            <Globe className="h-5 w-5" />
            <span>EN</span>
          </button>
          
          <Link to="/profile">
            <UserAvatar />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;