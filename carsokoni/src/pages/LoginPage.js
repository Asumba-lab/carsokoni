import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearUserError } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
    return () => { dispatch(clearUserError()); };
  }, [isAuthenticated, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-yellow-400 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-yellow-200"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-yellow-200"
          required
        />
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-700 text-white dark:bg-yellow-500 dark:text-blue-900 rounded hover:bg-blue-800 dark:hover:bg-yellow-400 transition font-semibold"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className="mt-4 text-center text-gray-500 dark:text-yellow-200 text-sm">
          Demo: <span className="font-mono">user</span> / <span className="font-mono">password</span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage; 