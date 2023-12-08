import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "./productSlice";
import ProductService, { Product } from "../../services/product/productService";

export const getProducts =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    dispatch(getProductsStart());
    try {
      const data: Product[] = await ProductService.getProducts();
      if (data.length) {
        dispatch(getProductsSuccess(data));
      }
    } catch (error) {
      dispatch(getProductsFailure(error as string));
    }
  };
