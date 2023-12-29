import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseQuantity(state, action) {
      const targetProduct = state.cart.find((p) => p.id === action.payload);
      if (targetProduct) targetProduct.quantity += 1;
    },

    decreaseQuantity(state, action) {
      const targetProduct = state.cart.find((p) => p.id === action.payload);
      if (targetProduct && targetProduct.quantity > 1)
        targetProduct.quantity -= 1;
    },
  },
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
