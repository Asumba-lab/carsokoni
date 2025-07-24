const fs = require('fs');
const brands = ['Toyota', 'Nissan', 'Mazda', 'Honda', 'Mercedes', 'Subaru', 'BMW', 'Volkswagen', 'Ford', 'Kia'];
const models = ['Camry', 'X-Trail', 'Demio', 'CR-V', 'C-Class', 'Forester', '3 Series', 'Golf', 'Ranger', 'Sportage'];
const categories = ['Sedan', 'SUV', 'Hatchback', 'Luxury', 'Pickup', 'Van', 'Convertible', 'Coupe'];
const featuresList = [
  'Air Conditioning', 'Power Steering', 'ABS', 'Airbags', '4WD', 'Navigation', 'Bluetooth', 'Backup Camera',
  'Keyless Entry', 'Alloy Wheels', 'Fog Lights', 'Sunroof', 'Leather Seats', 'Heated Seats', 'Premium Audio',
  'Ambient Lighting', 'Memory Seats', 'AWD', 'Adaptive Cruise', 'Lane Assist'
];
const tagsList = ['family', 'off-road', 'fuel-efficient', 'luxury', 'sport', 'city', 'business', 'adventure'];
const dealers = [
  { name: 'Nairobi Motors', location: 'Nairobi, Kenya', contact: '+254700000001' },
  { name: 'Mombasa Autos', location: 'Mombasa, Kenya', contact: '+254700000002' },
  { name: 'Kisumu Cars', location: 'Kisumu, Kenya', contact: '+254700000003' },
];

function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

const cars = [];
for (let i = 1; i <= 50; i++) {
  const brand = randomFrom(brands);
  const model = randomFrom(models);
  const year = randomInt(2018, 2023);
  const price = randomInt(1200000, 15000000);
  const category = randomFrom(categories);
  const thumbnail = `https://source.unsplash.com/featured/400x300/?car,${brand},${model},${category},${i}`;
  const images = [1,2,3].map(n => `https://source.unsplash.com/featured/600x400/?car,${brand},${model},${category},${i},${n}`);
  const features = Array.from({length: randomInt(3, 6)}, () => randomFrom(featuresList));
  const specifications = {
    engine: `${randomInt(1, 4)}.${randomInt(0,9)}L ${randomFrom(['4-Cylinder','V6','V8'])}`,
    transmission: randomFrom(['Automatic', 'Manual', 'CVT']),
    fuelType: randomFrom(['Petrol', 'Diesel', 'Hybrid']),
    mileage: `${randomInt(10, 20)} km/l`,
    seatingCapacity: randomInt(2, 7),
    color: randomFrom(['Silver', 'White', 'Black', 'Red', 'Blue', 'Gray']),
  };
  const description = `A ${randomFrom(tagsList)} ${category.toLowerCase()} for ${randomFrom(['city', 'adventure', 'business', 'family'])} use.`;
  const inStock = Math.random() > 0.1;
  const rating = Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
  const tags = Array.from(new Set([randomFrom(tagsList), randomFrom(tagsList)]));
  const reviews = Array.from({length: randomInt(1, 4)}, (_, idx) => ({
    user: `User${randomInt(1, 20)}`,
    rating: randomInt(3, 5),
    comment: randomFrom(['Great car!', 'Very comfortable.', 'Handles well.', 'Would buy again.', 'Good value.']),
    date: `2024-06-${randomInt(1,28).toString().padStart(2,'0')}`
  }));
  const wishlistCount = randomInt(0, 30);
  const createdAt = `2024-05-${randomInt(1,28).toString().padStart(2,'0')}T10:00:00Z`;
  const updatedAt = `2024-06-${randomInt(1,28).toString().padStart(2,'0')}T12:00:00Z`;
  const dealer = randomFrom(dealers);
  cars.push({
    id: `car_${i.toString().padStart(3,'0')}`,
    brand, model, year, price, category, thumbnail, images, features, specifications, description, inStock, rating, tags, reviews, wishlistCount, createdAt, updatedAt, dealer
  });
}

fs.writeFileSync('src/data/cars.json', JSON.stringify(cars, null, 2));
console.log('Generated 50+ cars in src/data/cars.json'); 