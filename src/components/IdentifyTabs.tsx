import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, BookOpen, GraduationCap as Graduation, History, Bot } from 'lucide-react';

const IdentifyTabs: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentHash = location.hash;

  const tabs = [
    { 
      id: 'identify', 
      path: '/identify', 
      label: 'Identify Plant',
      icon: <Leaf className="h-5 w-5 mr-2" />
    },
    { 
      id: 'library', 
      path: '/library', 
      label: 'Plant Library',
      icon: <BookOpen className="h-5 w-5 mr-2" />
    },
    { 
      id: 'learning', 
      path: '/learn', 
      label: 'Learning Resources',
      icon: <Graduation className="h-5 w-5 mr-2" />
    },
    { 
      id: 'history', 
      path: '/history', 
      label: 'History',
      icon: <History className="h-5 w-5 mr-2" />
    },
    { 
      id: 'assistant', 
      path: '/library#ai-assistant', 
      label: 'AI Assistant',
      icon: <Bot className="h-5 w-5 mr-2" />
    }
  ];

  const isActive = (tab: { path: string }) => {
    if (tab.path === '/library#ai-assistant') {
      return currentPath === '/library' && currentHash === '#ai-assistant';
    }
    return currentPath === tab.path;
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto hide-scrollbar">
          {tabs.map(tab => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex items-center whitespace-nowrap px-6 py-4 font-medium ${
                isActive(tab)
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.icon}
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdentifyTabs;