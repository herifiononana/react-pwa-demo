// authActions.ts
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import authService from "../../services/auth/authService";
import { loginStart, loginSuccess, loginFailure } from "./authSlice";
// import { authService } from "../../services/authService"; // Assurez-vous d'importer votre service auth

// ... Autres imports ...

export const loginUser =
  (credentials: any): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(loginStart());
      const userData = await authService.login(credentials, () => {}); // Utilisez votre service auth
      dispatch(loginSuccess(userData));
    } catch (error) {
      dispatch(loginFailure(error as string));
    }
  };
