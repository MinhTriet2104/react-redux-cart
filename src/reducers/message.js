import { CHANGE_MSG } from "../constants/ActionType";
import { MSG_WELCOME } from "../constants/Message";

const initialState = MSG_WELCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MSG:
      return action.message;
    default:
      return state;
  }
};

export default message;
