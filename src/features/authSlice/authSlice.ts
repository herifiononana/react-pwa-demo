import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface AuthState {
  user: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = "loading";
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.status = "succeeded";
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutUser } =
  authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
