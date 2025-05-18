import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Home from './pages/Home';
import Identify from './pages/Identify';
import Library from './pages/Library';
import PlantDetail from './pages/PlantDetail';
import Learn from './pages/Learn';
import History from './pages/History';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/identify" 
          element={
            <PrivateRoute>
              <Identify />
            </PrivateRoute>
          } 
        />
        <Route path="/library" element={<Library />} />
        <Route path="/plant/:id" element={<PlantDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:section" element={<Learn />} />
        <Route 
          path="/history" 
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;