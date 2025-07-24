import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarCard from './CarCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { fetchCars } from '../../store/slices/carsSlice';

const FeaturedCarsSection = () => {
  const dispatch = useDispatch();
  const { items: cars, loading } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  // No props for FeaturedCarsSection, but if you add any in the future, add PropTypes here.
  return (
    <section id="cars" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Featured Cars</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {cars.slice(0, 6).map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCarsSection; 