import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 tracking-tight">Carsokoni</span>
        </div>
        <ul className="hidden md:flex gap-8 text-blue-900 dark:text-yellow-200 font-semibold">
          <li><a href="#home" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#cars" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Cars</a></li>
          <li><a href="#categories" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Categories</a></li>
          <li><a href="#about" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Contact</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-900 dark:text-yellow-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
            )}
          </button>
          {isAuthenticated ? (
            <Link to="/profile" className="px-3 py-1 rounded bg-blue-700 text-white dark:bg-yellow-500 dark:text-blue-900 hover:bg-blue-800 dark:hover:bg-yellow-400 transition">Profile</Link>
          ) : (
            <Link to="/login" className="px-3 py-1 rounded bg-blue-700 text-white dark:bg-yellow-500 dark:text-blue-900 hover:bg-blue-800 dark:hover:bg-yellow-400 transition">Login</Link>
          )}
        </div>
        <button className="md:hidden text-blue-900 dark:text-yellow-200 focus:outline-none">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 