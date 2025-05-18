import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Auth from '../components/Auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login: React.FC = () => {
  const { session } = useAuth();

  if (session) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Auth />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;