import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const car = action.payload;
      const exists = state.items.find(item => item.id === car.id);
      if (!exists) {
        state.items.push({ ...car, quantity: 1 });
        state.itemCount += 1;
        state.total += car.price;
      }
    },
    removeFromCart(state, action) {
      const carId = action.payload;
      const idx = state.items.findIndex(item => item.id === carId);
      if (idx !== -1) {
        state.total -= state.items[idx].price * (state.items[idx].quantity || 1);
        state.itemCount -= 1;
        state.items.splice(idx, 1);
      }
    },
    updateCartQuantity(state, action) {
      const { carId, quantity } = action.payload;
      const item = state.items.find(item => item.id === carId);
      if (item && quantity > 0) {
        state.total += (quantity - (item.quantity || 1)) * item.price;
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 