import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import {
  getCustomersFailure,
  getCustomersStart,
  getCustomersSuccess,
} from "./customerSlice";
import CustomerService, {
  Customer,
} from "../../services/customer/customerService";

export const getCustomers =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    dispatch(getCustomersStart());
    try {
      const data: Customer[] = await CustomerService.getCustomers();
      dispatch(getCustomersSuccess(data));
    } catch (error) {
      dispatch(getCustomersFailure(error as string));
    }
  };
