import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userInfo: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.loading = true;
      state.error = null;
      // Simulate login
      const { username, password } = action.payload;
      if (username === 'user' && password === 'password') {
        state.isAuthenticated = true;
        state.userInfo = { username: 'user', name: 'Demo User' };
        state.loading = false;
      } else {
        state.isAuthenticated = false;
        state.userInfo = null;
        state.loading = false;
        state.error = 'Invalid credentials';
      }
    },
    logoutUser(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    },
    clearUserError(state) {
      state.error = null;
    },
  },
});

export const { loginUser, logoutUser, clearUserError } = userSlice.actions;
export default userSlice.reducer; 