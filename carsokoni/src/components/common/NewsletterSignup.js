import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEmail('');
  };

  return (
    <section className="py-12 bg-blue-900">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated!</h2>
        <p className="text-blue-200 mb-6">Sign up for our newsletter to get the latest car deals and updates.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`px-4 py-2 rounded-l-md border focus:outline-none focus:ring-2 w-full sm:w-auto ${error ? 'border-red-500 focus:ring-red-400' : submitted ? 'border-green-500 focus:ring-green-400' : 'border-blue-300 focus:ring-yellow-400'}`}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-400 text-blue-900 font-bold rounded-r-md hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>
        </form>
        {error && <p className="mt-4 text-red-300 animate-fade-in">{error}</p>}
        {submitted && !error && <p className="mt-4 text-green-200 animate-fade-in">Thank you for subscribing!</p>}
      </div>
    </section>
  );
};

export default NewsletterSignup; 