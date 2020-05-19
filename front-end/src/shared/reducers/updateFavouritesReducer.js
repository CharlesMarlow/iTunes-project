import { UPDATE_FAVOURITES } from "../types/types";

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FAVOURITES:
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  }
};
