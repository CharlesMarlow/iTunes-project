import { FETCH_TOP_QUERIES } from "../types/types";

export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_TOP_QUERIES:
        return {
          ...state,
          payload: action.payload
        };

      default:
        return state;
    }
};