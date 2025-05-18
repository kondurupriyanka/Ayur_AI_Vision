import React from 'react';
import { Leaf, Heart, Globe, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About AyurAI</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bridging ancient Ayurvedic wisdom with modern technology to make plant identification
              and traditional medicine more accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1000+ Plants</h3>
              <p className="text-gray-600">Comprehensive database of medicinal plants</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">95% Accuracy</h3>
              <p className="text-gray-600">Advanced AI-powered identification</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Access</h3>
              <p className="text-gray-600">Available worldwide, 24/7 support</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">10k+ Users</h3>
              <p className="text-gray-600">Growing community of practitioners</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                AyurAI aims to preserve and promote traditional Ayurvedic knowledge while making
                it more accessible through modern technology. We believe in empowering people
                to make informed decisions about their health and wellness through natural remedies.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Instant plant identification using advanced AI</li>
                <li>Comprehensive database of Ayurvedic plants and their properties</li>
                <li>Educational resources and expert guidance</li>
                <li>Community-driven knowledge sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;