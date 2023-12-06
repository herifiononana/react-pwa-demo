import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../services/product/productService";

interface CartItem {
  // todo: Define the structure of basket items
  status: "idle" | "loading" | "succeeded" | "failed";
  data: Product[];
  error: string | null;
}

const initialState: CartItem = {
  status: "idle",
  data: [],
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<CartItem>) => {
    //   state.push(action.payload);
    // },
    addToCartStart: (state) => {
      state = { ...state, status: "loading" };
    },
    addToCartSucces: (state, action: PayloadAction<Product>) => {
      state = {
        ...state,
        status: "idle",
        data: [...state.data, action.payload],
      };
    },
    addToCartFailure: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        status: "failed",
        error: action.payload,
      };
    },
  },
});

export const { addToCartStart, addToCartSucces, addToCartFailure } =
  cartSlice.actions;
// export const getCart = (state: { cart: CartItem[] }) => state.cart;

export default cartSlice.reducer;
