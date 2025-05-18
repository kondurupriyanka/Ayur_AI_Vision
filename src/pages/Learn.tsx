import React from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { courses } from '../data/courses';

const Learn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Learn Ayurvedic Medicine
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our free courses and resources to deepen your understanding of
              Ayurvedic medicine and healing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <a
                      href={course.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <PlayCircle className="w-5 h-5" />
                      <span>Watch Now</span>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-600">
                      {course.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {course.instructor}
                    </span>
                    
                    <a
                      href={course.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span className="text-sm">Course Link</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;