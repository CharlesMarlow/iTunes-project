import { combineReducers } from "redux";
import tracksReducer from "../reducers/tracksReducer";
import selectedTrackReducer from "../reducers/selectedTrackReducer";
import loginReducer from "../reducers/loginReducer";
import fetchTopQueriesReducer from "../reducers/fetchTopQueriesReducer";
import signupReducer from "./signupReducer";
import updateFavouritesReducer from "../reducers/updateFavouritesReducer";

export default combineReducers({
  tracks: tracksReducer,
  track: selectedTrackReducer,
  loginReducer: loginReducer,
  topQueries: fetchTopQueriesReducer,
  signup: signupReducer,
  updateFavourites: updateFavouritesReducer
});