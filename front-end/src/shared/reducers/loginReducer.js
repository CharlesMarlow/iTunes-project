import { LOGIN } from "../types/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  }
};
