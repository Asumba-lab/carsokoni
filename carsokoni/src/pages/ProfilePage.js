import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { isAuthenticated, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-yellow-400">Profile</h2>
        <div className="mb-4 text-lg text-blue-900 dark:text-yellow-200">Welcome, <span className="font-semibold">{userInfo?.name}</span>!</div>
        <div className="mb-8 text-gray-600 dark:text-yellow-200">Username: <span className="font-mono">{userInfo?.username}</span></div>
        <button
          onClick={() => dispatch(logoutUser())}
          className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage; 