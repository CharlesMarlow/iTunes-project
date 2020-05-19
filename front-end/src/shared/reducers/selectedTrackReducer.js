import { SELECT_TRACK } from "../types/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_TRACK:
      return {
        ...state,
        track: action.payload
      };

    default:
      return state;
  }
};
