import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../services/product/productService";

interface ProductsState {
  // todo: Define the structure of basket items
  status: "idle" | "loading" | "succeeded" | "failed";
  data: Product[];
  error: string | null;
}

const initialState: ProductsState = {
  status: "idle",
  data: [],
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.status = "loading";
    },
    getProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    getProductsFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload as string;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } =
  productSlice.actions;

export default productSlice.reducer;
