import { SET_ENDPOINT, GET_ENDPOINT } from "../actions/types";

const initialState = {
  endpoint: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ENDPOINT:
      return {
        ...state,
        endpoint: action.payload
      };
    case GET_ENDPOINT:
      return {
        ...state,
        endpoint: action.payload
      };
    default:
      return state;
  }
};
