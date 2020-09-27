import { GET_ERRORS, CLEAR_ERRORS } from "./types";

const returnErrors = (message, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { message, id },
  };
};

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

module.exports = {
  returnErrors: returnErrors,
  clearErrors: clearErrors,
};
