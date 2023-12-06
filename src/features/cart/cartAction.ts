import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { addToCartFailure, addToCartStart, addToCartSucces } from "./cartSlice";

export const addToCart =
  (product: any): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    dispatch(addToCartStart());
    try {
      // todo: add to cart async function
      if (product) dispatch(addToCartSucces(product));
      else dispatch(addToCartFailure("An error occured"));
    } catch (error) {
      dispatch(addToCartFailure(error as string));
    }
  };
