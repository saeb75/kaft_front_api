import {
  GET_PRODUCTS_BY_CATEGORIES_FAILURE,
  GET_PRODUCTS_BY_CATEGORIES_REQUEST,
  GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
  GET_PRODUCTS_COLOR_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../Action/actionType";

let initialState = {
  loading: false,
  products: [],
  success: true,
  productsDetals: [],
  singleProduct: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: true,
        success: true,
        products: action.payload,
      };

    case GET_PRODUCTS_BY_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };

    case GET_PRODUCTS_COLOR_SUCCESS:
      return {
        ...state,
        productsDetals: action.payload,
      };
    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        singleProduct: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
