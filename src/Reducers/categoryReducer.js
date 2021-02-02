import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../Action/actionType";

let initialState = {
  categories: [],
  loading: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
