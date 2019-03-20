import { SET_ENDPOINT, GET_ENDPOINT } from "./types";

export const setEndpoint = endpoint => {
  return {
    type: SET_ENDPOINT,
    payload: endpoint
  };
};

export const getEndpoint = endpoint => {
  return {
    type: GET_ENDPOINT,
    payload: endpoint
  };
};
