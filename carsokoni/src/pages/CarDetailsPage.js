import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '../components/common/LoadingSpinner';
import CarCard from '../components/car/CarCard';
import { addToCart } from '../store/slices/cartSlice';

const CarDetailsPage = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const { items: cars, loading } = useSelector((state) => state.cars);
  const car = cars.find((c) => c.id === carId);
  const [mainImg, setMainImg] = useState(car?.thumbnail || '');
  const [added, setAdded] = useState(false);

  if (loading) return <LoadingSpinner />;
  if (!car) return <div className="text-center py-16 text-xl">Car not found.</div>;

  // Related cars (same category, exclude self)
  const relatedCars = cars.filter(c => c.category === car.category && c.id !== car.id).slice(0, 3);

  // Example images (use car.images if available, else fallback to thumbnail)
  const images = car.images && car.images.length > 0 ? [car.thumbnail, ...car.images] : [car.thumbnail];

  const handleAddToCart = () => {
    dispatch(addToCart(car));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // Calculate average rating
  const avgRating = car.reviews && car.reviews.length
    ? (car.reviews.reduce((sum, r) => sum + r.rating, 0) / car.reviews.length).toFixed(1)
    : car.rating;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <img
            src={mainImg}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <div className="flex gap-2 justify-center">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${mainImg === img ? 'border-blue-700' : 'border-transparent'}`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>
        {/* Car Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-yellow-400 mb-2">{car.brand} {car.model}</h2>
          <p className="text-gray-600 dark:text-yellow-200 mb-2">{car.year} • {car.category}</p>
          <p className="text-yellow-600 dark:text-yellow-300 font-bold text-2xl mb-4">KES {car.price.toLocaleString()}</p>
          {/* Tags */}
          {car.tags && car.tags.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2">
              {car.tags.map((tag, idx) => (
                <span key={idx} className="bg-blue-100 dark:bg-yellow-700 text-blue-800 dark:text-yellow-100 px-2 py-1 rounded text-xs">{tag}</span>
              ))}
            </div>
          )}
          {/* Specifications */}
          {car.specifications && (
            <div className="mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-yellow-200 mb-2">Specifications</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700 dark:text-yellow-100">
                {Object.entries(car.specifications).map(([key, value]) => (
                  <li key={key}><span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>: {value}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Features */}
          <ul className="mb-4">
            {car.features.map((feature, idx) => (
              <li key={idx} className="inline-block bg-blue-100 dark:bg-yellow-700 text-blue-800 dark:text-yellow-100 px-3 py-1 rounded mr-2 mb-2 text-xs">{feature}</li>
            ))}
          </ul>
          {/* Dealer Info */}
          {car.dealer && (
            <div className="mb-4 text-sm text-gray-600 dark:text-yellow-200">
              <span className="font-semibold">Dealer:</span> {car.dealer.name} ({car.dealer.location})<br />
              <span className="font-semibold">Contact:</span> {car.dealer.contact}
            </div>
          )}
          {/* Rating */}
          <div className="mb-2 flex items-center gap-2">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-bold text-blue-900 dark:text-yellow-200">{avgRating}</span>
            <span className="text-xs text-gray-500 dark:text-yellow-200">({car.reviews?.length || 0} reviews)</span>
          </div>
          <button
            className="px-6 py-2 bg-blue-700 text-white dark:bg-yellow-500 dark:text-blue-900 rounded hover:bg-blue-800 dark:hover:bg-yellow-400 transition"
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      {/* Reviews */}
      {car.reviews && car.reviews.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-bold text-blue-900 dark:text-yellow-400 mb-4">Reviews</h3>
          <div className="space-y-4">
            {car.reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900 rounded p-4 shadow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-blue-900 dark:text-yellow-200">{review.user}</span>
                  <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                  <span className="text-xs text-gray-500 dark:text-yellow-200">{review.date}</span>
                </div>
                <div className="text-gray-700 dark:text-yellow-100">{review.comment}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Related Cars */}
      {relatedCars.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-bold text-blue-900 dark:text-yellow-400 mb-4">Related Cars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedCars.map(rcar => (
              <CarCard key={rcar.id} car={rcar} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage; 