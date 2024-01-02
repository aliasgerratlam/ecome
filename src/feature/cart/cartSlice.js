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
      const targetProduct = state.cart?.find((p) => p.id === action.payload);
      if (targetProduct) targetProduct.quantity += 1;
      targetProduct.totalPrice = targetProduct?.price * targetProduct?.quantity;
    },

    decreaseQuantity(state, action) {
      const targetProduct = state.cart.find((p) => p.id === action.payload);
      if (targetProduct && targetProduct.quantity > 1)
        targetProduct.quantity -= 1;
      targetProduct.totalPrice = targetProduct.price * targetProduct.quantity;
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCartQuantity = (state) =>
  state.cart.cart.reduce((prev, qty) => prev + qty.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((prev, cur) => prev + cur.totalPrice, 0);
