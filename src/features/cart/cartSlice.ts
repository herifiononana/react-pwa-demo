import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  // todo: Define the structure of basket items
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const getCart = (state: { cart: CartItem[] }) => state.cart;

export default cartSlice.reducer;
