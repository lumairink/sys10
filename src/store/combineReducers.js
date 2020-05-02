import { combineReducers } from "redux";
import categoryReducer from "./category/reducer";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";

export default combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});
