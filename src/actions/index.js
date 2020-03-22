import * as types from "../constants/ActionType";

export const addToCart = product => ({
  type: types.ADD_TO_CART,
  product
});

export const changeMessage = message => ({
  type: types.CHANGE_MSG,
  message
});
