import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    checkout: [],
  },
  reducers: {
    updateCheckoutData(state, action) {
      state.checkout.push(action.payload);
    },
  },
});

export const { updateCheckoutData } = checkoutSlice.actions;

export const selectCheckoutData = (state) => state.checkout.checkout;

export default checkoutSlice.reducer;
