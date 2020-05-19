import {
  FETCH_TRACKS,
  SELECT_TRACK,
  LOGIN,
  SIGNUP,
  FETCH_TOP_QUERIES,
  UPDATE_FAVOURITES
} from "../types/types";
import api from "../apis/main";

export const fetchTracks = term => async dispatch => {
  const response = await api.get(
    `https://itunes.apple.com/search?term={${term}}&limit=25`
  );
  dispatch({
    type: FETCH_TRACKS,
    payload: response.data
  });
};

export const selectTrack = item => {
  return {
    type: SELECT_TRACK,
    payload: item
  };
};

export const login = (email, password) => async dispatch => {
  let response;
  try {
    response = await api.post("http://localhost:3001/api/users", {
      email,
      password
    });
  } catch (err) {
  }

  dispatch({
    type: LOGIN,
    payload: response
  });
};

export const signup = (email, password) => async dispatch => {
  const response = await api.post("http://localhost:3001/api/users/signup", {
    email,
    password
  });

  dispatch({
    type: SIGNUP,
    payload: response.data
  });
};

export const updateFavourites = (term, email) => async dispatch => {
  const response = await api.post("http://localhost:3001/api/terms", {term, email});

  dispatch({
    type: UPDATE_FAVOURITES,
    payload: response.data,
  });
};

export const fetchTopQueries = email => async dispatch => {
  const response = await api.get("http://localhost:3001/api/terms", {params: email});

  dispatch({
    type: FETCH_TOP_QUERIES,
    payload: response.data
  });
};
