import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/authSlice/authSlice";
import productReducer from "../features/product/productSlice";
import customerReducer from "../features/customer/customerSlice";
import getCartReducer from "../features/cart/getCartSlice";
import getCurrentCustomer from "../features/customer/currentCustomerSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  getCart: getCartReducer,
  currentCustomer: getCurrentCustomer,
  auth: authReducer,
  product: productReducer,
  customer: customerReducer,
});

export default rootReducer;
