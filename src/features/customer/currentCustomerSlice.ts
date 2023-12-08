import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchOption } from "../../type/types";

interface CurrentCustomer {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: SearchOption | null;
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
    setCurrentCustomer: (state, action: PayloadAction<SearchOption>) => {
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
