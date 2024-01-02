import cartReducer from './feature/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from './feature/checkout/checkoutSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});
