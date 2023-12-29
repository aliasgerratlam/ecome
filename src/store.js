import cartReducer from './feature/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
