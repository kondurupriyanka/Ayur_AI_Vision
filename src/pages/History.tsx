import React, { useState } from 'react';
import { Clock, Search, Trash2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useIdentificationHistory } from '../hooks/useIdentificationHistory';

const History: React.FC = () => {
  const { history, loading, error, clearHistory } = useIdentificationHistory();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleClearHistory = async () => {
    if (window.confirm('Are you sure you want to clear all history? This action cannot be undone.')) {
      await clearHistory();
      setShowConfirmDialog(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-600">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Plant Identification History</h1>
                
                {history.length > 0 && (
                  <button
                    onClick={() => setShowConfirmDialog(true)}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span>Clear History</span>
                  </button>
                )}
              </div>
            </div>

            {history.length === 0 ? (
              <div className="p-12 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No identification history
                </h3>
                <p className="text-gray-500">
                  Your plant identification history will appear here
                </p>
              </div>
            ) : (
              <div className="divide-y">
                {history.map(item => (
                  <div key={item.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start space-x-4">
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.plant_name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      )}
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">
                              {item.plant_name}
                            </h3>
                            
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>
                                {new Date(item.identified_at).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>
                          </div>

                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {item.confidence}% confidence
                          </span>
                        </div>

                        {item.details && Object.keys(item.details).length > 0 && (
                          <div className="mt-2 text-sm text-gray-600">
                            <pre className="whitespace-pre-wrap">
                              {JSON.stringify(item.details, null, 2)}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Clear History Confirmation
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to clear all identification history? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleClearHistory}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Clear History
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default History;