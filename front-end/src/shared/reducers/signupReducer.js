import { SIGNUP } from "../types/types";

export default (state = {}, action) => {
    switch (action.type) {
      case SIGNUP:
        return {
          ...state,
          payload: action.payload
        };

      default:
        return state;
    }
};