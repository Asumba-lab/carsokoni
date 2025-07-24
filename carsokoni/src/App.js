import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/common/Navbar';
import HeroSection from './components/common/HeroSection';
import FeaturedCarsSection from './components/car/FeaturedCarsSection';
import CategoriesSection from './components/common/CategoriesSection';
import NewsletterSignup from './components/common/NewsletterSignup';
import SampleHookComponent from './components/common/SampleHookComponent';
import CarDetailsPage from './pages/CarDetailsPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCarsSection />
      <CategoriesSection />
      <NewsletterSignup />
      <div className="flex items-center justify-center py-8">
        <SampleHookComponent />
      </div>
    </>
  );
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:carId" element={<CarDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
