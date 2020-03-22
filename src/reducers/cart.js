import { ADD_TO_CART, DELETE_CART_ITEM } from "../constants/ActionType";

const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data || [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action;
      const { id } = product;
      const index = state.map(item => item.product.id).indexOf(id);
      const newState = [...state];
      index != -1
        ? newState[index].quantity++
        : newState.push({ product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case DELETE_CART_ITEM: {
      const { id } = action;
      const index = state.map(item => item.product.id).indexOf(id);
      const newState = [...state.slice(0, index), ...state.slice(index + 1)];
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default cart;
