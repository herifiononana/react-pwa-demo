import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/authSlice/authSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
