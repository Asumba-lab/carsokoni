import React, { useState, useEffect } from 'react';

const SampleHookComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to Carsokoni!');

  useEffect(() => {
    if (count > 0) {
      setMessage(`You clicked ${count} times!`);
    } else {
      setMessage('Welcome to Carsokoni!');
    }
  }, [count]);

  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-2">Sample Hook Component</h2>
      <p className="mb-4">{message}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
};

export default SampleHookComponent; 