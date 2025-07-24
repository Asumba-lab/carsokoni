import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    priceRange: [0, 10000000],
    brands: [],
    categories: [],
    searchTerm: '',
  },
  sortBy: '',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    fetchCarsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCarsSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchCarsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    filterCars(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    sortCars(state, action) {
      state.sortBy = action.payload;
    },
  },
});

// Thunk to fetch cars from JSON
export const fetchCars = () => async (dispatch) => {
  dispatch(fetchCarsStart());
  try {
    const response = await fetch('/src/data/cars.json');
    const data = await response.json();
    dispatch(fetchCarsSuccess(data));
  } catch (error) {
    dispatch(fetchCarsFailure('Failed to load cars'));
  }
};

export const { fetchCarsStart, fetchCarsSuccess, fetchCarsFailure, filterCars, sortCars } = carsSlice.actions;
export default carsSlice.reducer; 