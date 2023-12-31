import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../services/cart/cartService";

interface CartState {
  // todo: Define the structure of basket items
  status: "idle" | "loading" | "succeeded" | "failed";
  data: Cart | undefined;
  error: string | null;
}

const initialState: CartState = {
  status: "idle",
  data: undefined,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.status = "loading";
    },
    addToCartSucces: (state, action: PayloadAction<Cart>) => {
      state.status = "idle";
      state.data = action.payload; // todo:to be checked
    },
    addToCartFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload as string;
    },
  },
});

export const { addToCartStart, addToCartSucces, addToCartFailure } =
  cartSlice.actions;

export default cartSlice.reducer;
