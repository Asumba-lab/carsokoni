import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group animate-fade-in animate-slide-up hover:animate-pulse-custom shine-effect">
      <img
        src={car.thumbnail}
        alt={`${car.brand} ${car.model}`}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900 mb-1">{car.brand} {car.model}</h3>
        <p className="text-sm text-gray-500 mb-2">{car.year} • {car.category}</p>
        <p className="text-yellow-600 font-bold text-xl mb-2">KES {car.price.toLocaleString()}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">
          {car.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="bg-blue-100 px-2 py-1 rounded">{feature}</li>
          ))}
        </ul>
        <button
          className="mt-2 w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition hover:animate-wiggle hover:shadow-lg hover:border-yellow-400 border-2 border-transparent"
          onClick={() => navigate(`/car/${car.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CarCard; 