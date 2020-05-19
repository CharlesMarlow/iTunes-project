import { FETCH_TRACKS } from "../types/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};


