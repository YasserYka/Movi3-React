import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  profile: {
    avatarId: -1,
    bio: "Bio",
    creationDate: "2020/09/09",
    email: "Email",
    enabled: false,
    fullName: "Full Name",
    lastSeen: "2020/09/09",
    username: "Username"
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        profile: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        profile: {
          avatarId: -1,
          bio: "Bio",
          creationDate: "2020/09/09",
          email: "Email",
          enabled: false,
          fullName: "Full Name",
          lastSeen: "2020/09/09",
          username: "Username"
        },
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
