import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/authSlice/authSlice";
import productReducer from "../features/product/productSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;
