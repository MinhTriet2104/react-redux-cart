import { ADD_TO_CART } from "../constants/ActionType";

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  product,
  quantity
});
