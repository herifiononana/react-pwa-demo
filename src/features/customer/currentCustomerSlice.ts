import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CustomerOption {
  value: number;
  label: string;
}

interface CurrentCustomer {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: CustomerOption | null;
  error: string | null;
}

const initialState: CurrentCustomer = {
  status: "idle",
  data: null,
  error: null,
};

const CurrentCustomerSlice = createSlice({
  name: "currentCustomer",
  initialState,
  reducers: {
    setCurrentCustomer: (state, action: PayloadAction<CustomerOption>) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    cleatCurrentCustomer: (state) => {
      state.data = null;
    },
  },
});

export const { setCurrentCustomer, cleatCurrentCustomer } =
  CurrentCustomerSlice.actions;

export default CurrentCustomerSlice.reducer;
