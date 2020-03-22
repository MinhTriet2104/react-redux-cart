import { combineReducers } from "redux";

import products from "./products";
import cart from "./cart";
import message from "./message";

const reducer = combineReducers({
  products,
  cart,
  message
});

export default reducer;
