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

  fetch("http://localhost:8080/api/v1/users/profile", {
    headers: getTokenHeader(getState),
    credentials: "same-origin",
  })
    .then((response) => response.json())
    .then((data) => dispatch({ type: USER_LOADED, payload: data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

const signup = ({ username, email, password, confirmedPassword }) => (
  dispatch
) => {
  fetch("http://localhost:8080/api/v1/users/signup", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      confirmedPassword: confirmedPassword,
    }),
  })
    .then((response) =>
      response.status === 409 || response.status === 406
        ? response.text()
        : null
    )
    .then((data) =>
      data
        ? dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
          })
        : null
    );
};

const login = ({ email, password }) => (dispatch) => {
  fetch("http://localhost:8080/api/v1/users/signup", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => console.log(response.text()));
};

const getTokenHeader = (getState) => {
  const token = getState().auth.token;

  const headers = { "Content-type": "application/json" };

  if (token) headers["Authorization"] = "Bearer " + token;

  return headers;
};

module.exports = {
  loadUser: loadUser,
  getTokenHeader: getTokenHeader,
  signup: signup,
  login: login,
};
