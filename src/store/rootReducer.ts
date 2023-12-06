import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/authSlice/authSlice";
import productReducer from "../features/product/productSlice";
import customerReducer from "../features/customer/customerSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  product: productReducer,
  customer: customerReducer,
});

export default rootReducer;
