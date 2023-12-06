import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../../services/customer/customerService";

interface CustomerState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: Customer[];
  error: string | null;
}

const initialState: CustomerState = {
  status: "idle",
  data: [],
  error: null,
};

const customerSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getCustomersStart: (state) => {
      state.status = "loading";
    },
    getCustomersSuccess: (state, action: PayloadAction<Customer[]>) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    getCustomersFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload as string;
    },
  },
});

export const { getCustomersStart, getCustomersSuccess, getCustomersFailure } =
  customerSlice.actions;

export default customerSlice.reducer;
