import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { addToCartFailure, addToCartStart } from "./cartSlice";
import CartService, { Cart } from "../../services/cart/cartService";
import { getCartFailure, getCartStart, getCartSuccess } from "./getCartSlice";

interface AddToCartParams {
  product_id: number;
  customer_id: number;
}

export const addToCart =
  (params: AddToCartParams): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    dispatch(addToCartStart());
    try {
      // todo: add to cart async function
      // if (params.customer_id&&params.product_id) dispatch(addToCartSucces(params));
      // else dispatch(addToCartFailure("An error occured"));
    } catch (error) {
      dispatch(addToCartFailure(error as string));
    }
  };

export const getCart =
  (customer_id: number): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    dispatch(getCartStart());
    try {
      const cart: Cart = await CartService.getCart(customer_id);

      if (cart) dispatch(getCartSuccess(cart));
    } catch (error) {
      dispatch(getCartFailure(error as string));
    }
  };
