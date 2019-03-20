import { ADD_IMAGEM, CLEAR_RESPONSE } from "../actions/types";

const initialState = {
  imagens: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGEM:
      return {
        ...state,
        imagens: [...state.imagens, action.payload]
      };
    case CLEAR_RESPONSE:
      return {
        ...state,
        imagens: null
      };
    default:
      return state;
  }
};
