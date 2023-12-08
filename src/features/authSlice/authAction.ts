import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import authService from "../../services/auth/authService";
import { loginStart, loginSuccess, loginFailure } from "./authSlice";
import { showToast } from "../../utils/utils";

export const loginUser =
  (credentials: {
    username: string;
    password: string;
  }): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    dispatch(loginStart());
    try {
      const userData = await authService.login(credentials);
      if (userData?.data) {
        showToast("success", "successful login");
        dispatch(loginSuccess(userData));
      } else {
        showToast("error", "Invalid credential");
        dispatch(loginFailure("Invalid credential"));
      }
    } catch (error) {
      dispatch(loginFailure(error as string));
    }
  };
