import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background car image (decorative) */}
      <img
        src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
        alt="Car Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 md:py-24 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4 animate-fade-in">
          Find Your Dream Car Today
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fade-in delay-100">
          Explore Kenya's best selection of new and used cars. Fast, easy, and secure online car shopping.
        </p>
        <a
          href="#cars"
          className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105 animate-bounce"
        >
          Browse Cars
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 