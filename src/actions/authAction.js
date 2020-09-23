import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
} from "./types";
import { returnErrors } from "./errorAction";

const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token;

  const headers = { "Content-type": "application/json" };

  if (token) headers["Authorization"] = "Bearer " + token;

  fetch("http://localhost:8080/api/v1/users/profile", {
    headers: headers,
    credentials: "same-origin",
  })
    .then((response) => response.json())
    .then((data) => dispatch({ type: USER_LOADED, payload: data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

module.exports = {
  loadUser: loadUser,
};
