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

const getCartSlice = createSlice({
  name: "getCart",
  initialState,
  reducers: {
    getCartStart: (state) => {
      state = { ...state, status: "loading" };
    },
    getCartSuccess: (state, action: PayloadAction<Cart>) => {
      state.status = "idle";
      state.data = action.payload;
    },
    getCartFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { getCartStart, getCartSuccess, getCartFailure } =
  getCartSlice.actions;

export default getCartSlice.reducer;
