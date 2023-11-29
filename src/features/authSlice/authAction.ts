import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import authService from "../../services/auth/authService";
import { loginStart, loginSuccess, loginFailure } from "./authSlice";

export const loginUser =
  (credentials: {
    username: string;
    password: string;
  }): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    dispatch(loginStart());
    try {
      const userData = await authService.login(credentials);
      if (userData?.data) dispatch(loginSuccess(userData));
      else dispatch(loginFailure("Invalid credential"));
    } catch (error) {
      dispatch(loginFailure(error as string));
    }
  };
