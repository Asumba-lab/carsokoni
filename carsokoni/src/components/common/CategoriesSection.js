import React from 'react';

const categories = [
  { name: 'SUV', icon: '🚙' },
  { name: 'Sedan', icon: '🚗' },
  { name: 'Hatchback', icon: '🚘' },
  { name: 'Luxury', icon: '🏎️' },
  { name: 'Pickup', icon: '🛻' },
  { name: 'Van', icon: '🚐' },
];

const CategoriesSection = () => (
  <section id="categories" className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center bg-blue-50 rounded-lg p-4 shadow hover:bg-blue-100 transition cursor-pointer w-full"
          >
            <span className="text-4xl mb-2">{cat.icon}</span>
            <span className="font-semibold text-blue-800">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection; 